const title = document.getElementById("title");

const BASE_COLOR = 'white';
const OTHER_COLOR = 'purple';



function handleColor(){
    const currentColor = title.style.color;
    if(BASE_COLOR === currentColor){
           title.style.color = OTHER_COLOR;
    }else{
          title.style.color = BASE_COLOR;
    }

}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleColor);
}

init();