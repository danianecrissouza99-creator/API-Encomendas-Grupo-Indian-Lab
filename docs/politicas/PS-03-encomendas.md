## Ameaça 9
Como atacante, quero injetar SQL através do parâmetro id do URL, para conseguir manipular a query e extrair dados fora do âmbito da encomenda pedida. Ataque pasta routes/encomendas.js

## Objetivo
Todos os dados do utilizador incluindo o parâmetro id do URL, devem ser tratadas como dados não confiáveis.

## Âmbito
Aplica-se na area de encomendas e tem o âmbito de proteger a integridade da base de dados.

não se aplica:A ambiente do logout do client.


## Regra
| Pergunta | Resposta |
|---|---|
| Quem tem de cumprir? | Programador |
| O que deve / não deve fazer? | Não deve concatenar o id do URL diretamente na query SQL; deve usar sempre queries parametrizadas (ex.: WHERE id = ?) |
| Qual é o limite concreto? | 0 queries construídas por concatenação de input; todas as consultas com dados do utilizador têm de ser parametrizadas |
| Como se prova que foi cumprido? | Revisão humana — o revisor confirma no PR que não há concatenação de input nas queries |


## Responsabilidade

| Papel | Nome |
|---|---|
| Dono da regra | Diogo |
| Revisor da regra | Fabio |
| Executor (testes/implementação) | Daniel |
