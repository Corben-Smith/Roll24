import Status from './Status'
export default class Token {
    constructor(id, name, image, status) {
        if (typeof image !== 'string' || typeof name !== 'string' || !(status instanceof Status)) {
            throw new Error('Invalid argument types');
        }
        
        this.id = id
        this.name = name
        this.status = status
        this.image = image
    }

    static ParseJson(json) {
        const jsonObj = JSON.parse(json)
        if(!Array.isArray(jsonObj)){
            return new Token(jsonObj.name, jsonObj.image, Status.ParseJson(jsonObj.status));
        }
        return jsonObj.map(jsonElement => Token.ParseJson(jsonElement))
    }
}