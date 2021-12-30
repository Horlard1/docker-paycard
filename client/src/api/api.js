import axios from 'axios'

export const payData = async (datas) => {
  try {
    let response = await axios.post(`${process.env.VUE_APP_SERVER}/payment`, JSON.stringify(datas), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  } catch (err) {
    return err
  }
}
