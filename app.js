(function () {
  "use strict";
  //PRECISAMOS SELECIONAR O ELEMENTO QUE A APLICAÇÃO VAI RODAR
  const div1 = document.getElementById('app1'); 
  const div2 = document.getElementById('app2'); 
  //APLICAÇÃO 1
  angular
  .module("app1", [])
  .controller("controlador1", function ($scope) {
    $scope.input = "Seu nome";
  })
  //APLICAÇÃO 2
  angular
  .module("app2", [])
  .controller("controlador2", function ($scope) {
    $scope.contador = 0;
  });
  //EXECUTA MANUALMENTE CADA APLICAÇÃO EM SEU ELEMENTO DO HTML
  //POR ISSO NÃO É COLOCADO NO NG-APP,
  //PQ NO BOOTSTRAP É PASSADO O ELEMENTO NO QUAL VAI RENDERIZAR A APLICAÇÃO
  //PRIMEIRO PARÂMETRO O ELEMENTO, E O SEGUNDO O MODULO DA APLICAÇÃO
  angular.bootstrap(div1,['app1']);
  angular.bootstrap(div2,['app2']);
})();
