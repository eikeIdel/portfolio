function HomeContent() {
  return (
    <div className="text-xs space-y-2 p-3 sm:text-base">
      <div className=" sm:px-16 sm:pt-16">
        <h1 className="text-center underline">Experience</h1>
        <h2 className="font-bold">Web Developer</h2>
        <h3 className="">formly.ai</h3>
        <h4 className="">2021 Dec - 2022 Feb | Berlin, Germany</h4>
        <p className="mt-3">
          Internship: Implementation of a web application as part of a 4 person
          team based on UI concepts provided via Figma:
        </p>

        <ul className="list-disc mt-3 ml-8">
          <li className="">givin feedback on the UI from developer's view</li>
          <li className="">database modelling (MySQL)</li>
          <li className="">
            implementation of frontend and backend with the React Framework:
            Next.js
          </li>
          <li className="">
            configuration of S3-Bucket on AWS for file upload
          </li>
          <li className="">deployment of web application on heroku</li>
        </ul>
      </div>
      <div className="sm:px-16 sm:pt-16">
        <h1 className="text-center underline">Education</h1>

        <h2 className="font-bold">Web Developer</h2>
        <h3 className="">Wild Code School</h3>
        <h4 className="">2009 Sep – 2012 Sep | Berlin, Germany</h4>
        <p className="mt-3">
          Coding Bootcamp - intensive training concentrating on in-demand coding
          languages and project work methods
        </p>

        <h2 className="mt-6 font-bold">Audio Visual Designer</h2>
        <h3 className="">L4-Akademy</h3>
        <h4 className="">2009 Sep – 2012 Sep | Berlin, Germany</h4>
        <p className="mt-3">
          Apprenticeship focused on earning skills in video production (camera-,
          sound and light technique and editing/postproduction)
        </p>
      </div>
    </div>
  );
}

export default HomeContent;
