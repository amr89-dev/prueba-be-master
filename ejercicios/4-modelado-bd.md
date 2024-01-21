# Modelado Base de datos

![db_diagram](./diagram.png)

Codigo SQL

```sql
CREATE TABLE Usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Autores (
  id INT PRIMARY KEY,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE Colaboradores (
  id INT PRIMARY KEY,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE Videos (
  id INT PRIMARY KEY,
  titulo VARCHAR(100),
  descripcion TEXT,
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES Autores(id)
);

CREATE TABLE Comentarios (
  id INT PRIMARY KEY,
  texto TEXT,
  usuario_id INT,
  video_id INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
  FOREIGN KEY (video_id) REFERENCES Videos(id)
);

CREATE TABLE Reviews (
  id INT PRIMARY KEY,
  calificacion INT CHECK (calificacion >= 1 AND calificacion <= 5),
  usuario_id INT,
  video_id INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
  FOREIGN KEY (video_id) REFERENCES Videos(id)
);

CREATE TABLE Colaboraciones (
  colaborador_id INT,
  video_id INT,
  PRIMARY KEY (colaborador_id, video_id),
  FOREIGN KEY (colaborador_id) REFERENCES Colaboradores(id),
  FOREIGN KEY (video_id) REFERENCES Videos(id)
);
```
