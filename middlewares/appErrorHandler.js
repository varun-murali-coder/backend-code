let errorHandler=(err,req,res,next)=>{
console.log('Application error handler called');
console.log(err);
res.send('Some error occured at global level');

}

let newHandler=(req,res,next)=>{
    console.log('Global not found');
    res.send(404,'Global not found handler called'); 
}

module.exports={
    errorHandler:errorHandler,
    newHandler:newHandler

}