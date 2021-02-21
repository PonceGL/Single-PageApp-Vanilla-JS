##Single Page App JavaScript Vanilla <img align="center" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

Con esta aplicación, lo que buscaba era, poner en práctica el renderizado de elementos en el DOM, el consumo de APIs, y asu vez, mostrar la información de esa API en el documento, también el manejo de rutas con JavaScript puro, sin utilizar ningún tipo de librerías y o frameworks.

Utilice la API TMDB (he Movie Database), la cual agradezco que me permitieran su uso. Pero eso implicó algunas limitaciones que, en un momento comentaré.

---

El objetivo se cumplió, conseguí lo que buscaba originalmente, con este proyecto.
En cuestión de logia pude realizar lo propuesto originalmente.

Dentro del body solamente he puesto tres elementos

```html
<body>
  <header id="Header" class="Header"></header>
  <main id="Main" class="Main"></main>
  <footer id="Footer" class="Footer"></footer>
</body>
```

Dentro de ellos se renderiza el contenido, el más interesante es main, es el que más cambios tiene según la navegación del usuario.

```javascript
window.location.hash;
```

El archivo de rutas realmente es algo muy sencillo, dependiendo que muestre será lo que muestre como contenido principal.

```javascript
const routes = {
  '/': Home,
  '/movie/': DetailsMovie,
  '/tvshow': DetailsTv,
  '/genre/': Genre,
  '/watch/': User,
  '/login/': Login,
  '/join/': Join,
  '/swipe/': Swipe,
};
```

Este proyecto aunque está construido con JavaScript vanilla, estoy utilizando Babel, webpack con loader y presets, prettier, eslint. La configuración puesta en el archivo webpack.config.js es personalizada, escribiendo las reglas y plugins.

<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png" />
<img align="left" alt="babel" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/babel/babel.png" />
<img align="left" alt="eslint" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png" />
<img align="left" alt="npm" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" />
<img align="left" alt="css" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<br/>

---

El proyecto escaló con la implementación de firebase. <img align="center" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />

Añadí un login con email.
Si existe un usuario logueado no muestra los botones de registro y log in.
Muestra el nombre que solicite en el formulario de registro, y el botón de log aut.
Estoy haciendo uso de Firestore, donde almaceno los datos de usuario, nombre, correo y url de una fotografía, y también las películas que el usuario agregue a su watch list.

La intención de guardar esto en una base de datos es que el usuario pueda ver su watch list desde cualquier dispositivo del cual se conecte, en lugar de limitarlo con local storage.

---

######Entonces ¿por qué no se terminó este proyecto, si ya funcionaba casi totalmente?
La razón es la API.
La documentación no es muy buena, no tienen una opción de "todas" la películas, en su lugar solo tienen "populares", y solo ofrecen 20 elementos, con detalles "básicos", si quiero mostrar más detalles de la película, tengo que hacer otra petición.
Si quiero mostrar las series, es otra petición, los detalles de la series, otra petición.
Las imágenes del póster, están en poster path y poster background, y en algunas el primero está como null y la imagen está en la segunda opción, y en otras películas es al revés. El nombre en la primera petición se llama "name", en la petición de los detalles se llama original name, no hay consistencia completa.

Dado que hay que escribir mas logica, para solventar la inconsistencia, hay que hacer una petición por cada dato que quiera mostrar (solo en la pagina principal, hay tres peticiones), solo ofrece 20 elementos (20 películas y 20 series), y los "detalles" de cada película son pocos.

Tanta petición, y código extra afecta el performance, y la poca información que ofrece limita incluso el diseño en la UI que se pueda ofrecer.

Por esas razones decidí no continuar con el consumo de esta API, aunque el CSS y la lógica queda inconclusa, no..., me molesta porque, como dije antes, el objetivo se cumplió.

---

El proyecto no termina, será completado con todas las funciones planeadas, y mejorando la UI, pondre por aqui el enlace.

Aquí puedes ver como quedo este proyecto => [Movies For All](https://movies-for-all-1b4ea.web.app/)

Gracias por leer hasta acá.
Mandame un tweet...

####[@poncegl](https://twitter.com/poncegl)
