import { useState } from "react";
import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }
  
  let nowOpen;

  if (projectState.selectedProjectId === undefined) {
    nowOpen = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  else if (projectState.selectedProjectId === null) {
    nowOpen = <NewProject onAdd={handleAddProject} />
  }

  return (
    <div className="flex flex-row mt-5">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {nowOpen}
    </div>
  );
}

export default App;
