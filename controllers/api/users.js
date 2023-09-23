//* Request handler Logic
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6


//*Create a new User
async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        // creating a new user in the DB
        const user = await User.create(req.body);
        console.log(user);

        // creating a new jwt
        const token = createJWT(user);
        res.json(token);
         } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

//* delete user from DB 
async function deleteUser(req,res) {
    const {id} = req.params
    await User.findByIdAndDelete(id)
}


//* Update User's password
async function updateUserPassword(req, res){
    const {id} = res.params
    req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    try {
        await User.findByIdAndUpdate(id, req.body)
    }catch (error) {
        console.log('Update failed', error); 
    }
}

//*Login
async function login(req, res) {
    try {
        // find user in db by email
      const user = await User.findOne({ email: req.body.email });
      // check if we found an user
      if (!user) throw new Error();
      // compare the password to hashed password
      const match = await bcrypt.compare(req.body.password, user.password);
      // check is password matched
      if (!match) throw new Error();
      // send back a new token with the user data in the payload
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }

async function checkToken(req, res) {
    console.log("req.user", req.user);
    res.json(req.exp)
}

//* /*-- Helper Functions to create JWT Token--*/
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

module.exports = {
    create,
    login,
    checkToken,
    deleteUser, 
    updateUserPassword,
}
