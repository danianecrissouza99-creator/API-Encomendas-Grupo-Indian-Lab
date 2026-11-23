# Entrega — Grupo Indian Lab

**Elementos:** Daniane (responsável do repositório, PS-05), Daniel (PS-02), Diogo (PS-03), Fabio (PS-04), Guilherme (PS-01)

| # | Item | Onde |
|---|------|------|
| 1 | Ameaças | `docs/ameacas.md` |
| 2 | Política | `SECURITY.md` |
| 3 | Pipeline | `.github/workflows/seguranca.yml` |
| 4 | Execução **VERMELHA** | https://github.com/danianecrissouza99-creator/API-Encomendas-Grupo-Indian-Lab/actions/runs/44930823879 |
| 5 | Execução **VERDE** | [colar link] |
| 6 | PR que abrimos no grupo __ | [colar link] |
| 7 | PR que revimos | [colar link] |

## O que a execução vermelha mostra

| Job | Política | Resultado | Porquê |
|-----|----------|-----------|--------|
| `ps-01-autenticacao` | PS-01 | vermelho | o login emite token só com o email |
| `ps-02-segredos` | PS-02 | verde | os segredos herdados foram removidos do histórico em 2026-11-06, antes de o job existir |

## O que se impõe por configuração

- A `main` recusa integração direta: exige pull request com 1 aprovação, revisão do dono no `CODEOWNERS` e o check `testes`, e bloqueia force-push e exclusão. A regra não tem exceções, nem para administradores.
- O `CODEOWNERS` na raiz pede a revisão do dono de cada política e do código que ela protege.
