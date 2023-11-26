import Input from "./Input";
import { useRef } from "react";

export default function NewProject({onAdd}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validation
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            NEW PROJECT
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="rounded-md text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input ref={title} type="text" label="Title"/>
                <Input ref={description} label="Description" isTextArea/>
                <Input ref={dueDate} type="date" label="Due Date"/>
            </div>
        </div>
    )
}