##  SPA单页页面的理解正确的是？
1.  用户体验好，快，但是内容的改变需要重新加载整个页面，会造成不必要的跳转和重复渲染
2.  前后端职责分离，架构清洗，前端进行交互逻辑，后端负责数据处理
3.  初次加载耗时多：为实现单页Web应用功能及显示效果，需要在加载页面的时候将JS、CSS同一家在，部分页面按需加载
4.  前进后退路由管理需要使用浏览器的前进后退功能
5。 SEO难度较大：所有的内容都在一个页面中动态替换显示，所以在SEO上有着天然的弱势

答案：2，3，5

SPA优点：
    用户体验好、快，内容的该表不需要重新加载整个页面，避免了不必要的跳转和重复渲染
    基于上面一点，spa相对对服务器压力小
    前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理。

spa缺点：
    初次加载耗时多，加载时需要把js、css统一加载，部分页面按需加载
    前进后退路由管理，单页应用在一个页面中显示所有的内容，所以浏览器的前进后退功能不能用，需要自己建立堆栈管理
    SEO难度较大，所有内容都在一个页面中动态替换显示，所以SEO上天然弱势