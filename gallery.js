 let btnClose=document.getElementById("exit");
 let nextBtn=document.getElementById("next2");
 let prevBtn=document.getElementById("prev2");
 let BoxContainer=document.getElementById("boxContainer");
 let BoxItem=document.getElementById("boxItem");
let images = document.querySelectorAll(".gallery-images img");


// convert node to array
let imagesArr=[];
for(let i=0;i<images.length;i++){
    imagesArr.push(images[i]);
}

let currentIndex = 0;

// Function to display image in popup
function showImage(index) {
BoxItem.style.backgroundImage = "url(" + imagesArr[index].src +")";
}


// When image is clicked => open popup
for (let j = 0; j < imagesArr.length; j++) {
(function (j) {
imagesArr[j].addEventListener("click", function () {
BoxContainer.style.display = "flex";
currentIndex = j;
showImage(currentIndex);
});
})(j);
}

// exit popup
btnClose.addEventListener("click", function () {
BoxContainer.style.display = "none";
});
//end exit


// next image
nextBtn.addEventListener("click", function () {
currentIndex++;
if (currentIndex === imagesArr.length) {
currentIndex = 0;
}
showImage(currentIndex);
});
// end next


// Previous image
prevBtn.addEventListener("click", function () {
currentIndex--;
if (currentIndex < 0) {
currentIndex = imagesArr.length - 1;
//-1 علشان ترجع لورا
}
showImage(currentIndex);
});
// end prev

// popup clicking outside
BoxContainer.addEventListener("click",function(event){
    if(event.target===BoxContainer){
        BoxContainer.style.display="none";
    }
})






