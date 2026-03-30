let offers=document.querySelectorAll(".items .item");
let offerscon = document.querySelector(".items")
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let index=0;

console.log(offers);
console.log(next);
console.log(prev);

let arry = []

for(let i = 0 ; i < offers.length ; i++){
    arry.push(offers[i]);
}

console.log(arry);


function slide(no){
    let total=arry.length;
    index=(index+no+total)%total;
offerscon.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick=()=>slide(1);
prev.onclick=()=>slide(-1);

//auto slides every 5 seconds
// setInterval(()=>slide(1),5000);
//setInterval -> هيا دالة بتخلي كود معين يتنفذ كل فترة زمنية :بتكرر الكود كل وقت ثابت 
//اما setTimeout بتنفذ مرة واحدة بعد وقت محدد 
