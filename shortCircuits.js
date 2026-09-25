// unread count can be 0, null, or indefined, or a positive integer
function unreadAlert(unreadCount){
   unreadCount && console.log("You have " + unreadCount + " messages.")
}

//unread count can be any type
function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

//unread count can be a string, number, undefined or null
function unreadAlertStringInput(unreadCount){
    unreadCount && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}

//score can be null, undefined or a number
function showScore(score){
    let correctedScore = score ?? "N/A";


    console.log("The score is:" + score)
    return correctedScore;
}

//username can be a string or undefined
function printWelcomeMessage(username){
    
    userOrPlaceholder = username || "Mustang";

  
    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}

