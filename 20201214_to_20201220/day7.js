var fullname = 'a'
var obj = {
    fullname: 'b',
    prop: {
        fullname: 'c',
        getFullname: function () {
            return this.fullname
        }
    }
}
var test = obj.prop.getFullname;
console.log(obj.prop.getFullname())
console.log(test())
console.log(obj.prop.getFullname.call(obj))


/*
答案： c,a
谁调用指向谁，第一个调用的是(obj.prop)而不是obj。
第二个把引用传到test了，test是全局，so
*/