# PS-04 · Política de utilizadores

**Versão:** 0.3 · **Dono:** Fabio · **Data:** 2026-11-28

## Ameaça a que responde

Como atacante, quero saber informação de todos os utilizadores da db, para poder distribuir infromação sensivel.

## Objetivo

Garantir que cada utilizador só recebe os seus próprios dados, sem campos sensíveis, e sem conseguir alterar a query que os vai buscar.

## Âmbito

Aplica-se às rotas de utilizadores (`src/routes/utilizadores.js`) e aos dados de utilizador que a API devolve.

Fica de fora: um eventual painel de administração, onde os administradores possam ver todos os utilizadores.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | A API devolve apenas os dados do utilizador autenticado (`req.utilizador.sub`): pedir os dados de outro utilizador devolve 403 ou 404 | Revisão por par |
| 2 | A resposta de `/utilizadores/me` não inclui o `passwordHash` nem o `nif`: 0 campos sensíveis devolvidos | node --test seguranca/ps-04-exposicao.js |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Fabio). Revê: Daniel. Implementa: Guilherme.

## Verificação automática

Regra 1 — não tem job: nenhum comando verifica esta regra, por isso é imposta por configuração.

- A `main` só aceita alterações por pull request, com a aprovação de um dono do `CODEOWNERS` e sem exceções, nem para administradores.
- O `CODEOWNERS` pede a revisão de Fabio ou Daniel sempre que `src/routes/utilizadores.js` ou esta política mudam.
- O revisor confirma no PR que a rota devolve apenas os dados do utilizador autenticado, antes de aprovar.

Regra 2:

- **Job:** `ps-04-exposicao-dados`, em `.github/workflows/seguranca.yml`.
- **Comando:** `node --test seguranca/ps-04-exposicao.js`.
- **Quando corre:** em cada pull request e em cada push para `main`.
- **Estado:** vermelho desde a primeira execução. A rota `/utilizadores/me` devolve o `passwordHash` e o `nif`, que é a falha herdada que esta regra proíbe. Execução: https://github.com/DanianeSouza/API-Encomendas-Grupo-Indian-Lab/actions/runs/46142457550
- **Passa a bloquear:** quando a rota deixar de devolver esses campos e o job ficar verde, entra nos checks obrigatórios da `main`.
