const router = require("express").Router()
const Subject = require("../schemas/subject")

router.get("/api/subjects", (req, res) => {
      Subject.find({}, function (err, users) {
            res.send({ users: users })
      })
})

// router.get("/api/subject/:id", (req, res) => {
//     Subject.findOne({ _id: req.params.id }).populate('chapterID').exec(function (err, user) {
//           if (user) {
//                 res.send(user)
//           } else {
//                 res.status(400).send("not found user")
//           }
//     })
// })

router.post("/api/subject", (req, res) => {
      console.log("req.body", req.body)
      Subject.create({
            subjectCode: req.body.subjectCode,
            subjectName: req.body.subjectName,
            credit: req.body.credit,
            section: req.body.section,
            capacity: req.body.capacity,
            lecturer: req.body.lecturer,
            major: req.body.major,
            classroom: req.body.classroom,
      })
      res.send("create success")
})



router.put("/api/subject", async (req, res) => {
      const query = { _id: req.body._id }
      const update = {
            subjectCode: req.body.subjectCode,
            subjectName: req.body.subjectName,
            credit: req.body.credit,
            section: req.body.section,
            capacity: req.body.capacity,
            lecturer: req.body.lecturer,
            major: req.body.major,
            classroom: req.body.classroom
      }
      const test = await Subject.findOneAndUpdate(
            query,
            update
      )
      if (test) {
            return res.status(200).send("update success")
      } else {
            return res.status(400).send("update fail")
      }

})

router.delete("/api/subject", async (req, res) => {
      const query = { _id: req.body._id }
      const test = await Subject.findOneAndDelete(query)
      if (test) {
            return res.status(200).send("Delete Success")
      } else {
            return res.status(400).send("Delete Fail")
      }
})

module.exports = router