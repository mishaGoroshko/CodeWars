function chirp(n) {
    if (n === 1) return 'chirp'

    return 'chirp-' + chirp(n-1)


}

console.log(chirp(2))
console.log(chirp(4))