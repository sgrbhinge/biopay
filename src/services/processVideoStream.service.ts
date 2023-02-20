import fs from "fs"
import axios from "axios"
import { constants } from "../middlewares"

export async function processUni8list(req, res) {
  try {
    const postData = {
      user_name: req.body.userName,
      stream_url: req.body.streamData,
    }
    console.log("Stream type:", "processUni8list")
    console.log("Data:", postData)
    const headers = {
      "Content-Type": "video/mp4",
      "Content-Length": Buffer.byteLength(postData.stream_url + 100),
    }
    const response = await axios.post(constants.API_URL, postData, { headers })
    let result = response && response.data
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).json(error)
  }
}

export async function processBase64(req, res) {
    try {
      const postData = {
        user_name: req.body.userName,
        stream_url: req.body.streamData,
      }
      console.log("Stream type:", "processBase64")
      console.log("Data:", postData)
      const headers = {
        "Content-Type": "video/mp4",
        "Content-Length": Buffer.byteLength(postData.stream_url + 100),
      }
      const response = await axios.post(constants.API_URL, postData, { headers })
      let result = response && response.data
      return res.status(200).send(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  export async function processH264(req, res) {
    try {
      const postData = {
        user_name: req.body.userName,
        stream_url: req.body.streamData,
      }
      console.log("Stream type:", "processH264")
      console.log("Data:", postData)
      const headers = {
        "Content-Type": "video/mp4",
        "Content-Length": Buffer.byteLength(postData.stream_url + 100),
      }
      const response = await axios.post(constants.API_URL, postData, { headers })
      let result = response && response.data
      return res.status(200).send(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
