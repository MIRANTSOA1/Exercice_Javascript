// 2) Palindrome

const isPalindrome = (someString) => {
        if(someString.length <= 1) return true; //si le mot contient une seule caractère

        else if(someString.length == 2 && someString[0] == someString[1]) return true; //si le mot contient deux caractères et égaux

        else if(someString.length > 2){ //si le mot contient plus de deux caractères

            for(let i = 0; i < someString.length; i++){ // on fait d'abord le parcours du mot non renversé

                for(let j = someString.length-1; j >= 0; j--){ // puis on parcours le mot mais de façon à l'envers

                    if(someString[i] == someString[j]){ // on teste si le mot NON renversé et le mot renversé sont égaux
                        let New_someString = someString.slice(i+1, j);
                        //console.log(someString);
                        return isPalindrome(New_someString);
                    }
                    else{
                        return false;
                    }                   
                }
            }
        }
        else return false;
    }    
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("apple")) // false