import {walk} from "../../fs/walker";
import fs from 'fs-extra'

export interface ContentMetaData {
  name: string,
  path: string
  category: string
}


/**
 * 1. Read all the markdown files in current dir
 * 2. filename as name; path as path; category is the folder naee
 * @param dir
 */
export function readContentMetadataFromDir(contentPath: string,
                                           outputPath: string,
                                           homePath:string): void {
  let contentMetaArray: ContentMetaData[] = []

  for (const item of walk(contentPath)) {
    contentMetaArray.push(
      <ContentMetaData>{
        name: item.name,
        path: item.path.replaceAll(homePath,"")
      }
    )
  }
  fs.outputJSON(outputPath, contentMetaArray)

}
