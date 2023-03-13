# APP_BLOCKDRUNK
 ## Projeto Integrador SENAC

 ### Este é um projeto em que o principal objetivo da aplicação é evitar o uso das redes sociais e compras quando se está ébrio. Realizado pelos alunos da turma de ADS do 4º SEMESTRE - EAD 2021 - SENAC, cujo os alunos do GRUPO 19 são: 
 * Pedro Lucas Moraes de Sousa Rosa
 * Yara Guedes Lopes
 * Leonardo Teixeira 
 * Leonardo Bertaia

### Apresentação do APP

Uma apresentação feita em video e salva no seguinte link do youtube:

https://www.youtube.com/watch?v=PIq_oXpgmF8

### As tecnologias utilizadas foram: 
Stack   | Versão
--------- | ------
VSCODE | 1.76.1
REACT NATIVE | 18.1.0
EXPO | 6.3.1
ANDROID STUDIO | 2022.1.1 Patch 1

### Como rodar a aplicação:

1. Necessário abrir o ANDROID STUDIO. 
2. Configurar um emulador de Android e instala-lo. 

2.1. https://developer.android.com/studio/run/emulator?hl=pt-br

3. Necessário abrir o CMD aonde está instalado o EXPO.

3.1. https://docs.expo.dev/get-started/installation/

4. Rodar no promtp o comando: npx expo start --android

5. Seguir o fluxo da abertura do expo no emulador do android. 

5.1. Press a - OPEN ANDROID

6. Após o termino do fluxo, o mesmo irá abrir a aplicação no emulador corretamente.


**Obs.: É necessário sempre rodar a aplicação na pasta em que está instalada o EXPO e todos os outros arquivos.**

### Como utilizar a aplicação:
A aplicação é bem simples interativa, onde os botões fazem o fluxo da navegação entre as telas até chegar na tela ESCOLHERAPP, onde escolhemos os aplicativos disponiveis e clicamos neles. É possivel também navegar entre as telas em um discreto menu hamburguer ao lado esquerdo da tela. Em cada botão de aplicativo(ALERT) existem 5 frases configuradas que randomizam de acordo com cada click. 

Tela  | Descrição
--------- | ------
HOME | Nesta tela possuimos uma apresentação do aplicativo e um botão de COMERÇAR que faz a navegação para a proxima tela.  
BEM VINDO | Nesta tela possuimos apenas um botão de APPS DISPONIVEIS para fazer a navegação para a proxima tela. 
ESCOLHERAPP | Nesta tela possuimos os botões/icones de aplicativos em que cada ação deles equivale a randomização de um dos 5 alerts programados individualmente. Possui também um botão de VOLTAR PARA HOME, que faz a navegação para a tela HOME. 
MENU HAMBURGUER LATERAL ESQUERDO | Nesta tela possuimos também a navegação através de rotas pelas três telas disponiveis na aplicação, sendo possivel não utilizar a ordem sequencial para a navegação das telas.  
