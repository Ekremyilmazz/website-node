const express = require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

const data=[
    {id: 1, name:"iPhone 14", price:30000, isActive: true, imageUrl:"1.jpeg"},
    {id: 2, name:"iPhone 15", price:40000, isActive: false, imageUrl:"1.jpeg"},
    {id: 3, name:"iPhone 16", price:50000, isActive: true, imageUrl:"1.jpeg"}
];

//routes
app.use("/products/:id", function(req, res){
    const urun=data.find(u =>u.id == req.params.id);
    res.render("product-details", urun);
});

app.use("/products", function(req, res){
    res.render("products", {
        urunler :data
    });
});

app.use("/", function(req, res){
    res.render("index");
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});