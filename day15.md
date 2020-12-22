##  下面对Vue.js中keep-alive的理解正确的是？（多选）
1.  一般结合路由和动态组件一起使用，用于缓存组件；
2.  提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 include  的优先级比 exclude 高；
3.  对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。
4.  keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，但是不能避免重新渲染

答案：1/3

include的优先级比exclude低，可以避免重复渲染