import TodoItem from './TodoItem.js'
import Toolbar from './Toolbar.js'
import { queryTodoList, saveTodoList } from './storage.js'

export default {
    template: `
      <div class="p-4 max-w-sm mx-auto">
      <h2 class="text-2xl">待办事项（{{ todoList.length }}）</h2>
      <TodoItem v-for="(it, index) of todoList" :key="it.title"
                @delete="handleDeleteTodo" @check="handleCheckTodo" :index="index + 1"
                :item="it" />
      <Toolbar @add="handleAddTodo" />
      </div>
    `,
    components: {
        Toolbar,
        TodoItem,
    },
    data() {
        return {
            todoList: queryTodoList(),
        }
    },
    methods: {
        handleAddTodo(ev) {
            this.todoList.push(ev)
            saveTodoList(this.todoList)
        },
        handleDeleteTodo(ev) {
            this.todoList = this.todoList.filter((_, index) => index + 1 !== ev)
            saveTodoList(this.todoList)
        },
        handleCheckTodo(ev) {
            this.todoList = this.todoList.map((it, index) => {
                if (index + 1 === ev.index) {
                    return {
                        ...it,
                        done: ev.checked
                    }
                } else {
                    return { ...it }
                }
            })
            saveTodoList(this.todoList)
        }
    },
}
