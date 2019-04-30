<template>
  <ul>
    <li v-for="item in todolist" :key="item.id">
      <input type="checkbox" @change="changeitem(item)">
      <form @submit.prevent="changeText(item)" v-if="item.edit" class="re-edit" >
        <input type="text"
        required="required" autofocus  
        v-model="reText">
      </form>
      <p v-if="!item.edit">{{ item.text }}</p>
      <button @click="reEdit(item)"></button>
      <button @click="deleteItem(item)">x</button>
    </li>
  </ul>
</template>

<script>

export default {
	name: 'todoitem',
	props: {
    todolist: Array
	},
	data() {
		return {
      reText: ''
		}
	},
	methods: {
		changeitem: function(item) {
      this.$emit('change-item', this.todolist.indexOf(item))
    },
    
    deleteItem: function(item) {
      this.$emit('delete-item', this.todolist.indexOf(item), "todo")
    },

    reEdit: function(item) {
      if(!item.edit) {
        item.edit = true
        this.reText = item.text
      }
      else {
        this.changeText(item)
      }
    },

    changeText: function(item){
      //event.preventDefault()
      item.edit = false
      console.log(this.reText)
      // this.$emit('change-text', this.reText, { text: item.text, id: item.id })
      this.$emit('change-text', this.reText, this.todolist.indexOf(item))
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
	background-color: rgb(11, 192, 11);
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

.re-edit{
	width: 85%;
	text-align: left;
	margin-left: 0.2em;
  padding: 0;
}
.re-edit input{
  width: 100%;
  height: 1.2em;
  font-size: 1.2em;
  outline: none;
}

button{
	height: 1.8em;
	width: 1.8em;
	margin-left: 0.6em;
}
</style>

