function foo() {
    console.log(length);
}
function bar() {
    var length = "京程一灯";
    foo();
}
bar();

// 0 (页面iframe数量)
