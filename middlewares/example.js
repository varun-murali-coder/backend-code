let exampleMiddleware=(req,res,next)=>{
    req.user={'firstName':'Varun','lastName':'Murali'};
    next();
}

module.exports={
    exampleMiddleware:exampleMiddleware
}