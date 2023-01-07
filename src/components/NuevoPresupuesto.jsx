import { useState } from "react";

import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto valido");
      return;
    }

    setMensaje("");

    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={({ target: { value } }) => setPresupuesto(Number(value))}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
