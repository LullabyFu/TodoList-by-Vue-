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
      <ul>
        <doneitem
        :donelist="doneList"
        @changeItem="addTodoList"
        @delete-item="deleteItem"
        ></doneitem>
      </ul>
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
      var r = this.todoList.filter(function(x){
        if(x.text == item.text && x.id == item.id){
          return true;
        }
      })
      this.todoList.splice(this.todoList.indexOf(r[0]), 1);
      this.doneList.unshift(r[0]);
    },

    addTodoList: function(item) {
      var r = this.doneList.filter(function(x){
        if(x.text == item.text && x.id == item.id){
          return true;
        }
      })
      this.doneList.splice(this.doneList.indexOf(r[0]), 1);
      this.todoList.push(r[0]);
    },

    newItem: function(newtext){
      this.todoList.push({ text: newtext, id: ++this.itemCount, edit: false })
      // console.log(this.todoList);
    },

    deleteItem: function(item, type) {
      if(type == 'todo') {
        var r = this.todoList.filter(function(x){
          if(x.text == item.text && x.id == item.id){
            return true;
          }
        })
        this.todoList.splice(this.todoList.indexOf(r[0]), 1);
      }
      else {
        var r = this.doneList.filter(function(x){
          if(x.text == item.text && x.id == item.id){
            return true;
          }
        })
        this.doneList.splice(this.doneList.indexOf(r[0]), 1);
      }
    },

    changeText: function(newtext, itemNum){
      this.todoList[itemNum].text = newtext
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

