import http from 'http';
import { TodoListService } from './todolist-service.js';

const PORT = 3000;
const service = new TodoListService();
const server = http.createServer((req, res) => {
    /**
     * Check if the request is for the root path
     */
    // res.write("Todolist API")
    // res.end()

    res.setHeader("Content-Type", "application/json");

    /**
     * GET /todolist
     */
    if(req.method === "GET"){               // method GET
        service.getTodoList(req, res);
    } else if (req.method === "POST"){      // method POST
        service.createTodo(req, res);
    } else if (req.method === "PUT"){
        service.updateTodo(req, res);       // method PUT
    } else if (req.method === "DELETE"){
        service.deleteTodo(req, res);       // method DELETE
    }
})

server.listen(PORT || 3000, () => {
    console.log(`Server running on port ${PORT}`)
})