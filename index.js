 let heart=document.getElementsByClassName("heart")
 let nav_heart=document.querySelector("#nav-heart span") 



 for (let i = 0; i < heart.length; i++) {
    heart[i].onclick = function() {
      var count = parseInt(nav_heart.innerText, 10);
      count += 1;
      nav_heart.innerText = count;
    };
  } 


//   call button work 

const callButtons=document.getElementsByClassName("call-btn") 

const callHistory=document.getElementById("call-history") 

const navCoin=document.getElementById("nav-coin") 

for (const callbutton of callButtons) {
   
 callbutton.onclick=function(){
    let coins=parseInt(navCoin.textContent ,10) 

     if(coins ==0){
        alert("Not Enough Coin")
        return 
     } 

     coins -=20 
     if( coins < 0) coins=0 
     navCoin.textContent=coins 

     const title=callbutton.getAttribute("data-title")
     const number=callbutton.getAttribute("data-num") 
     
     alert(`Calling ${title}: ${number}`) 


const historyAdd = document.createElement("div");

historyAdd.className = "border-b p-2 flex flex-col";

historyAdd.textContent = ` ${title} : ${number} `;

callHistory.appendChild(historyAdd);




 }



}


