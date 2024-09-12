import { useParams } from "react-router-dom"
import { useContext } from "react";
import UsersContext from "../../../context/AuthContext"

const EachPatientReport = () => {
    const { people, loading } = useContext(UsersContext);
    const {id} = useParams()
  return (
    <div>
        EachPatientReporT
        {people.filter(person => person.id === id )}
    </div>
  )
}

export default EachPatientReport