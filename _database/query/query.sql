create database db_acai;

use db_acai;

create table usuario (id int not null auto_increment, nome varchar(45), nick varchar(45), senha varchar(45), primary key(id));

insert into usuario (nome, nick, senha) values ('Administrador', 'Admin', 'Admin@1');

insert into usuario (nome, nick, senha) values ('Usuário', 'User', 'User@1');

select * from usuario;