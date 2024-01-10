

$(".item").on("click",(event)=>{
    var inputs = event.target.textContent;
    var valuer=$(".inputed").val();
    var updated;

    if (inputs === 'C') {
        $(".inputed").val('0');
    }
    else if(inputs === 'BackSpace'){
        
         updated=valuer.slice(0,-1)
    }
    else if(inputs==='='){
        try{
            updated=eval(valuer);
        }
        catch(error){
           updated= error
        }
    }

    else{
        
         updated=valuer+inputs

  
    }

   
    $(".inputed").val(updated)

})
