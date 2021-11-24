# Crear aplicacion React con Bootstrap [Youtube](https://www.youtube.com/watch?v=XPBniyikjek)
```
npx create-react-app react-bootstrap
npm start
```


## Aplicar Bootstrap CDN

### [bootstrap](https://getbootstrap.com/)

#### jsDelivr Se agrega en el public/index.html

```
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```

## Aplicar Bootstrap npm
Instale Bootstrap en sus aplicaciones impulsadas por Node.js con el paquete npm :
```
npm install bootstrap
```

Bootstrap depende de [Popper](https://popper.js.org/) , que se especifica en la peerDependenciespropiedad. Esto significa que tendrá que asegurarse de agregarlo a su package.jsonuso npm install @popperjs/core.

```
npm i @popperjs/core
```
### Importando JavaScript
Importe JavaScript de Bootstrap agregando esta línea al punto de entrada de su aplicación (generalmente index.jso app.js):

```
import 'bootstrap';

// or get all of the named exports for further usage
import * as bootstrap from 'bootstrap';
```

### Importación de CSS compilado
Alternativamente, puede usar el CSS listo para usar de Bootstrap simplemente agregando esta línea al punto de entrada de su proyecto:

```
import 'bootstrap/dist/css/bootstrap.min.css';
```