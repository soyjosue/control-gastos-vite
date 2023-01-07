import { useState, useEffect } from 'react';

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="">Filtrar Gastos</label>
          <select
            value={filtro}
            onChange={({target:{value}}) => setFiltro(value)}
          >
            <option value="">-- Todas las Categorias --</option>
						<option value="ahorro">Ahorro</option>	
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="gastos">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="subscripciones">Subscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtro