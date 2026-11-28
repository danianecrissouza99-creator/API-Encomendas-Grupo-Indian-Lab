# PS-06 · Política de dependências

**Versão:** 0.1 · **Dono:** Daniane · **Data:** 2026-11-28

## Ameaça a que responde

Como atacante, quero explorar uma vulnerabilidade conhecida numa dependência desatualizada (ex.: `lodash` 4.17.11), para conseguir comprometer a API sem precisar de encontrar uma falha no nosso código.

## Objetivo

Garantir que a API não integra dependências com vulnerabilidades conhecidas de gravidade alta ou crítica.

## Âmbito

Aplica-se às dependências declaradas em `package.json` e fixadas em `package-lock.json`, tal como o `npm ci` as instala.

Fica de fora: vulnerabilidades de gravidade baixa ou moderada, e vulnerabilidades ainda não publicadas.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | O programador não integra dependências com vulnerabilidades conhecidas de gravidade alta ou crítica: 0 resultados `high` ou `critical` no `npm audit` | npm audit --audit-level=high |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dona da política (Daniane). Revê: Daniel. Implementa: Daniane.

## Verificação automática

- **Job:** `ps-06-dependencias`, em `.github/workflows/seguranca.yml`.
- **Comando:** `npm audit --audit-level=high`, depois de `npm ci`.
- **Quando corre:** em cada pull request e em cada push para `main`.
- **Estado:** vermelho desde a primeira execução. O `lodash` 4.17.11 herdado tem vulnerabilidades de gravidade alta e crítica. Execução: https://github.com/DanianeSouza/API-Encomendas-Grupo-Indian-Lab/actions/runs/46134921260
- **Passa a bloquear:** quando as dependências forem atualizadas e o job ficar verde, entra nos checks obrigatórios da `main`.
