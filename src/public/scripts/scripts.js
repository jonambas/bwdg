$(document).ready(function(){
	initialize();
});

function initialize() {
  var myLatlng = new google.maps.LatLng(39.331293,-76.635184);
  var mapOptions = {
    center: myLatlng,
    zoom: 12,
    scrollwheel: false,
    mapTypeControl: false,
    panControl: false,
    streetViewControl: false,
    zoomControl: true
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: '15Four'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);


$(window).load(function(){

  $('.slide-in').each(function(i) {

    (function(element) {
      window.setTimeout(function(){
        element.addClass('show');
      }, element.data('delay'));
    })($(this));

  });
});