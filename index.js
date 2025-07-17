const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const Symbols= ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let password1= ""
let password2= ""
let PASS1=document.getElementById("Pass-1")
let PASS2=document.getElementById("Pass-2")
let Passshort=false
let Sym=false
let Num=false
let CreatedPass=[]

function shortPASS(){
    Passshort=!Passshort;
    console.log("The new value is: ", Passshort);
}

function Symb(){
    Sym=!Sym;
    console.log("The new value is: ", Sym);
    
}

function Numb(){
    Num=!Num;
    console.log("The new value is: ", Num);
}

function Generator(){
    return Math.floor(Math.random()*CreatedPass.length)
}


function PassGenerator(){
PASS1.textContent=""
password1=""
CreatedPass=[]

if (Num===true && Sym===true)
{
    for (let i=0; i<characters.length; i++){
    CreatedPass.push(characters[i])} 
}
    else if (Num===true)
{
    for (let i=0; i<characters.length; i++){
    CreatedPass.push(characters[i])}

    for (let i=0; i<Symbols.length; i++){
    CreatedPass.push(Symbols[i])}
}
    else if(Sym===true)
{
    for (let i=0; i<characters.length; i++){
    CreatedPass.push(characters[i])}
    for (let i=0; i<Numbers.length; i++){
    CreatedPass.push(Numbers[i])}
}
    
    else 
{
    for (let i=0; i<characters.length; i++){
    CreatedPass.push(characters[i])}

    for (let i=0; i<Symbols.length; i++){
    CreatedPass.push(Symbols[i])}
    
    for (let i=0; i<Numbers.length; i++){
    CreatedPass.push(Numbers[i])}   
}

    if (Passshort===false){
        for (i=0; i<16; i++){
        let randomCharacter=CreatedPass[Generator()]
        PASS1.textContent+=randomCharacter
        password1+=randomCharacter}}
    else if (Passshort===true){
        for (i=0; i<9; i++){
        let randomCharacter=characters[Generator()]
        PASS1.textContent+=randomCharacter
        password1+=randomCharacter}}

PASS2.textContent=""
password2=""
    if (Passshort===false){
        for (i=0; i<16; i++){
        let randomCharacter=CreatedPass[Generator()]
        PASS2.textContent+=randomCharacter
        password2+=randomCharacter}}
    else if (Passshort===true){
        for (i=0; i<9; i++){
        let randomCharacter=characters[Generator()]
        PASS2.textContent+=randomCharacter
        password2+=randomCharacter}}
}

function copyPassword(){
    navigator.clipboard.writeText(PASS1.textContent)
    alert("Copied to Clipboard")
}

