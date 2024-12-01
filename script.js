let ic = 1;
 
 
function CadastrarAluno(){

    localStorage.setItem("Nome"+ic,document.getElementById("Nome").value);

    localStorage.setItem("Curso"+ic,document.getElementById("Curso").value);

    localStorage.setItem("Ano"+ic,document.getElementById("Ano").value);

    ic += 1;

}
 
function MostrarTodos(){

    var texto = "";

    for (let index = 1; index < ic; index++) {

        texto += "<br>"+index+"° - Registro<br>"        

        texto += localStorage.getItem("Nome"+index)+"<br>";

        texto += localStorage.getItem("Curso"+index)+"<br>";

        texto += localStorage.getItem("Ano"+index)+"<br>";

    }

    document.getElementById("Pesquisa").innerHTML = texto;

}
 
function MostreUmAluno(){

    var pesqui = prompt("Digite o nome do aluno que quer pesquisar: ");

    var texto = "";

    for (let index = 1; index < ic; index++) {

       if(pesqui ==  localStorage.getItem("Nome"+index))

       {

        texto += "<br>"+index+"° - Registro<br>"        

        texto += localStorage.getItem("Nome"+index)+"<br>";

        texto += localStorage.getItem("Curso"+index)+"<br>";

        texto += localStorage.getItem("Ano"+index)+"<br>";

       }

    }

    document.getElementById("Pesquisa").innerHTML = texto;

}
 
function ExcluirUmAluno(){

    var pesqui = prompt("Digite o nome do aluno que quer excluir: ");

    for (let index = 1; index < ic; index++) {

       if(pesqui ==  localStorage.getItem("Nome"+index))

       {     

        localStorage.removeItem("Nome"+index);

        localStorage.removeItem("Curso"+index);

        localStorage.removeItem("Ano"+index);

    }

    }

}
 
function MudeUmDadoDeUmAluno(){

    var pesqui = prompt("Digite o nome do aluno que quer mudar: ");

    var texto = "";

    for (let index = 1; index < ic; index++) {

       if(pesqui ==  localStorage.getItem("Nome"+index))

       {

        localStorage.setItem("Nome"+index,prompt("Digite o novo nome: "));

        localStorage.setItem("Curso"+index,prompt("Digite o novo curso: "));

        localStorage.setItem("Ano"+index,prompt("Digite o novo Ano: "));

       }

    }

}
 
 