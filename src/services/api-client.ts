import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '779a0a9e98084262b85371ea4cbed3b4',
  }
})