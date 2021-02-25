function initMap() {
	L.mapquest.key = 'sSMUIsubnRYZpImv9Uz7yCrIWXA1x0i7';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8785, -117.2359]).addTo(map);
}