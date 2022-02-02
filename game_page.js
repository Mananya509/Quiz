player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + "player1_name";
document.getElementById("player_answer").innerHTML = "Answer Turn - " + "player2_name";

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowercase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = math.floor(word.length/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(chArat2);

    length_minus_1 = word.length - 1;
    chArat3 = word.charAt(word_minus_length);
    console.log(chArat3);

    remove.charAt1 = word.replace(charAt1, "_");
    remove.charAt2 = remove_chArat1.replace(charAt2, "_");
    remove.chArat3 = remove_chArat2.replace(chArat3, "_");
    console.log(remove_chArat3);

    question_word = "<h4 id='word_display'> Q."+remove_chArat3+"</h4>";
    input_box = "<br>Answer : inpu_type='text' id='input_check_box'>";
    ckeck_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowercase();
    console.log("answer in lower case - " + answer);
    if(answer == word)
    {
        if(answer_turn == "player1")

        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
         document.getElementById("player2_score").innerHTML = player2_score;
    
         
        }
    }

        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question_turn - " + player2_name;
        }

        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question_turn - " + player1_name;
        }

        if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "answer_turn - " + player2_name;
        }

        else
        {
            question_turn = "player1"
            document.getElementById("player_answer").innerHTML = "answer_turn - " + player1_name;
        }
        document.getElementById("output").innerHTML = "";
    }
