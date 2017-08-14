export function extend(destination: object, source: object) {
	for (var key in source)
		destination[key] = source[key]
}

export function ownAtLeastOneProperty(obj) {
	for (var prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return true;
		}
	}
	return false;
}

export function encodeUrlParameters(data): string {
	return Object.keys(data).map(function(key) {
		return [key, data[key]].map(encodeURIComponent).join('=');
	}).join('&');
}
