import axios from 'axios';

const KEY = 'AIzaSyCRWrZspm199_FjqBQNJQrqrCk_LN_XcB8';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});