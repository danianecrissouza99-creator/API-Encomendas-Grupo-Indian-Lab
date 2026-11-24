# PS-04 · Política de utilizadores

**Versão:** 0.2 · **Dono:** Fabio · **Data:** 2026-11-21

## Ameaça a que responde

Como atacante, quero saber informação de todos os utilizadores da db, para poder distribuir infromação sensivel.

## Objetivo

Garantir que cada utilizador só recebe os seus próprios dados, sem conseguir alterar a query que os vai buscar.

## Âmbito

Aplica-se às rotas de utilizadores (`src/routes/utilizadores.js`) e aos dados de utilizador que a API devolve.

Fica de fora: um eventual painel de administração, onde os administradores possam ver todos os utilizadores.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | A API devolve apenas os dados do utilizador autenticado (`req.utilizador.sub`): pedir os dados de outro utilizador devolve 403 ou 404 | Revisão por par |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Fabio). Revê: Daniel. Implementa: Guilherme.

## Verificação automática

Não tem job: nenhum comando verifica esta regra, por isso é imposta por configuração.

- A `main` só aceita alterações por pull request, com 1 aprovação e sem exceções, nem para administradores.
- O `CODEOWNERS` pede a revisão de Fabio ou Daniel sempre que `src/routes/utilizadores.js` ou esta política mudam.
- O revisor confirma no PR que a rota devolve apenas os dados do utilizador autenticado, antes de aprovar.
