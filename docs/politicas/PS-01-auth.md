PS-01 · Política de autenticação
Versão: 0.2 · Dono: Guilherme · Data: 2026-11-21

Ameaça a que responde
Como atacante, quero iniciar sessão indicando apenas o email de outra pessoa, para conseguir obter um token válido em nome dela.

Objetivo
Emitir um token de autenticação apenas quando o utilizador apresenta um email registado e a palavra-passe correspondente.

Âmbito
Aplica-se ao endpoint POST /auth/login, à validação das credenciais e à emissão do token JWT.

Fica de fora: a recuperação ou alteração de palavra-passe, e os acessos obtidos por outros meios, como o roubo de um token já emitido.

Regras
| # | Regra | Como se verifica |
|---|-------|------------------|
| 1 | A API recusa com 401, sem devolver token, qualquer login com email inexistente ou palavra-passe errada ou em falta: 0 tokens emitidos sem verificar a palavra-passe | node --test seguranca/ps-01-auth.js |

Responsabilidades
Cumpre: programadores. Aprova exceções: dono da política (Guilherme). Revê: Daniane. Implementa: Diogo.

Verificação automática
Job: ps-01-autenticacao, em .github/workflows/seguranca.yml
Comando: node --test seguranca/ps-01-auth.js
Quando corre: em cada pull request e em cada push para main
Estado: vermelho desde a primeira execução. O login atual emite um token só com o email, que é a falha herdada que esta regra proíbe. Execução: https://github.com/danianecrissouza99-creator/API-Encomendas-Grupo-Indian-Lab/actions/runs/44930823879
Passa a bloquear: quando a correção do login ficar verde, o job entra nos checks obrigatórios da main