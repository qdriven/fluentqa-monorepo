/**
 * TODO: add apis tests
 */

import {test} from "vitest";
import {getAllArticles} from "../../src/contents/devto/apis";

test("test devto get all articles",()=>{
   const result=  getAllArticles("123")
  console.log(result)
})
