// Gate da PS-05 — não pode haver dados pessoais nem credenciais escritos em src/.
// Corre com: node --test seguranca/ps-05-dados-pessoais.js
// Job criado de raiz: o catálogo não tem nenhum que verifique esta regra, e o
// gitleaks não deteta NIF nem hashes de palavra-passe.
// Fica fora de test/ de propósito: o `npm test` (check obrigatório «testes»)
// não o corre, por isso uma falha aqui não bloqueia os merges enquanto os
// dados não saírem do código.

const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const PASTA = path.join(__dirname, "..", "src");

// Hash de palavra-passe: um prefixo bcrypt ($2a$, $2b$ ou $2y$ e o custo),
// ou um campo passwordHash com um valor escrito no código.
const HASH_BCRYPT = /\$2[aby]\$\d{2}\$[./A-Za-z0-9]{20,}|\bpasswordHash\s*:\s*["'][^"']+["']/;
// Campo nif com um valor de 9 dígitos.
const NIF = /\bnif\s*:\s*["']?\d{9}\b/i;

function ficheirosJs(pasta) {
  return fs.readdirSync(pasta, { withFileTypes: true }).flatMap((entrada) => {
    const caminho = path.join(pasta, entrada.name);
    if (entrada.isDirectory()) return ficheirosJs(caminho);
    return entrada.name.endsWith(".js") ? [caminho] : [];
  });
}

function ondeAparece(padrao) {
  // Devolve só "ficheiro:linha", nunca o valor encontrado.
  const achados = [];
  for (const ficheiro of ficheirosJs(PASTA)) {
    const linhas = fs.readFileSync(ficheiro, "utf8").split("\n");
    linhas.forEach((linha, i) => {
      if (padrao.test(linha)) {
        achados.push(path.relative(path.join(__dirname, ".."), ficheiro) + ":" + (i + 1));
      }
    });
  }
  return achados;
}

test("PS-05: não há hashes de palavra-passe escritos em src/", () => {
  const achados = ondeAparece(HASH_BCRYPT);
  assert.deepStrictEqual(achados, [], "hash de palavra-passe encontrado em: " + achados.join(", "));
});

test("PS-05: não há NIF escritos em src/", () => {
  const achados = ondeAparece(NIF);
  assert.deepStrictEqual(achados, [], "NIF encontrado em: " + achados.join(", "));
});
