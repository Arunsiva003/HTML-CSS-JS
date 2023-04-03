title="BASIC CLOCK";
document.querySelector('title').textContent=title;

const secHand =document.querySelector('.secHand');
const minHand=document.querySelector('.minHand');
const hourHand=document.querySelector('.hourHand');

function setdate(){
    const now=new Date();
    const sec = now.getSeconds();
    const secdegree = ((sec/60)*360)+90;
    secHand.style.transform=`rotate(${secdegree}deg)`;
    
    const min=now.getMinutes();
    const mindegree=((min/60)*360)+((sec/60)*6)+90;
    minHand.style.transform=`rotate(${mindegree}deg`;

    const hour=now.getHours();
    const hourdegree=((hour/12)*360)+((min/60)*30)+90;
    hourHand.style.transform=`rotate(${hourdegree}deg`;
}

setInterval(setdate,1000);
setdate();

