const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });
const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");
const basketsRoutes = require('./routes/baskets.routes');
const ShopRoutes = require('./routes/shop.routes');

const app = express();

serverConfig(app);

const PORT = process.env.PORT || 3000;

app.use("/api", indexRouter);
app.use('/api/shop', ShopRoutes);
app.use('/api/baskets', basketsRoutes);

app.listen(PORT, () => {
  console.log(`Не могу астанавица: ${PORT}!!!`);
});
