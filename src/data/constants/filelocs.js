const urlStart = "http://localhost:5173/";
// const urlStart = "http://dberry07.github.com/";

const folders = "src/data/";

export const locations = {
  HelloBody: urlStart + folders + "hellobody.txt",
  CouseraBody: urlStart + folders + "courserabody.txt",
  CouseraList: urlStart + folders + "courseralist.txt",
  ReactBody: urlStart + folders + "reactbody.txt",
  AndroidKotlinBody: urlStart + folders + "androidkotlinbody.txt",
};

console.log(locations.HelloBody);
