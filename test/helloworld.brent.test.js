import sayHello from "../utils/helloworld.brent.mjs";
import assert from "assert";

it("Should say Brent", ()=>{

    const hello = sayHello();

    console.log('This test returns: ' + hello)

    assert.equal(hello,"Brent");
})

