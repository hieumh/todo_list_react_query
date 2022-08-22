import axios from "axios"

const defaultConfig = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const todoAxios = axios.create({
  baseURL: process.env.API_URL,
  ...defaultConfig
})
