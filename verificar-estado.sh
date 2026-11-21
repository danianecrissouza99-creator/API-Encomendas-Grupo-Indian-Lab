echo "Verificacao do estado do repositorio antes da Tarefa 3."
echo
echo "1. POLITICAS"
ls docs/politicas/PS-*.md 2>/dev/null || echo "  nenhuma encontrada"
echo
echo "2. INDICE NO SECURITY.MD"
grep "^| PS-" SECURITY.md 2>/dev/null | cut -c1-80 || echo "  vazio"
echo
echo "3. COMO SE VERIFICA"
for f in docs/politicas/PS-*.md; do
  nome=$(basename "$f" .md)
  grep '^|' "$f" | grep -v 'Como se verifica' | grep -v -- '---' | while IFS= read -r linha; do
    echo "  $nome ->$(echo "$linha" | cut -d'|' -f4)"
  done
done
echo
echo "4. CODIGO"
npm test > /dev/null 2>&1
echo "  npm test $?"
npm audit --audit-level=high > /dev/null 2>&1
echo "  npm audit --audit-level=high $?"
echo
echo "5. WORKFLOWS"
ls .github/workflows/
