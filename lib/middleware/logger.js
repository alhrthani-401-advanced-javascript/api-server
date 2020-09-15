module.exports = (req, res, next) => {
    console.log("__METHOD__: ", req.method,"  ","__PATH__: ", req.path);
    console.log("__TIME STAMP__: ", req.requestTime)
    next();
   
};