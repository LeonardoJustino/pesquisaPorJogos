##Busca de Jogos -Imersão Dev com Google Gemini

### **Descrição**

Este projeto é uma aplicação web simples desenvolvida em HTML, CSS e JavaScript que permite aos usuários pesquisar jogos em uma base de dados. O usuário pode digitar o nome do jogo, palavras-chave da descrição ou tags para encontrar os jogos correspondentes.

### **Funcionalidades**

* **Pesquisa:** Permite pesquisar jogos por nome, descrição ou tags.
* **Exibição de resultados:** Apresenta os resultados da pesquisa de forma clara e concisa, com o nome do jogo, uma breve descrição e um link para mais informações.

### **Tecnologias Utilizadas**

* **HTML:** Estrutura da página web.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação, incluindo a função de pesquisa e a manipulação do DOM.

### **Estrutura do Projeto**

* **index.html:** Arquivo principal da aplicação.
* **style.css:** Arquivo de estilos CSS.
* **app.js:** Arquivo JavaScript contendo a lógica da aplicação.
* **dados.js:** Arquivo contendo os dados dos jogos (base de dados).

### **Como Usar**

1. **Clone o Repositório:**
   Se você deseja contribuir com o projeto, clone o repositório usando o comando `git clone https://[seu_repositorio]/imersao-alura-busca-jogos.git`.
2. **Abra o Arquivo:**
   Abra o arquivo `index.html` em seu navegador web.
3. **Realize a Pesquisa:**
   Digite o termo de busca no campo de pesquisa e clique no botão "Pesquisar".
4. **Visualize os Resultados:**
   Os resultados da pesquisa serão exibidos na seção abaixo do campo de pesquisa.

### **Como Funciona**

O JavaScript, especificamente o arquivo `app.js`, é responsável por:

* **Capturar a entrada do usuário:** Ao clicar no botão "Pesquisar", o valor do campo de pesquisa é capturado.
* **Realizar a pesquisa:** O JavaScript itera sobre a base de dados de jogos (armazenada em `dados.js`), comparando o termo de busca com o nome, descrição e tags de cada jogo.
* **Exibir os resultados:** Os jogos encontrados são adicionados à seção de resultados, criando elementos HTML para cada um deles.


**Observações:**

* **Base de Dados:** A base de dados de jogos está armazenada no arquivo `dados.js`. Você pode personalizar essa base de dados para incluir mais jogos e informações.
* **Estilização:** O arquivo `style.css` é responsável pela aparência visual da aplicação. Você pode personalizar os estilos para criar uma interface mais atraente.
* **Funcionalidades Adicionais:** É possível adicionar novas funcionalidades à aplicação, como:
    * Ordenação dos resultados
    * Filtros adicionais
    * Integração com APIs de jogos


Este README fornece uma visão geral do projeto e serve como ponto de partida para desenvolvedores que desejam contribuir ou aprender mais sobre a aplicação.
