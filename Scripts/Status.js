export default class Status {
    constructor(name, color) {
        if (typeof name !== 'string' || typeof color !== 'string') {
            throw new Error('Invalid argument types');
        }

        this.name = name
        this.color = color
    }

    static ParseJson(json) {
        const jsonObj = JSON.parse(json)
        return new Status(jsonObj.name, jsonObj.color);
    }
}