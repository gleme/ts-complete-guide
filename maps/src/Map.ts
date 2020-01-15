
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  
  private map: google.maps.Map;
  
  constructor(id: string) {
    this.map = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });;    
  }

  setZoom(zoom: number): void {
    this.map.setZoom(zoom);
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.map, marker);
    });
  }



}