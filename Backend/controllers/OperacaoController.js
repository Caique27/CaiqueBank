import conta from "../models/Conta.js";
import TempoController from "./TempoController.js";
import dataAtual from "./Tempo.js";

class OperacaoController {
	static deposito = (req, res) => {
		var id = req.body.idConta;
		var valor = req.body.valor;
		if (valor <= 0) {
			res.status(400).send({ message: "valor deve ser positivo" });
		} else {
			console.log(req.body);

			var dadosNovos;
			conta.findById(id, (err, contas) => {
				var contaDestino = contas;

				var saldo = contaDestino._saldo;

				var transacoes = contaDestino._transacoes;
				//Atualização de variáveis
				saldo = saldo + valor;
				var novaTransacao = {
					valor: valor,
					tipo: "Depósito",
					dia: dataAtual().dia,
					hora: dataAtual().hora,
				};
				transacoes = [novaTransacao, ...transacoes];

				dadosNovos = {
					_saldo: saldo,
					_transacoes: transacoes,
				};

				//Upload das atualizações

				atualizardeposito(id, dadosNovos);
			});
			// console.log(transacoes)
		}

		function atualizardeposito(id, dadosNovos) {
			conta.findByIdAndUpdate(id, { $set: dadosNovos }, (err) => {
				if (!err) {
					res.status(200).send({
						message: "Conta atualizada com sucesso",
					});
				} else {
					res.status(500).send({ message: err.message });
				}
			});
		}
	};

	static transferencia = (req, res) => {
		var idOrigem = req.body.idOrigem;
		var idDestino = req.body.idDestino;
		var valor = req.body.valor;
		if (valor <= 0) {
			res.status(400).send({ message: "valor deve ser positivo" });
		} else {
			console.log(req.body);

			var dadosNovosOrigem;
			conta.findById(idOrigem, (err, contas) => {
				var contaOrigem = contas;
				var saldoOrigem = contaOrigem._saldo;
				var transacoesOrigem = contaOrigem._transacoes;
				//Atualização de variáveis
				saldoOrigem = saldoOrigem - valor;
				var novaTransacao = {
					valor: -valor,
					tipo: "Transferência Realizada",
					dia: dataAtual().dia,
					hora: dataAtual().hora,
				};
				transacoesOrigem = [novaTransacao, ...transacoesOrigem];

				dadosNovosOrigem = {
					_saldo: saldoOrigem,
					_transacoes: transacoesOrigem,
				};

				//Upload das atualizações
				var erro = atualizartransferencia(idOrigem, dadosNovosOrigem);

				if (erro) {
					res.status(500).send({ message: err.message });
					return;
				} else {
				}
			});

			var dadosNovosDestino;
			conta.findById(idDestino, (err, contas) => {
				var contaDestino = contas;
				var saldoDestino = contaDestino._saldo;
				var transacoesDestino = contaDestino._transacoes;
				//Atualização de variáveis
				saldoDestino = saldoDestino + valor;
				var novaTransacao = {
					valor: valor,
					tipo: "Transferência Recebida",
					dia: dataAtual().dia,
					hora: dataAtual().hora,
				};
				transacoesDestino = [novaTransacao, ...transacoesDestino];

				dadosNovosDestino = {
					_saldo: saldoDestino,
					_transacoes: transacoesDestino,
				};

				//Upload das atualizações

				var erro = atualizartransferencia(idDestino, dadosNovosDestino);

				if (erro) {
					res.status(500).send({ message: err.message });
					return;
				} else {
				}
			});
			res.status(200).send({
				message: "Conta atualizada com sucesso",
			});
			// console.log(transacoes)
		}

		function atualizartransferencia(id, dadosNovos) {
			conta.findByIdAndUpdate(id, { $set: dadosNovos }, (err) => {
				var error = false;
				if (err) {
					error = true;
				}
				return error;
			});
		}
	};
}

export default OperacaoController;
