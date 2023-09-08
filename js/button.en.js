document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".botãoA");
    var respostaDiv = document.getElementById("resposta");
    var aguardeMensagem = document.getElementById("aguardeMensagem");
    var tituloMensagem = document.getElementById("tituloMensagem");
    var conteudoMensagem = document.getElementById("conteudoMensagem");
    var botaoRedirecionar = document.getElementById("botaoRedirecionar");
  
    function mostrarResposta(titulo, conteudo, link) {
      aguardeMensagem.style.display = "none";
      respostaDiv.style.display = "block";
      tituloMensagem.textContent = titulo;
      conteudoMensagem.textContent = conteudo;
      botaoRedirecionar.style.display = "block";
      botaoRedirecionar.onclick = function () {
        window.location.href = link;
      };
    }
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var msg = button.getAttribute("data-msg");
        var link = button.getAttribute("data-link");
        
        // Definir textos personalizados para cada botão
        var tituloPersonalizado = "";
        var conteudoPersonalizado = "";
  
        if (msg === "Personagens") {
          tituloPersonalizado = "About the Characters";
          conteudoPersonalizado = "Katniss Everdeen and Peeta Mellark emerge as prominent protagonists. Katniss is a brave and skilled young huntress, whose determination is intensified when she volunteers for the brutal Hunger Games in place of her sister. Peeta, in turn, reveals a blend of strength and sensitivity as he faces the challenges of the deadly arena. With the enigmatic guidance of Haymitch Abernathy, the loyalty of Gale Hawthorne, and a variety of competitors in the Games.";
        } else if (msg === "Enredo") {
          tituloPersonalizado = "The Storyline of the Story";
          conteudoPersonalizado = "In a dystopian world, the powerful Capitol relentlessly controls twelve subjugated districts. To remind them of their submission, an annual event known as the 'Hunger Games' is held. In these games, young individuals are selected to fight to the death in an arena, while the districts helplessly watch. Katniss Everdeen, a fearless young woman from District 12, volunteers for the games in place of her sister. The unfolding epic saga explores her struggle for survival and her journey to challenge the oppressive regime of the Capitol.";
        } else if (msg === "Opinião") {
          tituloPersonalizado = "Readers' Opinions";
          conteudoPersonalizado = "The Hunger Games is a literary work that captivates readers from the very beginning. The plot presents a dystopian world where society is divided into districts controlled by the oppressive Capitol. The protagonist, Katniss Everdeen, emerges as a prominent character, a brave and resourceful young woman who fights for her family's survival in an environment of extreme adversity.";
        }
        
        mostrarResposta(tituloPersonalizado, conteudoPersonalizado, link);
      });
    });
});
