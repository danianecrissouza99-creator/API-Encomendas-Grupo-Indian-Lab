## Ameaça 1 
Como atacante, quero iniciar sessão indicando apenas o email de outra pessoa, para conseguir obter um token válido em nome dela.

## Objtivo 
Emitir um token de autenticação apenas quando o utilizador apresenta um email registado e a palavra-passe correspondente.

## Âmbito
Aplica-se a: ao endpoint do POST/LOGIN, à validação da emissão do Token JWT e das credenciais.

Não se aplica a: recuperação ou alteração de palavra-passe, nem a acessos obtidos por outros meios, como o roubo de um token já emitido.