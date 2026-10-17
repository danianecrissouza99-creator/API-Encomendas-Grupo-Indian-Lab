# Modelo de ameaças — api-encomendas

**Grupo:** Indian Lab

## Casos de abuso

Formato: «Como atacante, quero *fazer X*, para *conseguir Y*.»

1. Como atacante, quero iniciar sessão indicando apenas o email de outra pessoa, para conseguir obter um token válido em nome dela. GUILHERME

2. Como atacante, quero fazer um enrome números de encomendas, para travar o servidor e fazer com que o seu desempenho seja o minimo possivel. FABIO

3. Como atacante, quero saber informação de todos os utilizadores da db, para poder distribuir infromação sensivel. FABIO

4. Como atacante, quero obter informação na configuração do servidor, principalmente jwtSecret e apiKeyPagamentos, para obter controlo do servidor e pagamentos feitos. FABIO

5. Como atacante, quero mudar o meu id na query de devolução de encomendas, para acesso a todas as encomendas feitas. FABIO

6. Como atacante, quero gerar o maior núemro de tokens, para aumentar o número de logs e tráfico o que diminui o desempenho do servidor. FABIO

7. Como atacante, quero ultrapassar a única validação de login, para ter acesso ao servidor sem conta e token. FABIO

8.Como atacante, quero forjar um JWT válido usando o segredo exposto no código, para conseguir acesso não autorizado com privilégios de administrador. Ataque pasta routes/auth.js DANIANE

9.Como atacante, quero injetar SQL através do parâmetro id do URL, para conseguir manipular a query e extrair dados fora do âmbito da encomenda pedida. Ataque pasta routes/encomendas.js  DANIANE

10.Como atacante, quero forjar um token (usando o segredo exposto) com um sub que contenha SQL malicioso — ex.: sub = "0 UNION SELECT ... --" — para conseguir injetar SQL nesta query e extrair toda a tabela utilizadores. Ataque pasta routes/utilizadores.js DANIANE

11.Como atacante com acesso ao código/histórico git, quero obter a lista de utilizadores fixa em db.js (NIF, email, passwordHash), para conseguir dados pessoais e material para quebra de passwords offline. Ataque pasta db.js DANIANE

12.Como atacante, quero descobrir a chave JWT para consseguir cria tokens falsos com qualquer utilizador.DIOGO


## As quatro que não aceitamos correr

| # | Ameaça | Onde na API |
|---|--------|-------------|
| 1 |        |             |
| 2 |        |             |
| 3 |        |             |
| 4 |        |             |
