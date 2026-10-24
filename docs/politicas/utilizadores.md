## Ameaça 3 
Como atacante, quero saber informação de todos os utilizadores da db, para poder distribuir infromação sensivel.

## Objetivo
Fazer com que o utilizador tenha permissão de receber informação de utilizador só de ele mesmo, sem poder alterar a query.

## Âmbito
Aplica-se a: ao endpoint do utilizadores, à validação de informações que o utilizador recebe da base de dados

Não se aplica a: a admins pois estes podem ter acesso às informações todas dos utilizdaors num dashboard de admin, se caso existir.

Regra
| Pergunta | Resposta |
|---|---|
| Quem tem de cumprir? | Programador |
| O que deve / não deve fazer? | Não deve devolver dados de utilizadores que não o próprio; deve filtrar sempre pelo utilizador autenticado (req.utilizador.sub) e não confiar em id vindo do pedido |
| Qual é o limite concreto? | Um utilizador só acede aos seus próprios dados; um pedido ao perfil de outro utilizador tem de devolver 403/404 |
| Como se prova que foi cumprido? | Revisão humana — o revisor confirma no PR que o acesso é filtrado pelo utilizador autenticado |