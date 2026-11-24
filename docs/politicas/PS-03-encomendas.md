# PS-03 · Política de encomendas

**Versão:** 0.2 · **Dono:** Diogo · **Data:** 2026-11-21

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
| 1 | O programador não concatena dados do pedido numa query: todas as consultas com input usam parâmetros (ex.: `WHERE id = ?`), com 0 queries montadas por concatenação | Revisão por par |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Diogo). Revê: Fabio. Implementa: Daniel.

## Verificação automática

Não tem job: nenhum comando verifica esta regra, por isso é imposta por configuração.

- A `main` só aceita alterações por pull request, com 1 aprovação e sem exceções, nem para administradores.
- O `CODEOWNERS` pede a revisão de Diogo ou Fabio sempre que `src/routes/encomendas.js` ou esta política mudam.
- O revisor confirma no PR que nenhuma query junta dados do pedido por concatenação, antes de aprovar.
