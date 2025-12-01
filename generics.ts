/*
 Generics

 Being able to create a component that can work over a variety of types rather than a single one. 
 This allows users to consume these components and use their own types.

 */

/*
************************************
 IDENTITY FUNCTION
 Will return back what is passed in
************************************
 */

// function identity(arg: number): number {
//   return arg;
// }

// Type Variable

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// Use

// let output = identity<string>("Hello World");

/*
************************************
WORKING WITH GENERIC TYPE VARIABLES

************************************
 */

/*
If we have generic Type, we can't access arg.length. 
If we delare Type as an array of types, .length will be determined
*/

function logIdentit<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

/*
************************************
GENERIC TYPES

************************************
*/

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;

// Using different name for the generic type parameter in type

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;

// Generic type as a call signature of an object literal type

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: { <Type>(arg: Type): Type } = identity;

// Generic interface

interface GenericIdentityFn{
    <Type>(arg: Type): Type
}

function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn = identity

// Interface generic parameter

interface GenericIdentityFn<Type>{
    (arg: Type) : Type;
}

function identity<Type>(arg: Type) : Type {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity

