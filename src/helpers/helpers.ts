export default function extend (destination:Object, source:Object) {
  for (var key in source)
      destination[key] = source[key]
}
