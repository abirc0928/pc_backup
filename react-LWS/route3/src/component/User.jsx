import {useParams, useLocation} from "react-router-dom"
export default function User(){
    const params = useParams()
    const {name} = params
    // console.log(name)
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <h1>
                This is {name} page
            </h1>
        </div>
    )
}