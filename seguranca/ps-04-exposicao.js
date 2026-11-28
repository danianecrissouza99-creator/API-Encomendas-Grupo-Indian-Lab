// Gate da PS-04 (regra 2) — o perfil não pode devolver passwordHash nem NIF.
// Corre com: node --test seguranca/ps-04-exposicao.js
// Fica fora de test/ de propósito: o `npm test` (check obrigatório «testes»)
// não o corre, por isso uma falha aqui não bloqueia os merges enquanto a
// correção da rota não estiver feita.

const test = require("node:test");
const assert = require("node:assert");
const jwt = require("jsonwebtoken");

const app = require("../src/server");
const config = require("../src/config");
const db = require("../src/db");

async function pedirPerfil(token) {
  const servidor = await new Promise((pronto) => {
    const s = app.listen(0, () => pronto(s));
  });
  const { port } = servidor.address();

  try {
    const resposta = await fetch("http://127.0.0.1:" + port + "/utilizadores/me", {
      headers: { Authorization: "Bearer " + token },
    });
    return { estado: resposta.status, corpo: await resposta.json() };
  } finally {
    servidor.close();
  }
}

async function tokenDeUmUtilizador() {
  // Assina um token válido diretamente, para este teste não depender do login (PS-01).
  const [utilizador] = await db.query("SELECT * FROM utilizadores");
  return jwt.sign({ sub: utilizador.id, perfil: utilizador.perfil }, config.jwtSecret, { expiresIn: "5m" });
}

test("PS-04: o perfil é devolvido ao utilizador autenticado", async () => {
  const { estado } = await pedirPerfil(await tokenDeUmUtilizador());
  assert.strictEqual(estado, 200);
});

test("PS-04: o perfil não devolve o passwordHash", async () => {
  const { corpo } = await pedirPerfil(await tokenDeUmUtilizador());
  assert.strictEqual("passwordHash" in corpo, false, "a resposta inclui passwordHash");
});

test("PS-04: o perfil não devolve o NIF", async () => {
  const { corpo } = await pedirPerfil(await tokenDeUmUtilizador());
  assert.strictEqual("nif" in corpo, false, "a resposta inclui nif");
});
