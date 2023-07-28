let modal=document.querySelector(".modal");
let but=document.getElementById("openBtn");
let modaltitle=document.getElementById("modalTitle");
let closeBtn=document.getElementById("closeBtn");
but.addEventListener("click",open);
closeBtn.addEventListener("click",close);
function open(){
    modal.style.display="block";
}
function close(){
    modal.style.display="none";
}
let title=prompt("Enter the title of modal: ");
modalTitle.innerHTML=title;
window.addEventListener('click', function(ref) {
    if (ref.target == modal) {
      modal.style.display = 'none';
    }
  });