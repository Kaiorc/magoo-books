import axios from "axios";

/* Essa API serve apenas como conexão com a magoo-books-server, não é outra. */
/* Criando a instância do axios com a URL base da API. */
/* A baseURL é o endereço onde o Axios vai buscar os dados. */
const booksAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

/* Retornando os dados da API. */
export async function getBooks() {
    const response = await booksAPI.get('/')

    // console.log(response.data)
    /* Por padrão o Axios retorna os dados que queremos via ".data" */
    return response.data
}