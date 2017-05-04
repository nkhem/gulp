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

  setMarker(business){
    this.updateMarkers([business]);
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
    const bizInfo =
        '<div class="info-window">'+
          '<h3>'+ business.title + '</h3>' +
          '<p>'+ business.price + '</p>' +
          '<p>'+ business.address1 + '</p>' +
          '<p>'+ business.address2 + '</p>' +
        '</div>';

    const infoWindow = new google.maps.InfoWindow({
      content: bizInfo
    });

    const marker = this.markers[business.id];

    marker.addListener('mouseover', () => {
      infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      infoWindow.close(this.map, marker);
    });

    document.getElementById(`${business.id}`)
      .addEventListener('mouseover', () => {
        infoWindow.open(this.map, marker);
      })

    document.getElementById(`${business.id}`)
      .addEventListener('mouseout', () => {
        infoWindow.close(this.map, marker);
      })
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
