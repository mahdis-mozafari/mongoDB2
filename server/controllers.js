const Faculty = require('./schema')


const getAllFacultyMembers = async(req,res)=>{
    try {
        const users = await Faculty.find({}) ;
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({massage:error})
    }
} 


const addFacultyMember = async (req, res) => {
    try {
      const userData = req.body;
      const newMember = await Blog.create(userData);
      res.status(201).json(newMember);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };


const deleteFacultyMember = async (req, res) => {
    try {
      const { id: _id } = req.params;
      const deleteMember = await Faculty.findByIdAndDelete(_id);
      res.status(202).json(deleteMember);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  module.exports ={
    getAllFacultyMembers,
    addFacultyMember,
   deleteFacultyMember
}