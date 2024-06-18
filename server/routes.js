const {Router}= require('express')

const {
    getAllFacultyMembers,
    addFacultyMember,
   deleteFacultyMember
}= require("./controllers")

const router= Router()

router.get("/member", getAllFacultyMembers);
router.post("/member",addFacultyMember)
router.delete('member/:id',deleteFacultyMember)
