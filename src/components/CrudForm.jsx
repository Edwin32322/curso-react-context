/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { ProductsContext } from "../context/ProductsContext"
const initialForm = {
    id: null,
    nombre: "",
    precio: ""
}
export const CrudForm = () => {
    const { createData, updateData, setProductToEdit, productToEdit } = useContext(ProductsContext)
    const { form, setForm, handleChange, handleReset } = useForm(initialForm)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.nombre === "" || form.precio === "") {
            alert("Campos Requeridos")
            return
        }
        if (form.id === null) {
            delete form.id
            createData(form)
        } else {
            updateData(form)
            setProductToEdit(null)
        }

        handleReset(initialForm)
    }
    useEffect(() => {
        if (productToEdit) {
            setForm(productToEdit)
        } else {
            setForm(initialForm)
        }
    }, [productToEdit, setForm])
    return (
        <div>
            {productToEdit ? <h3>Actualizar</h3> : <h3>Agregar</h3>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.nombre} name="nombre" onChange={handleChange} />
                <input type="text" value={form.precio} name="precio" onChange={handleChange} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={() => handleReset(initialForm)} />
            </form>
        </div>
    )
}
