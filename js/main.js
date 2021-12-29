let silderContener = Array.from(document.querySelectorAll(".silder-contener img"));

let silderlength = silderContener.length;

let imgCount = 0 ;

let rightButton = document.querySelector(".next");
let leftButton = document.querySelector(".back");

rightButton.onclick = function (){
    if(imgCount == silderlength){
        return false;
    }else{
        let next = silderContener[imgCount ++];
        next.classList.add("active");
    }
    
};
leftButton.onclick = function (){
    if(imgCount == 0){
        return false;
    }else{
        let next = silderContener[imgCount --];
        if (imgCount >= 0 ){
            next.classList.remove("active");
        }
        
    }
};