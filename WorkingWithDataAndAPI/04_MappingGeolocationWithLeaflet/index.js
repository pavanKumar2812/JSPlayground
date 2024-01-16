const WhereIsISS_api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const Map = L.map('ISSMap').setView([0, 0], 1);

const Attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const TileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const Tiles = L.tileLayer(TileURL, { Attribution });
Tiles.addTo(Map);

var ISSIcon = L.icon({
    iconUrl: './ISS.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

// let Marker;
let Marker = L.marker([0, 0], {icon: ISSIcon}).addTo(Map);

async function GetISS() {
    const response = await fetch(WhereIsISS_api_url);
    const data = await response.json();
    const { latitude, longitude } = await data;

    console.log(data);
    console.log(data.longitude);
    console.log(data.latitude);
    console.log(`lat: ${latitude}, long: ${longitude}`);

    // const marker = L.marker([latitude, longitude], {icon: ISSIcon}).addTo(Map);
    // Marker = L.marker([latitude, longitude], {icon: ISSIcon}).addTo(Map);
    var newLatLng = new L.LatLng(latitude, longitude);
    Marker.setLatLng(newLatLng); 
    Map.setView([latitude, longitude], 4);

    document.getElementById('latitude').textContent = latitude.toFixed(2);
    document.getElementById('longitude').textContent = longitude.toFixed(2);
}

GetISS();

setInterval(GetISS, 1000);
