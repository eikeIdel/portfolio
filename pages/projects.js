//react
import { useState, useEffect } from "react";
//components
import Content from "../components/MainLayout/Content";
import Sidepanel from "../components/MainLayout/Sidepanel";
import ProjectsContent from "../components/Projects/ProjectsContent";
import ProjectsSidepanel from "../components/Projects/ProjectsSidepanel";

export default function Projects() {
  return (
    <>
      <Content PageContent={ProjectsContent} />
      <Sidepanel PageSidepanel={ProjectsSidepanel} />
    </>
  );
}
