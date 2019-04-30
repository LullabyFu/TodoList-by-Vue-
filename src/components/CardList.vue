<template>
	<div class="cardlist">
		<ul>
			<li v-for="user in users" :key="user.id">
				{{ user.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'cardlist',
	data() {
		return {
			users: []
		}
	},

	created() {
		//原生XHR
		// var that = this
		// var request = new XMLHttpRequest()
		// request.onreadystatechange = function() {
		// 	if(request.readyState ==4) {
		// 		if(request.status == 200) {
		// 			console.log('success')
		// 			that.users = JSON.parse(request.response)
		// 		}
		// 		else{

		// 		}
		// 	}
		// 	else{
		// 		console.log('loading')
		// 	}
		// }
		// request.open('GET', 'http://jsonplaceholder.typicode.com/users')
		// request.send()

		//axios
		this.axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
			this.users = response.data
		}).catch((error) => {
			console.log(error)
		})

	}
}
</script>

<style scoped>
ul {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
}
li {
	border: 1px solid grey;
	flex-basis: 200px;
	flex-grow: 1;
	margin: 10px;
	padding: 30px;
	box-sizing: border-box;
}
</style>



