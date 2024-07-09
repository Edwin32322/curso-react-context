
import { useContext } from "react"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"
import { Loader } from "./Loader"
import { Message } from "./Message"
import { ProductsContext } from "../context/ProductsContext"
export const CrudApi = () => {
    const { error, products, loading } = useContext(ProductsContext)
    return (
        <div>
            <h2>Crud API - JSON WEB SERVER</h2>
            <CrudForm></CrudForm>
            {products && <CrudTable></CrudTable>}
            {error && <Message msg={`Error: ${error.status}-${error.statusText}`} bgColor={"#dc3545"}></Message>}
            {loading && <Loader></Loader>}
        </div>
    )
}
