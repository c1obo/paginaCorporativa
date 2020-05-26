function datos(){
    
    var etiqueta="";
    var parametros= location.search.substr(1).split("&");
    parametros.forEach(function (item){
        campos = item.split("=");
        if (campos[0]!="submit") {
            
            switch (campos[0]) {
                case "firstName": etiqueta="Nombre"; 
                    break;
                    
                            
            
            }
            document.getElementById("parrafo").innerHTML +=  campos[1]+"<br>";

        }
    });
     
}
