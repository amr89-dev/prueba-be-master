# Política de Nomenclatura para el Equipo de Desarrollo

## Bases de Datos

- Los nombres de las tablas deben ser plurales y en minúsculas (ej. usuarios, productos).
- Los nombres de las columnas deben ser en minúsculas y usar guiones bajos para separar palabras (ej. nombre_usuario, fecha_creacion).
- Las claves primarias deben ser nombradas id.
- Las claves foráneas deben seguir el formato nombreTabla_id (ej. usuario_id).
- Los nombres de las tablas y columnas deben ser descriptivos y reflejar el propósito de la tabla o columna.

## Variables

- Deben ser en camelCase y comenzar con una letra minúscula (ej. miVariable).
- Deben ser descriptivas y reflejar el propósito de la variable (ej. contador, nombreUsuario).
- No deben ser abreviaciones (ej. usr, cnt).
- No deben ser nombres genéricos (ej. data, info).

## Funciones

- Deben ser en camelCase y comenzar con una letra minúscula (ej. miFuncion()).
- Deben ser verbos que describan la acción que realiza la función (ej. calcularSuma(), crearUsuario()).
- No deben ser abreviaciones (ej. calcSuma(), crearUsr()).

## Clases

- Deben ser en PascalCase y comenzar con una letra mayúscula (ej. MiClase).
- Deben ser sustantivos que describan lo que representa la clase (ej. Usuario, Producto).

## Git

- Los nombres de las ramas deben ser en minúsculas y usar guiones para separar palabras (ej. feature/nueva-funcionalidad, bugfix/corregir-error).
- Los mensajes de commit deben ser claros y descriptivos, comenzando con un verbo en infinitivo que describa la acción realizada (ej. Añadir nueva funcionalidad, Corregir error en la función calcularSuma).
- Un Pull Request debe contener un título descriptivo y un cuerpo que explique los cambios realizados.
- Usar etiquetas para clasificar los Pull Requests (ej. bug, feature, documentation, refactor, etc.).

Esta política de nomenclatura tiene como objetivo mantener la coherencia y la legibilidad en todo el código del proyecto. Todos los miembros del equipo deben adherirse a estas convenciones para asegurar que el código sea fácil de leer y entender.
