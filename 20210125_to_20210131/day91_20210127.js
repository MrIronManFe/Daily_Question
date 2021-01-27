/*
Vue为什么要用vm.$set()解决对象新增属性不能响应的问题？你能说苏红如下代码的实现原理么？
Vue.set(object,propertyName,value)
vm.$set(object,propertyName,value)
 */

/*
Vue使用了Object.defineProperty实现双向数据半丁
在初始化实例时对属性执行getter/setter转化
属性必须在data对象上存在才能让Vue将它转化为响应式。这也是为什么Vue无法检测到对象属性的添加和删除
*/

/*
src/core/instance/index.js
export function set (target: Array<any> | Object, key: any, val: any): any {
 // target 为数组
 if (Array.isArray(target) && isValidArrayIndex(key)) {
   // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
   target.length = Math.max(target.length, key)
   // 利用数组的splice变异方法触发响应式
   target.splice(key, 1, val)
   return val
 }
 // key 已经存在，直接修改属性值
 if (key in target && !(key in Object.prototype)) {
   target[key] = val
   return val
 }
 const ob = (target: any).__ob__
 // target 本身就不是响应式数据, 直接赋值
 if (!ob) {
   target[key] = val
   return val
 }
 // 对属性进行响应式处理
 defineReactive(ob.value, key, val)
 ob.dep.notify()
 return val
}

实现原理是：
如果目标是数组，直接使用splice方法触发响应式
如果目标是对象，先判断属性是否存在，对象是否响应式
如果需要对属性进行响应式处理，通过调用defineReactive进行处理
defineReactive就是在Vue初始化对象是，给对象采用Object.defineProperty动态添加getter和setter的功能所调用的方法
*/