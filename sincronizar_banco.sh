date=$(date +%d/%m/%Y)
hour=$(date +%H:%M:%S)
git submodule update --remote --merge
git add .
git commit -m "Banco de Dados Sincronizado $date às $hour"
git push origin main