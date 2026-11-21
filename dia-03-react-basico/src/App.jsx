import { Encabezado } from "./components/Encabezado";
import { ListaProductos } from "./components/ListaProductos";
import { productos } from "./data/productos";

const App = () => {
    return (
        <>
        <Encabezado titulo ="Prueba"></Encabezado>
        <ListaProductos productos={productos}></ListaProductos>
        </>
    )
}

export default App