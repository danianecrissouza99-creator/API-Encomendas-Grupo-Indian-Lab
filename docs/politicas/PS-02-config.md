# PS-02 · Política de configuração e segredos

**Versão:** 0.2 · **Dono:** Daniel · **Data:** 2026-11-21

## Ameaça a que responde

Como atacante, quero forjar um JWT válido usando o segredo exposto no código, para conseguir acesso não autorizado com privilégios de administrador.

## Objetivo

Garantir que nenhum segredo da configuração fica escrito no código, para que só o servidor conheça o segredo que assina os tokens.

## Âmbito

Aplica-se ao `jwtSecret` e à `apiKeyPagamentos` de `src/config.js`, à forma como são carregados (variáveis de ambiente `JWT_SECRET` e `API_KEY_PAGAMENTOS`) e ao uso do `jwtSecret` na assinatura (`src/routes/auth.js`) e verificação (`src/autenticacao.js`) dos tokens. Os valores antigos de ambos foram tratados como comprometidos e retirados de uso em 2026-11-06.

Fica de fora: tokens legítimos roubados ao utilizador e a validação do algoritmo de assinatura do token.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | O programador não escreve segredos no código: o `jwtSecret` e a `apiKeyPagamentos` são lidos de variáveis de ambiente, a aplicação não arranca sem `JWT_SECRET`, e o scan de segredos termina com 0 deteções | gitleaks detect --source . --config .gitleaks.toml --redact |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Daniel). Revê: Guilherme. Implementa: Daniane.
