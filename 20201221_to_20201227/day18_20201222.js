const num = {
    a: 10,
    add() {
        return this.a + 2;
    },
    reduce: () => this.a - 2
};
console.log(num.add());
console.log(num.reduce());

// 12,NaN
/*
考察箭头函数，箭头函数this指向父级所在的上下文，定义时候的位置，指向window。所以a是undefined,undefined-2=NAN
*/