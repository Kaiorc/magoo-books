import axios from "axios";

/* Essa API serve apenas como conexão com a magoo-books-server, não é outra. */
/* Criando a instância do axios com a URL base da API. */
/* A baseURL é o endereço onde o Axios vai buscar os dados. */
const favoriteBooksAPI = axios.create({ baseURL: "http://localhost:8000/favorites" });

/* Retornando os dados da API. */
export async function getFavoriteBooks() {
    const response = await favoriteBooksAPI.get('/')

    // console.log(response.data)
    /* Por padrão o Axios retorna os dados que queremos via ".data" */
    return response.data
}

export async function postFavoriteBook(id) {
    const response = await favoriteBooksAPI.post(`/${id}`)
}

export async function deleteFavoriteBook(id) {
    const response = await favoriteBooksAPI.delete(`/${id}`)
}