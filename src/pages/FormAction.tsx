import { useActionState } from "react"
import { Button } from "../components/ui/button"
import { Form } from "../components/ui/form"
import { Input } from "../components/ui/input"
import FormDisplayData from "./FormDisplayData"

export interface FormDataType {
    name: string
    email: string
    mobile: string
}

const submitForm = async (prevState: FormDataType[], formData: FormData) => {

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const mobile = formData.get("mobile") as string

    const newData: FormDataType = { name, email, mobile }

    return [...prevState, newData]
}



const FormAction = () => {


    const [storeData, formAction, isPending] = useActionState(submitForm, [])



    return (
        <div className="p-6">
            <Form>
                <form method="post" action={formAction} className="space-y-6" >

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <Input
                                id="mobile"
                                type="text"
                                name="mobile"
                                placeholder="Enter mobile number"
                            />
                        </div>
                    </div>

                    <Button variant="destructive" type="button">
                        Cancle
                    </Button>
                    <Button variant="secondary" type="submit" disabled={isPending}>
                        {isPending ? "Submitting" : "Submit"}
                    </Button>
                </form>
            </Form>

            <FormDisplayData storeData={storeData} />
        </div>
    )
}

export default FormAction
