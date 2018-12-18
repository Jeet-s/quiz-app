(function(){
    angular.
        module("QuizApp").controller("ListCtrl", ListController);

    ListController.$inject = ["quizService", "dataService"];

    function ListController(quizService, dataService){
        this.quizService=quizService;
        this.data=dataService.langData;
        this.search="";
        this.activateQuiz = activateQuiz;

        function activateQuiz(){
            quizService.changeState(true);
        }
    }

    

 
})();