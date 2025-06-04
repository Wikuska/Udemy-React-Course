export default function NoProjectSelected({onClick}) {
    return (
        <div className="flex flex-col items-center justify-center basis-4/5 gap-4">
            <img className="w-10" src="logo.png"></img>
            <h1 className="font-semibold text-lg">No Project Selected</h1>
            <p>Select a project or get started with new one</p>
            <button onClick={() => onClick("newProject")} className="bg-green-500 mt-2 p-2 rounded-lg hover:bg-emerald-500">Create new project</button>
        </div>
    )
}