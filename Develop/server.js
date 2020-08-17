const express = require("../node_modules/express");
const mongoose = require("../node_modules/mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});