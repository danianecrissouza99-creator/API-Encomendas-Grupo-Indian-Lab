## Ameaça 1 
Como atacante, quero iniciar sessão indicando apenas o email de outra pessoa, para conseguir obter um token válido em nome dela.

## Objetivo
Emitir um token de autenticação apenas quando o utilizador apresenta um email registado e a palavra-passe correspondente.

## Âmbito
Aplica-se a: ao endpoint do POST/LOGIN, à validação da emissão do Token JWT e das credenciais.

Não se aplica a: recuperação ou alteração de palavra-passe, nem a acessos obtidos por outros meios, como o roubo de um token já emitido.

## Regra de segurança

A API só pode emitir um token JWT quando o email existe e a palavra-passe apresentada corresponde à palavra-passe dessa conta. Se o email não existir ou a palavra-passe estiver errada, o login deve ser recusado e nenhum token pode ser devolvido.


## Regra

| Pergunta | Resposta |
|---|---|
| Quem tem de cumprir? | Programador |
| O que deve / não deve fazer? | Não deve emitir um token sem confirmar a palavra-passe; deve validar as credenciais (ex.: bcrypt.compare) antes de assinar o JWT |
| Qual é o limite concreto? | 0 tokens emitidos sem verificação de palavra-passe; um pedido de login só com email tem de devolver 401 |
| Como se prova que foi cumprido? | Automático — teste no CI que tenta login só com email e espera resposta 401 |


## Responsabilidade

| Papel | Nome |
|---|---|
| Dono da regra | Guilherme |
| Revisor da regra | Daniane |
| Executor (testes/implementação) | Diogo |