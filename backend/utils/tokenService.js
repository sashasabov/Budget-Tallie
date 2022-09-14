const jwt = require('jsonwebtoken')

require('dotenv').config()

const SECRET = process.env.SECRET

function createToken(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}

module.exports = {
    createToken
} 