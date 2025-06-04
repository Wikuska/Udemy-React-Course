import Input from "./Input"

export default function NewProject() {
    return (
        <div className="flex flex-col basis-4/5 items-center">
            <div>
                <button className="p-2">Cancel</button>
                <button className="bg-green-500 p-2 rounded-lg hover:bg-emerald-500">Save</button>
            </div>
            <Input title="TITLE" type="text" />
            <Input title="DESCRIPTION" type="textarea"/>
            <Input title="DUE DATE" type="date" />
        </div>
    )
}