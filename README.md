# 💸 Meu Financeiro – Lançamentos via Google Sheets

Este é um sistema pessoal de **gestão financeira**, onde lançamentos como despesas e receitas são registrados diretamente em uma **planilha do Google Sheets** via API.

Ideal para uso pessoal, familiar ou autônomo.

---

## 📦 Funcionalidades

- 🧾 Registro de lançamentos com:
  - Descrição, categoria, valor, vencimento
  - Se está pago, prioridade, observações
  - Tipo (entrada/saída) e origem do lançamento
- 📤 Envio automático para uma aba chamada `Lançamentos` em sua planilha
- 🔐 Autenticação segura via Google Service Account

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| Node.js    | Backend do sistema |
| Express.js | Servidor HTTP |
| Google APIs | Conexão com Google Sheets |
| dotenv     | Variáveis de ambiente |
| JSON       | Autenticação com Service Account |

---

## 🔐 Autenticação com o Google

Você deve criar uma **Service Account** no Google Cloud e ativar a API do Google Sheets.

### Requisitos:
- `GOOGLE_CREDENTIALS`: variável de ambiente com o conteúdo do JSON da chave
- `SHEET_ID`: ID da planilha Google onde os dados serão armazenados

> ⚠️ Crie uma aba chamada `Lançamentos` na planilha com colunas A a I.

---

## 🚀 Como usar localmente

### 1. Instale as dependências
```bash
npm install
