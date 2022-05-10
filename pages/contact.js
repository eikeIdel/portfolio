//components
import Content from "../components/MainLayout/Content";
import Sidepanel from "../components/MainLayout/Sidepanel";
import ContactContent from "../components/Contact/ContactContent";
import ContactSidepanel from "../components/Contact/ContactSidepanel";

export default function Contact() {
  return (
    <>
      <Content PageContent={ContactContent} />
      <Sidepanel PageSidepanel={ContactSidepanel} />
    </>
  );
}
