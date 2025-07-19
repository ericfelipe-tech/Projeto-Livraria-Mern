const User = require("../models/UserModel"); 
require("dotenv").config(); 
const jwt = require("jsonwebtoken"); 
 
module.exports.userVerification = (req, res) => { 
  const token = req.cookies.token 
  if (!token) { 
    return res.json({ status: false }) 
  } 
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => { 
    if (err) { 
     return res.json({ status: false }) 
    } else { 
      const user = await User.findById(data.id) 
      if (user) return res.json({ status: true, user: user.username 
}) 
      else return res.json({ status: false }) 
    } 
  }) 
}

module.exports.tokenVerification = (req, res, next) => {
  // Pegar o token do cookie ou do header
  const authHeader = req.headers['authorization'].substring(7, req.headers['authorization'].length);
  const token = req.cookies.token || authHeader;
  if (!token) {
      return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
      // Verificar o token
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;
      console.log(`req.user: ${req.user}`);
      next();
  } catch (ex) {
      res.status(400).json({ message: 'Token inválido.' });
  }
};