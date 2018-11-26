package com.dot.garagefest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dot.garagefest.bean.BlogPost;
import com.dot.garagefest.service.PostService;

@RestController
public class GaragefestController {

    @Autowired
    private PostService postService;
    
    
	
    @PostMapping("garagefest/addpost")
    public boolean processBlogPost(@RequestBody BlogPost blogPost)
    {
        blogPost.setCreatedDate(new java.sql.Date(new java.util.Date().getTime()));
        postService.insertBlogPost(blogPost);

        return true;
    }
    
    @GetMapping("garagefest/getmypost")
    public List<BlogPost> retrieveMyBlogPost()
    {        
        return postService.retrieveBlogPost("Test1");
    }
    
    @GetMapping("garagefest/getotherpost")
    public List<BlogPost> retrieveOtherBlogPost()
    {        
        return postService.retrieveOtherBlogPost("Test1");
    }
    
}
