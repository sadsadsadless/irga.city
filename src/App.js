import React from "react";
import { Route, Routes } from "react-router-dom"
import "./index.scss";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { ProjectsPage } from "./pages/ProjectsPage";
import { MainPage } from "./pages/Main";
import { SciencePage } from "./pages/SciencesPage/SciencePage";
import { ScienceItem } from "./pages/ScienceItem/ScienceItem";
import { ProjectPage } from "./pages/Project/ProjectPage";
import { Social } from "./pages/ProjectsPage/childs/social";
import { Other } from "./pages/ProjectsPage/childs/other";
import { Residential } from "./pages/ProjectsPage/childs/residential";
import { Beauty } from "./pages/ProjectsPage/childs/beauty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="concepts" element={<SciencePage />} />
          <Route path="concepts/:id" element={<ScienceItem />} />
          <Route path="social" element={<Social />}/> 
          <Route path="social/:id" element={<ProjectPage />}/> 
          <Route path="residential" element={<Residential />}/> 
          <Route path="residential/:id" element={<ProjectPage />}/>
          <Route path="beauty" element={<Beauty />} /> 
          <Route path="beauty/:id" element={<ProjectPage />} /> 
          <Route path="other" element={<Other />}/>  
          <Route path="other/:id" element={<ProjectPage />}/>  
        </Route>
      </Routes>
    </>
  );
}

export { App };