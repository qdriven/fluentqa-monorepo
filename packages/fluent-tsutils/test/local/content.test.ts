import {test} from "vitest";
import {readContentMetadataFromDir} from "../../src/contents/local/contentMeta";


test("readContents", () => {
  const docPath = "/Users/patrick/workspace/personal/qdriven/daily-qa/daily-tutorials/pydaily-30minutes/pyrevisited-daily/docs"
  const output = "/Users/patrick/workspace/personal/qdriven/daily-qa/daily-tutorials/pydaily-30minutes/pyrevisited-daily/src/store"
  const buildInPath = docPath + "/cheatsheet"
  const outputJson = output + "/cheatsheet.json"
  readContentMetadataFromDir(buildInPath, outputJson, docPath)
})
