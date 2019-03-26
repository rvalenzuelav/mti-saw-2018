$(document).ready(function () {
  var biografias = ['biografia1.xml', 'biografia2.xml', 'biografia3.xml', 'biografia4.xml'];
  var biografia;
  var seleccionada=0;

  let getXMLFile = function (path, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        callback(request.responseXML);

      }

    };
    request.send();

  };

  getXMLFile("xml/"+biografias[seleccionada], function (xml) {

    xmlParser(xml);

  });

  $("#siguiente").click(function(){
    biografiaSiguiente();
  });


  function xmlParser(xml) {
    
    var nombre = $(xml).find("nombre").text()+' '+$(xml).find("primerApellido").text() + ' ' + $(xml).find("segundoApelido").text();
    var fechaNacimiento=dateFormatter($(xml).find("fechaNacimiento").text());
    var fechaFallecimiento=dateFormatter($(xml).find("fechaFallecimiento").text());
    var profesion=$(xml).find("profesion").text();
    var gradoAcademico=$(xml).find("gradoAcademico").text();
    var reseniaBiografica=$(xml).find("reseniaBiografica").text();
    var familiaJuventud=$(xml).find("familiaJuventud").text();
    var estudiosVidalaboral=$(xml).find("estudiosVidalaboral").text();
    var trayectoriaPolíticaPublica=$(xml).find("trayectoriaPolíticaPublica").text();
    var actividadesComplementarias=$(xml).find("actividadesComplementarias").text();
    var sitioWeb=$(xml).find("sitioWeb").text();
    var mail=$(xml).find("email").text();
    var foto=$(xml).find("foto").text();
    
    $("#nombre").text(nombre);
    $("#fechaNacimiento").text(fechaNacimiento);
    $("#fechaFallecimiento").text(fechaFallecimiento);
    $("#profesion").text(profesion);
    $("#gradoAcademico").text(gradoAcademico);
    $("#reseniaBiografica").text(reseniaBiografica);
    $("#familiaJuventud").text(familiaJuventud);
    $("#estudiosVidalaboral").text(estudiosVidalaboral);
    $("#trayectoriaPolíticaPublica").text(trayectoriaPolíticaPublica);
    $("#actividadesComplementarias").text(actividadesComplementarias);
    $("#sitioWeb").text(sitioWeb);$("#sitioWeb").attr("href",sitioWeb);
    $("#mail").text(mail);$("#mail").attr("mailto", mail);
    $("#foto").attr("src","img/"+foto);

    //$("#apellidos").text($(xml).find("primerApellido").text() + ' ' + $(xml).find("segundoApelido").text()+ ' ' +$(xml).find("primerApellido").text() + ' ' + $(xml).find("segundoApelido").text());
    //$("#nombre").text($(xml).find("nombre").text()+' '+$(xml).find("primerApellido").text() + ' ' + $(xml).find("segundoApelido").text());
    

  }

  /*
  Funciones utilizadas para la extracción y generación de la biografía
  
  */

  //Función da formato a la fecha
  function dateFormatter(stringText) {
    if (stringText === '') {
      return 'aún con vida';
    } else {
      return new Date(stringText).toLocaleDateString('es-CL'); 
    }  
  }

  function biografiaSiguiente() {
    biografias.length;
    
    biografia=biografias[seleccionada];
    if(biografias.length!=seleccionada)
    {
        seleccionada=seleccionada+1;
    } else
    {
      seleccionada=0;
    }
      getXMLFile("xml/"+biografias[seleccionada], function (xml) {

    xmlParser(xml);

  });
  }

});