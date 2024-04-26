// lib.server.ts

import app from "./app";
const PORT = 3010;

app.listen(PORT, () => {
    console.log("Im listening on port " + PORT);
})