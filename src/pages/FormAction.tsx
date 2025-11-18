import { useState } from "react"
import { Button } from "../components/ui/button"
import { Form } from "../components/ui/form"
import { Input } from "../components/ui/input"
import FormDisplayData from "./FormDisplayData"

export interface FormDataType {
    name: string
    email: string
    mobile: string
}
const FormAction = () => {




    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        mobile: "",
    })
    const [storeData, setStoreData] = useState<FormDataType[]>([])

    const handleFormSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setStoreData([...storeData, formData])
        setFormData({
            name: "",
            email: "",
            mobile: "",
        })

        console.log(storeData, "=====formData===>", formData)

    }

    return (
        <div className="p-6">
            <Form>
                <form method="post" action="#" className="space-y-6" onSubmit={(e) => handleSubmit(e)}>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Input
                                id="name"
                                value={formData.name}
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleFormSubmit}
                            />
                        </div>

                        <div>
                            <Input
                                id="email"
                                value={formData.email}
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleFormSubmit}
                            />
                        </div>

                        <div>
                            <Input
                                id="mobile"
                                value={formData.mobile}
                                type="text"
                                name="mobile"
                                placeholder="Enter mobile number"
                                onChange={handleFormSubmit}
                            />
                        </div>
                    </div>

                    <Button variant="destructive" type="button">
                        Cancle
                    </Button>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </form>
            </Form>

            <FormDisplayData storeData={storeData} />
        </div>
    )
}

export default FormAction
