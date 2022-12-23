import {test} from "vitest";
import fs from 'fs-extra'
import {ContentMetaData} from "../src/contents/local/contentMeta";
import {walk} from "../src/fs/walker"

const filePath = "../../docs/index.json"
test("read dir files", () => {
  console.log(__dirname)
  let contentMetaArray: ContentMetaData[] = []
  const files = fs.readdirSync('../../docs')
  files.filter((file) => {
    return file.indexOf(".md") > 0
  }).forEach((file) => {
    contentMetaArray.push(
      <ContentMetaData>{
        name: file.split(".")[0],
        path: file
      }
    )
  })
  console.log(contentMetaArray)
  fs.outputJSON(filePath, contentMetaArray)
})

test("output json", () => {
  fs.outputJSON(filePath, [{name: "index"}])
})


test("walker docs",()=>{
  let contentMetaArray: ContentMetaData[] = []

  for (const item of walk("../../docs")) {
    contentMetaArray.push(
      <ContentMetaData>{
        name: item.name,
        path: item.path
      }
    )
  }
  fs.outputJSON(filePath, contentMetaArray)

})
