import Status from './Status'
export default class Token {
    constructor(name, image, status) {
        if (typeof image !== 'string' || typeof name !== 'string' || !(status instanceof Status) {
            throw new Error('Invalid argument types');
        }
        
        this.id = id
        this.name = name
        this.status = status
        this.image = image
    }
}