let routes = [
	{
		path:'/',
		name:'layout',
		redirect:{name:'index'},
		// component:()=>import('../../views/layout.vue'),
		component:'layout',
		children:[
			{
				path:'/index',
				name:'index',
				// component:()=>import('../../views/index/index.vue')
				component:'index/index'
			}
		]
	},
	{
		path:'/login',
		name:'login',
		// component:()=>import('../../views/login/index.vue')
		component:'login/index'
	},
	{
		path:'*',
		redirect:{name:'index'},
	}
]

// 获取路由信息方法
let getRoutes = function() {
	// 自动生成路由
	createRoute(routes)
	return routes
}
// 自动生成路由 (单独在外面写一个函数是为了实现递归)
function createRoute(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(!arr[i].component) return
		// 自动生成component
		let componentFun =  import(`../../views/${arr[i].component}.vue`)
		arr[i].component = () => componentFun
		if(arr[i].children && arr[i].children.length > 0) {
			createRoute(arr[i].children)
		}
	}
}

export default getRoutes()