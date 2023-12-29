
function randWord(){
    let num = Math.ceil(Math.random()*5)
    let word = ""

    if (num === 1){
        word = "animation"
    } else if (num === 2){
        word = "culture"
    } else if (num === 3){
        word = "language"
    } else if (num === 4){
        word = "coding"
    } else if (num === 5){
        word = "fantasy"
    } 

    return word
}

function censorWord(str){
    let censorStr = ""

    for (let i = 0; i < str.length; i++){
        if (
            str[i] === "r" || 
            str[i] === "s" || 
            str[i] === "t" || 
            str[i] === "l" || 
            str[i] === "n" || 
            str[i] === "e"){
                censorStr += str[i]
            } else {
                censorStr += "♡"
            }
    }
    return censorStr
}

function guessWord(word, censored){
    let count = 0
    let knots = ""
    let guess = ""
    let previousGuess = ""

    while (count < 3){
        
        if (censored !== word){
            let letter = prompt(`I'm thinking of a word. Would you like to guess a letter?  

            ${censored} 

            ${knots}
            
            ${previousGuess}`)

            if (!letter){
                break
            } else if (word.includes(letter)){
                for (i=0; i < word.length; i++)
                if (word[i] === letter){
                    guess += word[i]
                } else {
                    guess += censored[i]
                }
                censored = guess
            } else {
                if (previousGuess.includes(letter)){
                alert("You've already guessed this letter.")
                
                } else {
                    previousGuess += ` ${letter},`
                    count += 1
                    knots += "🪢"
                }
            }
            guess = ""
        } else {
            alert("You Won!")
            break
        } 
        
        if (count === 3){
            alert("You Lost!")
        } 
    }
}

word = randWord()
censored = censorWord(word)
guessWord(word, censored)