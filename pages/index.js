//components
import Content from "../components/MainLayout/Content";
import Sidepanel from "../components/MainLayout/Sidepanel";
import HomeContent from "../components/Home/HomeContent";
import HomeSidepanel from "../components/Home/HomeSidepanel";

export default function Home() {
  return (
    <>
      <Content PageContent={HomeContent} />
      <Sidepanel PageSidepanel={HomeSidepanel} />
    </>
  );
}
