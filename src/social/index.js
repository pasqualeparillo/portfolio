import React from "react";

export default function Social() {
  return (
    <div className="flex w-full flex-wrap lg:flex-row flex-col self-center py-4">
      <SocialMedia />
      <Contact />
      <Resume />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="w-full flex">
      <div className="flex flex-col lg:w-16 lg:py-0 py-4">
        <p className="text-xs opacity-20">Media</p>
      </div>
      <div className="flex flex-1 ml-4 items-center justify-start">
        <a className="text-xs" href="https://github.com/pasqualeparillo">
          Github
        </a>
        <a className="text-xs mx-4" href="https://twitter.com/PasqualeParillo">
          Twitter
        </a>
        <a
          className="text-xs"
          href="https://www.linkedin.com/in/pasquale-parillo-239145aa/"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="w-full flex py-4">
      <div className="flex flex-col lg:w-16 lg:py-0 py-4">
        <p className="text-xs opacity-20">Contact</p>
      </div>
      <div className="flex flex-1 items-center justify-start">
        <a className="text-xs mx-4" href="mailto:patparillo@gmail.com">
          patparillo@gmail.com
        </a>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="w-full flex py-4">
      <div className="flex flex-col lg:w-16 lg:py-0 py-4">
        <p className="text-xs opacity-20">Resume</p>
      </div>
      <div className="flex flex-1  justify-start items-center">
        <button className="border border-white px-2 text-xs mx-4">
          Download
        </button>
      </div>
    </div>
  );
}
