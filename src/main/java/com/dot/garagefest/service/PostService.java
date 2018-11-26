package com.dot.garagefest.service;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dot.garagefest.bean.BlogPost;
import com.dot.garagefest.dao.PostDao;

@Service
public class PostService
{

    @Autowired
    private PostDao postDao;

    public List<BlogPost> retrieveBlogPost(String userName) {
    	
    	String query = "select * from blogpost where user_name like '"+userName+"'";
    	return postDao.retrieveBlogPost(query);
		
	}
    
    public List<BlogPost> retrieveOtherBlogPost(String userName) {
    	
    	String query = "select * from blogpost where user_name not like '"+userName+"'";
    	return postDao.retrieveBlogPost(query);
		
	}

    public void insertBlogPost(BlogPost blogPost)
    {
        String insertSql = generateInsertCommand(blogPost);
        postDao.insertBlogPostIntoDb(insertSql);

        writeToDataFile(insertSql);

    }

    private void writeToDataFile(String insertSql)
    {
        FileWriter fileWriter;
        PrintWriter printWriter;
        try {
            fileWriter = new FileWriter("src/main/resources/data.sql", /* append */ true);
            printWriter = new PrintWriter(fileWriter);
            printWriter.append("\n\n");
            printWriter.append(insertSql);
            fileWriter.close();
            printWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String generateInsertCommand(BlogPost blogPost)
    {
        StringBuilder insertSql = new StringBuilder("insert into blogpost (user_name,blog_title,blog_text,created_date) ");
        insertSql.append("values(");
        insertSql.append("'" + blogPost.getUserName() + "',");
        insertSql.append("'" + blogPost.getBlogTitle() + "',");
        insertSql.append("'" + blogPost.getBlogContent() + "',");
        insertSql.append("'" + blogPost.getCreatedDate() + "');");

        return insertSql.toString();

    }

	

}
