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

export async function processRTSP2(req, res) {
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
  // fs.createWriteStream(myStream).pipe(res)
  const headers = {
    "Content-Type": "video/mp4",
    "Content-Length": Buffer.byteLength(myStream + 100),
  };
  const response = await axios.post(
    constants.API_URL,
    fs.createWriteStream(myStream).pipe(res),
    { headers }
  );
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

export async function processRTSP(req, res) {
  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  let rtspStream = "rtsp://3.19.223.226:6554/test-video";
  let videoPath = new stream({
    name: "test-video",
    streamUrl: rtspStream,
    wsPort: 9999,
    ffmpegOptions: {
      // options ffmpeg flags
      "-stats": "", // an option with no neccessary value uses a blank string
      "-r": 30, // options with required values specify the value after the key
    },
  });

  // Create headers
  const headers = {
    "Accept-Ranges": "bytes",
    "Content-Length": Buffer.byteLength(videoPath + 100),
    "Content-Range": "bytes 24",
    "Content-Type": "video/mp4"
  };

  // HTTP Status 206 for Partial Content
  // res.writeHead(206, headers);

  const response = await axios.post(
    constants.API_URL,
    Buffer.from(videoPath),
    { headers }
  );
  
  console.log(response);
  let result = response && response.data;
  return res.status(200).send(result);
}
