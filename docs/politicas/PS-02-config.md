## Ameaça 8
Como atacante, quero forjar um JWT válido usando o segredo exposto no código, para conseguir acesso não autorizado com privilégios de administrador.

## Objetivo
Garantir que o segredo usado para assinar e verificar os tokens JWT é conhecido apenas pelo servidor, para que só a API consiga emitir tokens válidos, e que nenhum segredo da configuração fica escrito no código.

## Âmbito
Aplica-se a: ao segredo `jwtSecret` definido em `src/config.js`, à forma como é carregado (variáveis de ambiente em vez de valor escrito no código) e ao seu uso na assinatura (`routes/auth.js`) e verificação (`autenticacao.js`) dos tokens. Aplica-se também à `apiKeyPagamentos`, que deve ser carregada da variável de ambiente `API_KEY_PAGAMENTOS`.

Não se aplica a: tokens legítimos roubados ao utilizador nem à validação do algoritmo de assinatura do token.


## Regra

| Pergunta | Resposta |
|---|---|
| Quem tem de cumprir? | Programador |
| O que deve / não deve fazer? | Não deve escrever o `jwtSecret` nem a `apiKeyPagamentos` no código; deve carregá-los de variáveis de ambiente. A aplicação deve falhar no arranque se `JWT_SECRET` não existir |
| Qual é o limite concreto? | 0 segredos no código; os segredos fixos têm de ser trocados ou retirados de uso, e o gitleaks no CI termina com 0 deteções |
| Como se prova que foi cumprido? | Automático — gitleaks no pipeline bloqueia o merge se encontrar um segredo |

## Segredos expostos

| Segredo | Tratamento | Data |
|---|---|---|
| `jwtSecret` | Tratado como comprometido, removido dos ramos e substituído por um novo valor | 2026-11-06 |
| `apiKeyPagamentos` | Valor do exercício. Tratado como comprometido, removido dos ramos e não volta a ser usado | 2026-11-06 |

## Responsabilidade

| Papel | Nome |
|---|---|
| Dono da regra | Daniel |
| Revisor da regra | Guilherme |
| Executor (testes/implementação) | Daniane |