date=$(date +%d/%m/%Y)
hour=$(date +%H:%M:%S)
git submodule update --remote --merge
git add .
git commit -m "Banco de Dados Sincronizado $timestamp"
git push origin main