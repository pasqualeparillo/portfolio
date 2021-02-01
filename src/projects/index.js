import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  let projectList = Array.from(Array(24).keys());
  return (
    <div className="flex w-full lg:flex-row flex-col self-center py-4">
      <div className="flex flex-col lg:w-16 lg:py-0 py-4">
        <p className="text-xs opacity-20">Work</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-3 w-full gap-1 ">
        {projectList.map((id) => (
          <Project id={id} key={id} />
        ))}
      </div>
    </div>
  );
}

function Project({ id }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <p
        className="text-sm relative overflow-hidden cursor-pointer items-start opacity-90"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.span
          animate={hover ? { opacity: 0.4 } : { opacity: 0.2 }}
          initial={{ opacity: 0.2 }}
        >
          000
        </motion.span>{" "}
        text
      </p>
      <Underline hover={hover} />
    </div>
  );
}

function Underline({ hover }) {
  const variants = {
    show: {
      x: "-50%",
    },
    hide: {
      x: "-101%",
    },
  };
  return (
    <motion.div
      className="absolute w-full h-px bottom-0 bg-white"
      variants={variants}
      animate={hover ? "show" : "hide"}
      initial={"hide"}
      transition={{ bounce: 0 }}
    />
  );
}
