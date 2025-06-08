export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center justify-center basis-4/5 gap-4">
      <img className="w-10" src="logo.png"></img>
      <h1 className="font-semibold text-lg">No Project Selected</h1>
      <p>Select a project or get started with new one</p>
      <button
        onClick={onStartAddProject}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
      >
        Create new project
      </button>
    </div>
  );
}
