module.exports = (err,req, res, next) => {
    console.log("500 middleware invoked");
    res.status(500).send('500 Not Found');   
};