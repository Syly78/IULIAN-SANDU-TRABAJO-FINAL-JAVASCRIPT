


let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );
} else {
    alert("Los servicios de geolocalización no están disponibles");
}

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Mi openStreetMap' }).addTo(map);

   
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(39.893320,-0.084492) 
        ],
        language: 'es',
    }).addTo(map);
}

function error() {
    alert("No se pudo obtener la ubicación.");
}


function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Mi openStreetMap' }).addTo(map);

    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(39.8956872, -0.1173119,21)
        ],
        language: 'es',
    }).addTo(map);
}

function error() {
    alert("No se pudo obtener la ubicación.");
}
