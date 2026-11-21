# PS-01 · Política de autenticação

**Versão:** 0.2 · **Dono:** Guilherme · **Data:** 2026-11-21

## Ameaça a que responde

Como atacante, quero iniciar sessão indicando apenas o email de outra pessoa, para conseguir obter um token válido em nome dela.

## Objetivo

Emitir um token de autenticação apenas quando o utilizador apresenta um email registado e a palavra-passe correspondente.

## Âmbito

Aplica-se ao endpoint `POST /auth/login`, à validação das credenciais e à emissão do token JWT.

Fica de fora: a recuperação ou alteração de palavra-passe, e os acessos obtidos por outros meios, como o roubo de um token já emitido.

## Regras

| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | A API recusa com 401, sem devolver token, qualquer login com email inexistente ou palavra-passe errada ou em falta: 0 tokens emitidos sem verificar a palavra-passe | node --test seguranca/ps-01-auth.js |

## Responsabilidades

Cumpre: programadores. Aprova exceções: dono da política (Guilherme). Revê: Daniane. Implementa: Diogo.
