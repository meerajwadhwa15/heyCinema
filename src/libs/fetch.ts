import axios from 'axios'

export type ServerProps = {
  url: string
  data?: object
  params?: object
}

export type responseProps = {
  data: [] | {}
}

function Fetch({ url, data = {}, params = {} }: ServerProps) {
  return axios.request({
    url,
    data,
    params,
  })
}

export default Fetch
