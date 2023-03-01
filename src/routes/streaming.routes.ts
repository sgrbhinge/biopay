import { Router }  from 'express'
import { processBase64, processH264, processUni8list, processRTSP } from '../services/processVideoStream.service'
const router = Router()

router.get("/", (req, res) => {
  res.send("Biopay video streaming!!")
})

router.post("/user-registration", (req, res) => {
  let userData = {
    "data": req.body,
    "message": "Received user-registration data!"
  }
  res.status(200).json(userData)
})

router.post("/process-rtsp", processRTSP)
router.post("/process-h264", processH264)
router.post("/process-base64", processBase64)
router.post("/process-uni8list", processUni8list)

module.exports = router