import useData from "./useData"

interface Plataform {
  id: number
  name: string
  slug: string
}

const usePlataforms = () => {
  return useData<Plataform>("/platforms/lists/parents")
}

export default usePlataforms