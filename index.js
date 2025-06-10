import express from 'express';
import { addLançamento } from './sheets.js';

const app = express();
const PORT = 3000;

// ID da sua planilha — copie da URL da planilha
const SHEET_ID = '1vW7DYzwHmAVQa_0J2UkX9SqTVXdL-jxKI9oMpo0iPDY';

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
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
