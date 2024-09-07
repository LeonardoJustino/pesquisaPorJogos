
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Itera sobre cada jogo no array 'games'
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return ;
    };  
    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = ""; // String para armazenar os resultados da pesquisa
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let dado of games) {
         nome = dado.nome.toLowerCase();
         descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //console.log(dado.nome.includes("Apex Legends"))//VERIFICA SE O TITULO ESTÁ INCLUSO NO BANCO DE DADOS
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
             // Cria uma div para cada jogo com as informações relevantes
         
        resultados += `

        <div class="item-resultado">
            <h2>${dado.nome}</h2> <p>${dado.descricao}</p> <a href="${dado.link}" target="_blank">VER MAIS</a> </div>
    `;
        }
       }
    if(!resultados){
        resultados = "<p>Nada foi encontrado.<p/>"
   }
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}