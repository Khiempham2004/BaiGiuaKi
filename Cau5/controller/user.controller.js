
// server.post("/api/user/login" , async(req , res) =>{
//     try {
//         const {email , password} = req.body
//         if (!email) throw new Error ('email is required')
//         if (!password) throw new Error ('password is requirded')

        
//         const currentLogin = await loginModel.findOne({ email })
//         if (currentLogin) throw new Error('currentLogin is required')

//         const currentUser = await loginModel.create({
//             email,
//             password,
//         });
//         res.status(200).send({
//             data : currentUser,
//             message : "login succesful",
//         })
//     } catch (error) {
//         res.json({
//             code: 404,
//             message : "error"
//         })
//     }
// })

// export default userController;