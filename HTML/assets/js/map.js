var mymap = L.map('ampMap').setView([47.2515, -122.4443], 14);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, &mdash; Data from: http://data.un.org/DocumentData.aspx?id=375',
    maxZoom: 16
}).addTo(mymap);