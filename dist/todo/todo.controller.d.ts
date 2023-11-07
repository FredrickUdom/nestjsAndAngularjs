import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { todoDto } from '../dto/todo.dto';
import { TodoStatus } from './enum/todo.enum';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(payload: todoDto): Promise<Todo>;
    Update(status: TodoStatus, id: number): Promise<void>;
    deleteTodo(id: any): Promise<{
        message: string;
    }>;
    findALlTodo(): Promise<void>;
}
