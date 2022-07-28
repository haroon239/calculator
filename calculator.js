var input=document.querySelector("input");
var butto=document.querySelectorAll("button");
var screen="";
for(item of butto){
    item.addEventListener('click',(e)=>{
        var outp=e.target.innerText;
        // console.log(outp);

        // input.value+=outp;


        if(outp=="x"){
               outp="*";
            screen+=outp;
            input.value=screen;

        }
         else if(outp=='='){
            // screen=outp;
            input.value=eval(screen);  
         }

         else if(outp=="C"){
            outp=" ";
            screen=outp;
            input.value=screen;
         }
         else{
            screen+=outp;
input.value=screen;
         }

    });
}