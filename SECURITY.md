# Política de Segurança — api-encomendas

**Grupo:** Indian Lab · **Versão:** 0.1 · **Data:** 2026-10-24
**Aprovada por:** Daniane

## Objetivo

Proteger os dados dos clientes e das encomendas. Queremos evitar que alguém consiga ver, apagar ou alterar informação que não devia, aproveitando falhas que já descobrimos e decidimos corrigir.

## Âmbito (onde é que estas regras valem)

Valem para todo o código do projeto (pasta `src/`), para as verificações automáticas do projeto (pasta `.github/workflows/`) e para a versão principal do código (o ramo `main`).

Valem para **qualquer alteração** ao projeto, mesmo as feitas por quem tem mais permissões.

Não valem para: os computadores e a rede onde o site corre, nem para dados de teste inventados — essas coisas não fazem parte deste projeto.

## Princípios (as nossas ideias base)

1. Se uma proteção nunca foi testada, não podemos dizer que funciona.
2. Preferimos dar mensagens de erro vagas do que mensagens que ajudem um atacante.
3. Se uma regra só se cumpre com alguém a olhar, então essa regra tem mesmo de ser revista por uma pessoa — não fingimos que um programa a verifica sozinho.

## Regras

| # | Regra | Como confirmamos que foi cumprida |
|---|-------|-----------------------------------|
| 1 | Só dar acesso (login) a quem acerta no email **e** na palavra-passe | Teste automático: tentar entrar só com o email tem de ser recusado |
| 2 | Não deixar a chave secreta do login escrita no código | Programa automático que procura segredos esquecidos no código |
| 3 | Nunca colar texto do utilizador diretamente nas pesquisas à base de dados | Uma pessoa confirma isso quando revê a alteração |
| 4 | Cada pessoa só pode ver os seus próprios dados, não os dos outros | Uma pessoa confirma isso quando revê a alteração |
| 5 | Não guardar dados pessoais nem palavras-passe dentro do código | Programa automático que procura esses dados no código |

## Quem aprova

Nenhuma alteração entra na versão principal (`main`) sem passar por um **pedido de alteração** (Pull Request) e sem outra pessoa o aprovar.

As alterações aos ficheiros mais importantes (as verificações automáticas, este `SECURITY.md` e as políticas em `docs/politicas/`) só podem ser aprovadas pela responsável do repositório.

## Como avisar de um problema

Quem encontrar uma falha cria um aviso no repositório (uma *issue*) com a etiqueta `seguranca`, explicando o que viu e como aconteceu. As falhas novas vão sendo apontadas no ficheiro `docs/ameacas.md`.

## As nossas políticas, uma a uma

Cada regra tem a sua página com os detalhes e um responsável:

| Código | Página | Problema que resolve | Responsável |
|--------|--------|----------------------|-------------|
| PS-01 | [Autenticação](docs/politicas/auth.md) | Entrar só com o email de outra pessoa | Guilherme |
| PS-02 | [Configuração e segredos](docs/politicas/config.md) | Chave secreta do login à vista no código | Daniel |
| PS-03 | [Encomendas](docs/politicas/encomendas.md) | Ataque pela pesquisa de encomendas (SQL injection) | Diogo |
| PS-04 | [Utilizadores](docs/politicas/utilizadores.md) | Ver os dados de todos os utilizadores | Fabio |
| PS-05 | [Base de dados](docs/politicas/db.md) | Dados pessoais e palavras-passe guardados no código | Daniane |

As outras falhas que encontramos mas ainda não tratámos ficam apontadas em `docs/ameacas.md`, com o motivo.

---
