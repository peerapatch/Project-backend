const router = require("express").Router()
const Subject = require("../schemas/schedule")

router.get("/api/schedule", (req, res) => {
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

router.post("/api/schedule", (req, res) => {
      console.log("req.body",req.body)
      Subject.create({
            status: req.body.status,
            year: req.body.year,
            semester: req.body.semester,
            subject: req.body.subject,
            creater: req.body.creater,
            date: req.body.date,
            time: req.body.time,
      })
      res.send("create success")
})



router.put("/api/schedule", async (req, res) => {
      const query = { _id: req.body._id }
      const update = {
            status: req.body.status,
            year: req.body.year,
            semester: req.body.semester,
            subject: req.body.subject,
            creater: req.body.creater,
            date: req.body.date,
            time: req.body.time
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

router.delete("/api/schedule", async (req, res) => {
      const query = { _id: req.body._id }
      const test = await Subject.findOneAndDelete(query)
      if (test) {
            return res.status(200).send("Delete Success")
      } else {
            return res.status(400).send("Delete Fail")
      }
})

module.exports = router