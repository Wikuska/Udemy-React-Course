import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

function App() {
  return (
    <div className="flex flex-row mt-5">
      <ProjectSidebar/>
      {/* <NoProjectSelected/> */}
      <NewProject/>
    </div>
  );
}

export default App;
