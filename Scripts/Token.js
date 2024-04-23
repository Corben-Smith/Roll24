import Status from './Status'
export default class Token {
    constructor(id, name, image, status, armourClass, healthPoints, initiative) {
        if (typeof image !== 'string' || typeof name !== 'string' || !(status instanceof Status) || typeof armourClass !== 'number' || typeof healthPoints !== 'number' || typeof initiative !== 'number') {
            console.log(id, name, image, status, armourClass, healthPoints, initiative)
            throw new Error('Invalid argument types');
        }
        
        this.id = id
        this.name = name
        this.status = status
        this.image = image
        this.armourClass = armourClass
        this.healthPoints = healthPoints
        this.initiative = initiative
    }

    static ParseJson(json) {
        const jsonObj = JSON.parse(json)
        if(!Array.isArray(jsonObj)){
            return new Token(jsonObj.id, jsonObj.name, jsonObj.image, Status.ParseJson(JSON.stringify(jsonObj.status)), jsonObj.armourClass, jsonObj.healthPoints, jsonObj.initiative);
        }
        return jsonObj.map(jsonElement => Token.ParseJson(JSON.stringify(jsonElement)))
    }
}