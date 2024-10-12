import client from "./client.js";

async function init() {
   // LIST DATA TYPE COMMANDs
   await client.lpush("mylist", "Hello");
   await client.lpush("mylist", "World");
   await client.lpush("mylist", "list");
   await client.rpush("mylist", "right");
   await client.lpop("mylist");
   await client.blpop("mylist", 10);
   await client.del("mylist");

   console.log(await client.llen("mylist"));
   console.log(await client.lrange("mylist", 0, -1));
}

init();