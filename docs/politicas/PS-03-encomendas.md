# PS-03 · Política de encomendas

**Versão:** 0.3 · **Dono:** Diogo · **Data:** 2026-11-28

## Ameaça a que responde

Como atacante, quero injetar SQL através do parâmetro id do URL, para conseguir manipular a query e extrair dados fora do âmbito da encomenda pedida.

## Objetivo

Tratar todos os dados vindos do utilizador, incluindo o parâmetro `id` do URL, como não confiáveis, para proteger a integridade da base de dados.

## Âmbito

Aplica-se às rotas de encomendas (`src/routes/encomendas.js`) e a todas as queries que usam dados vindos do pedido.

Fica de fora: o logout e o ambiente do cliente.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | O programador não concatena dados do pedido numa query: todas as consultas com input usam parâmetros (ex.: `WHERE id = ?`), com 0 queries montadas por concatenação | semgrep --config .semgrep/ --error --metrics=off src/ |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Diogo). Revê: Fabio. Implementa: Daniel.

## Verificação automática

- **Job:** `ps-03-sql-parametrizado`, em `.github/workflows/seguranca.yml`.
- **Comando:** `semgrep --config .semgrep/ --error --metrics=off src/`, com a regra `sql-por-concatenacao` de `.semgrep/regras.yml`.
- **Quando corre:** em cada pull request e em cada push para `main`.
- **Estado:** vermelho desde a primeira execução. Há consultas montadas com dados do pedido em `src/routes/encomendas.js` (concatenação) e em `src/routes/utilizadores.js` (interpolação), que é a falha herdada que esta regra proíbe. Execução: COLAR-LINK-VERMELHO
- **Limite do controlo:** a regra apanha as duas formas de construir SQL que existem neste código. Uma forma nova que a regra não conheça passa; por isso o `CODEOWNERS` continua a pedir a revisão de Diogo ou Fabio.
