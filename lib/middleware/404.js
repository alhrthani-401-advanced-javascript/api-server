module.exports = (err,req, res, next) => {
    if(res.status(404)){
    console.log("404 middleware invoked");
    res.status(404).send('Error >>>>> Page Not Found');   }
    else{
        next();
    }
};