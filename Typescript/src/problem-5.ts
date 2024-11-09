function getProperty<M, N extends keyof M>(obj: M, key: N): M[N] 
{
    return obj[key];
}


const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); 
