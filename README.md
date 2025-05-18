
/////////Some differences between interfaces and types in TypeScript////////////
--------------------------------------------------------------------------------

In TypeScript, both interface and type are used to describe the shape of objects. Most of the time, they can be used in similar ways. But there are some differences:

Interface
Used to define the structure of an object.

Can be extended using extends.

Supports declaration merging :
interface Person {
  name: string;
  age: number;
}

interface Person {
  address: string;
}
Now Person has name, age, and address.

Type
Can define object shapes, union types, tuples, and primitive aliases.

Cannot be merged.

Good for more complex type combinations.

type User = {
  name: string;
  age: number;
};

type ID = string | number;
type Coordinates = [number, number];
Key Differences
interface is better for defining object structures and working with classes.

type is better when we need to combine types or use unions and tuples.

interface supports merging, type does not.

Conclusion
Use what fits our use case. If we just defining object shapes, both work. For advanced combinations, type gives us more power.



///////////What is Type Inference in TypeScript?/////////
---------------------------------------------------------
One of the coolest things about TypeScript is that it can figure out types for you — this is called type inference.

Basically, when we declare a variable or function and don’t tell TypeScript what the type is, it will try to guess based on how you're using it.

Example:

let name = "John";
I didn’t say name: string, but TypeScript already knows it’s a string because of the value I gave it. Now if I try to assign a number:


name = 123; // Error: Type 'number' is not assignable to type 'string'
TypeScript protects me, even though I never wrote the type explicitly. That’s inference in action.

Why is this helpful?
Less typing, more typing 
(Less manual typing, but your code still has types!)
You don't have to annotate everything, and your code stays clean.

Catches mistakes early
Since TypeScript knows what type a variable should be, it stops you from doing the wrong thing.

Better auto-complete
Your editor will give smarter suggestions because it knows the type, even if you didn’t declare it.

Works great with functions
TypeScript can infer return types based on what your function returns.

ts
Copy
Edit
function add(a: number, b: number) {
  return a + b;
}
Even though I didn’t write the return type, TypeScript knows it's a number.
