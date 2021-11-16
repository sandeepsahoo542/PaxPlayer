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
    if (input == "Hello") {
        return "Hello there! How can I help you? 😃  ";
    } else if (input == "Hey") {
        return "Hey there! How can I help you? 😀 ";
    } else if (input == "Can we talk? I am feeling low due to this Covid-19 Pandemic.") {
        return "Sure! Yeah exactly this is very stressful situation these days.😞";
    } else if(input == "Yeah actually") {
        return "Anyways! What is your Name?";
    } else if(input == "John ") {
        return "How was your day John? 😃";
    } else if(input == "Well it was nice") {
        return "Would you like to listen to some Mindfreshning Music? 😎";
    } else if(input == "Sure") {
       //Music ideas insertion 
        return "";
    } else if(input == "Great collection") {
        return "Thanks! What are your hobbies John?";
    } else if(input == "Cycling , Cooking and many more") {
        return "Wow! That's really cool.😃";
    } else if(input == "Thank you!") {
        return "Do you like to watch Movies or Series";
    } else if(input == "Yup, I do like to watch Movies") {
        return "What is your favourite movie?";
    } else if(input == "Interstaller") {
        return "That's really a cool Sci-fiction Movie.";
    } else if(input == "Exactly") {
        return "What profession do you pursuing these days?";
    } else if(input == "Well, I am a Student pursuing Bachlor of technology.") {
        return "How often do you miss your classroom study in this pandemic?";
    } else if(input == "I really missed it so much") {
        return "I Understand";
    } else if (input == "Well, It was nice talking to you and I must appreciate your Song collection. It makes me feel happy.") {
        return "Thank you so much for your valuable appreciation. The real Moto of this Webiste is to make people happy and pumped-up during this Pandemic and We are trying to do so.";
    } else if(input == "Great!") {
        return "Looking forward to have more chit-chat with you. Have a Good Day!";
    }      else{
        return "Try asking something else!";
   }
}
