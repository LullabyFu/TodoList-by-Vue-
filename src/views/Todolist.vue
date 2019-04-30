<template>
  <div class="about">
    <div id="list">

      <additem @add-item="newItem"></additem>

      <h2>Todo</h2>
      <todoitem 
        :todolist="todoList"
        @change-item="addDoneList($event)"
        @delete-item="deleteItem"
        @change-text="changeText">
      </todoitem>

      <h2>Finished</h2>
        <doneitem
        :donelist="doneList"
        @changeItem="addTodoList"
        @delete-item="deleteItem"
        ></doneitem>
    </div>
  </div>
</template>

<script>
import todoitem from '@/components/TodoItem.vue'
import doneitem from '@/components/DoneItem.vue'
import additem from '@/components/AddItem.vue'

export default {
  name: 'todolist',
  components: {
    todoitem, doneitem, additem
  },
  data() {
    return {
      todoList: [
        // { text: 'hello', id: 1, edit:false},
        // { text: 'world', id: 2, edit:false},
      ],
      doneList: [],
      itemCount: 0//2
    }
  },
  methods: {
    addDoneList: function(item) {
      this.doneList.unshift(this.todoList[item]);
      this.todoList.splice(item, 1);
      this.saveList()
    },

    addTodoList: function(item) {
      this.todoList.push(this.doneList[item]);
      this.doneList.splice(item, 1);
      this.saveList()
    },

    newItem: function(newtext){
      this.todoList.push({ text: newtext, id: ++this.itemCount, edit: false })
      // console.log(this.todoList);
      this.saveList()
    },

    deleteItem: function(item, type) {
      if(type == 'todo') {
        this.todoList.splice(item, 1);
      }
      else {
        this.doneList.splice(item, 1);
      }
      this.saveList()
    },

    changeText: function(newtext, itemNum){
      this.todoList[itemNum].text = newtext
      this.saveList()
    },

    saveList: function() {
      var storage = window.localStorage
      storage.setItem('todolist', JSON.stringify(this.todoList))
      storage.setItem('donelist', JSON.stringify(this.doneList))
      storage.setItem('itemCount', this.itemCount)
      console.log('save success')
    }
  },

  created() {
    var storageTodo = window.localStorage.getItem('todolist')
    if(storageTodo != null) {
      this.todoList = JSON.parse(storageTodo)
    } else {
      this.todoList = []
    }

    var storageDone = window.localStorage.getItem('donelist')
    if(storageDone != null) {
      this.doneList = JSON.parse(storageDone)
    } else {
      this.doneList = []
    }
    var itemCount = window.localStorage.getItem('itemCount')
    if(itemCount != null) {
      this.itemCount = itemCount
    } else {
      this.itemCount = 0
    }
  }
}
</script>

<style scoped>
.about{
  margin: 50px 0 0 0;
}
ul{
  padding: 0;
  margin: 0;
  margin-bottom: 1em;
}
#list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid black; */
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
}
h2{
  font-size: 2em;
  text-align: left;
  /* border: 1px solid black; */
  margin: 0;
}
</style>

