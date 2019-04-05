**Punto 9.** *Uno de los problemas de las redes sociales tradicionales es que los datos de los usuarios están centralizados. El proyecto Solid pretende facilitar la creación una arquitectura de redes sociales descentralizadas. Crear una valoración técnica de dicho proyecto, teniendo en cuenta tanto la viabilidad como las posibilidades y retos que debe afrontar.*

>El concepto Solid proviene del acrónimo Social Linked Data y consiste básicamente en un serie de convenciones y herramientas para construir aplicaciones web sociales y descentralizadas basadas en los principios de Linked Data [1]. Por Linked Data entendemos la interrelación semántica de los objetos (web  semántica) y cosas que se describen en la web que dio a conocer Tim Berners-Lee el año 2006 [2], de esta forma se puede relacionar desde distinto puntos la data y llegar a niveles de profundidad en su descripción y contextualización. Para conseguir esto se hace imprescindible el representar y nombrar cada cosa o concepto a través de una URI única, ya que sin esto se hace imposible hablar de web semántica.
> 
>En particular, Solid ocupa los WebID URIs como identificadores de objetos y nombres de usuarios que dan soporte a las tecnologías relacionadas con Solid. Su principal virtud está en que se trata de un identificador único, global y descentralizado, que finalmente le da el control de su propia identidad al usuario de redes basadas en Solid. A su vez el WebID tiene como función primordial el apuntar hacia el perfil público que tiene cada usuario.
>
>Teniendo en cuenta que se trata de un esfuerzo por descentralizar el control de las redes sociales, Solid ocupa conceptos vanguardistas en su diseño arquitectónico, así como también la concepción de ocupar un POD (personal online data) por cada usuario, desde ya lo enfrenta diametralmente a lo que ofrecen otras plataformas actuales, como instagram, facebook y twitter, que ocupan un sólo POD para millones de usuarios. Cabe destacar que cuando hablamos al uso de PODs hacemos básicamente referencia al almacenamiento de esa información. Aspectos como la identificación, perfilamiento, autenticación y autorización/control de acceso son parte del ecosistema de Solid y si abordamos este ecosistema nos encontraremos con los siguiente puntos:
>1. POD: como anteriormente se mencionó, los POD son los datos personales de cada usuario, como por ejemplo: perfil, fotos, cometarios, “likes”, etc.
>2. Aplicaciones: son los servicios que usan los datos de cada POD. Ejemplo: albumes de fotos, calendarios, colaboración documental, etc.
>3. Estándares: son las convenciones que soportan al Solid, como por ejemplo: HTTP, RDF, REST, WebID, WAC, Open ID Connect, entre otros.
>En la imagen que a continuación se presenta, se observa el ecosistema de Solid en su plenitud y como se conforma su especificación técnica o arquitectura de su core.
>
> ![alt text](https://github.com/rvalenzuelav/mti-saw-2018/blob/master/punto-9/img-1-punto-9.png "Arquitectura de Ecosistema Solid") 
>Fuente: Solid: Empowering people through choice.
>
> ![alt text](https://github.com/rvalenzuelav/mti-saw-2018/blob/master/punto-9/img-2-punto-9.png "RRSS Centralizadas Vs Descentralizadas")
>Fuente: Solid: Empowering people through choice.
>
>El descentralizar los datos promueve también la aparición de nuevos actores en el mercado de las plataformas web, dado que al crear una separación de los datos del servicio en sí ofrecido se hace mayor énfasis en el servicio ofrecido por sobre los datos, por lo tanto los nuevos actores pueden acceder a la masa crítica de manera más democrática, pudiendo competir de igual a igual contra cualquier plataforma imperante en el momento, sólo se trataría de competir por una entrega de un servicio y que el usuario premie a través de la satisfacción con estos.
>
>Como se pudo exponer en esta valoración, el proyecto Solid goza de muy buena salud actualmente y gracias a la creación de Inrupt como startup, que se encargará de comercializar el proyecto, se formaliza el proyecto como viable, rentable y lo más importante, como una real opción al futuro de las redes sociales. Día a día la iniciativa de Berners-Lee suma más adeptos y se espera que algún día sea parte del mainstream tecnológico.
>
>En la imagen que sigue, obtenida de la presentación de Berners-Lee en el summit de Solid realizado el año 2018 [4] se aprecia cómo se declaran cuales son las deudas técnicas y por consiguiente los desafíos declarados como movimiento y dentro de estas, desde nuestro punto de vista, creemos que el robustecer el NSS (Node Solid Server) es parte fundamental y garante del éxito del proyecto; solo de esta manera podrá convencer a los escépticos de que esta tecnología es tan robusta como las que actualmente estamos acostumbrados. Además llama la atención que ven como deuda técnica una mayor cantidad de test de codigo, parte fundamental en lo antes expuesto, solo de esta forma se puede llegar a tener un proyecto maduro y fiable para la comunidad de internet.
>
> ![alt text](https://github.com/rvalenzuelav/mti-saw-2018/blob/master/punto-9/img-3-punto-9.png "áreas de logros y desafios de Solid.")
>Fuente: Solid: Empowering people through choice.
>
### Referencias
[1]https://github.com/solid/solid-spec/blob/master/README.md
[2]https://www.w3.org/DesignIssues/LinkedData.html
[3]https://github.com/solid/solid-spec
[4]Solid: Empowering people through choice. 2018. Tim Berners-Lee, Ruben Verborgh. https://solid.github.io/dweb-summit-2018/
