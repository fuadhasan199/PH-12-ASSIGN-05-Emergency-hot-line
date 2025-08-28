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
const clearBtn=document.getElementById("clear-Btn")

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

     const title=callbutton.getAttribute('data-title')
     const number=callbutton.getAttribute('data-num') 
     
      
     
     alert(`Calling ${title}: ${number}`) 
 
     const addTime=document.createElement("span")
     const date=new Date() 
     addTime.textContent=date.toLocaleTimeString() 


     clearBtn.onclick=function(){
  
          const entries = Array.from(callHistory.children).slice(1); 

          for (const entrie of entries) {
             entrie.remove()
             
          }


     }


const historyAdd = document.createElement("div");

historyAdd.className = " bg-gray-100 text-gray-800 mt-5"; 
addTime.className="bg-gray-100 text-gray-800 "

historyAdd.textContent = ` ${title} : ${number} `;

callHistory.appendChild(historyAdd);

callHistory.appendChild(addTime)




 }



}


