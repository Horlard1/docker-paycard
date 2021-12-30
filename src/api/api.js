import axios from 'axios'
import { ref } from 'vue'

const payData = (datas) => {
  const data = ref(null)
  const error = ref(null)

  const sendData = async () => {
    try {
      let response = await axios.post('jhk', JSON.stringify(datas), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
    //   data.value = response.data
    } catch (err) {
      error.value = err.message
    }
  }

  return { data, error, sendData }
}

export default payData
