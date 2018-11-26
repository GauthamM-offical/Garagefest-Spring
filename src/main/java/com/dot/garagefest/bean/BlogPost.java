package com.dot.garagefest.bean;

import java.sql.Date;

public class BlogPost
{

    private int postId;
    private String userName;
    private String blogTitle;
    private String blogContent;
    private Date createdDate;

    public BlogPost()
    {
    }

    public BlogPost(int postId, String userName, String blogTitle, String blogContent, Date createdDate)
    {
        super();
        this.postId = postId;
        this.userName = userName;
        this.blogTitle = blogTitle;
        this.blogContent = blogContent;
        this.createdDate = createdDate;
    }

    public int getPostId()
    {
        return postId;
    }

    public void setPostId(int postId)
    {
        this.postId = postId;
    }

    public String getUserName()
    {
        return userName;
    }

    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getBlogTitle()
    {
        return blogTitle;
    }

    public void setBlogTitle(String blogTitle)
    {
        this.blogTitle = blogTitle;
    }

    public String getBlogContent()
    {
        return blogContent;
    }

    public void setBlogContent(String blogContent)
    {
        this.blogContent = blogContent;
    }

    public Date getCreatedDate()
    {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate)
    {
        this.createdDate = createdDate;
    }

    @Override
    public String toString()
    {
        return "BlogPost [postId=" + postId + ", userName=" + userName + ", blogTitle=" + blogTitle + ", blogContent=" + blogContent + ", createdDate=" + createdDate + "]";
    }

}
