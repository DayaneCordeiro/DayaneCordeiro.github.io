function playMusicOperationsButtons() {
  var audio1 = new Audio();
  audio1.src = "sons/A.mp3";
  audio1.play();
  audio1.muted = false;
}

function playMusicEquals() {
  var audio1 = new Audio();
  audio1.src = "sons/B.mp3";
  audio1.play();
  audio1.muted = false;
}

function redirecionar() {
  location.replace('calculator.html');
}

$(document).ready(function() {
  $('.soma').on('click', function() {
    $('.titleOperation').text("SOMA");
    $('.signOperation').text('+');
    $('.first').val("");
    $('.second').val("");
    $('.labelResult').text("RESULTADO");
  });

  $('.subtracao').on('click', function() {
    $('.titleOperation').text("SUBTRAÇÃO");
    $('.signOperation').text('-');
    $('.first').val("");
    $('.second').val("");      
    $('.labelResult').text("RESULTADO");
  });

  $('.multiplicacao').on('click', function() {
    $('.titleOperation').text("MULTIPLICAÇÃO");
    $('.signOperation').text('x');
    $('.first').val("");
    $('.second').val("");
    $('.labelResult').text("RESULTADO");
  });

  $('.divisao').on('click', function() {
    $('.titleOperation').text("DIVISÃO");
    $('.signOperation').text('÷');
    $('.first').val("");
    $('.second').val("");
    $('.labelResult').text("RESULTADO");
  });

  $('.equals').on('click', function(e) {
    e.preventDefault();
    var num1 = parseInt($('.first').val());
    var num2 = parseInt($('.second').val());
    if ($('.titleOperation').text() == 'OPERAÇÃO') {
      $('.labelResult').text('VOCÊ NÃO ESCOLHEU A OPERAÇÃO :(');
    }
    else {
      if ($('.first').val() != "" && $('.second').val() != "") {   
        if ($('.titleOperation').text() == 'SOMA') {
          var soma = (num1 + num2);
          $('.labelResult').text(soma);
        }
        else if ($('.titleOperation').text() == 'SUBTRAÇÃO') {
          var subtracao = (num1 - num2);
          $('.labelResult').text(subtracao);
        }
        else if ($('.titleOperation').text() == 'MULTIPLICAÇÃO') {
          var multiplicacao = (num1 * num2);
          $('.labelResult').text(multiplicacao);
        }
        else if ($('.titleOperation').text() == 'DIVISÃO') {
          var divisao = (num1 / num2);
          $('.labelResult').text(divisao);
        }
      }
      else {

        $('.labelResult').text('OS NÚMEROS ESTÃO VAZIOS :( ')
      }
    }
  });
});