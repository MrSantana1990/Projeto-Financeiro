import express from 'express';
import { addLançamento } from './sheets.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ID da planilha (use variável de ambiente no Render chamada SHEET_ID)
const SHEET_ID = process.env.SHEET_ID;

app.use(express.json());

app.post('/lancamentos', async (req, res) => {
  try {
    const {
      descricao, categoria, valor, vencimento,
      pago, prioridade, observacoes, tipo, origem
    } = req.body;

    const valores = [
      descricao,
      categoria,
      parseFloat(valor),
      vencimento,
      pago ? 'Sim' : 'Não',
      prioridade,
      observacoes || '',
      tipo,
      origem ? 'Sim' : 'Não'
    ];

    await addLançamento(SHEET_ID, valores);
    res.status(200).json({ sucesso: true });
  } catch (error) {
    console.error('Erro ao adicionar lançamento:', error);
    res.status(500).json({ erro: 'Falha no lançamento' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
