import {promises as fs} from 'fs'
import path from 'path'

let paths: Array<string | any> = []

interface FilePathMapperOptions {
  startDirectory: string
  extensions?: string[]
}

export async function filePathMapper({
                                       startDirectory,
                                       extensions
                                     }: FilePathMapperOptions) {
  try {
    const paths = await searchFiles(startDirectory, extensions)

    return {
      ok: true,
      paths
    }
  } catch (err) {
    console.error(err)
    return {
      ok: false,
      message: err
    }
  }
}

export async function searchFiles(folderName: string, extensions?: string[]) {
  const folderChildren = await fs.readdir(folderName)

  for (const child of folderChildren) {
    const childPath = `${folderName}/${child}`
    const childStats = await fs.lstat(childPath)

    if (childStats.isDirectory()) {
      await searchFiles(childPath, extensions)
    }

    if (childStats.isFile()) {
      const extension = child.split('.').pop() || ''
      const skipFile = extensions?.length
        ? !extensions.includes(extension)
        : false

      if (skipFile) continue

      const fullPathToFile = path.resolve(childPath)
      const fileContent = await fs.readFile(fullPathToFile)

      paths = [
        ...paths,
        fullPathToFile
        // {
        //   path: fullPathToFile,
        //   data: fileContent
        // }
      ]
    }

  }

  return paths
}

// filePathMapper({
//   startDirectory: 'src',
//   extensions: ['html']
// }).then(r => {
//   console.log(r)
// })
