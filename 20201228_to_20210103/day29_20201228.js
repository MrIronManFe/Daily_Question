/*
下面代码中，a什么时候会打印1
var a = ?;
if(a == 1 && a== 2 && a== 3){
     console.log(1);
}
*/
let a = {}
Object.defineProperties(a, value, {
    get: function() {
        console.log(this.value)
        if (this.value == 0) {
            return this.value = 1
        } else {
            return this.value++
        }
    },
    set: function(value) {
        this.value = value
    }
})