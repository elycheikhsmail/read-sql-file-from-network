import {
    copy,
    readerFromStreamReader,
  } from "https://deno.land/std@0.103.0/io/mod.ts";
  const res = await fetch("https://deno.land");
  const file = await Deno.open("./deno.land.html", { create: true, write: true });
  
  const reader = readerFromStreamReader(res.body!.getReader());
  await copy(reader, file);
  file.close();


  //http://0.0.0.0:4507/static/db.sql
  // deno run --allow-all a1.ts