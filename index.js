let password1El=document.getElementById("password1-el")
let password2El=document.getElementById("password2-el")
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let character=[]
let Character=[]
function GeneratePassword(){
    for(let i=0;i<1;i++){
        let random=Math.floor(Math.random()*characters.length)
        character+=characters[random]
        console.log(character[i])
    }
    password1El.textContent=character
    for(let i=0;i<1;i++){
        let Random=Math.floor(Math.random()*characters.length)
        Character+=characters[Random]
    }
    password2El.textContent=Character
}
function stopgenerating(){
    character=[]
    Character=[]
}