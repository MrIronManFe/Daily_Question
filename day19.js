const person = { name: "yideng" };

function sayHi(age) {
    return `${this.name} is ${age}`;
}

let a = sayHi.bind(person, 5)

console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));
console.log(a());

// yideng is 5
// function bla bla

/*
改变this的指向，但是call会立即执行。
bind不会，返回的新的函数的拷贝，但是带有执行上下文，并不会立即执行

bind和call后面接受的都是参数列表而不是参数数组，接受参数数组的是apply
*/