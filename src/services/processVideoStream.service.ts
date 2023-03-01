import fs from "fs";
import axios from "axios";
import stream from "node-rtsp-stream";
import { constants } from "../middlewares";

async function postVideoToAPI(req, res) {
  try {
    const postData = {
      user_name: req.body.userName,
      stream_url: req.body.streamData,
    };
    console.log("Stream type:", "processUni8list");
    console.log("Data:", postData);
    const headers = {
      "Content-Type": "video/mp4",
      "Content-Length": Buffer.byteLength(postData.stream_url + 100),
    };
    const response = await axios.post(constants.API_URL, postData, { headers });
    let result = response && response.data;
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function processUni8list(req, res) {
  try {
    let postData = {
      message: "Received uni8list video stream!",
    };
    return res.status(200).send(postData);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function processBase64(req, res) {
  try {
    let postData = {
      message: "Received base64 video stream!",
    };
    return res.status(200).send(postData);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function processH264(req, res) {
  try {
    let postData = {
      message: "Received h264 video stream!",
    };
    return res.status(200).send(postData);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function processRTSP(req, res) {
  let rtspStream = "rtsp://3.19.223.226:6554/test-video";
  let myStream = new stream({
    name: "test-video",
    streamUrl: rtspStream,
    wsPort: 9999,
    ffmpegOptions: {
      // options ffmpeg flags
      "-stats": "", // an option with no neccessary value uses a blank string
      "-r": 30, // options with required values specify the value after the key
    },
  });
  const headers = {
    "Content-Type": "video/mp4",
    "Content-Length": Buffer.byteLength(myStream + 100),
  };
  const response = await axios.post(constants.API_URL, myStream, { headers });
  let result = response && response.data;
  return res.status(200).json(result);
}

export async function processRTSPstream(req, res) {
  try {
    let rtspStream = "rtsp://3.19.223.226:6554/test-video";
    const postData = {
      user_name: req.body.userName,
      stream_url: req.body.streamData,
    };
    console.log("Stream type:", "processUni8list");
    console.log("Data:", postData);
    const headers = {
      "Content-Type": "video/mp4",
      "Content-Length": Buffer.byteLength(postData.stream_url + 100),
    };
    const response = await axios.post(constants.API_URL, postData, { headers });
    let result = response && response.data;
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).json(error);
  }
}
