import Input from "./Input"

export default function NewProject({onClick}) {
    return (
        <div className="flex flex-col basis-4/5 items-center">
            <div>
                <button onClick={() => onClick("noProject")} className="p-2">Cancel</button>
                <button onClick={() => onClick("noProject")} className="bg-green-500 p-2 rounded-lg hover:bg-emerald-500">Save</button>
            </div>
            <Input title="TITLE" type="text" />
            <Input title="DESCRIPTION" type="textarea"/>
            <Input title="DUE DATE" type="date" />
        </div>
    )
}