//Menu responsive
const   btnAbrirMenu=document.getElementById('openMenu'),
        btnCerrarMenu=document.getElementById('closeMenu'),
        contenedorMostrar=document.getElementById('menuBar'),
        contenedorEnlaces=document.getElementById('enlaces');

//capturar eventos click para abrir 
btnAbrirMenu.addEventListener('click', ()=>{
    //permite agregar una clase a ese contenedor, aparte de las que tiene
    contenedorMostrar.classList.add('active');
});

//capturar eventos click para cerrar 
btnCerrarMenu.addEventListener('click', ()=>{
    //permite agregar una clase a ese contenedor, aparte de las que tiene
    contenedorMostrar.classList.remove('active');
});

//cerrar menu cuando toque un enlace del contenedor enlaces
contenedorEnlaces.addEventListener('click', ()=>{
    //crear retardo antes de cerrar
    contenedorMostrar.style.transitionDelay="0.5s";
    //permite agregar una clase a ese contenedor, aparte de las que tiene
    contenedorMostrar.classList.remove('active');
});

//SLIDER DE PRODUCTOS
const   contenedorSlider= document.querySelector('.slider'),
        btnIzquierdo=document.getElementById('btn-izquierdo'),
        btnDerecho=document.getElementById('btn-derecho');

//Capturando evento click btnDerecho
btnDerecho.addEventListener('click', ()=>{
    /*scrollLeft= le indica que haga scroll de izquierda a derecha
    offsetWidth=indica el tamaño total del contenedor del slider 
    y lo va sumando al scroll*/
    contenedorSlider.scrollLeft+= contenedorSlider.offsetWidth;
})

//capturando evento click btnIzquierdo
btnIzquierdo.addEventListener('click', ()=>{
    contenedorSlider.scrollLeft-= contenedorSlider.offsetWidth;
})

//VALIDANDO FORMULARIO DE CONTACTO
const formulario= document.getElementById('formulario');

    function validarDatos(e){
        const   inputNombre= document.getElementById('nombre'),
                inputEmail= document.getElementById('email'),
                inputComentario= document.getElementById('comentarios'),
                alertSuccess= document.getElementById('alertSuccess'),
                alertError= document.getElementById('alertError');
    
    if(inputNombre.value == 0 || inputEmail.value == 0 || inputComentario.value == 0){
        e.preventDefault();
        alertError.classList.remove('hide');
        alertError.classList.add('show');
        //proceso inverso para que desaparezca la alerta
        setTimeout(() => {
            alertError.classList.remove('show');
            alertError.classList.add('hide'); 
        }, 3000);
    }else{
        e.preventDefault();
        alertSuccess.classList.remove('hide');
        alertSuccess.classList.add('show');
        //proceso inverso para que desaparezca la alerta
        setTimeout(() => {
            alertSuccess.classList.remove('show');
            alertSuccess.classList.add('hide'); 
        }, 3000);
        inputNombre.value= ""
        inputEmail.value= "";
        inputComentario.value= "";
    }
}
//Evento del formulario
formulario.addEventListener('submit',validarDatos);

//DANDO INTERACCION AL BOTON DE IR ARRIBA
const btnTop= document.getElementById('btn-top');

//DETECTANDO CUANDO SE HACE SCROLL EN LA PAGINA(en el elemento window)
window.addEventListener('scroll', ()=>{
    /*
    -Se obtiene el elemento padre(HTML) con documentElement
    -ScrollTop nos el valor del scroll que hay desde el top hasta el punto
    donde se hizo scroll
    -offsetHeight= mide el tamaño total de ese elemento(en este caso es total
    de mi pagina web, porque se esta tratando el elemento padre)
    -clientHeight: mide el total del view port, es decir lo que esta viendo el 
    cliente
    */
    let     scroll= document.documentElement.scrollTop,
            fullSize= document.documentElement.offsetHeight,
            sizeVP= document.documentElement.clientHeight;

    if(scroll > 100){
        btnTop.classList.add('show');
    }else{
        btnTop.classList.remove('show');
    }

    /*-modificar el btn-arriba para agregar la clase scrollfinal y no estorbe
    en el footer
    -si el scroll + sizeVP == fullSize-->significa que ya se hizo scroll hasta el
    final de la pagina
    */
    if(fullSize == (scroll + sizeVP)){
        btnTop.classList.add('scrollfinal');
    }else{
        btnTop.classList.remove('scrollfinal');
    }
});


//DETECTAR EVENTO CLICK DEL BTN-ARRIBA, PARA QUE NOS LLEVE AL INICIO
btnTop.addEventListener('click', ()=>{
    /*-scrollTo: hace scroll hacia un punto de la pagina-params(ejeX, ejeY)
    -en (0,0) nos lleva al inicio de la pagina web*/
    window.scrollTo(0,0);
});

//DETECTAR EVENTO CLICK AL LOGO DE MI PAGINA
const logo= document.getElementById('logo');

logo.addEventListener('click', ()=>{
    window.scrollTo(0,0);
});