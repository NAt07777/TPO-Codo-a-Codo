//Función para desplegar barra de navegación -

function myFunction() {
    let navbar = document.getElementById("myNav")
    if (navbar.className === "navbar") {
    navbar.className += " responsive";
    } else {
    navbar.className = "navbar";
    }
}

//header -

const elementoHeader = `<header>
<div class="logo1">
<img src="assets/image.png" alt="dibujo">
</div>
<div class="logo2">
<img src="assets/pngwing.com.png" alt="dibujo">
</div>
<div class="tituloDelNav">
<h1>Salta, la linda</h1>
</div>
<div class="subtituloDelNav">
<h4>Tan linda que enamora</h4>
</div>

<!--Barra de navegación-->
<nav class="navbar" id="myNav">
        <a href="index.html">Home</a>
        <a href="contacto.html">Contacto</a>
        <a href="http://turismosalta.gov.ar/." target="_blank">Más información</a>
        <a href="climaApi.html">Clima</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i></a>
</nav>
</header>`

document.getElementById("header").innerHTML = elementoHeader;

//footer -

const footer = `<footer>
<h3>Visitanos en nuestras redes sociales</h3>
<i class='bx bxl-facebook-circle  bx-sm icono' style='color:#4b4d94'  ></i>
<i class='bx bxl-instagram  bx-sm icono' style='color:#b958d6'  ></i>
<i class='bx bxl-twitter  bx-sm icono' style='color:#2fa6e2'  ></i>
</footer>`

const estilos = 
`footer {
    background-color: #f8f2f2;
    font-family: 'Courgette', cursive;
    font-size: .9em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px;
}

.icono {
    cursor: pointer;
}

.icono:hover {
    opacity: .50;
}`

document.querySelector("#footer").innerHTML = footer;
let estilo = document.createElement('style');
estilo.innerHTML = estilos;
document.head.appendChild(estilo);



