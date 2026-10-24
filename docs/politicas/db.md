## Ameaça 11
Como atacante com acesso ao código/histórico git, quero obter a lista de utilizadores fixa em db.js (NIF, email, passwordHash), para conseguir dados pessoais e material para quebra de passwords offline.

## Objetivo
Garantir que dados pessoais (nome, email, NIF) e credenciais (passwordHash) nunca ficam escritos no código-fonte nem no histórico git, sendo guardados apenas numa base de dados com acesso controlado.

## Âmbito
Aplica-se a: ao ficheiro src/db.js e à camada de dados, ao armazenamento dos registos de utilizadores e à verificação de segredos/dados pessoais no código antes de cada merge (ex.: gitleaks no CI).

Não se aplica a: dados de teste claramente fictícios e devidamente identificados, nem a fugas de dados ocorridas fora do repositório (ex.: acesso indevido à própria base de dados em produção).

## Regra

| Pergunta | Resposta |
|---|---|
| Quem tem de cumprir? | Programador |
| O que deve / não deve fazer? | **Não deve** incluir dados pessoais (nome, email, NIF), credenciais (passwordHash) nem segredos em texto no código-fonte; **deve** carregá-los da base de dados ou de variáveis de ambiente |
| Qual é o limite concreto? | Scan de segredos (gitleaks) no CI com **0 deteções**; qualquer deteção bloqueia o merge para `main` |
| Como se prova que foi cumprido? | Automático — gitleaks corre no pipeline (`.github/workflows/seguranca.yml`) em cada push e Pull Request |
