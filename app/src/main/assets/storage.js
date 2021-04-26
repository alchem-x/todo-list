const TODO_LIST = 'TODO_LIST'

export function queryTodoList() {
    return JSON.parse(localStorage.getItem(TODO_LIST) || '[]')
}

export function saveTodoList(todoList = []) {
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
}