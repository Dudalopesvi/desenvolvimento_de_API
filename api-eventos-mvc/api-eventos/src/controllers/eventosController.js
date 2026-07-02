import prisma from "../config/prismaClient.js";

export async function listarEventos(req, res) {
  try {
    const eventos = await prisma.evento.findMany();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar eventos", detalhes: error.message });
  }
}

export async function criarEvento(req, res) {
  try {
    const { nome, data, local, vagas } = req.body;
    const evento = await prisma.evento.create({
      data: { nome, data, local, vagas },
    });
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar evento", detalhes: error.message });
  }
}

export async function atualizarEvento(req, res) {
  try {
    const { id } = req.params;
    const { nome, data, local, vagas } = req.body;
    const evento = await prisma.evento.update({
      where: { id: Number(id) },
      data: { nome, data, local, vagas },
    });
    res.json(evento);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar evento", detalhes: error.message });
  }
}

export async function deletarEvento(req, res) {
  try {
    const { id } = req.params;
    await prisma.evento.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: "Erro ao deletar evento", detalhes: error.message });
  }
}
