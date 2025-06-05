import { useRef } from "react"
import Input from "./Input"

export default function NewProject({onAdd}) {
    let title = useRef();
    let description = useRef();
    let dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = title.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <div className="flex flex-col basis-4/5 items-center">
            <div>
                <button className="p-2">Cancel</button>
                <button onClick={handleSave} className="bg-green-500 p-2 rounded-lg hover:bg-emerald-500">Save</button>
            </div>
            <Input ref={title} title="TITLE" type="text" />
            <Input ref={description} title="DESCRIPTION" type="textarea"/>
            <Input ref={dueDate} title="DUE DATE" type="date" />
        </div>
    )
}