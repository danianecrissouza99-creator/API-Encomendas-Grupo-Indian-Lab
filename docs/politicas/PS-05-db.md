# PS-05 · Política de dados pessoais

**Versão:** 0.3 · **Dono:** Daniane · **Data:** 2026-11-28

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
| 2 | Nenhum ficheiro em `src/` contém hashes de palavra-passe nem NIF escritos: 0 ocorrências | node --test seguranca/ps-05-dados-pessoais.js |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Daniane). Revê: Diogo. Implementa: Fabio.

## Verificação automática

Regra 1 — não tem job: nomes e emails não se distinguem de dados fictícios com um comando, por isso esta regra é imposta por configuração.

- A `main` só aceita alterações por pull request, com a aprovação de um dono do `CODEOWNERS` e sem exceções, nem para administradores.
- O `CODEOWNERS` pede a revisão de Daniane ou Diogo sempre que `src/db.js` ou esta política mudam.
- O revisor confirma no PR que não entram dados pessoais reais em `src/`, antes de aprovar.

Regra 2:

- **Job:** `ps-05-dados-pessoais`, em `.github/workflows/seguranca.yml`. Criado de raiz: o catálogo não tem nenhum job que verifique esta regra, e o gitleaks não deteta NIF nem hashes de palavra-passe.
- **Comando:** `node --test seguranca/ps-05-dados-pessoais.js`. Procura em `src/` prefixos de hash bcrypt, campos `passwordHash` com valor escrito e campos `nif` com 9 dígitos. Indica só o ficheiro e a linha, nunca o valor encontrado.
- **Quando corre:** em cada pull request e em cada push para `main`.
- **Estado:** vermelho desde a primeira execução. `src/db.js` tem dois utilizadores com `passwordHash` e NIF escritos no código, que é a falha herdada que esta regra proíbe. Execução: COLAR-LINK-VERMELHO
- **Passa a bloquear:** quando os dados saírem de `src/` e o job ficar verde, entra nos checks obrigatórios da `main`.
