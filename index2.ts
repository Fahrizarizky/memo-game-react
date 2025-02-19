type HobbyType = string[] | string; // union type

type BankAccount = "BNI" | "BRI";

let myBank : BankAccount = "BNI";

type HobbyObject = {
    sports?: string[];
    foods: string[];
}

interface HobbyInterface {
    sports?: string[];
    foods: string[];
}

let user : string = "user";
let age : number = 1;
let isMale : boolean = false;
let hobbies : HobbyInterface = {
    foods : [''],
};

user = "arsadi";

function getData<T>(data: T) {
    return data;
}


const hasil = getData<HobbyObject>({
    foods: ['']
})

hasil.foods
