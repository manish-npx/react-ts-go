import { useEffect, useState } from "react"
import { Button } from "../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { todoService } from "../../services/api"
import type { Todo } from "../../types/todo"
import AddTodo from "./AddTodo"
import UpdateTodo from "./UpdateTodo"

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

    const fetchTodos = async () => {
        try {
            setLoading(true)
            const res = await todoService.getAll()
            setTodos(res)
        } catch (err) {
            console.error("Failed to load todos", err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const handleUpdate = (todo: Todo) => {
        setEditingTodo(todo)
    }

    const handleTodoUpdated = () => {
        setEditingTodo(null)
        fetchTodos() // Refresh the list
    }

    const handleCancelEdit = () => {
        setEditingTodo(null)
    }

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this todo?")) {
            try {
                await todoService.delete(id)
                fetchTodos() // Refresh the list
            } catch (error) {
                console.error("Failed to delete todo:", error)
            }
        }
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-6">
                <div className="text-center">Loading todos...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

            {/* Show Update Form when editing, otherwise show Add Form */}
            {editingTodo ? (
                <UpdateTodo
                    updateTodo={editingTodo}
                    onTodoUpdated={handleTodoUpdated}
                    onCancel={handleCancelEdit}
                />
            ) : (
                <div className="mb-6">
                    <AddTodo onTodoAdded={fetchTodos} />
                </div>
            )}

            <div className="overflow-x-auto">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-center">ID</TableHead>
                            <TableHead className="text-center">Title</TableHead>
                            <TableHead className="w-[120px] text-center">Status</TableHead>
                            <TableHead className="w-[120px] text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {todos.length > 0 ? (
                            todos.map((todo) => (
                                <TableRow key={todo.id} className="text-center">
                                    <TableCell className="font-medium">
                                        {todo.id}
                                    </TableCell>
                                    <TableCell>{todo.title}</TableCell>
                                    <TableCell>
                                        <input
                                            type="checkbox"
                                            checked={todo.done}
                                            readOnly
                                            className="mx-auto"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-center space-x-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleUpdate(todo)}
                                                disabled={editingTodo?.id === todo.id}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                onClick={() => handleDelete(todo.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500">
                                    No todos found. Add your first todo above!
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Todos