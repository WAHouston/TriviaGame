$(document).ready(function() {
    var startButton = $("<p>Start!</p>").appendTo("#anchor")
    
    startButton.addClass("start")

    var restart = function() {
        startButton.appendTo("#anchor")
    }
    
    var time = 30

    var timer

    var questions = [
        {
            question: "What year was Mickey Mouse created?",
            choices: ["1920", "1924", "1928", "1932"],
            answer: 2
        },
        {
            question: "What was the first feature length animated film?",
            choices: ["Bambi", "Snow White and the Seven Dwarfs", "Dumbo", "Gertie the Dinosaur"],
            answer: 1
        },
        {
            question: "Which movie won the first Oscar for Best Animated Feature?",
            choices: ["Shrek", "Snow White and the Seven Dwarfs", "Spirited Away", "101 Dalmations"],
            answer: 0
        },
        {
            question: "Which cartoon character was the first to appear on a postage stamp?",
            choices: ["Mickey Mouse", "Gertie the Dinosaur", "Woody the Woodpecker", "Bugs Bunny"],
            answer: 3
        },
        {
            question: "Which cartoon character was the first to have a statue erected in their honor?",
            choices: ["Popeye the Sailor", "Mickey Mouse", "Bugs Bunny", "Gertie the Dinosaur"],
            answer: 0
        }
    ]

    var countdown = function() {
        time--
        $(".timer").text("Time Remaining: " + time)
        if (time === 0){
            stop()
        }
    }

    var stop = function() {
        clearInterval(timer)
    }

    var page1 = function() {    
        timer = setInterval(countdown, 1000)
        var disTimer = $("<p>Time Remaining: 30</p>").appendTo("#anchor")
        disTimer.addClass("timer")
        
    }






















    startButton.click(function(){
        startButton.detach()
        page1()
    })
})
