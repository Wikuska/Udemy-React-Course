export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="flex flex-col basis-1/5 bg-pink-500 rounded-r-lg min-h-[calc(100vh-2.5rem)] items-center">
      <h1 className="pt-10 font-semibold text-white text-lg">YOUR PROJECTS</h1>
      <button
        onClick={onStartAddProject}
        className="bg-green-500 mt-8 p-2 rounded-lg hover:bg-emerald-500"
      >
        + Add Projects
      </button>
      <ul className="mt-8">
        {projects.map(project => <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-white hover:text-stone-200 hover:bg-pink-400">{project.title}</button>
        </li>)}
      </ul>
    </aside>
  );
}
