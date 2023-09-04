import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li >
            <a href={socialprofils.github}>
              <FaGithub className="github-icon" />
            </a>
          </li>
        )}

        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin className="github-icon"/>
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
