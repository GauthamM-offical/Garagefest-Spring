create table blogpost
(
	post_id int not null AUTO_INCREMENT,
	user_name varchar(20) not null,
	blog_title varchar(100) not null,
	blog_text varchar(1000) not null,
	created_date timestamp,
	primary key(post_id)
);
