<p align="center"><img alt="PO.BR.E - Portal Brasileiro de ROMHacking e Emulação" src="https://github.com/romhackersbr/romhackersbr.github.io/blob/main/assets/svg/logo.svg"></p>
<p align="center">
    <a href="https://romhackers.org/">PO.BR.E</a> |
    <a href="https://romhackers.org/traducoes">Traduções</a> |
    <a href="https://romhackers.org/romhacks">ROMHacks</a> |
    <a href="https://romhackers.org/tutoriais">Tutoriais</a> |
    <a href="https://romhackers.org/utilitarios">Utilitários</a> |
    <a href="https://romhackers.org/emuladores">Emuladores</a>
    <br />
    <a href="https://romhackers.org/colaborando">Colaborar</a> | 
    <a href="https://romhackers.org/https://github.com/romhackersbr/romhackersbr.github.io/issues">Reportar Erros</a>
</p>
<p align="center">
Este é o repositório do sistema do Portal Brasileiro de ROMHacking e Emulação. Desenvolvido em Jekyll.
</p>

# Requerimentos
- Ruby 2.7.2
- Gem 3.1.4
- Bundler 1.17.1
- Jekyll 3.7.4


# Instalação local
Antes de tudo sincronize o banco de dados do sistema inicializando os submodulos do git:
```
git submodule update --init --recursive
git submodule update --remote --merge
```

Depois é necessário instalar Ruby e o Gem, após isso instale o Bundler usando o Gem:
```
 gem install bundler
 bundle install
``

Com Ruby, Gem e Bundler instalado podemos prosseguir com a instalação do Jekyll
```
 gem install jekyll
```

E finalmente podemos rodar o servidor localmente para testes com:
```
 bundle exec jekyll serve -c _config.deployment.xml -w
```


# Sincronizando os dados
Para sincronizar o dados armazenados no repositório de banco de dados basta rodar o seguinte comando:
```
git submodule update --remote --merge
```
É extremamente recomendado que antes de cada `commit` o banco seja sincronizado

# Colaboradores

# Patrocinadores

