import fs, {Dirent} from 'fs-extra'


export interface FileMetaInfo {
  name: string
  path: string
  dirName: string

}

export function* walk(path: string): IterableIterator<FileMetaInfo> {
  const entries: Dirent[] = fs.readdirSync(path, {withFileTypes: true});

  for (const entry of entries) {
    const entryMeta: () => FileMetaInfo = () => {
      return <FileMetaInfo>{
        name: entry.name.split(".")[0],
        path: `${path}/${entry.name}`,
      }
    }
    if (entry.isFile()) {
      yield entryMeta()
    }
    if (entry.isDirectory()) {
      yield* walk(entryMeta().path)
    }
  }
}
