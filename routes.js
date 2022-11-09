import homePage from './views/app-home.cmp.js'
import mailPage from './views/app-mail.cmp.js'
import aboutPage from './views/app-about.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},{
			path: '/mail',
			component: mailPage,
		},
	],
}

export const router = createRouter(routerOptions)
