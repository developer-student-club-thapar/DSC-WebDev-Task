const Admin = require('../model/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const regAdmin = async (req, res) => {
  
}

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    
    const token = jwt.sign({ adminId: admin._id }, 'your-secret-key', {
      expiresIn: '1h', 
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  regAdmin,
  loginAdmin,
};