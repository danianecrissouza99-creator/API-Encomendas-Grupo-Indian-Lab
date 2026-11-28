# api-encomendas

API de encomendas. Em produção desde 2025. Mantida pelo grupo Indian Lab.

## Correr localmente

A aplicação não arranca sem a variável de ambiente `JWT_SECRET` (regra da política PS-02). Cada pessoa gera um valor só seu, e nunca o escreve no código nem o envia para o repositório.

Git Bash:

```bash
npm ci
export JWT_SECRET=$(openssl rand -hex 32)
npm start
```

PowerShell:

```powershell
npm ci
$env:JWT_SECRET = node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
npm start
```

Testes: `npm test`.

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| POST | `/auth/login` | Autenticação, devolve token |
| GET | `/encomendas` | Encomendas do utilizador autenticado |
| GET | `/encomendas/:id` | Uma encomenda |
| GET | `/utilizadores/me` | Perfil do utilizador autenticado |
| GET | `/saude` | Estado do serviço |

## Segurança

| O quê | Onde |
|---|---|
| Política geral e índice das políticas | `SECURITY.md` |
| Políticas específicas (PS-01 a PS-06) | `docs/politicas/` |
| Ameaças e donos | `docs/ameacas.md` |
| Pipeline de segurança (um job por regra que se verifica com um comando) | `.github/workflows/seguranca.yml` |
| Testes de segurança que os jobs correm | `seguranca/` |
| Regra do semgrep (SQL por concatenação) | `.semgrep/regras.yml` |
| Quem revê cada ficheiro | `CODEOWNERS` |
| Entrega e execuções do pipeline | `ENTREGA.md` |

### O que o pipeline verifica

| Job | Política | Comando |
|---|---|---|
| `ps-01-autenticacao` | PS-01 · o login exige a palavra-passe | `node --test seguranca/ps-01-auth.js` |
| `ps-02-segredos` | PS-02 · sem segredos no código nem no histórico | `gitleaks detect --source . --config .gitleaks.toml --redact` |
| `ps-03-sql-parametrizado` | PS-03 · sem SQL montado por concatenação | `semgrep --config .semgrep/ --error --metrics=off src/` |
| `ps-04-exposicao-dados` | PS-04 · o perfil não devolve `passwordHash` nem NIF | `node --test seguranca/ps-04-exposicao.js` |
| `ps-05-dados-pessoais` | PS-05 · sem hashes nem NIF escritos em `src/` | `node --test seguranca/ps-05-dados-pessoais.js` |
| `ps-06-dependencias` | PS-06 · sem dependências com vulnerabilidades altas ou críticas | `npm audit --audit-level=high` |

Os jobs vermelhos mostram falhas herdadas que ainda estão por corrigir; o estado de cada um está no `ENTREGA.md`.

O ramo `main` só aceita alterações por pull request, com a aprovação de um dono do `CODEOWNERS` e o check `testes` a passar. A regra não tem exceções, nem para administradores.

Para avisar de um problema de segurança, criem uma issue com a etiqueta `seguranca`.

## Notas da equipa anterior

Estado em que herdámos o projeto, e o que já foi resolvido:

- Há um TODO antigo no `src/config.js` sobre variáveis de ambiente. **Resolvido:** os segredos passaram para variáveis de ambiente (PS-02), e os valores antigos foram removidos do histórico e trocados.
- Nunca chegámos a pôr verificações de segurança no CI. **Resolvido:** `.github/workflows/seguranca.yml`.
- O `main` aceita integração direta. **Resolvido:** a `main` está protegida por uma regra do repositório.
