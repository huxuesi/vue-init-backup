import Vue from 'vue'
import Router from 'vue-router'

// 路由模块
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/HelloWorld2'
import notFound from '@/components/notFound'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/hello',
            name: 'hello',
            component: hello
        },
        {
            path: '/*',
            name: 'notFound',
            component: notFound
        },
    ]
})

/* 路由拦截 */
router.beforeEach((to, from, next) => {
    console.log(`从 ${from.name || '无'} 到 ${to.name}`)
    console.log(to)
    next()
})

export default router
