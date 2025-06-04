export default function ProjectSidebar({onClick}) {
    return (
        <div className="flex flex-col basis-1/5 bg-pink-500 rounded-r-lg min-h-[calc(100vh-2.5rem)] items-center">
            <h1 className="pt-10 font-semibold text-white text-lg">YOUR PROJECTS</h1>
            <button onClick={() => onClick("newProject")} className="bg-green-500 mt-8 p-2 rounded-lg hover:bg-emerald-500">+ Add Projects</button>
        </div>
    )
}