import { useParams } from "react-router-dom"

const EachHmoReport = () => {
    const params = useParams()
    const {id} = params
  return (
    <div>EachHmoReport{id}</div>
  )
}

export default EachHmoReport