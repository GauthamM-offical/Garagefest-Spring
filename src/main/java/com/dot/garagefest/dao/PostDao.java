package com.dot.garagefest.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.dot.garagefest.bean.BlogPost;

@Repository
public class PostDao
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void insertBlogPostIntoDb(String insertSql)
    {
        jdbcTemplate.execute(insertSql);
    }

	public List<BlogPost>retrieveBlogPost(String query) {
		return jdbcTemplate.query(query, new RowMapper<BlogPost>() {
	        public BlogPost mapRow(ResultSet rs, int rowNum) throws SQLException {
	        	BlogPost bp = new BlogPost(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getDate(5));
	            return bp;
	        }
		});
	}
}
