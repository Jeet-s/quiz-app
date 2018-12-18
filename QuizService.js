(function(){
    angular.module("QuizApp")
        .factory("quizService", quizFactory);

        function quizFactory(){
            var quizObj = {
                quizActive:false,
                changeState:changeState
            }
            function changeState(state){
                quizObj.quizActive=state;
            }
            return quizObj;
        }
         
})();