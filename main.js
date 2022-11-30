`use strict`

const clrText=document.getElementById('bg-color');
const mainBg = document.getElementById('main');
const characters ='ABCDEF0123456789';


function changeBg(){
        let result = '#';
        const charactersLength = characters.length;
        for ( let i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
    color=result;
    clrText.textContent = color;
    mainBg.style.backgroundColor = color ;
}
