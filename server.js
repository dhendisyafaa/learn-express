const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();
const corsOptions = {
  origin: "*",
};

// register cors midlleware
app.use(cors(corsOptions));
app.use(express.json());

// connect db
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`gagal connect ${err.message}`);
    process.exit();
  });

// routes
require("./app/routes/profile.routes")(app);

// port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server jalan di ${PORT}`));
