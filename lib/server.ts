// lib.server.ts

import app from "./app";
const PORT = 3011;

app.listen(PORT, () => {
    console.log("Im listening on port " + PORT);
})