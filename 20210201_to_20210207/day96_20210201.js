// 请尽可能多的说出Vue组件间通信方式？在组件的通信中eventBus非常经典,你能手写实现下EventBus么?
// 主要是以下3类通信：父子间，隔代，兄弟间
/*
1.props/$emit
适用于父子间通信，基础就不聊了

2.ref和$paretn/$children
适用于父子间通信
ref：如果在普通的dom元素上使用，引用指向的就是Dom元素；如果用在子组件上，引用就指向组件实例
$parent/$children:访问父/子实例

3.eventBus($emit/$on)
适用于父子、隔代、兄弟间通信
使用一个空的Vue实例作为总线，触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件

4.$arrts/$listeners
适用于隔代组件通信
$attrs:包含了父作用域中不被prop所识别(且获取)的特性绑定（class和style除外）。当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定（class和style除外），并且可以通过v-bind="$attrs"传入内部组件。通常配合inheriAttrs选项一起使用。
$listeners，包含了父作用域中的（不含.native修饰器的）v-on事件监听器。它可以通过v-o="$listeners"传入内部组件

5.provide/inject
适用于隔代组件通信
祖先组件中通过provider来提供变量，然后再子孙组件中通过inject来注入变量
provide/inject主要解决了跨级组件间通信的问题。不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系

6.Vuex
适用于父子、隔代、兄弟组件通信
Vuex是一个专门为Vue.js应用程需开发的状态管理模式。每一个Vuex应用的核心就是store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态（state）
Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效更新。
改变store中的状态的唯一途径就是显示地提交(commit)mutation.这样使我们可以方便地跟踪每一个状态的变化
*/

// 手写eventBus
// 组件通信，一个触发与监听的过程
class EventEmitter {
    constructor() {
            // 存储事件
            this.events = this.events || new Map()
        }
        // 监听事件
    addListener(type, fn) {
            if (!this.events.get(type)) {
                this.events.set(type, fn)
            }
        }
        // 触发事件
    emit(type) {
        let handle = this.events.get(type)
        handle.apply(this, [...arguments].slice(1))
    }
}
// 测试
let emitter = new EventEmitter()
    // 监听事件
emitter.addListener('ages', age => {
        console.log(age)
    })
    // 触发事件
emitter.emit('ages', 18) // 18