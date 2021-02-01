import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div className="flex w-full self-center">
        <p className="text-xl lg:pl-16 py-4">Hello</p>
      </div>
      <div className="flex w-full lg:flex-row flex-col self-center">
        <div className="flex flex-col lg:w-16 lg:py-0 py-4">
          <p className="text-xs opacity-20">INFO</p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-sm leading-6 opacity-90">
            I'm Pasquale Parillo, a Developer new to Seattle who likes to mix
            code, animation, interactivity and generative design. I'm currently
            in the process of a daily code project where I make something new
            every evening for 30 days. These projects will range from small to
            medium & will primarily be in React or Django
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
