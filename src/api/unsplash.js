//GOAL of this file: create a configuration for the Unsplash AXIOS requests
// Not appropriate to have directly in the App class
import axios from "axios";

export default axios.create({
  // creates an instance of the axios object with some pre-configured options for usage in this application
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID U6y-Dx3sRMszOS2xBlMrpTmWaQ-CB5BFm2ER0imiLKg",
  },
});
