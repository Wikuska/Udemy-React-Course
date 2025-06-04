import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <div class="flex flex-row mt-5">
      <ProjectSidebar/>
      <NoProjectSelected/>
    </div>
  );
}

export default App;
