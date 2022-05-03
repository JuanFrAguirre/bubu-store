const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

app.use("/", mainRouter);
app.set("view engine", "ejs");

app.listen(3030, () =>
	console.log(`\n\n--------------------\nServidor escuchando en el puerto 3030\n--------------------\n\n...`)
);
