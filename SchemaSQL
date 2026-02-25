create database dbacademica;
use dbacademica;
create table programa(
	idprograma int auto_increment primary key,
	programa char(50) not null
);
create table periodo(
	idperiodo int auto_increment primary key,
	periodo char(10) not null
);
create table asignatura(
	idasignatura int auto_increment primary key,
	asignatura char(50) not null,
	creditos int not null
);
create table nota(
	nota decimal,
	idasignatura int not null,
	idperiodo int not null,
	idalumno int not null
);
create table alumno(
	idalumno int auto_increment primary key,
	apellidos char(50) not null,
	nombres char(50) not null,
	carnet char(10) not null,
	nivel int not null,
	idprograma int not null
);
