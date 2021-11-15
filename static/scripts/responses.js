function getBotResponse(input) {
    //rock paper scissors game
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there! Should we a small talk ";
    } else if (input == "yes") {
        return "Lets talk";
    } else if(input == "Yes") {
        return "Whats your name";
    } else if(input == "John ") {
        return "How was your day?";
    } else if(input == "Well it was nice") {
        return "Are you feeling low due to this ongoing pandemic or lockdown?";
    } else if(input == "Yes I am feeling little low") {
        return "Would you like to listen to some music?";
    } else if(input == "Yes") {
       //Music ideas insertion
        return "";
    } else if(input == "Great collection") {
        return "What are your hobbies?";
    } else if(input == "Cycling , Cooking and many more") {
        return "Wow thats really cool";
    } else if(input == "thank you!!") {
        return "DO you like movies or series";
    } else if(input == "Movies") {
        return "What is your favourite movie during the pandemic?";
    } else if(input == "Cars 2") {
        return "That's really a cool movie.";
    } else if(input == "Exactly") {
        return "What profession do you pursuing these days?";
    } else if(input == "Well, I am Student pursuing Bachlor of technology") {
        return "How often do you miss your classroom study in this pandemic?";
    } else if(input == "I really missed it so much") {
        return "I Understand";
    } else if (input == "goodbye") {
        return "Talk to you later!";
   }      else{
        return "Try asking something else!";
   }
}
