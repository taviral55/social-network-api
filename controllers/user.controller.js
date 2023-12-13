import User from "../models/user.model.js";

export const createAccount = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if(!user){
     return res.status(201).json({msg : 'User Not Found'});
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
};
