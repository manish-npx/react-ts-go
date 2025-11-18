import { useEffect, useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { todoService } from "../../services/api"
import type { Todo } from "../../types/todo"


const AddTodo = () => {
    return (
        <div className="flex w-full max-w-sm items-center gap-2 mb-6">
            <Input type="text" placeholder="Todo title" />
            <Button type="button" variant="outline">
                Add
            </Button>
        </div>
    )
}


const Todos = () => {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const res = await todoService.getAll()
                console.log("API Response:", res, Array.isArray(todos)) // Debug log
                setTodos(res)
            } catch (err) {
                console.error("Failed to load todos", err)
            }
        }
        handleFetch()
    }, [])


    console.log("todos", todos)


    return (
        <>
            <h1>Add Todo </h1>
            <AddTodo />

            <Table className="w-full table-fixed">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[120px] text-left">ID</TableHead>
                        <TableHead className="text-left">Name</TableHead>
                        <TableHead className="text-left">Email</TableHead>
                        <TableHead className="text-left">Mobile</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {Array.isArray(todos) && todos.length > 0 && todos.map((vl, index) => (
                        <TableRow key={index}>
                            <TableCell className="whitespace-nowrap font-medium">
                                {`IND-${vl.id + 1 * 1000}`}
                            </TableCell>
                            <TableCell>{vl.title}</TableCell>
                            <TableCell>{vl.done}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    )
}

export default Todos