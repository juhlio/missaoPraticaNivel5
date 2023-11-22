export default class Livro {
    constructor(
        public codigo: string | null = null,
        public codEditora: number = -1,
        public titulo: string = "",
        public resumo: string = "",
        public autores: string[] = [],
    ) {}
}
