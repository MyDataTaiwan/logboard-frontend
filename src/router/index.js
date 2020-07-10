import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home';
// import DASHBOARD from '../pages/DashBoard.vue';
import PHOTODIARY from '../pages/PhotoDiary.vue';
import T1B2 from '../Layout/T1B2.vue';
import R2L1 from '../Layout/R2L1.vue';
import CAMP from '../pages/CAMP.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",//路由模式
	base: "/dashboard/",//部署的子路径
	routes: [
		// { path: "/", component: DASHBOARD},
		{ path: "/logboard", name: 'dashboard', component: T1B2 },
		{ path: "/photodiary", name: 'photodiary', component: R2L1 },
		{ path: "/a", component: PHOTODIARY },
		{
			// path: "/",
			path: "/:id/",
			name: 'camps',
			component: CAMP,
			meta: {
				title: '详情'
			}
		},
		// { path: "/b", component: About },
		// {path: '/', redirect: {name: 'About'}},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			meta: {
				allowAnonymous: true
			}
		},
		{
			path: '/about',
			name: 'About',
			component: About,
			meta: {
				allowAnonymous: true
			}
		},
		// {
		//     path     : '/signIn',
		//     name     : 'SignIn',
		//     component: SignIn,
		//     meta     : {
		//         breadcrumb: [{
		//             name: '登入'
		//         }]
		//     }
		// },

	]
});


///db.results[0].content.symptoms.list