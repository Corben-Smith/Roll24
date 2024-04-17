import Status from './Status'
export default class Token {
    constructor(id, name, image, status, armourClass, healthPoints, initiative) {
        if (typeof image !== 'string' || typeof name !== 'string' || !(status instanceof Status) || typeof armorClass !== 'number' || typeof healthPoints !== 'number' || typeof initiative !== 'number') {
            throw new Error('Invalid argument types');
        }
        
        this.id = id
        this.name = name
        this.status = status
        this.image = image
        this.armorClass = armourClass
        this.healthPoints = healthPoints
        this.initiative = initiative
    }

    static ParseJson(json) {
        const jsonObj = JSON.parse(json)
        if(!Array.isArray(jsonObj)){
            return new Token(jsonObj.id, jsonObj.name, jsonObj.image, Status.ParseJson(jsonObj.status, jsonObj.armorClass, jsonObj.healthPoints, jsonObj.initiative));
        }
        return jsonObj.map(jsonElement => Token.ParseJson(jsonElement))
    }
}