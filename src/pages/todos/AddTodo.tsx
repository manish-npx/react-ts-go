import { useActionState, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { todoService } from '../../services/api'

// Define the state type
interface FormState {
    error?: string
    success?: boolean
}

// This function should handle the form submission
const submitTodo = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    const title = formData.get("title") as string

    if (!title || title.trim() === '') {
        return { error: "Title is required", success: false }
    }
    // Create the todos via API
    try {

        await todoService.create({
            title: title.trim(),
            done: false
        })
    } catch (error) {
        console.error("error==>", error)

    }

    // Clear the form on success
    return { success: true, error: undefined }
}

const AddTodo = ({ onTodoAdded }: { onTodoAdded?: () => void }) => {
    const [state, formAction, isPending] = useActionState(submitTodo, {
        error: undefined,
        success: false
    })

    // Use useEffect to handle the side effect of refreshing the todo list
    useEffect(() => {
        if (state?.success && onTodoAdded) {
            onTodoAdded()
        }
    }, [state?.success, onTodoAdded])

    return (
        <form action={formAction}>
            <div className="flex w-full max-w-sm items-center gap-2 mb-6">
                <Input
                    type="text"
                    placeholder="Todo title"
                    name='title'
                    disabled={isPending}
                    key={state?.success ? 'reset' : 'normal'} // This helps reset the form
                />
                <Button type="submit" variant="outline" disabled={isPending}>
                    {isPending ? "Adding..." : "Add"}
                </Button>
            </div>

            {/* Show error message */}
            {state?.error && (
                <p className="text-red-500 text-sm mt-2">{state.error}</p>
            )}
        </form>
    )
}

export default AddTodo