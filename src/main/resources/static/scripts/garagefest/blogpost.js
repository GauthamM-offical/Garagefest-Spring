$( document ).ready(function() {
	
	// SUBMIT FORM
	$("#save_draft").click(function(event){
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	var formData = {
    		userName:"Test1",
    		blogContent:$(".ql-editor").html(),
			blogTitle:$("#post-title").val()
    	}
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "garagefest/addpost",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(result) {				
				alert("Successfully Added !!");
			},
			error : function(e) {
				alert("Error");
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
 
    }
    
    function resetData(){
    	$(".ql-editor").html("");
    	$("#post-title").val("");
    }
     
    
    var str = window.location.pathname;
    var pos = str.search("components-blog-posts");
    if(pos>-1){
    	ajaxGetMyPosts();
    	ajaxGetOthersPosts();
    }
    
    function ajaxGetMyPosts(){
		$.ajax({
			type : "GET",
			url : "garagefest/getmypost",
			success: function(result){
				$.each(result, function(i, blogpost){

			        var $p_main=document.createElement("div");
			        $p_main.setAttribute("id","p_main_"+i);
			        $p_main.setAttribute("class","col-lg-3 col-md-6 col-sm-12 mb-4");
			        
			        var $p_post=document.createElement("div");
			        $p_post.setAttribute("id","p_post_"+i);
			        $p_post.setAttribute("class","card card-small card-post card-post--1");
			        
			        var $p_image=document.createElement("div");
			        $p_image.setAttribute("id","p_image_"+i);
			        $p_image.setAttribute("class","card-post__image");
			        $p_image.setAttribute("style","background-image: url('images/garagefest/default-user-imge.jpeg');");

			        var $a0 =document.createElement("a");
			        $a0.setAttribute("href","#");
			        $a0.setAttribute("class","card-post__category badge badge-pill badge-dark");
			        $a0.append(blogpost.userName);
			        $p_image.append($a0);

			        var $p_author=document.createElement("div");
			        $p_author.setAttribute("id","p_author_"+i);
			        $p_author.setAttribute("class","card-post__author d-flex");
			        
			        var $a1=document.createElement("a");
			        $a1.setAttribute("class","card-post__author-avatar card-post__author-avatar--small");
			        $a1.setAttribute("style","background-image: url('images/garagefest/blue-circle.jpg');");
			        
			        $p_author.append($a1);
			        $p_image.append($p_author);
			        
			        
			        var $p_card_body=document.createElement("div");
			        $p_card_body.setAttribute("id","p_card_body_"+i);
			        $p_card_body.setAttribute("class","card-body");
			        
			        var $h_card=document.createElement("h5");
			        $h_card.setAttribute("id","h_card_"+i);
			        $h_card.setAttribute("class","card-title");
			        
			        var $a_card=document.createElement("a");
			        $a_card.setAttribute("class","text-fiord-blue");
			        $a_card.setAttribute("href","#");
			        $a_card.innerHTML=blogpost.blogTitle;
			        
			        $h_card.append($a_card);
			        
			        var $para_card=document.createElement("p");
			        $para_card.setAttribute("class","card-text mb-3");
			        $para_card.innerHTML=blogpost.blogContent;
			        
			        var $s_card=document.createElement("span");
			        $s_card.setAttribute("class","text-muted");
			        $s_card.append(blogpost.createdDate);
			        
			        $p_card_body.append($h_card);
			        $p_card_body.append($para_card);
			        $p_card_body.append($s_card);
			        
			        $p_post.append($p_image);
			        $p_post.append($p_card_body);


			        $p_main.append($p_post);
			        
			        $("#personal_posts").append($p_main);
			    
		        });			},
			error : function(e) {
				alert("error");
			}
		});	
	} 
    
    function ajaxGetOthersPosts(){

		$.ajax({
			type : "GET",
			url : "garagefest/getotherpost",
			success: function(result){
				$.each(result, function(i, blogpost){

			        var $p_main=document.createElement("div");
			        $p_main.setAttribute("id","o_main_"+i);
			        $p_main.setAttribute("class","col-lg-6 col-sm-12 mb-4");
			        
			        var $p_post=document.createElement("div");
			        $p_post.setAttribute("id","o_post_"+i);
			        $p_post.setAttribute("class","card card-small card-post card-post--aside card-post--1");
			        
			        var $p_image=document.createElement("div");
			        $p_image.setAttribute("id","o_image_"+i);
			        $p_image.setAttribute("class","card-post__image");
			        $p_image.setAttribute("style","background-image: url('images/garagefest/default-user-imge.jpeg');");

			        var $a0 =document.createElement("a");
			        $a0.setAttribute("href","#");
			        $a0.setAttribute("class","card-post__category badge badge-pill badge-info");
			        $a0.append(blogpost.userName);
			        $p_image.append($a0);

			        var $p_author=document.createElement("div");
			        $p_author.setAttribute("id","o_author_"+i);
			        $p_author.setAttribute("class","card-post__author d-flex");
			        
			        var $a1=document.createElement("a");
			        $a1.setAttribute("class","card-post__author-avatar card-post__author-avatar--small");
			        $a1.setAttribute("style","background-image: url('images/garagefest/blue-circle.jpg');");
			        
			        $p_author.append($a1);
			        $p_image.append($p_author);
			        
			        
			        var $p_card_body=document.createElement("div");
			        $p_card_body.setAttribute("id","o_card_body_"+i);
			        $p_card_body.setAttribute("class","card-body");
			        
			        var $h_card=document.createElement("h5");
			        $h_card.setAttribute("id","oh_card_"+i);
			        $h_card.setAttribute("class","card-title");
			        
			        var $a_card=document.createElement("a");
			        $a_card.setAttribute("class","text-fiord-blue");
			        $a_card.setAttribute("href","#");
			        $a_card.innerHTML=blogpost.blogTitle;
			        
			        $h_card.append($a_card);
			        
			        var $para_card=document.createElement("p");
			        $para_card.setAttribute("class","card-text mb-3");
			        $para_card.innerHTML=blogpost.blogContent;
			        
			        var $s_card=document.createElement("span");
			        $s_card.setAttribute("class","text-muted");
			        $s_card.append(blogpost.createdDate);
			        
			        $p_card_body.append($h_card);
			        $p_card_body.append($para_card);
			        $p_card_body.append($s_card);
			        
			        $p_post.append($p_image);
			        $p_post.append($p_card_body);


			        $p_main.append($p_post);
			        
			        $("#others_posts").append($p_main);
			    
		        });			},
			error : function(e) {
				alert("error");
			}
		});		
    }
              
});