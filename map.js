//metodos
function uncollapsed(){
    var grupos = document.getElementsByClassName('leaflet-panel-layers-group collapsible')
    for(var i=0;i<grupos.length;i++){
        L.DomUtil.removeClass(grupos[i], 'expanded')
    }
}
function reiniciar(){
  location.reload()      
  var legend = new L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
var div = L.DomUtil.create("div", "legend");
div.innerHTML += "<h4>Cuadro de Especificaciones</h4>";
//div.innerHTML += '<i style="background: #e8c8d4"></i><span>Cada Color  </span><br>';
//div.innerHTML += '<i style="background: #cf76a1"></i><span>hace referencia</span><br>';
//div.innerHTML += '<i style="background: #e45053"></i><span>A una detalle</span><br>';
return div;
};
legend.addTo(myMap);
} 
function reiniciarMapa(){
  location.reload()    
  localStorage.removeItem('id');
  localStorage.removeItem('leyenda');
} 
//capas al panel
function importaPrimera(){
  panel.addOverlay({
      name: "Torres PTI",
  		//icon: '<i class="icon icon-water"></i>',
  	  layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
        layers:'GRUPO6:torres',
        styles:'',
        format:'image/png',
        transparent:true,
        attribution:'SGG-115 / Grupo 6 / Distribución de las antenas PTI en el área metropolitana.'
  })},"Torres PTI",'Multiples').addTo(myMap)



  panel.addOverlay({
      name: "Limites departamentales",
  		//icon: '<i class="icon icon-water"></i>',
  	  layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
        layers:'GRUPO6:LIMITESDEPARTAMENTOS',
        styles:'',
        format:'image/png',
        transparent:true,
        attribution:'SGG-115 / Grupo 6 / Departamentos de El Salvador'
  })},"Limites departamentales",'Multiples').addTo(myMap)


  panel.addOverlay({
      name: "Limites municipales",
  		//icon: '<i class="icon icon-water"></i>',
  	  layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
        layers:'GRUPO6:LIMITESMUNICIPIOS',
        styles:'',
        format:'image/png',
        transparent:true,
        attribution:'SGG-115 / Grupo 6 / Municipiosos en el área metropolitana de El Salvador'
  })},"Limites municipales",'Multiples').addTo(myMap)

  panel.addOverlay({
      name: "Municipales centrales",
  		//icon: '<i class="icon icon-water"></i>',
  	  layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
        layers:'GRUPO6:municipio_punto',
        styles:'',
        format:'image/png',
        transparent:true,
        attribution:'SGG-115 / Grupo 6 / Municipiosos en el área metropolitana de El Salvador'
  })},"Nombre municipio",'Multiples').addTo(myMap)

  panel.addOverlay({
      name: "Municipales centrales",
      //icon: '<i class="icon icon-water"></i>',
      layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
        layers:'GRUPO6:homicidiospunto2019',
        styles:'',
        format:'image/png',
        transparent:true,
        attribution:'SGG-115 / Grupo 6 / Ubicación de los homicidios 2019 de El Salvador'
  })},"Homicidios",'Multiples').addTo(myMap)
    }
function importaHomicidio(){
    var i;
    var j;
    var id=6;
    var counter=2016;
        for (i = 0; i < 3; i++) {
            panel.addBaseLayer({
                name: "Homicidios "+counter,
                layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                layers:'GRUPO6:homicidiospormunicipio201'+id,
                styles:'',
                format:'image/png',
                transparent: true,
                attribution:'SGG-115 / Grupo 6 / Homicidios en los municipios del área metropolitana.'
              })},"Homicidios "+counter,'Homicidios').addTo(myMap)

                    counter=counter+1;
                    id=id+1;
            }

    }
function importaNivelDeViolencia(){
        var i;
        var j;
        var id=6;
        var counter=2016;
            for (i = 0; i < 4; i++) {
              if (i<3){
                panel.addBaseLayer({
                    name: "Nivel de violencia "+counter,
                    layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                    layers:'GRUPO6:niveldeviolenciapormunicipio201'+id,
                    styles:'',
                    format:'image/png',
                    transparent: true,
                    attribution:'SGG-115 / Grupo 6 / Nivel de violencia en los municipios del área metropolitana.'
                    })},"Nivel de violencia "+counter,'Nivel de violencia').addTo(myMap)
              }else {
                panel.addBaseLayer({
                    name: "Nivel de violencia "+counter,
                    layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                    layers:'GRUPO6:niveldeviolenciapormunicipio201'+id,
                    styles:'',
                    format:'image/png',
                    transparent: true,
                    attribution:'SGG-115 / Grupo 6 / Nivel de violencia en los municipios del área metropolitana.'
                  })},"Promedio de nivel de violencia",'Nivel de violencia').addTo(myMap)
              }
                        counter=counter+1;
                        id=id+1;
                }
    }
function importaHurtos(){

               panel.addBaseLayer({
                     name: "hurtos",
                    layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                    layers:'GRUPO6:hurtospormunicipio',
                    styles:'',
                    format:'image/png',
                    transparent: true,
                    attribution:'SGG-115 / Grupo 6 / Hurtos en los municipios del área metropolitana.'

                  })},"Hurtos",'Delitos').addTo(myMap)
                  panel.addBaseLayer({
                    name: "robos",
                       layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                       layers:'GRUPO6:robospormunicipio',
                       styles:'',
                       format:'image/png',
                       transparent: true,
                       attribution:'SGG-115 / Grupo 6 / Robos en los municipios del área metropolitana.'

                     })},"Robos",'Delitos').addTo(myMap)

    }
function importaTotalDePersonas(){

  var i;
  var j;
  var id=1;
  var counter=["Ingreso por persona mensualmente ($)","Tasa de personas con dependencia económica (%)","Tasa de personas desempleadas (%)",
  "Poblacion económicamente activa","Total de personas desempleadas","Total de personas desocupadas por hogar","Remesas por hogar mensualmente ($)"]
      for (i = 0; i < 7; i++) {
          panel.addBaseLayer({
              name: ""+counter[i],
              layer: new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
              layers:'GRUPO6:situacion'+id,
              styles:'',
              format:'image/png',
              transparent: true,
              attribution:'SGG-115 / Grupo 6 / '+counter[i]+' por departamento'
            })},""+counter[i],'Situación económica').addTo(myMap)
                  id=id+1;
          }

    }
//carga todas las capas
function importarCapas(){

    importaHomicidio()
    importaNivelDeViolencia()
    importaHurtos()
    importaTotalDePersonas()
    importaPrimera()

}

//implementacion de metodos
const tilesProvider='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap=L.map('myMap').setView([13.833,-88.916], 9,[Satelite]);

var Satelite=new L.tileLayer(tilesProvider,{
  maxZoom: 13,
//  minZoom:9,
  attribution:'Factores que influyen en la distribución de las antenas PTI en el área metropolitana. '
}).addTo(myMap)

var baseLayers = [
	{
	//	active: true,
		name: "Satelite",
        layer: new L.tileLayer(tilesProvider),
     //   minZoom:9,
        maxZoom:20,
  }
];

//grupos
var panel= L.control.panelLayers(
    [

        {
            group: "Homicidios",

            layers: [

            ],
            collapsed: false,
        },
        {
            group: "Nivel de violencia",
            collapsed: false,
            layers: [

            ]
        },
        {
            group: "Delitos",
            collapsed: false,
            layers: [

            ]
        },
        {
            group: "Situación económica",
            collapsed: false,
            layers: [

            ]
        }


    ],false,{collapsibleGroups: true}
)
importarCapas()
uncollapsed()

////////////////LEYENDAS DINAMICAS/////////////////

function Leyenda(tema) {
  eliminarLeyenda();
  agregarLeyenda(tema)
}

function eliminarLeyenda() {
  var cant = document.getElementsByClassName('legend')[0];
  //longitud = cant.length;
  //alert(longitud);
  cant.remove();
    //ocument.getElementsByClassName('legend')[0].style.display = 'none';
  //document.getElementsByClassName('legend')[0].style.visibility="hidden";
}

function agregarLeyenda(tema) {

var legend = new L.control({ position: "bottomleft" });
var nombre=tema;
legend.onAdd = function(map) {
var div = L.DomUtil.create("div", "legend");
  if (nombre=='Homicidios 2016' ||nombre=='Homicidios 2017'||nombre=='Homicidios 2018') {
    div.innerHTML += "<h4>Cantidad de homicidios</h4>";
    div.innerHTML += '<i style="background: #E0CDCD"></i><span>MENOS DE 50 HOMICIDIOS</span><br>';
    div.innerHTML += '<i style="background: #A73535"></i><span>ENTRE 50 - 100 HOMICIDIOS</span><br>';
    div.innerHTML += '<i style="background: #E42626"></i><span>MAS DE 150 HOMICIDIOS</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Nivel de violencia 2016' ||nombre=='Nivel de violencia 2017'||nombre=='Nivel de violencia 2018'
  ||nombre=='Promedio de nivel de violencia') {
    div.innerHTML += "<h4>Nivel de violencia</h4>";
    div.innerHTML += '<i style="background: #A37312"></i><span>MENOS DE 50 CASOS DE VIOLENCIA</span><br>';
    div.innerHTML += '<i style="background: #90C974"></i><span>ENTRE 50 - 100 CASOS DE VIOLENCIA</span><br>';
    div.innerHTML += '<i style="background: #82949A"></i><span>ENTRE 100 - 150 CASOS DE VIOLENCIA</span><br>';
    div.innerHTML += '<i style="background: #FFFFFF"></i><span>MAS DE 150 CASOS DE VIOLENCIA</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Hurtos' ) {
    div.innerHTML += "<h4>Cantidad de hurtos</h4>";
    div.innerHTML += '<i style="background: #A37312"></i><span>MENOS DE 50 HURTOS </span><br>';
    div.innerHTML += '<i style="background: #91C975"></i><span>ENTRE 50 - 100 HURTOS</span><br>';
    div.innerHTML += '<i style="background: #819399"></i><span>ENTRE 100 - 150 HURTOS</span><br>';
    div.innerHTML += '<i style="background: #FFFFFF"></i><span>MAS DE 150 HURTOS</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Robos') {
    div.innerHTML += "<h4>Cantidad de robos</h4>";
    div.innerHTML += '<i style="background: #4F9D27"></i><span>MENOS DE 50 CASOS DE ROBO </span><br>';
    div.innerHTML += '<i style="background: #5EE83B"></i><span>ENTRE 50 - 100 CASOS DE ROBO</span><br>';
    div.innerHTML += '<i style="background: #999900"></i><span>ENTRE 100 - 150 CASOS DE ROBO</span><br>';
    div.innerHTML += '<i style="background: #906E2B"></i><span>MAS DE 150 CASOS DE ROBO</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Total de personas desocupadas por hogar') {
    div.innerHTML += "<h4>Total de personas desocupadas por hogar</h4>";
    div.innerHTML += '<i style="background: #D07924"></i>';
    div.innerHTML += '<i style="background: #F9DABA"></i>';
    div.innerHTML += '<i style="background: #E5E5EC"></i>';
    div.innerHTML += '<i style="background: #F7F9FF"></i><span>APROXIMADAMENTE DE 1 A 2 PERSONAS</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Tasa de personas con dependencia económica (%)') {
    div.innerHTML += "<h4>Tasa de personas con dependencia económica</h4>";
    div.innerHTML += '<i style="background: #4F9D27"></i>';
    div.innerHTML += '<i style="background: #5EE83B"></i>';
    div.innerHTML += '<i style="background: #999900"></i>';
    div.innerHTML += '<i style="background: #906E2B"></i><span>APROXIMADAMENTE DE 1 A 2 PERSONAS</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Remesas por hogar mensualmente ($)') {
    div.innerHTML += "<h4>Remesas por hogar mensualmente</h4>";
    div.innerHTML += '<i style="background: #F07C08"></i><span>REMESAS MENORES A $180</span><br>';
    div.innerHTML += '<i style="background: #A89149"></i><span>REMESAS ENTRE $180 - $200</span><br>';
    div.innerHTML += '<i style="background: #F9F947"></i><span>REMESAS MAYORES DE $200</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Poblacion económicamente activa') {
    div.innerHTML += "<h4>Poblacion económicamente activa</h4>";
    div.innerHTML += '<i style="background: #D07924"></i><span>MENOS DE 100 MILLONES</span><br>';
    div.innerHTML += '<i style="background: #F9DABA"></i><span>ENTRE (100 - 200) MILLONES</span><br>';
    div.innerHTML += '<i style="background: #E5E5EC"></i><span>ENTRE (200 - 300) MILLONES</span><br>';
    div.innerHTML += '<i style="background: #F7F9FF"></i><span>MAS DE 300 MILLONES</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Ingreso por persona mensualmente ($)') {
    div.innerHTML += "<h4>Ingresos por persona mensualmente</h4>";
    div.innerHTML += '<i style="background: #E46641"></i><span>INGRESOS MENORES A $150</span><br>';
    div.innerHTML += '<i style="background: #FF9624"></i><span>INGRESOS ENTRE $150 - $200</span><br>';
    div.innerHTML += '<i style="background: #AC3F0E"></i><span>INGRESOS MAYORES A $200</span><br>'; 
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Tasa de personas desempleadas (%)') {
    div.innerHTML += "<h4>Tasa de personas desempleadas</h4>";
    div.innerHTML += '<i style="background: #D07924"></i>';
    div.innerHTML += '<i style="background: #F9DABA"></i>';
    div.innerHTML += '<i style="background: #E5E5EC"></i>';
    div.innerHTML += '<i style="background: #F7F9FF"></i><span>ENTRE (4 - 9)% DE PERSONAS DESEMPLEADAS</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  else if (nombre=='Total de personas desempleadas') {
    div.innerHTML += "<h4>Total de personas desempleadas</h4>";
    div.innerHTML += '<i style="background: #566662"></i><span>MENOS DE 8MIL</span><br>';
    div.innerHTML += '<i style="background: #A37009"></i><span>ENTRE 8MIL Y 10MIL</span><br>';
    div.innerHTML += '<i style="background: #606048"></i><span>MAS DE 10MIL</span><br>';
    div.innerHTML += "<h4></h4>";
  }
  return div;
};
legend.addTo(myMap);
};

var legend = new L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
var div = L.DomUtil.create("div", "legend");
div.innerHTML += "<h4>Cuadro de Especificaciones</h4>";
//div.innerHTML += '<i style="background: #e8c8d4"></i><span>Cada Color  </span><br>';
//div.innerHTML += '<i style="background: #cf76a1"></i><span>hace referencia</span><br>';
//div.innerHTML += '<i style="background: #e45053"></i><span>A una detalle</span><br>';
return div;
};
legend.addTo(myMap);

///////////////////////////////////////////////////////


//Variables html de las capas
opciones=['Torres PTI','Homicidios 2016','Homicidios 2017','Homicidios 2018','Nivel de violencia 2016',
'Nivel de violencia 2017','Nivel de violencia 2018','Promedio de nivel de violencia','Hurtos','Robos',
'Ingreso por persona mensualmente ($)','Tasa de personas con dependencia económica (%)',
'Tasa de personas desempleadas (%)','Poblacion económicamente activa','Total de personas desempleadas',
'Total de personas desocupadas por hogar','Remesas por hogar mensualmente ($)']

//

//nombre de las capas
del=['torres','homicidiospormunicipio2016','homicidiospormunicipio2017','homicidiospormunicipio2018',
'niveldeviolenciapormunicipio2016','niveldeviolenciapormunicipio2017','niveldeviolenciapormunicipio2018',
'niveldeviolenciapormunicipio2019','hurtospormunicipio','robospormunicipio','situacion1',
'situacion2','situacion3','situacion4','situacion5','situacion6','situacion7']
var capaActiva;
let source;
var current;
var poligonos=[];

//metodos

function getCapa(event){
    var x=event.target;
    x=x.nextSibling.nextSibling;
    console.log(x)    
}
document.addEventListener('click',popupStyle())
function popupStyle(){
    var texto=document.getElementsByClassName('leaflet-popup-content').innerHTML
    console.log(texto)
}
function setHeight(){
    document.getElementsByClassName('leaflet-panel-layers-list')[0].style.height = "30px";
    document.getElementsByClassName('leaflet-panel-layers-list')[1].style.width = "140px";
    
}
function expand(event){
    if(event.target.parentNode.parentNode.classList.contains('expanded')){
        event.target.parentNode.parentNode.classList.remove('expanded')
        //console.log(event.target.parentNode.parentNode.innerHTML)
        event.target.previousSibling.innerHTML=""
//        event.target.previousSibling.innerHTML="&#xf0fe;"
        console.log(event.target.previousSibling)
    }else{
        event.target.parentNode.parentNode.classList.add('expanded')
        event.target.previousSibling.innerHTML=""
        //event.target.previousSibling.innerHTML="&#xf147;"
        console.log(event.target.previousSibling)
        //console.log(event.target.parentNode.parentNode.innerHTML)
    }
    
}


function getRadio(event) { 
    var nombre
    var x = event.target;   
   
    try{ 
        if(x.className=='leaflet-panel-layers-selector'){            
            nombre=x.nextSibling.nextSibling.innerHTML          
            value = event.target.value
            feature(nombre) //, value
            if(nombre=='Homicidios 2016'){
                  source=L.wms.source('http://localhost:8080/geoserver/GRUPO6/wms',{
                  transparent:true,
                  hidden:true,
                  opacity: 0.1,
                });
                      capa='homicidiospormunicipio201'+id;             
            }
            } else{
          localStorage.setItem('radio',target.event.previousSibling.previousSibling);

        }
    }
         catch(error){
        nombre=x.nextSibling.innerHTML
        console.log(event.target);
        localStorage.setItem('radio',event.target.id);
     
      
        Leyenda(x.nextSibling.innerHTML)
        feature(nombre)
  }
  }
  
function feature(x){  //, value
      for(var i=0;i<17;i++){
            try{            
                var elemento=x
                
                    if (elemento==opciones[i]) {      
                 poligonos.push(myMap.addLayer(new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                            layers:'GRUPO6:'+del[i],
                            styles:'',
                            format:'image/png',
                            maxZoom: 11,
                            minZoom:9,
                            transparent: true,                        
                            attribution:'SGG 115 Grupo 6'
                        })))
                         source=L.wms.source('http://localhost:8080/geoserver/GRUPO6/wms',{
                            transparent:true,
                            opacity: 0.1,
                            maxZoom: 11,
                            minZoom:9,
                            });                                            
                        source.getLayer(del[i]).addTo(myMap)
                        localStorage.setItem('id',del[i])  
                        localStorage.setItem('leyenda',elemento)   
            //            localStorage.setItem('radio',value)
                     reiniciar()   
                    } 
                }catch(error){
                    console.log(error)          
        }      
    }
        }   


        var capaActiva=new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
        layers:'GRUPO6:homicidiospormunicipio2016',
        styles:'',
        format:'image/png',
        maxZoom: 11,
        minZoom:9,
        transparent: true,                        
        attribution:'SGG 115 Grupo 6',
    })
    current=new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                                layers:'GRUPO6:limitesmunicipios',
                                styles:'',
                                format:'image/png',
                                maxZoom: 11,
                                minZoom:9,
                                transparent: true,                        
                                attribution:'SGG 115 Grupo 6'
                            })
  
try{
 
  new L.tileLayer.wms('http://localhost:8080/geoserver/GRUPO6/wms',{
                                layers:'GRUPO6:'+localStorage.getItem('id'),
                                styles:'',
                                format:'image/png',
                                maxZoom: 11,
                                minZoom:9,
                                transparent: true,                        
                                attribution:'SGG 115 Grupo 6'
                            }).addTo(myMap)
    source=L.wms.source('http://localhost:8080/geoserver/GRUPO6/wms',{
    transparent:true,
    opacity: 0.1,
    maxZoom: 11,
    minZoom:9,
  });                                                
  
  Leyenda(localStorage.getItem('leyenda')) 
  source.getLayer(localStorage.getItem('id')).addTo(myMap)
  console.log("Capa agregada")
  document.getElementById(localStorage.getItem('radio')).checked=true
    document.getElementById(localStorage.getItem('radio')).parentNode.parentNode.parentNode.classList.add('expanded')
//  document.querySelectorAll('input[value="' + localStorage.getItem('radio') + '"]').checked=true
//  document.querySelectorAll('input[value="'+ localStorage.getItem('radio') + '"]').parentNode.parentNode.parentNode.classList.add('expanded')
  

    
}catch(error){
    if(window.localStorage.lenght==0)
    {
      console.log("No hay source cargada")
    }
}