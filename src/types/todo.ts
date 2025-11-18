export interface Todo {
  id: number;
  title: string;
  done: boolean;
  create_time?: string; // Optional if your Go API returns it
}

export interface CreateTodoRequest {
  title: string;
  done?: boolean;
}

export interface UpdateTodoRequest {
  title: string;
  done: boolean;
}
