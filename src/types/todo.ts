export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export interface CreateTodoRequest {
  title: string;
  done: boolean;
}

export interface UpdateTodoRequest {
  title: string;
  done: boolean;
}
