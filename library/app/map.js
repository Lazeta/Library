function initMap() {
  // координаты центра карты
  let myLatLng = { lat: 40.69561066467096, lng: -73.99360159988786 };

  // создание карты
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: myLatLng,
  });

  // создание маркера
  let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "286 Cadman Plaza W, Brooklyn, NY 11201, USA",
  });
}
