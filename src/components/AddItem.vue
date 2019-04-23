<template>
		<form @submit="createItem()">
			<label for="addNew">Start New</label>
			<input type="text" id="addNew" autocomplete="off" placeholder="add Todo" v-model="newText">
			<input type="submit" value="Add">
		</form>
</template>

<script>
export default {
    name: 'additem',

    data() {
      return {
				newText: ''
      }
    },

    methods: {
			createItem: function(){
				event.preventDefault()
				this.$emit('add-item', this.newText)
				this.newText = ''
			}
    }
}
</script>

<style scoped>
form{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	font-weight: bold;
}
#addNew{
	border: none;
	outline: none;
  border-radius: 0.5em;
  height: 1.5em;
  width: 65%;
  box-shadow: 0 0 0.2em 0.1em #c9c7c7 inset;
  padding: 0.5em;
  margin: 0.5em;
}
</style>

