const body = document.body

try {
    body.style.background = luminance("#63c", 0)
} catch(err) {
    console.log(`Ocorreu um Erro: ${err.message}`)
}
function luminance(hex, luminosity = 0) {
    hex = hex.replace(/[^0-9a-f]/gi, '')
    const isValidHex = hex.length === 6 || hex.length === 3

    if (!isValidHex) throw new Error("Invalid HEXADECIMAL!")

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    const black = 0
    const white = 255

    const twoDigitGroup = hex.match(/([0-9a-f]{2})/gi)
    let newHex = `#`

    for (let twoDigit of twoDigitGroup) {
        const hexToNumber = parseInt(twoDigit, 16)

        const calculateLumi = hexToNumber + ( luminosity * 255)

        const blackOrLumi = Math.max(black, calculateLumi)
        const partialColor = Math.min(white, blackOrLumi)

        const newColor = Math.round(partialColor)

        const numberToHex = newColor.toString(16)

        const finalHex = numberToHex.length === 1 ? `0${numberToHex}` : numberToHex;

        newHex += finalHex.slice(-2)
    }
    console.log(newHex)
    return newHex
}