import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../components/ui/table"
import type { FormDataType } from "./FormAction"

const FormDisplayData = ({ storeData }: { storeData: FormDataType[] }) => {
    return (
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
                {storeData.map((vl, index) => (
                    <TableRow key={index}>
                        <TableCell className="whitespace-nowrap font-medium">
                            {`IND-${index + 1 * 1000}`}
                        </TableCell>
                        <TableCell>{vl.name}</TableCell>
                        <TableCell>{vl.email}</TableCell>
                        <TableCell>{vl.mobile}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default FormDisplayData
