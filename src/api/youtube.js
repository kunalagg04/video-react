import axios from "axios";

const KEY = "AIzaSyDnhWyne7kFi9to9meolpB6cgslDPKbSDk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
