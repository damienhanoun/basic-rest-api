export default function extend(destination: object, source: object) {
	for (var key in source)
		destination[key] = source[key]
}
