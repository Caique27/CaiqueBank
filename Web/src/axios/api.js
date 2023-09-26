import axios from "axios";
export const api = axios.create({
	baseURL: "http://localhost:8877",
});

export const busca = async (url) => {
	const resposta = await api.get(url);
	return resposta.data;
};
export const adicionar = async (url, novaConta) => {
	const resposta = await api.post(url, novaConta);
	return resposta.data;
};
export const atualizar = async (url, alteracoesConta) => {
	await api.put(url, alteracoesConta);
};
export const excluir = async (url) => {
	await api.delete(url);
};
