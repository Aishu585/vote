
function validate(){
   let age=document.getElementById("input").value
   // console.log(input)
   let name=document.getElementById("result")
   // let result=document
   if(age>=18){
      // console.log("age")
      name.innerHTML="valid✔️"
   }
   else{
      name.innerHTML="invalid❌"
   }
}
