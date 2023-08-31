const times = new Set()
times.add("Vasco")
times.add("Corinthians").add("Flamengo").add("Fluminense")
times.add("Palmeiras")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has("Vasco"))
times.delete("Flamengo")
console.log(times)

