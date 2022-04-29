create database notesite;
use notesite;

create table usuario(
	id int primary key auto_increment,
	nombre varchar(20)not null,
    apellido varchar(20)not null,
    correo varchar(100)not null,
    contraseña varchar(100)not null,
    estudios varchar(100)not null  
);

create table asignatura(
	nombre varchar(100) not null primary key,
    ano int(4) not null
);

create table apuntes(
	nombre_a varchar(100)not null,
    ubicacion varchar(250)not null,
    nombre_tema varchar(250)not null primary key,
    nombre varchar(20)not null,
    id_usuario int not null,
    foreign key(id_usuario) references usuario(id)
);