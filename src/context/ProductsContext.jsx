/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
const api = helpHttp()
export const ProductsContext = createContext("")
export const ProductsContextProvider = ({ children }) => {
    let url = "http://localhost:3000/productos"
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [productToEdit, setProductToEdit] = useState(null)
    const createData = (form) => {
        const payload = {
            ...form
        }
        api.post(url, {
            body: payload,
            headers: { "content-type": "application/json" }
        }).then(res => {
            if (!res.error) {
                setProducts([...products, res])
            } else {
                setError(res)
            }
        })
    }
    const updateData = (payload) => {
        let endpoint = `${url}/${payload.id}`
        api.put(endpoint, {
            body: payload,
            headers: { "content-type": "application/json" }
        }).then(res => {
            if (!res.err) {
                let newData = products.map(producto => producto.id === payload.id ? payload : producto)
                setProducts(newData)
            } else {
                setError(res)
            }
        })
    }
    const deleteData = (id) => {
        const confirm = window.confirm("¿Desea eliminar el producto?")
        let endpoint = `${url}/${id}`
        if (confirm) {
            api.del(endpoint, {
                "content-type": "application/json"
            }).then(res => {
                if (!res.err) {
                    let newData = products.filter(product => product.id !== id)
                    setProducts(newData)
                } else {
                    setError(res)
                }
            })
        } else {
            return
        }
    }

    useEffect(() => {
        setLoading(true)
        //JSON WEB SERVER
        api.get(url).then(res => {
            if (!res.err) {
                setProducts(res)
            } else {
                setError(res)
            }
            setLoading(false)
        })
    }, [url])
    const data = {
        products,
        productToEdit,
        setProductToEdit,
        loading,
        createData,
        updateData,
        deleteData,
        error

    }
    return <ProductsContext.Provider value={data}>
        {children}
    </ProductsContext.Provider>
}