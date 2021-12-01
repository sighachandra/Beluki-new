 let cookingtable = document.getElementById("CookingItemDisplay");
 cookingtable.addEventListener("mouseover", function() {
    if(window.cookingTimeout) {
        clearTimeout(window.cookingTimeout);
     }
     // highlight the mouseover target
     document.getElementById("cooking").style.display = "block";
 });


 cookingtable.addEventListener("mouseleave", function() {
     // highlight the mouseover target
      window.cookingTimeout = setTimeout(function(){
        document.getElementById("cooking").style.display = "none";
     },100);
 });



 document.getElementById("cooking").addEventListener("mouseover", function() {
     if(window.cookingTimeout) {
        clearTimeout(window.cookingTimeout);
     }
     // highlight the mouseover target
     document.getElementById("cooking").style.display = "block";
 });

document.getElementById("cooking").addEventListener("mouseleave", function() {
     // highlight the mouseover target
    window.cookingTimeout = setTimeout(function(){
        document.getElementById("cooking").style.display = "none";
     },100);
 });




 let furnituretable = document.getElementById("FurnitureItemDisplay");
 furnituretable.addEventListener("mouseover", function() {
    if(window.furniureTimeout){
        clearTimeout(window.furniureTimeout);
    }
     // highlight the mouseover target
     document.getElementById("furniture").style.display = "block";
 });


 
 document.getElementById("furniture").addEventListener("mouseover", function() {
     if(window.furniureTimeout) {
        clearTimeout(window.furniureTimeout);
     }
     // highlight the mouseover target
     document.getElementById("furniture").style.display = "block";
 });


 furnituretable.addEventListener("mouseleave", function() {
     // highlight the mouseover target
     window.furniureTimeout = setTimeout(function(){
         document.getElementById("furniture").style.display = "none";
       },100);
    
 });

 document.getElementById("furniture").addEventListener("mouseleave", function() {
     window.furniureTimeout = setTimeout(function(){
         document.getElementById("furniture").style.display = "none";
       },100);
 });



let accessoriestable = document.getElementById("AccessoriesItemDisplay");
 accessoriestable.addEventListener("mouseover", function() {
    if(window.accessoriesTimeout){
        clearTimeout(window.accessoriesTimeout);
    }
     // highlight the mouseover target
     document.getElementById("Accessories").style.display = "block";
 });
 accessoriestable.addEventListener("mouseleave", function() {
     // highlight the mouseover target
    window.accessoriesTimeout = setTimeout(function(){
        document.getElementById("Accessories").style.display = "none";
    },100);
 });

document.getElementById("Accessories").addEventListener("mouseover", function() {
    if(window.accessoriesTimeout){
        clearTimeout(window.accessoriesTimeout);
    }
    document.getElementById("Accessories").style.display = "block";
});
document.getElementById("Accessories").addEventListener("mouseleave", function() {
    window.accessoriesTimeout = setTimeout(function(){
        document.getElementById("Accessories").style.display = "none";
    },100);
});


// let fashiontable = document.getElementById("FashionItemDisplay");
// fashiontable.addEventListener("mouseover", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Fashion").style.display = "block";
// });
// fashiontable.addEventListener("mouseleave", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Fashion").style.display = "none";
// });

// let clockstable = document.getElementById("ClocksItemDisplay");
// clockstable.addEventListener("mouseover", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Clock").style.display = "block";
// });
// clockstable.addEventListener("mouseleave", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Clock").style.display = "none";
// });

// let lightingtable = document.getElementById("LightingItemDisplay");
// lightingtable.addEventListener("mouseover", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Lighting").style.display = "block";
// });
// lightingtable.addEventListener("mouseleave", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Lighting").style.display = "none";
// });

// let toystable = document.getElementById("ToysItemDisplay");
// toystable.addEventListener("mouseover", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Toys").style.display = "block";
// });
// toystable.addEventListener("mouseleave", function() {
//     console.log("event taking check")
//     // highlight the mouseover target
//     document.getElementById("Toys").style.display = "none";
// });

let shopicon = document.getElementById("ShopIcon");
shopicon.addEventListener("mouseover", function() {
    console.log("event taking check")
    // highlight the mouseover target
    document.getElementById("ShopMenu").style.display = "block";
});
shopicon.addEventListener("mouseleave", function() {
    console.log("event taking check")
    // highlight the mouseover target
    document.getElementById("ShopMenu").style.display = "none";
});
let menuList = document.getElementById("menulist");

function listingItemsmenu(){
    menuList.style.display = "block";

}
let categoryList = document.getElementById("categorylist");
function listingItemCategory(){
   categoryList.style.display = "block"; 
}