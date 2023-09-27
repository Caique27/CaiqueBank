import contas from "../models/Conta.js";

class ContaController {
	static listarContas = (req, res) => {
		contas.find((err, contas) => {
			res.status(200).json(contas);
		});
	};

	static listarContaPorId = (req, res) => {
		const id = req.params.id;
		contas.findById(id, (err, conta) => {
			if (err) {
				res.status(400).send({
					message: `Conta não existe`,
				});
			} else {
				res.status(200).json(conta);
			}
		});
	};

	static buscaID = (req, res) => {
		const conta = req.params.conta;
		contas.find((err, contaslist) => {
			for (var c in contaslist) {
				if (contaslist[c]._numeroConta == conta) {
					res.status(200).send({ id: contaslist[c]._id });

					return;
				}
				if (err) {
					res.status(500).send({ err: err });
					return;
				}
			}
			res.status(500).send({ erro: "conta não existe" });
			return;
		});
	};

	static cadastrarConta = (req, res) => {
		contas.find((err, contaslist) => {
			var listaContas;
			if (err) {
				res.status(500).send({
					message: `${err.message} - falha ao criar conta.`,
				});
				return;
			} else {
				listaContas = contaslist;
			}
			var numeros = [];
			for (var c in listaContas) {
				numeros.push(listaContas[c]._numeroConta);
			}

			var num = Math.floor(Math.random() * 9999) + 1;
			while (numeros.includes(num)) {
				num = Math.floor(Math.random() * 9999) + 1;
			}

			let novaConta = new contas({ _numeroConta: num, ...req.body });

			novaConta.save((err) => {
				if (err) {
					res.status(500).send({
						message: `${err.message} - falha ao criar conta.`,
					});
				} else {
					res.status(200).send({
						message: "Conta criada com sucesso",
						info: num,
					});
				}
			});
		});
	};

	static atualizarConta = (req, res) => {
		const id = req.params.id;
		console.log(req.body);
		contas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
			if (!err) {
				res.status(200).send({
					message: "Conta atualizada com sucesso",
				});
			} else {
				res.status(500).send({ message: err.message });
			}
		});
	};

	static excluirConta = (req, res) => {
		const id = req.params.id;
		contas.findByIdAndDelete(id, (err) => {
			if (!err) {
				res.status(200).send({ message: "Conta removida com sucesso" });
			} else {
				res.status(500).send({ message: err.message });
			}
		});
	};

	static autenticacao = (req, res) => {
		var login = req.body.login;
		var senha = req.body.senha;
		var agencia = req.body.agencia;
		var listaContas;
		contas.find((err, contas) => {
			listaContas = contas;
			var clienteExiste = false;

			for (var conta in listaContas) {
				if (listaContas[conta]._numeroConta == login) {
					clienteExiste = true;
					var contaSelecionada = listaContas[conta];
				}
			}
			if (clienteExiste && agencia == "0001") {
				var senhaCorreta = contaSelecionada._senha == senha;
				if (senhaCorreta) {
					res.status(200).send({ Autenticado: true, erro: "" });
				} else {
					res.status(200).send({
						Autenticado: false,
						erro: "senha incorreta",
					});
				}
			} else {
				res.status(200).send({
					Autenticado: false,
					erro: "*Conta não existe",
				});
			}
		});
	};
}

export default ContaController;
