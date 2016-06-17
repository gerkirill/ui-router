(function(){
    angular
        .module('uiRouterExample', ['ui.router'])
        .config(function($stateProvider) {
          $stateProvider
            .state('index', {
              url: "",
              views: {
                "sidebar": { templateUrl: "sidebar.html" },
                "content": { templateUrl: "content.html" }
              }
            })
        });
})();
