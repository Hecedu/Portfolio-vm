\connect portfoliodb

CREATE TABLE blogposts
(
 id serial PRIMARY KEY,
 title VARCHAR (150) NOT NULL,
 content TEXT NOT NULL
);
CREATE TABLE clientinformation
(
    id serial PRIMARY KEY,
    client_name VARCHAR (150) NOT NULL,
    ip_address VARCHAR (150) NOT NULL,
    date_added TIMESTAMP NOT NULL,
    allowed_ip_range VARCHAR (150) NOT NULL,
);
CREATE TABLE userdata
(
    id serial PRIMARY KEY,
    username VARCHAR (150) UNIQUE NOT NULL,
    email VARCHAR (150) UNIQUE NOT NULL,
    profile_picture_key VARCHAR (150) UNIQUE,
    favorite_videogame VARCHAR (150) NOT NULL,
    favorite_movie VARCHAR (150) NOT NULL,
    favorite_book VARCHAR (150) NOT NULL,
    favorite_album VARCHAR (150) NOT NULL
);
CREATE TABLE validtokens 
(
     id serial PRIMARY KEY,
     token TEXT NOT NULL
);

CREATE TABLE comments
(
    id serial PRIMARY KEY,
    comment VARCHAR(280) NOT NULL,
    date_added TIMESTAMP NOT NULL,
    poster_username VARCHAR(150) NOT NULL
);

CREATE TABLE projectposts
(
    id serial PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    content VARCHAR(600) NOT NULL,
    extra_info VARCHAR(300) NOT NULL,
    links VARCHAR(300)[] NOT NULL,
    image_url VARCHAR(300) NOT NULL
);