const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1= ""
let PASS1=document.getElementById("Pass-1")
let PASS2=document.getElementById("Pass-2")

function Generator(){
    return Math.floor(Math.random()*characters.length)
}


function PassGenerator(){
    PASS1.textContent=""
    password1=""
    for (i=0; i<16; i++){
    let randomCharacter=characters[Generator()]
    PASS1.textContent+=randomCharacter
    password1+=randomCharacter
}
    console.log(password1)
    PASS2.textContent=""
    for (i=0; i<16; i++){
    PASS2.textContent+=characters[Generator()]}
}
function copyPassword(){
    navigator.clipboard.writeText(PASS1.textContent)
    alert("Copied to Clipboard")
}