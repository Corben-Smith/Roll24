export default class Status {
    statusColor;
    constructor(name, color) {
        if (typeof name !== 'string' || typeof color !== 'string') {
            throw new Error('Invalid argument types');
        }

        this.name = name
        this.color = color
    }
    
    method(statusName) {
        if(typeof statusName !== "string") {
            throw Error("Invalid argument")
        }
        
        if(statusName === "Blinded") {
            this.statusColor = "Black"
        } 
        else if(statusName === "Charmed") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Deafened") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Exhaustion") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Frightened") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Grappled") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Incapacitated") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Invisible") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Paralyzed") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Petrified") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Poisoned") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Prone") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Restrained") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Stunned") {
            this.statusColor = "Pink"
        } 
        else if(statusName === "Unconscious") {
            this.statusColor = "Pink"
        } 

        return this.statusColor
    }

    test(){
        
    }

    static ParseJson(json){
        const jsonObj = JSON.parse(json)
        return new Status(jsonObj.name, jsonObj.color);
    }
}