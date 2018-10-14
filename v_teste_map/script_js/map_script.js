
//Controller de eventos de banco de dados com javascript 
// Deve ser passado o elemento que vai ser capturado da tela no caso o nome do campo de um determinado formulário


function getCampoFormulario(campoForm){
 return getElementById("'+campoForm+'");
}



function insertProject(){

	

         var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_teste.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                    var sql = "SELECT  * FROM   map";
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);

                                    /*RS.Fields.Item("ID")+ 
                                    // RS.Fields.Item("long") +
                                    // RS.Fields.Item("lat")+ 
                                    // RS.Fields.Item("name")*/
        //Define localização inicial do mapa 

alert("inserir"+ RS.Fields.Item("ID")+ RS.Fields.Item("long") +RS.Fields.Item("lat")+ RS.Fields.Item("name"));
}








//This function include marcker in google maps information lat, long"
function addMarkerInMap(lat,long){
       var marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(lat , long),
                    draggable: true,
                    title: 'teste1 '
                  });
}

function addAbb(){
}

