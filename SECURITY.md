# Política de Segurança — api-encomendas

**Grupo:** Indian Lab · **Versão:** 0.2 · **Data:** 2026-11-21
**Aprovada por:** Daniane

## 1. Objetivo

Proteger os dados dos clientes e das encomendas. Queremos evitar que alguém consiga ver, apagar ou alterar informação que não devia, aproveitando falhas que já descobrimos e decidimos corrigir.

## 2. Âmbito (onde é que estas regras valem)

Valem para todo o código do projeto (pasta `src/`), para as verificações automáticas do projeto (pasta `.github/workflows/`) e para a versão principal do código (o ramo `main`).

Valem para **qualquer alteração** ao projeto, mesmo as feitas por quem tem mais permissões.

Não valem para: os computadores e a rede onde o site corre, nem para dados de teste inventados — essas coisas não fazem parte deste projeto.

## 3. Princípios (as nossas ideias base)

1. Se uma proteção nunca foi testada, não podemos dizer que funciona.
2. Preferimos dar mensagens de erro vagas do que mensagens que ajudem um atacante.
3. Se uma regra só se cumpre com alguém a olhar, então essa regra tem mesmo de ser revista por uma pessoa — não fingimos que um programa a verifica sozinho.

## 4. Quem aprova

Nenhuma alteração entra na versão principal (`main`) sem passar por um **pedido de alteração** (Pull Request) e sem outra pessoa o aprovar. O GitHub impõe isto: a `main` exige uma aprovação e o check `testes`, e bloqueia force-pushes.

As alterações aos ficheiros mais importantes (as verificações automáticas, este `SECURITY.md` e as políticas em `docs/politicas/`) só podem ser aprovadas pela responsável do repositório.

## 5. Como avisar de um problema

Quem encontrar uma falha cria um aviso no repositório (uma *issue*) com a etiqueta `seguranca`, explicando o que viu e como aconteceu. As falhas novas vão sendo apontadas no ficheiro `docs/ameacas.md`.

## 6. Políticas específicas

As regras vivem nas políticas específicas. Este ficheiro não as repete.

| Código | Política | Responde à ameaça | Dono |
|--------|----------|-------------------|------|
| PS-01 | [Autenticação](docs/politicas/PS-01-auth.md) | A1 — Login só com o email de outra pessoa | Guilherme |
| PS-02 | [Configuração e segredos](docs/politicas/PS-02-config.md) | A8 — JWT forjado com o segredo exposto no código | Daniel |
| PS-03 | [Encomendas](docs/politicas/PS-03-encomendas.md) | A9 — Injeção de SQL pelo `id` das encomendas | Diogo |
| PS-04 | [Utilizadores](docs/politicas/PS-04-utilizadores.md) | A3 — Dados de todos os utilizadores | Fabio |
| PS-05 | [Dados pessoais](docs/politicas/PS-05-db.md) | A11 — Dados pessoais e `passwordHash` em `db.js` | Daniane |

As outras ameaças que encontrámos, mas ainda não tratámos, ficam apontadas em `docs/ameacas.md`.
