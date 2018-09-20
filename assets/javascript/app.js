$(document).ready(function() {
    var startButton = $("<p>Start!</p>").appendTo("#anchor")
    
    startButton.addClass("start")

    var restart = function() {
        startButton.appendTo("#anchor")
    }
    
    var time = 30

    var timer

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
