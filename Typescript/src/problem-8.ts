function validateKeys<M extends object>(obj: M, keys: (keyof M)[]): boolean {
    return keys.every(key => key in obj);
}

const profile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(profile, ["name", "age"])); 
console.log(validateKeys(profile, ["name", "address"] as (keyof typeof profile)[])); 

