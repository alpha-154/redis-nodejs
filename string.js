import client from "./client.js";

async function init() {
   
    /* SET ,GET & EXPIRE COMMAND for a STRING data type */
    await client.set("msg:1", "Hey from node.js");
    console.log("msg:1 -> ", await client.get("msg:1"));
    await client.expire("msg:1", 10);

}   

init();