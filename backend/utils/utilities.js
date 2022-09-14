function payloadFromUser(user){
    return{
        email : user.email,
        name: user.name,
        id:user._id
    }
}

module.exports ={
    payloadFromUser
}