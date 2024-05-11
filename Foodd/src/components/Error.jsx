import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)

    return(
        <div>
            <h1>OOps</h1>
            <h2>Something Went Wrong</h2>
            <h1>{err.status}</h1>
            <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error