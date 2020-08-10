import Vue from 'vue';
import VueRouter from 'vue-router';
// import DASHBOARD from '../pages/DashBoard.vue';
// import PHOTODIARY from '../pages/PhotoDiary.vue';
import T1B2 from '../Layout/T1B2.vue';
import R2L1 from '../Layout/R2L1.vue';
import CAMP from '../pages/CAMP.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",//路由模式
	// mode: "hash",//路由模式
	// base: "/dashboard/",//部署的子路径
	base: "/",//部署的子路径
	routes: [
		// { path: "/", component: DASHBOARD},
		// { path: "/logboard", name: 'dashboard', component: T1B2 },
		{
			path: "/:id/",
			name: 'dashboard',
			component: T1B2,
			meta: {
				title: 'MYdata-LogBoard',
				allowAnonymous: true
			}
		},
		{ path: "/photodiary/:id/", name: 'photodiary', component: R2L1 },
		{ path: "/camps/:id/", name: 'camps', component: CAMP },
	]
});


///db.results[0].content.symptoms.list
