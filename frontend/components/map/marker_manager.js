export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    this.hideAllMarkers();

    for (let idx in businesses){
      let business = businesses[idx];
      let hasMarker = Boolean(this.markers[business.id])

      if (hasMarker) {
        this.showMarker(business);
      } else {
        this.createMarker(business);
      }

    }
  }

  createMarker(business){
    this.markers[business.id] = new google.maps.Marker({
      position: {lat: business.lat, lng: business.lng},
      map: this.map,
      businessId: business.id
    });

    this.createInfoWindow(business);
  }

  createInfoWindow(business){
    const bizInfo = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    const infoWindow = new google.maps.InfoWindow({
      content: 'bizInfo'
    });

    const marker = this.markers[business.id];
    marker.addListener('click', function(){
      infoWindow.open(this.map, marker);
    });
  }

  showMarker(business){
    this.markers[business.id].setMap(this.map);
  }

  hideAllMarkers(){
    Object.keys(this.markers).forEach(bizId => {
      this.markers[bizId].setMap(null);
    });
  }

  hideMarker(business){
    this.markers[business.id].setMap(null);
  }
}
