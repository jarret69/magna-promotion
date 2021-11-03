var x = document.getElementById("phonenumber");

//Coordinates for Marketo offices
var officeLocations = {
    "San Mateo": {latitude: 37.5596465, longitude: -122.2870142},
    "Atlanta": {latitude: 33.8547013, longitude: -84.35552349999999},
    "Tokyo": {latitude: 35.6895, longitude: 139.6917},
    "Dublin": {latitude: 53.3478, longitude: -6.2603097},
    "Sydney": {latitude: -33.873651, longitude: 151.2068896},
    "Portland": {latitude: 45.512089, longitude: -122.6763367},
    "Tel Aviv": {latitude: 32.0852999, longitude: 34.78176759999999}
}

//Phone numbers for Marketo offices
var officePhoneNumbers = {
    "San Mateo": "+1-650-376-2300",
    "Atlanta": "+1-877-260-6586",
    "Tokyo": "+81-03-6759-8280",
    "Dublin": "+353-1-242-3000",
    "Sydney": "+61-2-9045-2711",
    "Portland": "+1-877-260-6586",
    "Tel Aviv": "+1-877-260-6586"
}

//Method to get user's current location. Returns a position object with user's geo coordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findNearestOffice);
    } else {
        x.innerHTML = "Marketo Location: San Mateo<br>Marketo Phone Number: +1-877-260-6586";
    }
}

//Find nearest Marketo office to user's location
function findNearestOffice(position) {
        var nearestOffice = geolib.findNearest({latitude: position.coords.latitude, longitude: position.coords.longitude}, officeLocations);
        x.innerHTML = "Marketo Location: " + nearestOffice.key + "<br>Marketo Phone Number: " +  officePhoneNumbers[nearestOffice.key];
}