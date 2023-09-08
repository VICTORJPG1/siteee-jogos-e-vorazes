document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".botãoA");
    var respostaDiv = document.getElementById("resposta");
    var aguardeMensagem = document.getElementById("aguardeMensagem");
    var tituloMensagem = document.getElementById("tituloMensagem");
    var conteudoMensagem = document.getElementById("conteudoMensagem");
    var botaoRedirecionar = document.getElementById("botaoRedirecionar");
  
    function showResponse(titulo, conteudo, link) {
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
        
        // Define os textos personalizados para cada botão
        var tituloPersonalizado = "";
        var conteudoPersonalizado = "";
  
        if (msg === "Personagens") {
          tituloPersonalizado = "Sobre os Personagens";
          conteudoPersonalizado = "Katniss Everdeen e Peeta Mellark emergem como protagonistas marcantes. Katniss é uma jovem corajosa e hábil na caça, cuja determinação é intensificada quando ela se voluntaria para os brutais Jogos Vorazes no lugar de sua irmã. Peeta, por sua vez, revela uma mistura de força e sensibilidade enquanto enfrenta os desafios da arena mortal. Com a orientação enigmática de Haymitch Abernathy, a amizade leal de Gale Hawthorne e uma variedade de competidores nos Jogos";
        } else if (msg === "Enredo") {
          tituloPersonalizado = "O Enredo da História";
          conteudoPersonalizado = "Em um mundo distópico, o poderoso Capitólio controla implacavelmente doze distritos subjugados. Para lembrá-los de sua submissão, um evento anual conhecido como os 'Jogos Vorazes' é realizado. Neles, jovens são selecionados para lutar até a morte em uma arena, enquanto os distritos assistem impotentes. Katniss Everdeen, uma destemida jovem do Distrito 12, se voluntaria para os jogos em lugar de sua irmã. A saga épica que se desenrola explora sua luta pela sobrevivência e sua jornada para desafiar o regime opressor do Capitólio.";
        } else if (msg === "Opinião") {
          tituloPersonalizado = "Opiniões dos Leitores";
          conteudoPersonalizado = "Jogos Vorazes é uma obra literária que cativa os leitores desde o início. O enredo apresenta um mundo distópico onde a sociedade está dividida em distritos controlados pelo opressivo Capitólio. A protagonista, Katniss Everdeen, emerge como uma personagem marcante, uma jovem valente e engenhosa que luta pela sobrevivência de sua família em um ambiente de extrema adversidade.";
        }
        
        showResponse(tituloPersonalizado, conteudoPersonalizado, link);
      });
    });
  });
  