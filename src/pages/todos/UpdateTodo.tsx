import { useActionState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { todoService } from "../../services/api"
import type { Todo } from "../../types/todo"

interface FormState {
    error?: string
    success?: boolean
}

interface UpdateTodoProps {
    updateTodo: Todo
    onTodoUpdated: () => void
    onCancel: () => void
}

const UpdateTodo = ({ updateTodo, onTodoUpdated, onCancel }: UpdateTodoProps) => {
    const submitTodo = async (prevState: FormState, formData: FormData): Promise<FormState> => {
        const title = formData.get("title") as string

        if (!title || title.trim() === '') {
            return { error: "Title is required", success: false }
        }

        try {
            // Make sure updateTodo.id is a number
            await todoService.update(updateTodo.id, {
                title: title.trim(),
                done: updateTodo.done
            })
            return { success: true, error: undefined }
        } catch (error) {
            console.error("Update error:", error)
            return { error: "Failed to update todo", success: false }
        }
    }

    const [state, formAction, isPending] = useActionState(submitTodo, {
        error: undefined,
        success: false
    })

    useEffect(() => {
        if (state?.success && onTodoUpdated) {
            onTodoUpdated()
        }
    }, [state?.success, onTodoUpdated])

    return (
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-3">Edit Todo (ID: {updateTodo.id})</h3>
            <form action={formAction}>
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Todo title"
                        name='title'
                        disabled={isPending}
                        defaultValue={updateTodo?.title}
                        key={updateTodo.id} // Add key to reset when todo changes
                    />
                    <Button type="submit" variant="outline" disabled={isPending}>
                        {isPending ? "Updating..." : "Update"}
                    </Button>
                    <Button type="button" variant="ghost" onClick={onCancel} disabled={isPending}>
                        Cancel
                    </Button>
                </div>

                {state?.error && (
                    <p className="text-red-500 text-sm mt-2">{state.error}</p>
                )}
            </form>
        </div>
    )
}

export default UpdateTodo