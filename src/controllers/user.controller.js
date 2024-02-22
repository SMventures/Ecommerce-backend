const userService=require("../services/user.service")

const getUserProfile=async (req,res)=>{
    try {
        console.log(req.headers.authorization,"this is from the user controller rnnnnn")
        const jwt= req.headers.authorization?.split(' ')[1];
        console.log(jwt,"yeh jwrt wala hai")

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await userService.getUserProfileByToken(
            jwt
        )

        return res.status(200).send(user)

    
    } catch (error) {
        console.log("error from controller - ",error)
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={getUserProfile,getAllUsers}