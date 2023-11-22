import React, {useEffect, useState} from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = props => {
    const opcoes = controleEditora.getEditoras();
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].codEditora);
    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: "",
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n")
        };
        controleLivros.incluir(livro)
            .then(_ => navigate("/"));
    };

    return (
        <main>
            <h2>Dados do Livro</h2>
            <form onSubmit={incluir}>
                <div className="form-group" >
                    <label htmlFor="titulo">Título</label>
                    <input id="titulo" className="form-control" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="resumo">Resumo</label>
                    <textarea id="resumo" className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="editora">Editora</label>
                    <select id="editora" className="form-control" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((item) => (
                            <option key={item.codEditora} value={item.codEditora}>
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="autores">Autores (1 por linha)</label>
                    <textarea id="autores" className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <button className="btn btn-primary" type="submit">Salvar Livro</button>
            </form>
        </main>
    )
}
export default LivroDados;