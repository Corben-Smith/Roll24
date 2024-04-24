export default class Status {
    statusColor;
    constructor(name, color) {
        if (typeof name !== 'string' || typeof color !== 'string') {
            throw new Error('Invalid argument types');
        }

        this.name = name
        this.color = color
    }
    
    static ToColor(statusName) {
        if(typeof statusName !== "string") {
            throw Error("Invalid argument")
        }
        
        // if(statusName === "Blinded") {
        //     this.statusColor = "Black"
        // } 
        // else if(statusName === "Charmed") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Deafened") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Exhaustion") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Frightened") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Grappled") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Incapacitated") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Invisible") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Paralyzed") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Petrified") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Poisoned") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Prone") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Restrained") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Stunned") {
        //     this.statusColor = "Pink"
        // } 
        // else if(statusName === "Unconscious") {
        //     this.statusColor = "Pink"
        // } 

        if (statusName === "Blinded") {
            this.statusColor = "#333333"; // Dark gray
        } else if (statusName === "Charmed") {
            this.statusColor = "#FFC0CB"; // Light pink
        } else if (statusName === "Deafened") {
            this.statusColor = "#FFD700"; // Gold
        } else if (statusName === "Exhaustion") {
            this.statusColor = "#FF6347"; // Tomato
        } else if (statusName === "Frightened") {
            this.statusColor = "#00CED1"; // Dark turquoise
        } else if (statusName === "Grappled") {
            this.statusColor = "#BA55D3"; // Medium purple
        } else if (statusName === "Incapacitated") {
            this.statusColor = "#FF4500"; // Orange red
        } else if (statusName === "Invisible") {
            this.statusColor = "#ADD8E6"; // Light blue
        } else if (statusName === "Paralyzed") {
            this.statusColor = "#FF69B4"; // Hot pink
        } else if (statusName === "Petrified") {
            this.statusColor = "#32CD32"; // Lime green
        } else if (statusName === "Poisoned") {
            this.statusColor = "#00FF00"; // Green
        } else if (statusName === "Prone") {
            this.statusColor = "#800080"; // Purple
        } else if (statusName === "Restrained") {
            this.statusColor = "#8A2BE2"; // Blue violet
        } else if (statusName === "Stunned") {
            this.statusColor = "#FFA500"; // Orange
        } else if (statusName === "Unconscious") {
            this.statusColor = "#FFD700"; // Gold
        } else {
            // Default color
            this.statusColor = "black"; // Black
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