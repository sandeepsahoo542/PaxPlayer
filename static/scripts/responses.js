function getBotResponse(input) {
	//rock paper scissors game

	var original = input;           //storing original input just in case
	input = input.toLowerCase();    //allows input to be a bit relaxed; case insensitive input

	if (input == "rock") {
		return "paper";
	} else if (input == "paper") {
		return "scissors";
	} else if (input == "scissors") {
		return "rock";
	}

    //Since input is in lowercase, all comparisions with input are done in lowercase
	// Simple responses
	if (input == "hello") {
		return "Hello there! How can I help you? 😃  ";
	} else if (input == "hey") {
		return "Hey there! How can I help you? 😀 ";
	} else if (input == "hi") {
		return "Hi there! How can I help you? 😀 ";
	} else if (input == "can we talk") {
		return "Yeah Sure!";
	} else if (input == "great") {
		return "Anyways! What is your Name?";
	} else if (input == "john dsouza") {
		return "How was your day John? 😃";
	} else if (input == "okay") {
		return "Would you like to listen to some Mindfreshning Music? 😎";
	} else if (input == "sure") {
		return "Click on 1 for meditation music \n 2 for anxiety clearing music \n 3 for sleepy music \n and 4 for music during a walk";
	} else if (input == "great collection") {
		return "Thanks! What are your hobbies John?";
	} else if (input == "cycling") {
		return "Wow! That's really cool.😃";
	} else if (input == "thanks") {
		return "Do you like to watch Movies or Series";
	} else if (input == "yes I do ") {
		return "What is your favourite movie?";
	} else if (input == "interstaller") {
		return "That's really a cool Sci-fiction Movie.";
	} else if (input == "exactly") {
		return "What profession do you pursuing these days?";
	} else if (
		input == "well, I am a Student pursuing Bachlor of technology."
	) {
		return "How often do you miss your classroom study in this pandemic?";
	} else if (input == "i really missed it so much") {
		return "I Understand";
	} else if (
		input ==
		"well, It was nice talking to you and I must appreciate your Song collection. It makes me feel happy."
	) {
		return "Thank you so much for your valuable appreciation. The real Moto of this Webiste is to make people happy and pumped-up during this Pandemic and We are trying to do so.";
	} else if (input == "great!") {
		return "Looking forward to have more chit-chat with you. Have a Good Day!";
	} else if (input == "bye") {
		return "Bye-Bye 😃";
	} else {
		return "Try asking something else!";
	}
}
