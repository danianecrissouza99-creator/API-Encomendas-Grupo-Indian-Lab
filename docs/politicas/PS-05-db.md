# PS-05 · Política de dados pessoais

**Versão:** 0.2 · **Dono:** Daniane · **Data:** 2026-11-21

## Ameaça a que responde

Como atacante com acesso ao código/histórico git, quero obter a lista de utilizadores fixa em db.js (NIF, email, passwordHash), para conseguir dados pessoais e material para quebra de passwords offline.

## Objetivo

Garantir que dados pessoais e credenciais nunca ficam escritos no código-fonte, sendo guardados apenas numa base de dados com acesso controlado.

## Âmbito

Aplica-se a `src/db.js`, à camada de dados e a qualquer ficheiro em `src/` que contenha registos de utilizadores.

Fica de fora: dados de teste claramente fictícios e identificados como tal, e fugas ocorridas fora do repositório, como um acesso indevido à base de dados em produção.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | O programador não escreve dados pessoais (nome, email, NIF) nem `passwordHash` reais em `src/`: 0 registos reais no código, apenas dados fictícios identificados como tal | Revisão por par |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Daniane). Revê: Diogo. Implementa: Fabio.
