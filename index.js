const title = document.getElementById("title");

const CLICKED_CLASS = "clicked"


function handleClickColor(){
  const currentClass = title.className;
  if(currentClass !== CLICKED_CLASS){
      title.className = CLICKED_CLASS
  }else{
      title.className = "";
  }
}





title.addEventListener("click", handleClickColor);