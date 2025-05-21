/**
 * TodoList data service
 */
export class TodoListService {
    todoList = ["Programmer", "Belajar", "Makan"];

    /**
     * 
     * @returns {string}
     * 
     * Get the todolist in JSON format
     */
    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todoList.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(req, res){
        res.write(this.getJsonTodoList());
        res.end()
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * 
     * Create a new todo 
     */
    createTodo(req, res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo);

            res.write(this.getJsonTodoList());
            res.end();
        })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * 
     * Update a todo
     */
    updateTodo(req, res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

            if(this.todoList[body.id]){
                this.todoList[body.id] = body.todo;
            }

            res.write(this.getJsonTodoList());
            res.end();
        })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * 
     * Delete a todo
     */
    deleteTodo(req, res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

            if(this.todoList[body.id]){
                // delete this.todoList[body.id]; // delete by index (not recommended)
                this.todoList.splice(body.id, 1);
            }

            res.write(this.getJsonTodoList());
            res.end();
        })
    }
}
