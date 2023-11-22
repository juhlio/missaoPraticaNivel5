import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: Array<string>;
}

export default class ControleLivros {

    async incluir(livro: Livro) {
        const livroMongo: LivroMongo = {
            _id: null,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores,
        };
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livroMongo),
        });
        const data = await response.json();
        return data.ok;
    }

    async excluir(codigo: string) {
        const response = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data.ok;
    }

    async obterLivros() {
        const response = await fetch(baseURL);
        const data = await response.json();
        const livros = data.map((livro: LivroMongo) => new Livro(
            livro._id,
            livro.codEditora,
            livro.titulo,
            livro.resumo,
            livro.autores
        ));
        return livros;
    }
}