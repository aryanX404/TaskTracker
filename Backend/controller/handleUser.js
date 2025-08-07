const User = require('../model/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function handleSignUpUser(req, res){
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({
            message:"All fields are required",
            class: 'danger message'
        })
    }

    try{
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({
                message:"User Already Exists, You can Login",
                class: 'success message'
            })
        }

        //create new user
        hashedPassword = await bcrypt.hash(password,10);
        const user = new User({firstName, lastName, email, password:hashedPassword})
        await user.save();
        return res.status(200).json({
            message:"User created Successfully",
            class: 'success message',
            user : user
        })

    }catch(error){
        console.error('Error in creating User', error)
        return res.status(500).json({
            message:"server error",
            class: 'danger message',
            error: error.message
        })
    }
}

async function handleLoginUser(req, res){
    const {email, password} = req.body;
    const userExist = await User.findOne({email});

    if (!userExist){
        return res.status(404).json({
            message:"User not found",
            class: 'danger message'
        })
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if(isMatch){
        const token = jwt.sign({
            user:userExist.firstName,
            email:userExist.email
        },process.env.SECRET_KEY,{expiresIn:'1h'})

        return res.status(200).json({
            message:"Logged in succesfully",
            class: 'success message',
            user : userExist,
            token:token
        })
    }else{
        return res.status(400).json({
            message:"Incorrect Password",
            class: 'danger message'
        })
    }

  
}


module.exports = {handleLoginUser, handleSignUpUser}