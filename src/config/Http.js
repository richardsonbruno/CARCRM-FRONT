import Axios from 'axios';
import { baseUrl } from './App'

export const Http = Axios.create({
  baseURL: baseUrl
})