window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

    menu = document.getElementById("header");
    body = document.getElementById("container__all");
    nav = document.getElementById("nav");

function mostrar_menu(){

    body.classList.toggle('move_content');
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 760)  {
        body.classList.remove('move_content');
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

});
function change(e){
     contenedor1=document.getElementById("list_img_1") ;
 contenedor2=document.getElementById("list_title_1") ;
    contenedor3=document.getElementById("list_p_1") ;

  if (e==2){
        contenedor1.innerHTML ="<img src=\"img/nube-local.png\">";
        contenedor2.innerHTML ="<h3>Elije segun tu nececidad</h3>";
        contenedor3.innerHTML ="<p>Zayercom te ofrece tanto la version local como en la nube de manera que segun tu negocio puedes usar uno y otro .</p>"
    }
else if(e==3){
    contenedor1.innerHTML ="<img src='img/medida.svg' >";
    contenedor2.innerHTML ="<h3>Interfaz Sencilla</h3>";
    contenedor3.innerHTML ="<p>No te preocupes por modulos que no vas a utilizar y dificultan el mano de los sistemas, en zayercom obtienes losmodulos que necesitas y con la opcion de seguir creciendo con tu negocio.</p>"
}
else{
    contenedor1.innerHTML ='<img src="img/navegacion.svg" >';
        contenedor2.innerHTML ="<h3>Simple e Intuitivo</h3>";
        contenedor3.innerHTML ="<p>Interface simples, donde facilmente podras encontrar lo que bsucas. De igual manera al adquirir un sisema se dará una capacitación y tambien soporte técnico durante la estanciadel mismo sitema .</p> " 
    }
}


