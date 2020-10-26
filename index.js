var personagem = {
    nome: "",
    ataque: 0,
    dano: 0,
};
var party = [];
var inimigos = [];

// document.onload = () => {
//     button = document.getElementById("btnAddPartyMember").addEventListener('click', addPlayerToPartyFunction);
//     partyList = document.getElementById("personagensDaParty");
//     nomePersonagem = document.getElementById("nomePersonagem");
//     ataquePersonagem = document.getElementById("ataquePersonagem");
// }

// function addPlayerToPartyFunction() {
//     partyList.innerHTML = `<div> ${nomePersonagem.value} </div>`;
// }

$(document).ready(function(){
    $('#nomePersonagem').val("");
    $('#ataquePersonagem').val("");
    $('#danoPersonagem').val("");

    $("#btnAddPartyMember").click(() => {
        if ($('#nomePersonagem').val() != "" )
        {
            personagem = {
                nome: $('#nomePersonagem').val(),
                ataque: $('#ataquePersonagem').val(),
                dano: $('#danoPersonagem').val(),
            };
            party.push(personagem);
            $(`<p> <div class="divNome"> ${personagem.nome} </div>
                    <div class="divAtaque"> ${personagem.ataque} </div>
                    <div class="divDano"> ${personagem.dano} </div> </p>`).appendTo('#personagensDaParty');
            $('#nomePersonagem').val("");
            $('#ataquePersonagem').val("");
            $('#danoPersonagem').val("");
        }
    });

    $("#btnAddInimigo").click(() => {
        if ($('#nomeInimigo').val() != "" )
        {
            personagem = {
                nome: $('#nomeInimigo').val(),
                ataque: $('#ataqueInimigo').val(),
                dano: $('#danoInimigo').val(),
            };
            inimigos.push(personagem);
            $(`<p> <div class="divNome"> ${personagem.nome} </div>
                    <div class="divAtaque"> ${personagem.ataque} </div>
                    <div class="divDano"> ${personagem.dano} </div> </p>`).appendTo('#inimigosDaParty');
            $('#nomeInimigo').val("");
            $('#ataqueInimigo').val("");
            $('#danoInimigo').val("");
        }
    });

    $("#botaoCalcular").click(() => {
        $(`<p> <div> Os personagens têm ${calcularChanceDeVitoria()}% de chance de vencer a batalha. </div> </p>`).appendTo('#relatorioDeCombate');
    });

  });

  function calcularChanceDeVitoria() {
      return 50
      
  }