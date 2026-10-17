# Modelo de ameaças — api-encomendas

**Grupo:** Indian Lab

## Casos de abuso

Formato: «Como atacante, quero *fazer X*, para *conseguir Y*.»

1. «Como atacante, quero fazer um enrome números de encomendas, para travar o servidor e fazer com que o seu desempenho seja o minimo possivel.»
2. «Como atacante, quero saber informação de todos os utilizadores da db, para poder distribuir infromação sensivel.»
3. «Como atacante, quero obter informação na configuração do servidor, principalmente jwtSecret e apiKeyPagamentos, para obter controlo do servidor e pagamentos feitos.»
4. «Como atacante, quero mudar o meu id na query de devolução de encomendas, para acesso a todas as encomendas feitas.»
5. «Como atacante, quero gerar o maior núemro de tokens, para aumentar o número de logs e tráfico o que diminui o desempenho do servidor.»
6. «Como atacante, quero ultrapassar a única validação de login, para ter acesso ao servidor sem conta e token.»

## As quatro que não aceitamos correr

| # | Ameaça | Onde na API |
|---|--------|-------------|
| 1 |        |             |
| 2 |        |             |
| 3 |        |             |
| 4 |        |             |
