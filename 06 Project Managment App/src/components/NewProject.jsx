import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = title.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid input</h2>
        <p>Oops! Looks like you forgot to enter a value.</p>
        <p>Please make sure you provided a valid value for every input field</p>
      </Modal>
      <div className="flex flex-col basis-4/5 items-center">
        <div>
          <button className="p-2">Cancel</button>
          <button
            onClick={handleSave}
            className="bg-green-500 p-2 rounded-lg hover:bg-emerald-500"
          >
            Save
          </button>
        </div>
        <Input ref={title} title="TITLE" type="text" />
        <Input ref={description} title="DESCRIPTION" type="textarea" />
        <Input ref={dueDate} title="DUE DATE" type="date" />
      </div>
    </>
  );
}
