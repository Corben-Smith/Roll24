import Token from './Token'
export default class Map {
    constructor(image, tokens, cellDimensions) {
        if (typeof image !== 'string' || !Array.isArray(tokens) || tokens.some(token => !(token instanceof Token))) {
            throw new Error('Invalid argument types');
        }
        
        this.image = image,
        this.tokens = tokens
        this.cellDimensions = cellDimensions

        const img = new Image()
        img.onload = () => {
            this.mapDimensions = { width: img.width + 'px', height: img.height + 'px' }
        }
        img.src = image;
    }
}