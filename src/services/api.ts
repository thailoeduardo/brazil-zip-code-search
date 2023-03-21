import axios from "axios";

// Define as configurações padrões quando cria a instância
const api = axios.create({
	baseURL: "https://viacep.com.br/ws/"
})

export default api;