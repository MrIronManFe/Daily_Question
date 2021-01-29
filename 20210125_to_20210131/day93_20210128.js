// Vue组件中写name选项有除了搭配keep-alive还有其他作用么？你能谈谈你对keep-alive了解么？（平时使用和源码实现方面)

/*
组件中写name选项有什么作用？
1.项目使用keep-alive时，可搭配组件name进行缓存过滤
2.Dom做递归组件时序号要调用自身name
3.Vue-devtools调式工具里显示得组件名称是由vue中组件name决定的。
*/

/*
keep-alive使用
1.keep-alive是vue内置的一个组件，可以使被包含的组件保留状态，避免重新渲染
2.一般结合路由和动态组件一起使用，用户缓存组件
3.提供include和exclude属性，两者都支持字符串或者正则表达式，include表示只有名称匹配的组件会被缓存,exclude表示任何名称匹配的组件都不会被缓存，其中exclude的优先级比include高
4.对应两个勾子函数activated和deactivated，当组件被激活时，触发狗子函数activated,当组件被移除时，触发钩子函数deactivated.
*/

// 源码实现
// 大概的分析源码，我们发现和我们定义组件的过程一样，先是设置组件名为keep-alive，其次定义了一个abstract属性，值为true。这个属性在vue的官方教程并没提及，其实是一个需虚组件，后面渲染过程会利用这个属性。props属性定义了keep-alive组件支持的全部参数
// 源码位置：src/core/components/keep-alive.js
export default {
    name: 'keep-alive',
    abstract: true, // 判断当前组件虚拟dom是否渲染成真是dom的关键

    props: {
        include: patternTypes, // 缓存白名单
        exclude: patternTypes, // 缓存黑名单
        max: [String, Number] // 缓存的组件实例数量上限
    },

    created() {
        this.cache = Object.create(null) // 缓存虚拟dom
        this.keys = [] // 缓存的虚拟dom的健集合
    },

    destroyed() {
        for (const key in this.cache) { // 删除所有的缓存
            pruneCacheEntry(this.cache, key, this.keys)
        }
    },

    mounted() {
        // 实时监听黑白名单的变动
        this.$watch('include', val => {
            pruneCache(this, name => matches(val, name))
        })
        this.$watch('exclude', val => {
            pruneCache(this, name => !matches(val, name))
        })
    },

    render() {
        // .....
    }
}

// 接下来重点分析keep-alive在它声明周期内定义了三个钩子函数
created
// 初始化两个对象分别换从VNode(虚拟dom)和VNode对应的健集合