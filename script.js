let n1=document.querySelector("input.n1");
let n2=document.querySelector("input.n2");
let button=document.querySelector("button");
let assign=document.querySelector("select");
let code=document.querySelector("code")
button.onclick=function(){
let first=n1.value;
let second=n2.value;
let operation=assign.value; 
if(operation=="+"){
  number=Number(first)  + Number(second) ;
}else if(operation=="*"){
    number=Number(first)  * Number(second) ;
}else if(operation=="-"){
    number=Number(first)  - Number(second) ;
}else if(operation=="/"){
    number=Number(first)  / Number(second) ;
}else{
    number=Number(first)  ** Number(second) ;
}
code.innerHTML=number;
}
