import axios from 'axios'

export default async function(req, res) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources')
    const data = await dataRes.json()
    res.send(data)
  }
  if (req.method === 'POST') {
    const { title, description, link, timeToFinish, priority } = req.body
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Data are missing!')
    }

    try {
      const axiosRes = await axios.post(
        'http://localhost:3001/api/resources',
        req.body
      )
      return res.send(axiosRes.data)
    } catch (error) {
      return res.status(422).send('Data cannot be stored!!')
    }

    return res.send('Data has been received')
  }
}
