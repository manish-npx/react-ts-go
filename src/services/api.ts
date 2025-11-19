import type { CreateTodoRequest, Todo, UpdateTodoRequest } from "../types/todo";

const API_BASE_URL = "http://localhost:8080/api";

export const todoService = {
  async getAll(): Promise<Todo[]> {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      mode: "cors", // Add this to all methods
    });
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
  },

  async getById(id: string): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      mode: "cors",
    });
    if (!response.ok) throw new Error("Failed to fetch todo");
    return response.json();
  },

  async create(todo: CreateTodoRequest): Promise<Todo> {
    // ✅ Fix parameter type - should be single todo, not array
    const response = await fetch(`${API_BASE_URL}/todos/create`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("Failed to create todo");
    return response.json();
  },

  async update(id: string, todo: UpdateTodoRequest): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) throw new Error("Failed to update todo");

    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
      mode: "cors",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
  },
};
