export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    for (let idx in businesses){
      let business = businesses[idx];
      this.markers[business.id]
        ? this.updateMarker(business)
        : this.addMarker(business);
    }
  }

  addMarker(business){
    this.markers[business.id] = new google.maps.Marker({
      position: {lat: business.lat, lng: business.lng},
      map: this.map,
      businessId: business.id
    });
  }

  updateMarker(business){
    this.removeMarker(business);
    this.addMarker(business);
  }

  removeMarker(business){
    delete this.markers[business.id];
  }
}
