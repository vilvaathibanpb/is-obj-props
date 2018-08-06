### is-obj-props

A small, yet very useful npm package, which is used to check if an object possess a property or not. Checks for any depth of nested objects 

  - If the object has the property, it will return the value
  - If the property is not present, it returns 'null'

### Installation

```sh
$ npm i is-obj-props
```

### How to Use

Install and import is-obj-props 

```sh
import isObjProps from 'is-obj-props';

const testObj = {
    name: "UserName",
    age: 25,
    marks: {
        exam1: 98,
        exam2: {
            part1: 47,
            part2: 48
        }
    }
}
```

isObjProps is a function which takes 2 arguements:
  - Arguement 1 - Type: Object - The Object to be tested (testObj in this case)
  - Arguement 2 - Type: Array - Array of Property names. The length of the array denotes the depth of the property in nested object.
    
##### The examples will make you understand better 

##

```sh
console.log(isObjProps(obj, ["name"]));
//UserName

console.log(isObjProps(obj, ["FirstName"]));
//null

console.log(isObjProps(obj, ["marks","exam1"]));
//98

console.log(isObjProps(obj, ["marks","exam2"]));
//{part1: 47, part2: 48}

console.log(isObjProps(obj, ["marks","exam3"]));
//null

console.log(isObjProps(obj, ["marks","exam2","part2"]));
//48

console.log(isObjProps(obj, ["marks","exam2","part3"]));
//null
```

## Benefits

This never lets us face undefined error due to object properties again. 

## Contribution

You are welcome to raise issues and PRs in the [repository](https://github.com/vilvaathibanpb/is-obj-props)
