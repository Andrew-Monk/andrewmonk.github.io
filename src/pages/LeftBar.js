import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const GitlabLogo = require("../assets/logos/Gitlab.png");
const MailLogo = require("../assets/logos/MailLogo.png");
const PythonLogo = require("../assets/logos/PythonLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");



const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <div className="mb-2">
      <a href="https://github.com/Andrew-Monk/task-manager">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={PythonLogo}
            alt="Python Logo"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Task Manager</p>
        </div>
      </a>
      </div>
      <div className="mb-2">
      <a href="https://github.com/Andrew-Monk/car-connect">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JsLogo}
            alt="Js Logo"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>CarConnect</p>
        </div>
      </a>
      </div>
      <a href="https://passportpals.gitlab.io/module3-project-gamma/events/list">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JsLogo}
            alt="JS Logo"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>PassportPals</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/Andrew-Monk">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://gitlab.com/Andrew.Monk">
              <img
                src={GitlabLogo}
                alt="Kaggle Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/andrew-monk-/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=andrewmonk1991@gmail.com">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
