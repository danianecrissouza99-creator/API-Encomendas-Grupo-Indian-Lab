## Ameaça 11
Como atacante com acesso ao código/histórico git, quero obter a lista de utilizadores fixa em db.js (NIF, email, passwordHash), para conseguir dados pessoais e material para quebra de passwords offline.

## Objetivo
Garantir que dados pessoais (nome, email, NIF) e credenciais (passwordHash) nunca ficam escritos no código-fonte nem no histórico git, sendo guardados apenas numa base de dados com acesso controlado.

## Âmbito
Aplica-se a: ao ficheiro src/db.js e à camada de dados, ao armazenamento dos registos de utilizadores e à verificação de segredos/dados pessoais no código antes de cada merge (ex.: gitleaks no CI).

Não se aplica a: dados de teste claramente fictícios e devidamente identificados, nem a fugas de dados ocorridas fora do repositório (ex.: acesso indevido à própria base de dados em produção).
