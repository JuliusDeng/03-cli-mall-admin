<template>
	<div>
		
		<el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0; overflow: hidden;">
		  <el-header class="d-flex align-items-center" 
		  style="background: #545c64;">
			  <a class="h5 text-light mb-0 mr-auto">{{$config.logo}}</a>
			  <el-menu
			    :default-active="navBar.active"
			    mode="horizontal"
			    @select="handleSelect"
			    background-color="#545c64"
			    text-color="#fff"
			    active-text-color="#ffd04b">
				
			    <el-menu-item :index="index|numToString" 
				v-for="(item,index) in navBar.list"
				:key="index">{{item.name}}</el-menu-item>
				
				 <el-submenu index="100">
				<template slot="title">
					 <el-avatar size="small" 
					 src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
					summer
				</template>
				<el-menu-item index="100-1">修改</el-menu-item>
				<el-menu-item index="100-2">退出</el-menu-item>
				</el-submenu>
				
			  </el-menu>
			  
		  </el-header>
		  <el-container style="height: 100%;padding-bottom: 60px;">
			<!-- 侧边布局 -->
			<el-aside width="200px">
				
				
				<el-menu default-active="0" @select="slideSelect">
				  <el-menu-item :index="index|numToString" :key="index"
				  v-for="(item,index) in slideMenus">
					<i :class="item.icon"></i>
					<span slot="title">{{item.name}}</span>
				  </el-menu-item>
				</el-menu>
				
				
			</el-aside>
			<!-- 主布局 -->
			<el-main>
				<li v-for="i in 100" :key="i">{{i}}</li>
			</el-main>
		  </el-container>
		</el-container>
		
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	import common from "@/common/mixins/common.js"
	export default {
		mixins:[common],
		data() {
			return {
				 navBar: []
			}
		},
		created() {
			// 初始化菜单
			this.navBar = this.$config.navBar
			console.log(this.navBar);
		},
		computed: {
			slideMenuActive:{
				get(){
					return this.navBar.list[this.navBar.active].subActive || '0'
				},
				set(val){
					this.navBar.list[this.navBar.active].subActive = val
				}
			},
			slideMenus() {
				return this.navBar.list[this.navBar.active].submenu || []
			}
		},
		methods: {
		  handleSelect(key, keyPath) {
			this.navBar.active = key
		  },
		  slideSelect(key, keyPath) {
			this.slideMenuActive = key
		  },
		}
	}
</script>

<style>

</style>
