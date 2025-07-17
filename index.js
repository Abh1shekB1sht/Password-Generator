const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let rand;
const getRandNum = () => {
  rand = Math.floor(Math.random() * characters.length);
}

let generateBtn = document.querySelector('.generate-btn');
let firstPass = document.querySelector('#first-password');
let secondPass = document.querySelector('#second-password');
let passLength = document.querySelector('#password-length');
let copyStat1 = document.querySelector('.status-1');
let copyStat2 = document.querySelector('.status-2');

generateBtn.addEventListener('click', () => {
  copyStat1.textContent = "";
  copyStat2.textContent = "";
  console.log('clicked');
  let firstPassword = "", secondPassword = "";
  for (let i = 0; i < passLength.value; i++) {
    getRandNum();
    firstPassword += characters[rand];
  }
  for (let i = 0; i < passLength.value; i++) {
    getRandNum();
    secondPassword += characters[rand];
  }
  firstPass.innerText = firstPassword;
  secondPass.innerText = secondPassword;
})

firstPass.addEventListener('click', () => {
  const text = firstPass.innerText;
  navigator.clipboard.writeText(text)
  .then(() => {
    copyStat1.textContent = "Copied!";
    copyStat2.textContent = "";
  })  
})

secondPass.addEventListener('click', () => {
  const text = secondPass.innerText;
  navigator.clipboard.writeText(text)
  .then(() => {
    copyStat2.textContent = "Copied!";
    copyStat1.textContent = "";
  })  
})