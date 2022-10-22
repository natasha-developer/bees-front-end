import axios from 'axios'
import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

const getBreweryData = async (
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  try {
    const { data } = await axios.get('https://api.openbrewerydb.org/breweries')

    res.send(JSON.stringify(data))
  } catch ({ message }) {
    throw new Error(`Um erro ocorreu: ${message}`)
  }
}

export default getBreweryData
