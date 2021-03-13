date=$(date +%d/%m/%Y)
hour=$(date +%H:%M:%S)
git pull
git submodule update --remote --merge
git add .
git commit -m "Banco de Dados sincronizado em $date às $hour"
git push origin main
