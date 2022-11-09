import homePage from './views/app-home.cmp.js'
import mailPage from './views/app-mail.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import noteIndexCmp from './apps/keep/pages/note-index.cmp.js'
import aboutTeam from "./views/about-team.cmp.js"
import aboutGoals from "./views/about-goals.cmp.js"

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/keep',
			component: noteIndexCmp,
		},
		{
			path: '/about',
			component: aboutPage,
<<<<<<< HEAD
			children: [
                {
                    path: 'team',
                    component: aboutTeam,
                },                
                {
                    path: 'goals',
                    component: aboutGoals,
                },                
            ]
=======
		},{
			path: '/mail/inbox',
			component: mailPage,
>>>>>>> b3b921c8a0164339279df1748dda35cc878a3e9e
		},
	],
}

export const router = createRouter(routerOptions)
