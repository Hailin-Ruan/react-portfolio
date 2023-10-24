import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Hailin. 👋
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm an aspiring full stack web developer. My journey started with a curiosity about how websites work, leading me to explore the intricacies of both front-end and back-end technologies. 
          <br></br>
          <br></br>
          I am on a continuous journey of honing my skills, exploring new technologies, and taking on exciting challenges in the world of full stack development. I am excited about the prospect of contributing to innovative projects, collaborating with fellow developers, and making a meaningful impact through my work.
          <br></br>
          <br></br>
          Thank you for visiting my portfolio! Feel free to explore my projects and get in touch if you have any exciting opportunities or ideas to discuss. Let’s build something amazing together!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See Some of My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img src="/profile.jpg" alt="Profile" class="rounded-md" />
        </div>
      </div>
    </section>
  );
}