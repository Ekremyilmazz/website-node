const express = require("express");
const app = express();

const userRoutes= require("./routes/users");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

// const data = [
//   {
//     id: 1,
//     name: "iPhone 14",
//     price: 30000,
//     isActive: true,
//     isHome: true,
//     imageUrl: "1.jpeg",
//   },
//   {
//     id: 2,
//     name: "iPhone 15",
//     price: 40000,
//     isActive: false,
//     isHome: false,
//     imageUrl: "1.jpeg",
//   },
//   {
//     id: 3,
//     name: "iPhone 16",
//     price: 50000,
//     isActive: true,
//     isHome: true,
//     imageUrl: "1.jpeg",
//   },
// ];

//routes

app.use(userRoutes);

app.listen(3307, () => {
  console.log("Listening on port 3307");
});
