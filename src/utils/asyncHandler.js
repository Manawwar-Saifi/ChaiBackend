const asyncHandler = (requestHandler)=>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandler}

// **** METHOD 2 (JUST for understanding) *********

// const asyncHandler = (fn)=>{
//     ()=>{}
// }

// same


// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }



