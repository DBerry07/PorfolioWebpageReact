import { LINKS } from "../constants/links.js";
import { locations } from "../constants/filelocs.js";
import { getText } from "../constants/fetching.js";
import TabContent from "../constants/TabContent.js";
import Title from "../../components/panel/Title.jsx";
import Subheading from "../../components/panel/Subheading.jsx";
import EntryBox from "../../components/panel/EntryBox.jsx";
import EntryBody from "../../components/panel/EntryBody.jsx";
import Body from "../../components/panel/Body.jsx";
import SubSection from "../../components/panel/SubSection.jsx";

export const Education = [
  Title({ title: "My Education" }),
  EntryBox({
    items: [
      EntryBody({
        items: [
          SubSection({
            title: "Florida Atlantic University",
            items: await getText(locations.Edu01),
          }),
          SubSection({
            title: "Revature, LLC.",
            items: await getText(locations.Edu02),
          }),
          SubSection({
            title: "Broward College",
            items: await getText(locations.Edu03),
          }),
        ],
      }),
    ],
  }),
];
