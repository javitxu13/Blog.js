//submit
//añadir listenner
//conseguir valores del input
//meter los valores en blog section
//.reset para borrar todo a la vez
// 

let form = document.getElementById("blog_form");
form.addEventListener("submit", createPost);


    function createPost(event){
        event.preventDefault();
        
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
    
        let textTitulo = document.getElementById("titulo").value;
        let textContenido = document.getElementById("contenido").value;
        let article = document.createElement("article");
        let section = document.createElement("section")
        let icono = document.createElement ("i");
        let iconoarticle = document.createElement("i");
        article.addEventListener("click",clickImportant);
        section.addEventListener("click",clickImportant);


        h3.innerText = textTitulo;
        p.innerText = textContenido;

        icono.classList.add("fa","fa-blind");

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(icono);
        section.appendChild(article);

        document.getElementById("blog_section").appendChild(article);
        document.getElementById("titulo").value="";  
        document.getElementById("contenido").value="";

        function deleteParent(element){
            let parent = element.parentElement;
            let text = parent.innerText;
            if(confirm("¿Deseas borrar este producto? \n" + text)){
            parent.remove();
        }
    
    }
    function deleteSection(){


    }

        
    





   

        



        
       






        


    }
