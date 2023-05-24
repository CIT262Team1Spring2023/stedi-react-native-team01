import sayHello from "../utils/helloworld.joshua.mjs";
import assert from 'assert'

it("Test Hello World Joshua", ()=>{
    const hello = sayHello();
    assert.equal(hello,"hello")
})