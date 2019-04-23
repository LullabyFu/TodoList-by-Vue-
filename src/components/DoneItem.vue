<template>
	<ul>
		<li v-for="item in donelist" :key="item.id">
			<input type="checkbox" id="check-box" checked @change="changeitem(item)">
			<p>{{ item.text }}</p>
			<button @click="deleteItem(item)">x</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'todoitem',
	props: {
		donelist: Array
	},
	methods: {
		changeitem: function(item) {
			this.$emit('changeItem', { text: item.text, id: item.id })
		},

		deleteItem: function(item) {
			this.$emit('delete-item', { text: item.text, id: item.id }, 'done')
		}
	}
}
</script>

<style scoped>
li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style-type: none;
	/* border: 1px solid black; */
	margin: 0 0 .5em 0;
	background-color: rgb(148, 151, 148);
	height: 3em;
	padding: 0 0.8em 0 0.5em;
	border-radius: 0.5em;
}

input[type="checkbox"]{
	width: 2em;
	height: 2em;
}

p{
	font-size: 1.5em;
	width: 85%;
	text-align: left;
	margin-left: 0.2em;
}

button{
	height: 1.8em;
	width: 1.8em;
	margin-left: 0.6em;
}
</style>

