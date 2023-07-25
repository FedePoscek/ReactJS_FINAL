// para crear el context

// 1) Crear el contexto con un valor por default.
import React from "react"
// export = diposnible para toda la app
export const Contexto = React.createContext(null);
// 2) Importar el contexto en la app.
// 3) Proveer el contexto al componente de la app.
// 4) Consumir el contexto en el componente hijo.