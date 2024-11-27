// import "./name-panel.css";
import { LINKS } from "../data/constants/links.js";
import { locations } from "../data/constants/filelocs.js";

export default function NamePanel() {
  var size = 25;

  return (
    <div id="namepanel" className="row-span-1 lg:col-span-10 lg:row-span-2 grid grid-cols-1 grid-rows-2 h-full w-full place-items-center">
      <div id="name" className="text-5xl font-enriqueta">
        David <span id="middle-initals">WJ</span> Berry
      </div>
      <div id="personal-links-bar" className="place-items-center flex flex-row">
        <a href={LINKS.linkedin} target="_blank" className="job-link">
          <img src={locations.PicLinkedin} className="job-img h-8 mr-3 ml-3 transition hover:scale-125" />
        </a>
        <a href={LINKS.github} target="_blank" className="job-link">
          <img src={locations.PicGithub} className="job-img h-8 mr-3 ml-3 transition hover:scale-125" />
        </a>
        <a href="mailto:david.wj.berry@gmail.com" className="job-link">
          <img src={locations.PicSendmail} className="job-img h-8 mr-3 ml-3 transition hover:scale-125" />
        </a>
      </div>
    </div>
  );
}
