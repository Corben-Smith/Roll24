import Token from './Token'
export default class Map {
    constructor(image, tokens, cellDimensions) {
        if (typeof image !== 'string' || !Array.isArray(cellDimensions) || !Array.isArray(tokens) || tokens.some(token => !(token instanceof Token))) {
            throw new Error('Invalid argument types');
        }

        //base64 representation of the image
        this.image = image,
        this.tokens = tokens

        // format of [cellWidth, cellHeight] both px values
        this.cellDimensions = cellDimensions

        const img = new Image()
        img.onload = () => {
            this.mapDimensions = [img.width , img.height]
        }
        img.src = image;
    }

    static ParseJson(json) {
        const jsonObj = JSON.parse(json)
        return new Map(json.image, Token.ParseJson(json.tokens), json.cellDimensions);
    }
}