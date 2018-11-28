$( document ).ready(function() {		
          
    $("#login").click(function(){
    	
    	var username=$("#username").val();
    	var password=$("#password").val();
    	
      
    	if(username==='Test1'){
    		if(password==='test'){    			
    			document.location.href = "http://localhost:8080/garagefest/home.html";
    		}else{
    			alert("Invalid password");
    			document.location.href = "http://localhost:8080/garagefest";
    		}
    	}else{
    		alert("Invalid User");
			document.location.href = "http://localhost:8080/garagefest";
    	}
    
    });
});