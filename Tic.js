const tictac=document.querySelector(".tictac")
 const boxes=document.querySelectorAll(".box")
let current="X"
let head=document.getElementById("head")

let winning=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
]
function start(e){
       
      if(e.target.textContent=='')
         {
          e.target.textContent=current;
          winners();
          (current=="X")?current="O":current="X"
         } 


}


tictac.addEventListener("click",start)
function winners()
{
   winning.forEach((items)=>{
           let index0=items[0];
           let index1=items[1];
           let index2=items[2];

    let val0=boxes[index0].textContent;
    let val1=boxes[index1].textContent;
    let val2=boxes[index2].textContent;

     if(val0!=""&&val1!=""&&val2!="")
     {
       if(val0===val1&&val0===val2)
       {
        
         head.innerText=`WINNER IS  ${val0}`
         tictac.removeEventListener("click",start)
       }

     }

   })
}
const reset=document.getElementById("reset")
reset.addEventListener("click",(e)=>{
     for(let i=0;i<9;i++)
     {
      boxes[i].innerText=""
     }
       head.innerText="TIC TAC TOE GAME"
       tictac.addEventListener("click",start)
       current="X"
})
