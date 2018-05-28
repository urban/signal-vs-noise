# JavaScript

> This is intended as a brief introduction to the parts of JavaScript I find most useful. I'm only scratching the surface so keep exploring. There's a lot to learn.

---

## Table of Contents

## Comment Statement

Comments are useful for annotating your code with human readable explanations
that are ignored by the JavaScript parser.

```js
// This is a single-line comment.

/* This is a multi-line comment that
   can span as many lines as necessary.  */
```

> Do your future self a favor and add comments to your code.

## Data Types

JavaScript has seven data types. Six of them are primitives that are immutable
and can not be changed and the seventh is an object that can be altered.

**Primitives:**

- `boolean` type represents a logical entity that can have two values: `true` or
  `false`.
- `null` type represents the intentional absence of any other value.
- `undefined` type represents a value that has not been assigned.
- `number` type represents a double-precision floating-point number.
- `string` type represents textual content.
- `symbol` type represents a unique and immutable primitive value.

All primitives except for `null` and `undefined` in JavaScript have an object that wraps around the primitive value.

- `Boolean` for boolean primitive.
- `Number` for number primitive.
- `String` for string primitive.
- `Symbol` for symbol primitive.

Objects in JavaScript are mappings between keys and values. Values can be of any data type, including other objects while keys must be either `strings` or `symbol` values.

Functions are regular objects with the additional capability of being callable.

> Never use `null` unless it is something you don't control that returns `null`. This will simplify a lot of your code. Also, avoid using `symbol` keys in objects you intend to serialize to JSON.

## Operators

An operator is a character that represents an action. For instance, the `=` operator represents assignment.

Arithmetic operators:

- `+` addition
- `-` subtraction
- `*` multiplication
- `\\` division
- `%` remainder

String operators:

- `+` concatenation

Relational operators:

- `===` strict equality comparison
- `!==` strict not equal comparison
- `>` greater than comparison
- `<` less than comparison
- `>=` greater than or equal to comparison
- `<=` less than or equal to comparison

Logical operators

- `&&` logical and
- `||` logical or

Use `( )` for to control precedence of evaluation in expressions.

> Remember the `+` symbol is addition and concatenation.

## Ternary Expression

A ternary expression `?:` is an expression that lets you ask a question using a
comparator, and returns a different answer depending on whether or not the
expression is truthy:

```js
// (condition) ? truthyClause : falsyClause
3 * 2 === 6 ? `Yes` : `No`

// chained ternaries
2 * 2 === 6 ? `Yes` : 14 / 7 === 7 ? `Yep` : `Nope`
```

A ternary is an `if` _expression_ that evaluates to a single _value_. An `if` statement in JavaScript _does not evaluate to a value_ and must cause a side-effect or return a value from the containing function.

> Since `if` statements naturally _afford_ mutation and side-effects, they should be avoided whenever possible.

## Variable Declarations

Use `const` or `let` instead of `var`. `const` means that the identifier can't be reassigned. `let` should be used for reassignable variables. Note, `const` and `let` are both scoped to blocks.

```js
const interval = 2

let i = 0
i = i + 1
```

> Try to always use `const`. This prevents the variable from being assigned to another value and "implies" immutability even though the value can be mutated.

## Property Accessors

To access an object's properties, use the dot notation or bracket notation.

```js
const user = {firstname: `Foo`, 'last-name': `Bar`}

console.log(user.firstname)
// -> Foo

const key = `last-name`
console.log(user[key])
// -> Bar

const list = [1, 2, 3]

console.log(list[0])
// -> 1
```

> Square bracket notation is useful when dealing with property names that can't be used with dot notation.

## Literal Syntax

The following literal shorthand syntax can be used to initialize specific
objects in JavaScript.

- `[]` for Arrays
- `{}` for Objects
- `/ab+c/i` for Regular expressions

### Object Literal Notation

You can use the shorthand syntax to abbreviate property names within an object literal if the key name matches the name of the assigned variable.

```js
const name = `Foo`
const obj = {name, avatar: '/avatars/default.png'}

console.log(obj)
// -> {name: "Foo", avatar: "/avatars/default.png"}
```

A shorthand notation is also available for method definitions so that the "function" keyword is no longer necessary.

```js
const obj = {
  foo: `bar`,
  beep() {
    return `Boop!`
  },
}
```

Computed property names let you construct variable object keys.

```js
const prop = `foo`
const obj = {
  [prop]: `bar`,
  [`b` + `eep`]() {
    return `Boop!`
  },
}
```

> Use shorthand notation and computed properties names to make it easier to define complex object literals.

## Template Literals

Template literals are string literals that provides a convenient way of creating multi-line strings and embedding expressions.

```js
// template literal
const user = `World`

// with embedded expression
const greeting = `Hello ${user}`

console.log(greeting)
// -> Hello World

// multi-line string with expressions
const a = 5
const b = 10
const message = `
  Welcome ${user},
  Fifteen is ${a + b} and not ${2 * a + b}.
`

console.log(message)
// -> Welcome World,
//    Fifteen is 15 and not 20.
```

> Use template literals whenever dealing with strings. It's makes it easy to drop in variables when needed and works in almost every location except `import` statements and JSX (which is double quoted).

## Destructing Assignment

Use `destructuring` to unpack values from arrays, or properties from objects, and assign them a distinct variable names.

```js
const orders = [`112122`, `99181829`, `4998382`]
const [first, second] = orders

console.log(first)
// -> 112122

const action = {type: `NEW_ORDER`, payload: [`234434`]}
const {type, payload} = action

console.log(type)
// -> NEW_ORDER

const update = (state, {payload: products}) => state.concat(products)

console.log(update(orders, action))
// -> ["112122", "99181829", "4998382", "234434"]
```

> Destructuring is a great tool for extracting values and giving them meaningful names based on your context.

## Rest and Spread Operators

The rest operator `...` gathers function arguments into an array.

```js
const tail = (head, ...rest) => rest

console.log(tail(1, 2, 3))
// -> [2, 3]
```

The spread operator `...` allows an iterable to expand in place. This can be
used to create a shallow copy of objects and arrays.

```js
const sum = (...args) => args.reduce((total, x) => total + x)

console.log(sum(1, 2, 3))
// -> 6
const book = {
  name: `Signals`,
  author: `Urban Faubion`,
  edition: 1,
  year: 2016,
}
const newBook = {...book, edition: book.edition + 1, year: 2018}

console.log(newBook)
// -> {name: "Signals", author: "Urban Faubion", edition: 2, year: 2018}

const todos = [`Learn`]
const push = y => xs => [...xs, y]
const addTeaching = push(`Teach`)
const newTodos = addTeaching(todos)

console.log(newTodos)
// -> ["Learn", "Teach"]
```

> Rest and Spread operators are extremely useful for cloning arrays and objects. It can also be used with JSX to spread attributes.

## Scope

JavaScript has two scopes – global and local. Any variable declared outside of a
function belongs to the global scope and is accessible from anywhere. Each
function has its own scope and any variable declared within that function is
only accessible from that function and any nested functions.

```js
// global scope
const message = `Hello `

const greeting = () => {
  // local scope
  const name = `World`
  console.log(message + name + `!`)
  // -> Hello World!
}
```

> Global variables are considered a bad practice because of name collisions and it makes your code harder to share.

### Closures

A closure is the combination of a function and its scope. Variables
declared within a function body are considered local and accessible to any
function also declared within the same scope.

```js
const add = x => y => x + y
const add5 = add(5)
const add10 = add(10)

console.log(add5(2))
// -> 7
console.log(add10(2))
// -> 12
```

> Closures are very useful and enable you more advanced functional programming techniques such as partial application.

### Arrow Functions

An **arrow function** is a concise syntax for writing functions. They are anonymous and do not have their own `this`; the `this` value of the enclosing execution context is used.

Arrow functions can have either a "concise body" or the usual "block body".

```js
// concise body syntax, implied "return"
const double = x => x + x

// with block body, explicit "return" needed
const square = x => {
  return x * x
}

// returning an object literal
const fn = () => ({foo: `bar`})

const xs = [1, 2, 3].map(x => x + 1)
console.log(xs)
// -> [2, 3, 4]
```

> Use arrow function expressions everywhere except Object literals or Object constructors. They are similar to Lambdas in other languages and make higher-order-functions easier to read and write.

### Higher Order Functions

Functions that operate on other functions, either by taking them as arguments or
by returning them, are called _higher-order functions_. They let you abstract
over _actions_, not just values.

```js
const add = x => y => x + y
const add10 = add(10)

console.log(add10(5))
// -> 15
```

JavaScript Arrays have `filter`, `map`, `reduce` and more higher-order functions that allow you to write code in a Functional approach.

```js
const users = [
  {name: `Foo`, age: 21},
  {name: `Bar`, age: 42, children: [`Beep`, `Boop`]},
  {name: `Beep`, age: 12},
  {name: `Boop`, age: 3},
]

const prop = p => obj => obj[p]
const name = prop(`name`)
const age = prop(`age`)
const isChild = x => age(x) < 21
const sortBy = p => (a, b) => p(a) > p(b)
const sum = (a, b) => a + b
const sumAge = (a, b) => sum(a, age(b))
const children = xs => xs.filter(isChild).sort(sortBy(age))

const childrenNames = children(users).map(name)

console.log(childrenNames)
// -> ["Boop", "Beep"]

const totalAgeOfChildren = children(users).reduce(sumAge, 0)

console.log(totalAgeOfChildren)
// -> 15
```

> Use higher order functions whenever possible. They make your code more declarative, easier to understand, reuse and maintain.

### Default Function Parameters

Function parameters default to `undefined` however in some situations, it's useful to set a default value.

```js
const greeting = (user = `World`) => `Hello ${user}!`

console.log(greeting())
// -> Hello World!
console.log(greeting('Foo'))
// -> Hello Foo!
```

The default argument gets evaluated at call time and available to later default
parameters.

```js
const joinWith = (separator = '') => xs => xs.join(separator)

const greetings = (users, separator = `::`, join = joinWith(separator)) =>
  `Hello ${join(users)}!`

console.log(greetings(['Foo', 'Bar']))
// -> Hello Foo::Bar!
```

> Use default function parameters sparingly because conflicts with currying, partial application and other functional programming techniques.

### Named Function Arguments

Functions can take object literals as arguments. You can combine this with
destructuring and default assignment to create named function arguments.

```js
const createUser = ({
  name = `Anonymouse`,
  avatar = `/avatars/default.png`,
}) => ({
  name,
  avatar,
})
const foo = createUser({name: `Foo`})

console.log(foo)
// -> {name: "Foo", avatar: "/avatars/default.png"}
```

> Named arguments increase readability and allow you to set default values without worrying about argument order.

## Modules

There are two different types of `export`, **default** and **named**. You can only
have one default per module but multiple named exports.

```js
// named export
export const App = props => {
  // Your app code.
}
// default export
export default App
```

The `import` statement is used to import bindings which are exported by another
module.

```js
// assigns the default export to the `Foo` namespace
import foo from 'foo-module'
// assign all named exports to the `Bar` namespace
import * as bar from 'foo-module'
// assign the default export and named export
import foo, { bar } from 'foo-module
// assign a named export to a new local namespace
import { bar, beep as boop } from 'foo-module'
```

> Modules help keep you codebase simple, clean and organized.

## Promises

A `Promise` is a container for a value that is not known when the promise is created. It represents the eventual completion or failure of an asynchronous operation, and its value.

```js
fetch('/api/foo')
  .then(res => res.json())
  .then(data => {
    console.log({data})
    // -> { data: ... }
  })
  .catch(err => {
    console.error({err})
    // -> { error: ... }
  })

const delay = timeout =>
  new Promise(resolve => {
    setTimeout(resolve, timeout)
  })

delay(1000).then(() => {
  console.log('Done!')
  // -> Done!
})

Promise.all([Promise.resolve(`Hello`), delay(1000).then(() => `World!`)])
  .then(values => values.join(' '))
  .then(message => {
    console.log(message)
    // -> Hello World!
  })
```
