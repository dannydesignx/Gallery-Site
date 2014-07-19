var map;
function initialize() {
  var mapOptions = {
    zoom: 0,
    center: new google.maps.LatLng(06, 0)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);