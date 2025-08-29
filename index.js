 let hearts=document.getElementsByClassName("heart")
 let nav_heart=document.querySelector("#nav-heart span") 



 
for (const heart of hearts) {
  heart.onclick = function() {
    let count = parseInt(nav_heart.innerText, 10);
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
     
      
     
     alert(`📞 Calling.... ${title}: ${number}`) 
 
     const addTime=document.createElement("span")
     const date=new Date() 
     addTime.textContent=date.toLocaleTimeString() 


     clearBtn.onclick=function(){
  
          const entries = Array.from(callHistory.children).slice(); 

          for (const entrie of entries) {
             entrie.remove()
             
          }


     }


const historyAdd = document.createElement("div");

historyAdd.className = " bg-gray-100 text-gray-800 mt-5 shadow-lg p-5"; 
addTime.className="bg-gray-100 text-gray-800 p-2"

historyAdd.textContent = ` ${title} : ${number} `;

callHistory.appendChild(historyAdd);

callHistory.appendChild(addTime)




 }



}

//  copy button work

const navCopy=document.getElementById("nav-copy") 

const copyButtons=document.querySelectorAll(".copy-btn")  

 


for (const copybutton of copyButtons) { 
     
    copybutton.addEventListener("click",function(){

   let count_copy=parseInt(navCopy.innerText,10) 

   count_copy +=1 

   navCopy.innerText=count_copy +" Copy" 

   
 const cardSerach=copybutton.closest(".card-items")
const Copynumber=cardSerach.querySelector(".data-num").innerText ;

 navigator.clipboard.writeText(Copynumber).then(function(){
    alert("This Number has been Copied " +Copynumber)
 })
 

   



    })
}

