function DarAlerta(){
    var texticulo = document.getElementById("texticulo").value
    window.alert("Você tem um belo" +texticulo);
}


DarAlerta("Conteudo da variavel que eu quis dar")



console.log("Tentou se achar o hacker?????")

var entrada = prompt("entre com a sua idade");

console.log(entrada);

entrada = parseInt(entrada);

if(entrada>=18){
    console.log("Você é de maior");
    document.getElementById("testeID").innerHTML = "Você é Maior"
    document.getElementById("bodinho").style.setProperty("background-color","red");
}else if(entrada<18){
    console.log("Você é de menor");
}else{
    console.log("INVALIDO")
}