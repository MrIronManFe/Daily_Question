let foo = {
    bar: function () {
        return this.baz;
    },
    baz: 1
}
console.log(typeof (f = foo.bar)())

/*
答案:undefined
将foo.bar赋值给f,相对于f()，所以this指向window，typeof 一个undefined就是undefined
*/