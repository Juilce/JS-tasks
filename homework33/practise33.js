function initMap() {
    const directionServices = new google.maps.DirectionsService();
    const directionRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 50.27,
            lng: 30.31
        },
    });
    directionRenderer.setMap(map);

    const changePosition = function() {
        displayRoute(directionServices, directionRenderer);
    }
    document.getElementById('start').addEventListener('change', changePosition);
    document.getElementById('end').addEventListener('change', changePosition);
    document.getElementById('mode').addEventListener('change', changePosition);
}

function displayRoute(directionServices, directionRenderer) {
    directionServices.route({
        origin: {
            query: document.getElementById('start').value,
        },
        destination: {
            query: document.getElementById('end').value,
          },
          travelMode: google.maps.travelMode[document.getElementById('mode').value],
    },
    (response, status) => {
        if (status === "OK") {
          directionRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
}