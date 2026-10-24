## Ameaça 9
Como atacante, quero injetar SQL através do parâmetro id do URL, para conseguir manipular a query e extrair dados fora do âmbito da encomenda pedida. Ataque pasta routes/encomendas.js

## Objetivo
Todos os dados do utilizador incluindo o parâmetro id do URL, devem ser tratadas como dados não confiáveis.

## Âmbito
Aplica-se na area de encomendas e tem o âmbito de proteger a integridade da base de dados.

não se aplica:A ambiente do logout do client.
