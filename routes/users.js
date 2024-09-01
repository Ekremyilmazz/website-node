const express=require('express');
const router=express.Router();
const db = require("../data/db");


router.use("/products/:id", async function (req, res) {
    try{
        const [products, ]= await db.execute("select * from products id=" +req.params.id);
        res.render("product-details", {
            urunler: data,
          });
      }catch(err){
        console.log(err);
      }
    
});

router.use("/products", async function (req, res) {
    try{
        const [products, ]= await db.execute("select * from products");
        res.render("products", {
            urunler: data,
          });
      }catch(err){
        console.log(err);
      }
    
});

router.use("/", async function (req, res) {

  try{
    const [products, ]= await db.execute("select * from products where isHome=1");
    res.render("index", {
        urunler: data,
      });
  }catch(err){
    console.log(err);
  }

});

module.exports=router;