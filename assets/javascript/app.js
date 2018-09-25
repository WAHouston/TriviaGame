$(document).ready(function() {

    var numCorrect = 0

    var numIncorrect = 0

    var time = 5

    var timerQ

    var counterQ = 0

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
        },
        {
            question: "How many individual hairs does Sully from Monsters Inc have?",
            choices: ["1.4 million", "5.6 million", "2.3 million", "3.8 million"],
            answer: 2
        },
        {
            question: "What is the name of the sorceror in the Sorceror's Apprentice segment of the movie Fantasia?",
            choices: ["Mortimer", "Mickey", "Yensid", "Czernobog"],
            answer: 2
        },
        {
            question: "What where the original names of Tom and Jerry?",
            choices: ["Jim and Tim", "Jasper and Jinx", "Hunter and Howard", "Bill and Ted"],
            answer: 1
        },
        {
            question: "Jim Cummings is best known as the voice of Winnie the Pooh, but he was also the voice of a villain in which show?",
            choices: ["Dexter's Lab", "Powerpuff Girls", "Darkwing Duck", "Samurai Jack"],
            answer: 1
        },
        {
            question: "Gertie the Dinosaur was created by which famous animator?",
            choices: ["Emile Cohl", "J. Stuart Blackton", "Ub Iwerks", "Winsor McCay"],
            answer: 3
        }
    ]

    var startButton = function() {
        $("<p>Start!</p>").addClass("start").appendTo("#anchor")
    }

    startButton()

    var countdown = function() {
        time--
        $(".timer").text("Time Remaining: " + time)
        if (time === 0){
            stop()
            pageA()
        }
    }

    var stop = function() {
        clearInterval(timerQ)
    }

    var pageQ = function() {
        $("#anchor").empty()   
        timerQ = setInterval(countdown, 1000)
        var disTimer = $("<p>Time Remaining: 30</p>").appendTo("#anchor")
        disTimer.addClass("timer")
        var currentQ = $("<p>" + questions[counterQ].question + "</p>").appendTo("#anchor")
        for (var i = 0; i < questions[counterQ].choices.length; i++) {
            $("<p>" + questions[counterQ].choices[i] + "</p>").addClass("choice").appendTo("#anchor")
        }

    }

    var pageA = function(response) {
        stop()
        time = 5
        $("#anchor").empty()
        var timeOut = setTimeout(pageQ, 5000)
        if (response === "correct") {
            numCorrect++
            $("<p>Correct!</p>").appendTo("#anchor")
        } else if (response === "incorrect") {
            numIncorrect++
            $("<p>Incorrect!</p>").appendTo("#anchor")
        } else {
            numIncorrect++
            $("<p>Time's Up!</p>").appendTo("#anchor")
        }
        counterQ++
        if (counterQ > 9) {
            clearTimeout(timeOut)
            pageResults()
        }
    }

    var pageResults = function() {
        $("<p>Results:</p>").appendTo("#anchor")
        $("<p>Correct:" + numCorrect + "</p>").appendTo("#anchor")
        $("<p>Incorrect:" + numIncorrect + "</p>").appendTo("#anchor")
        $("<p>Restart?</p>").addClass("start").appendTo("#anchor")
    }

    $(document).on("click", ".start", function(){
        numCorrect = 0
        numIncorrect = 0
        counterQ = 0
        time = 5
        pageQ()
    })

    $(document).on("click", ".choice", function(event){
        if ($(event.currentTarget).text() === questions[counterQ].choices[questions[counterQ].answer]){
            pageA("correct")
        } else {            
            pageA("incorrect")
        }
    })
    
})
