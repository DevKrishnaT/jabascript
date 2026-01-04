
let n = 0;


document.getElementById("bt").onclick = function change_clr() {
if(n === 0){
    document.getElementById("bt").style.backgroundColor = "black";
    document.getElementById("bt").style.color = "white";
    document.getElementById("bt").classList.add("active");
    n = 1;
}
else{
document.getElementById("bt").classList.remove("active")

n=0;
}


}


