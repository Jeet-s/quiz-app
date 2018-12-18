(function(){
    angular.module("QuizApp")
        .factory("dataService", dataFactory);

        function dataFactory(){
            var dataObj = {
                langData:langData,
                questionsData:questionsData
            }
           
            return dataObj;
        }
         

        var langData = [
            {
                name:"java",
                desc:"General purpose programming language"
            },
            {
                name:"AngularJS",
                desc:"very popular javaScript framework"
            },
            {
                name:"javaScript",
                desc:"language used to make website interactive"
            },
            {
                name:"html",
                desc:"hyper text markup language used to create pages"
            },
            {
                name:"css",
                desc:"used to give styles to th website"
            },
            {
                name:"bootstrap",
                desc:"css framework used for making website responsive"
            }
        ]

        var questionsData = [
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            },
            {
                text:"Which is the best programming language?",
                possibilities:[
                    {
                        answer:"Java"
                    },
                    {
                        answer:"javaScript"
                    },
                    {
                        answer:"AngularJs"
                    },
                    {
                        answer:"HTML"
                    }
                ],
                selected:null,
                correcr:null,
                flag:0
            }
            
        ]
})();