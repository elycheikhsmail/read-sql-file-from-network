import {
    copy,
    readerFromStreamReader,
  } from "https://deno.land/std@0.103.0/io/mod.ts";
  const res = await fetch("http://0.0.0.0:4507/static/db.sql");
  const file = await Deno.open("./db.sql", { create: true, write: true });
  
  const reader = readerFromStreamReader(res.body!.getReader());
  await copy(reader, file);
  file.close();

// file_server
// then
  //http://0.0.0.0:4507/static/db.sql
  // deno run --allow-all a1.ts