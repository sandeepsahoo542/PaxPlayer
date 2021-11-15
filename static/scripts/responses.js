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
       //Music ides insertion//
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
        return "";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input == "i am bored") {
        return "well fuck u";
    } else if(input == "What things are you looking forward to?") {
        return "Hope you can get on it";
    } else if(input == "Is there anything you want to talk about?") {
        return "I am hear listening to you let's continue";
    } else if(input == "When was the last time you were very happy?") {
        return "See I can feel a smile on your face";
    } else if(input == "What makes you feel calm?") {
        return "Great!!";
    } else if(input == "Where is the place you feel safe?") {
        return "Hope the thought of that is making you feel safe";
    } else if(input == "What can I do to help you?") {
        return "Will be on it but you know I am a bot";
    } else if(input == "What difficulties are you facing now?") {
        return "Hope you can get on it";
    } else if(input == "What things would to like to do in future?") {
        return "Bravo!!Hope you have positive ideas";
    } else if(input == "What Are you worried about when you lie in bed and can't sleep?") {
        return "Always listen to soothing music it might help you can use me for that too";
    } else if(input == "Can you think of anything fun that we can do at home?") {
        return "Great Hope on it now and alter share your experience";
    } else if(input == " How do you feel about things changing?") {
        return "I am trying to feel it";
    } else if(input == "Do you have any worries about coronavirus?") {
        return "Go corona Go !!";
    } else if(input == "Would you like to bitch about somebody I will ensure your secret is safe here?") {
        return "huehuehue";
    } else if(input == "Since you have successfully completed a day treat your sell with a ice cream.") {
        return "Treat time it is pal";
    } else if(input == "Remember one person who inspired you the most tell me about them.") {
        return "Inspiring";
    } else if(input == "What was your favourite place that you want to visit and why?") {
        return "I assume it to be beautiful for you";
    } else if(input == "Please suggest me your favourite street food that you would like me to try.") {
        return "Yummy Yummy!!";
    } else if(input == "One secret you would like to share with me?") {
        return "Its safe here";
    } else if(input == "Which celeb is your crush?") {
        return "Awww cutie!!";
    } else if(input == "Can you tell me the cause of mental illnes?"){
            return "Well, I can give a best answer of this and I found this, It is may be because of your Gene or Family History, Stress, History of abuse. ";
    } else if(input == "Are you feeling bored or mentally ill"){
            return "Yes";
   }      else{
        return "Try asking something else!";
   }
}
