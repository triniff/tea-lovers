var sub = document.getElementById("suscribirse");
sub.addEventListener("click", suscribirse);

function suscribirse (){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address");
	var select = document.getElementById("fav-tea").value;
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("address").value = "";
	document.getElementById("fav-tea").value = "";
	//INTENTANDO UN FOREACH PARA COMPROBAR CAMPOS
	/*var arreglo = [];
	arreglo.push(name,email,address);

	arreglo.forEach(function(el){
		
    	if (el == "" || el.length == 0 ) {
    		var mensaje = alert("ERROR");
    	}
    	else{
    		mensaje = alert("Muchas gracias " + name + " por suscribirte")
    	}
    	return mensaje
    	
  	});*/
  	if(name == "" || /^[a-zA-Z]*$/.test(name) == false ||email == "" || /\S+@\S+\.\S+/.test(email) == false ||  address == "" || select == 0){
  		alert("ERROR");
  	}else{
  		alert("Muchas gracias " + name + " por suscribirte");
  	}
	
}