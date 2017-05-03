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
