

import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from "@azure/ai-form-recognizer";
import { config } from "dotenv";
import fs from "fs";

config();

function* getTextOfSpans(content, spans) {
  for (const span of spans) {
    yield content.slice(span.offset, span.offset + span.length);
  }
}


const key = process.env.DOC_KEY;
const endpoint = process.env.DOC_ENDPOINT;

async function main(path) {
  const readStream = fs.createReadStream(path);

  // create your `DocumentAnalysisClient` instance and `AzureKeyCredential` variable
  const client = new DocumentAnalysisClient(
    endpoint,
    new AzureKeyCredential(key)
  );
  const poller = await client.beginAnalyzeDocument("prebuilt-read", readStream);

  const { pages, languages, styles } = await poller.pollUntilDone();

  let concatenatedText = ""; // Initialize an empty string to concatenate all words

  if (pages.length <= 0) {
    console.log("No pages were extracted from the document.");
  } else {
    for (const page of pages) {
      for (const line of page.lines) {
        for (const word of line.words()) {
          concatenatedText += word.content + " "; // Concatenate each word with a space
        }
      }
    }
  }

  if (styles.length <= 0) {
    console.log("No text styles were extracted from the document.");
  } else {
    console.log("Styles:");
    for (const style of styles) {
      console.log(
        `- Handwritten: ${style.isHandwritten ? "yes" : "no"} (confidence=${
          style.confidence
        })`
      );
    }
  }
  return concatenatedText;
}
// main("server/modules/azure/Business_Resume.docx.pdf")
export default main;
//this reads all the files and converts it into text
