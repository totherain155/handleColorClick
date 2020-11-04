const h = document.getElementById("hh");

h.innerHTML = "Hi! From JS"; 
h.style.color = "#2c2c2c";

document.title = "hey there";
/* 우리가 배울 모든 함수들은 우리가 찾게 될 모든 객체들의 함수들을
DOM(Document OBject Model)형태로 변경 가능하다.*/

function handleResize(){
   console.log("I have been resized");
}

window.addEventListener("resize", handleResize);