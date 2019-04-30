<template>
  <div class="article">
		<!-- 未加name的情况下传入的内容会被应用于每个插槽上 -->
		<p>插槽内未加name</p>
		<slotcomp>Hello</slotcomp>   

		<!-- 给插槽添加name,v-slot只能加在template -->
		<p>插槽加name</p>
		<slotcomp>
			<template v-slot:header>
				<h1>Here is h1</h1>
			</template>
			<template v-slot:footer>
				<h1>Here is footer</h1>
			</template>
			hello
		</slotcomp>

		<br>

		<slotcomp>
			<!-- <template v-slot:bind1="users">
				{{ users.user.name }}
			</template> -->
			<template v-slot:bind1>
				hello
			</template>
		</slotcomp>
  </div>
</template>

<script>
import slotcomp from '@/components/slotComp.vue'

export default {
		name: "article-hello",
		components: {
			slotcomp
		},
		data() {
			return {
				users: {
					name: 'Janice',
					fullName: 'Fu	'	
				}
			}
		}
}
</script>

