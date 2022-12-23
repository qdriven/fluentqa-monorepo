import {walk} from "../../fs/walker";
import fs from 'fs-extra'

export interface ContentMetaData {
  index: number
  name: string,
  path: string
  category: string
}


/**
 * 1. Read all the markdown files in current dir
 * 2. filename as name; path as path; category is the folder naee
 * @param contentPath
 * @param outputPath
 * @param homePath
 */
export function readContentMetadataFromDir(contentPath: string,
                                           outputPath: string,
                                           homePath: string): void {
  let contentMetaArray: ContentMetaData[] = []

  for (const item of walk(contentPath)) {
    const index = item.name.split("-")[0]
    contentMetaArray.push(
      <ContentMetaData><unknown>{
        index: +index,
        name: item.name,
        path: item.path.replaceAll(homePath, "")
          .replaceAll(".md", "")
      }
    )
  }
  contentMetaArray.sort(
    (a,b)=> a.index-b.index
  )
  fs.outputJSON(outputPath, contentMetaArray)

}
