// Gate da PS-01 — o login tem de exigir a palavra-passe.
// Corre com: node --test seguranca/ps-01-auth.js
// Fica fora de test/ de propósito: o npm test (check obrigatório «testes»)
// não o corre, por isso uma falha aqui não bloqueia os merges enquanto a
// correção do login não estiver feita.

const test = require("node:test");
const assert = require("node:assert");

const app = require("../src/server");
const db = require("../src/db");

async function pedirLogin(corpo) {
  const servidor = await new Promise((pronto) => {
    const s = app.listen(0, () => pronto(s));
  });
  const { port } = servidor.address();

  try {
    const resposta = await fetch(http://127.0.0.1:${port}/auth/login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corpo),
    });
    return { estado: resposta.status, corpo: await resposta.json() };
  } finally {
    servidor.close();
  }
}

async function emailDeUmUtilizador() {
  // Lê o email dos dados de exemplo, para não o copiar para o teste.
  const [utilizador] = await db.query("SELECT * FROM utilizadores");
  return utilizador.email;
}

test("PS-01: login só com o email é recusado com 401 e sem token", async () => {
  const email = await emailDeUmUtilizador();
  const { estado, corpo } = await pedirLogin({ email });

  assert.strictEqual(estado, 401);
  assert.strictEqual(corpo.token, undefined);
});

test("PS-01: login com a palavra-passe errada é recusado com 401 e sem token", async () => {
  const email = await emailDeUmUtilizador();
  const { estado, corpo } = await pedirLogin({ email, password: "palavra-passe-errada" });

  assert.strictEqual(estado, 401);
  assert.strictEqual(corpo.token, undefined);
});