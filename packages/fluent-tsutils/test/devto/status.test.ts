import {test} from "vitest";
import {PublishedStatus, SyncStatus} from "../../src/contents/devto/status";


test("status terminal color test",()=>{
    console.log(PublishedStatus.published)
    console.log(PublishedStatus.draft)
    console.log(SyncStatus.failed)
})
