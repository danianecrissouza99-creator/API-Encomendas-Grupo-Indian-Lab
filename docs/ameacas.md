# Modelo de ameaças — api-encomendas

**Grupo:** NN

## Casos de abuso

Formato: «Como atacante, quero *fazer X*, para *conseguir Y*.»

1. Como atacante, quero iniciar sessão indicando apenas o email de outra pessoa, para conseguir obter um token válido em nome dela.

2.Como atacante, quero forjar um JWT válido usando o segredo exposto no código, para conseguir acesso não autorizado com privilégios de administrador.
Ataque pasta routes/auth.js

3.Como atacante, quero injetar SQL através do parâmetro id do URL, para conseguir manipular a query e extrair dados fora do âmbito da encomenda pedida.
Ataque pasta routes/encomendas.js

4.Como atacante, quero forjar um token (usando o segredo exposto) com um sub que contenha SQL malicioso — ex.: sub = "0 UNION SELECT ... --" — para conseguir injetar SQL nesta query e extrair toda a tabela utilizadores.
Ataque pasta routes/utilizadores.js


5.Como atacante com acesso ao código/histórico git, quero obter a lista de utilizadores fixa em db.js (NIF, email, passwordHash), para conseguir dados pessoais e material para quebra de passwords offline.
Ataque pasta db.js

6.

## As quatro que não aceitamos correr

| # | Ameaça | Onde na API |
|---|--------|-------------|
| 1 |        |             |
| 2 |        |             |
| 3 |        |             |
| 4 |        |             |
