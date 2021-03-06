module.exports = app => {
    const mdrequest = require("../controllers/purchaseRequest.controller")
    let router = require("express").Router();

    // Create a new purchase request
    router.post("/", mdrequest.create);
     
     //Retrieve all purchser requests with given inquriy ID
    router.get("/", mdrequest.getAll);

    // Retrieve a single purchase request with id
    router.get("/:id", mdrequest.findOne);

    // Update a purchase request with id
    router.put("/:id", mdrequest.update);

    // Delete a purchase request with id
    router.delete("/:id", mdrequest.delete);

    //retrieve all request with seacrh query
    router.get("/search/:query",mdrequest.searchByQuery);

 
    app.use('/api/mdrequest', router);
};