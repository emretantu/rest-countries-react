import { useParams } from "react-router-dom"

const Detail = () => {
  const { countryCode } = useParams();
  return (
    <div>Detail: {countryCode}</div>
  )
}

export default Detail