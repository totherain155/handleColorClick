const title = document.getElementById("title");

const CLICKED_CLASS = "clicked";


function handleClickColor(){
 const hasClass =  title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
}


title.addEventListener("click", handleClickColor);