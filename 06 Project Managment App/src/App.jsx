import { useState } from "react";
import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";

function App() {
  const [openTab, setOpenTab] = useState("noProject")

  let nowOpen = null;

  if (openTab == "noProject") {
    nowOpen = <NoProjectSelected onClick={onTabChange} />
  }
  else if (openTab == "newProject") {
    nowOpen = <NewProject onClick={onTabChange} />
  }

  function onTabChange(tabToOpen) {
    setOpenTab(tabToOpen)
  }

  return (
    <div className="flex flex-row mt-5">
      <ProjectSidebar onClick={onTabChange} />
      {nowOpen}
    </div>
  );
}

export default App;
