create database burgers_db;

use burgers_db;

create table burgers_db.burgers
(
    id  integer auto_increment,
    burger_name varchar(255),
    devoured boolean,
    primary key(id)
)

