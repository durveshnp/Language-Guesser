import { franc, francAll } from "franc";
import langs from "langs";
 
const userInput = process.argv[2];
const langCode = franc(userInput);
 
if (langCode === "und") {
  console.log("Sorry,type more informative sentence");
} else {
  const language = langs.where("3", langCode);
  console.log(language.name);
}