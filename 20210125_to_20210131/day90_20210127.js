/*
Vue父组件可以监听到子组件的声明周期嘛?如果能请你写出你的实现方法
*/


/*
1.emit咯，最最最普通的
// Parent.vue
<Child @mounted="doSomething"/>

// Child.vue
mounted() {
  this.$emit("mounted");
}
*/

/*
2.用hook
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
  console.log('父组件监听到 mounted 钩子函数 ...');
},

//  Child.vue
mounted(){
  console.log('子组件触发 mounted 钩子函数 ...');
},

// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...
*/

// https://ustbhuangyi.github.io/vue-analysis/v2/components/lifecycle.html#beforecreate-created
// https://www.cnblogs.com/mengfangui/p/12546866.html