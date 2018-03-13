const mapboxgl = require('mapbox-gl');

const iconURLs = {
	hotels: 'http://i.imgur.com/D9574Cu.png',
	restaurants: 'http://i.imgur.com/cqR6pUI.png',
	activities: 'http://i.imgur.com/WbMOfMl.png'
};

function buildMarker(type, coordinates) {
	const newMarker = document.createElement('div');
	newMarker.style.width = '32px';
	newMarker.style.height = '39px';

	if (type === 'hotel') {
		const hotelMarker = new mapboxgl.Marker(newMarker).setLngLat(coordinates);
		newMarker.style.backgroundImage = `url(${iconURLs.hotels})`;
		return hotelMarker;
	} else if (type === 'restaurant') {
		const restaurantMarker = new mapboxgl.Marker(newMarker).setLngLat(
			coordinates
		);
		newMarker.style.backgroundImage = `url(${iconURLs.restaurants})`;
		return restaurantMarker;
	} else if (type === 'activity') {
		const activityMarker = new mapboxgl.Marker(newMarker).setLngLat(
			coordinates
		);
		newMarker.style.backgroundImage = `url(${iconURLs.activities})`;
		return activityMarker;
	} else {
		console.log('Requested unknown marker type.');
	}
}

module.exports = buildMarker;
