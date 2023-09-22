import contas from "../models/Conta.js";

class ContaController {
	static listarContas = (req, res) => {
		contas.find((err, contas) => {
			res.status(200).json(contas);
		});
	};

	static listarContaPorId = (req, res) => {
		const id = req.params.id;
		contas.findById(id, (err, contas) => {
			if (err) {
				res.status(400).send({
					message: `${err.message} - conta não localizada`,
				});
			} else {
				res.status(200).json(contas);
			}
		});
	};

	static cadastrarConta = (req, res) => {
		let conta = new contas(req.body);

		conta.save((err) => {
			if (err) {
				res.status(500).send({
					message: `${err.message} - falha ao criar conta.`,
				});
			} else {
				res.status(201).send(conta.toJSON());
			}
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
