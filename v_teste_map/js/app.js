
/**
 * Creates a new marker and adds it to a group
 * @param {H.map.Group} group       The group holding the new marker
 * @param {H.geo.Point} coordinate  The location of the marker
 * @param {String} html             Data associated with the marker
 */
function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}

/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addInfoBubble(map) {
  var group = new H.map.Group();

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);
  }, false);

    

  addMarkerToGroup(group, {lat: RS.Fields.Item("lat"), lng:RS.Fields.Item("long")},
    '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');

  addMarkerToGroup(group, {lat:RS.Fields.Item("lat"), lng:RS.Fields.Item("long")},
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');

}



/**
 * Boilerplate map initialization code starts below:
 */

// initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'HSWdRZNfGj5Jd5uT5xkp',
  app_code: '0MCGh0g5KdThHE_mfIYDMQ',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

// initialize a map - this map is centered over Europe
//-20.3203023,-40.2847483

var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map,{
  center: {lat:RS.Fields.Item("lat"), lng:RS.Fields.Item("long")},
  zoom: 7
});

// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// create default UI with layers provided by the platform
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
addInfoBubble(map);