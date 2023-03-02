//submit
//añadir listenner
//conseguir valores del input
//meter los valores en blog section

let form = document.getElementById("blog_form");
form.addEventListener("submit", createPost);


    function createPost(event){
        event.preventDefault();
        
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        let textTitulo = document.getElementById("titulo").value;
        let textContenido = document.getElementById("contenido").value;

        h3.innerText = textTitulo;
        p.innerText = textContenido;

        document.getElementById("blog_section").appendChild(h3);
        document.getElementById("blog_section").appendChild(p);
        document.getElementById("titulo").value="";  
        document.getElementById("contenido").value="";  


    function deleteParent(element){
        
        



        
       






        


    }
