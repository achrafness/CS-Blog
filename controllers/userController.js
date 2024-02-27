const getAllUsers = async (req, res) => {
  res.send("get all users");
};

const getSingleUser = async (req, res) => {
  res.send("get single user");
};

const showMe = async (req, res) => {
  res.send("get single user");
};

const updateUser = async (req,res) =>{
    res.send("updateUser");
}

const updateUserPassword = async (req, res) => {
  res.send("updateUserPassword");
};

const blockUser = async (req, res) => {
  res.send("blockUser");
};

module.exports = {
    getAllUsers,
    getSingleUser,
    showMe,
    updateUser,
    updateUserPassword,
    blockUser
};
