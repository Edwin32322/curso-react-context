/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const CrudTable = () => {
    const { products, setProductToEdit, deleteData } = useContext(ProductsContext)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PRECIO</th>
                        <th>OPERACIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (!Array.isArray(products) || products.length === 0)
                            ? <tr><td colSpan="4">No hay datos</td></tr>
                            : products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.nombre}</td>
                                        <td>{product.precio}</td>
                                        <td>
                                            <button onClick={() => setProductToEdit(product)}>Editar</button>
                                            <button onClick={() => deleteData(product.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                );
                            })
                    }
                </tbody>
            </table>
        </>
    );
}
