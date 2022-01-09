import axios from "axios";

const unsplashInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID mqIkRU987kXQvXaojp0IsLdj3u9VKaTmp2YWe-3ggz4"
  }
})

export default unsplashInstance;