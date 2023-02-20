import { Router }  from 'express'
import { processBase64, processH264, processUni8list } from '../services/processVideoStream.service'
const router = Router()

router.get("/", (req, res) => {
  res.send("Biopay video streaming auth!!")
})

router.post("/user-registration", (req, res) => {
  res.json(req.body)
})

router.post("/process-uni8list", processUni8list)
router.post("/process-base64", processBase64)
router.post("/process-h264", processH264)

module.exports = router