import axios from "axios";
import type { Dispatch, SetStateAction } from "react";

export default async (setBreweries: Dispatch<SetStateAction<Array<never>>>) => {
  const { data } = await axios.get("/api/getBreweryData");

  return setBreweries(data)
}