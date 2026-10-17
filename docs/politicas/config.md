## Ameaça 8
Como atacante, quero forjar um JWT válido usando o segredo exposto no código, para conseguir acesso não autorizado com privilégios de administrador.

## Objetivo
Garantir que o segredo usado para assinar e verificar os tokens JWT é conhecido apenas pelo servidor, para que só a API consiga emitir tokens válidos.

## Âmbito
Aplica-se a: ao segredo `jwtSecret` definido em `src/config.js`, à forma como é carregado (variáveis de ambiente em vez de valor escrito no código) e ao seu uso na assinatura (`routes/auth.js`) e verificação (`autenticacao.js`) dos tokens.

Não se aplica a: outras chaves da configuração, como a `apiKeyPagamentos`, nem a tokens legítimos roubados ao utilizador ou à validação do algoritmo de assinatura do token.
