// 3) Removing specific characters

const removeCharacters = (someString, charactersToRemove) => { 
    if(someString.length <= 1){
        if(someString.length == 0){
            return false;
        } 
        else if(someString.length == 1){
            if(someString[0] == charactersToRemove[0]){
                return 0;
            }
            else if(someString[0] == charactersToRemove[1]){
                return 0;
            }
            else return someString;
        }       
    }
    else{
        let new_charactersToRemove = charactersToRemove.join("");
        if(someString.length == 2){
            if (new_charactersToRemove[0] == someString[0] || new_charactersToRemove[0] == someString[1]){
                console.log("if_1");
            }
            else if (new_charactersToRemove[0] == someString[0] && new_charactersToRemove[0] == someString[1]){
                console.log("else_if_1");
            }
            else console.log("Faux_1");

            if (new_charactersToRemove[1] == someString[0] || new_charactersToRemove[1] == someString[1]){
                console.log("if_2");
            }
            else if (new_charactersToRemove[1] == someString[0] && new_charactersToRemove[1] == someString[1]){
                console.log("else_if_2");
            }
            else console.log("Faux_2");
        }
        else if(someString.length > 2){
            let position;
            let position1;
            for(let i = 0; i <= someString.length-1; i++){
                if(someString[i] == charactersToRemove[0] || someString[i] == charactersToRemove[1]){
                    position = i+1;                                  
                    for(i=0; i <= someString.length-1; i++){
                        if(someString[i] != charactersToRemove[0] && someString[i] != charactersToRemove[1]){
                            console.log(someString[i]);    
                        }
                    }
                }              
            }
        }
    }
} 

console.log(removeCharacters("I am an example string", ["a","x"]));
// I m n emple string