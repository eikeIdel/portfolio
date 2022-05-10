function HomeSidepanel() {
  return (
    <div className=" space-y-2 p-4 text-xs text-center sm:space-y-8 sm:p-16  sm:text-base">
      <p className="sm:text-2xl">Welcome to my Portfolio</p>
      <p className="sm:last:text-base">
        {" "}
        My Name is <b>Eike Idel</b> and I am a <b>Full-Stack Web Developer</b>{" "}
        in Berlin.
      </p>
      <p className="sm:last:text-base">
        Please take your time and check out the “Projects” tab to get a better
        impression about my accomplishment and skills.
      </p>
      <p className="sm:last:text-base">Enjoy the tour!</p>
    </div>
  );
}

export default HomeSidepanel;
