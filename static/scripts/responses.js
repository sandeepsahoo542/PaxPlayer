function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input == "i am bored") {
        return "well fuck u";
    }
            else if(input == "Can you tell me the cause of mental illnes?"){
            return "Well, I can give a best answer of this and I found this, It is may be because of your Gene or Family History, Stress, History of abuse. ";
    } else if(input == "Are you feeling bored or mentally ill"){
            return "Yes";
}      else if (input == " ")
        return "Try asking something else!";
    }
