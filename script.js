var val=document.getElementById("display");

function operation(v){
val.value+=v;
}

function exe(){
  val.value=eval(val.value);
  }

  function cls(){
    val.value="";
  }