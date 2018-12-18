(function(){
    angular.module("QuizApp")
        .controller("quizCtrl", quizController);

        quizController.$inject = ["quizService", "dataService"];

        function quizController(quizService, dataService){
            this.quizService=quizService;
            this.dataService=dataService;
            this.activeQues=0;
            this.questionAnswered=questionAnswered;
            var numQuestionsAnswered=0;
            var quizLength=dataService.questionsData.length;
            this.selectAnswer=selectAnswer;
            this.showSubmit=false;
            this.showResult=false;
            this.onSubmit=onSubmit;

            function onSubmit(){
                console.log("Data Submitted");
                if(this.showSubmit===true){
                    this.showResult=true;
                }
            }

            function questionAnswered(){
               

                if(this.activeQues< quizLength-1){
                    this.activeQues++;
                }
                else{
                    this.activeQues=0;
                }
                
            }

            function selectAnswer(index){
                this.dataService.questionsData[this.activeQues].selected=  index;
                if(dataService.questionsData[this.activeQues].selected != null){
                    dataService.questionsData[this.activeQues].flag++;
                    if(dataService.questionsData[this.activeQues].flag<=1){
                        numQuestionsAnswered++;
                    }
                    
                    console.log(numQuestionsAnswered);
                    if(numQuestionsAnswered>=quizLength){
                        this.showSubmit=true;
                    }
                }
            }
        }
})();