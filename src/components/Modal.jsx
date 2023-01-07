import { useState, useEffect } from 'react';

import Mensaje from './Mensaje';

import CerrarBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {
	const [mensaje, setMensaje] = useState('');

	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState(0);
	const [categoria, setCategoria] = useState('');
	const [fecha, setFecha] = useState('');
	const [id, setId] = useState('');

	useEffect(() => {
		if(Object.keys(gastoEditar).length > 0)
    {
      setNombre(gastoEditar.nombre);
			setCantidad(gastoEditar.cantidad);
			setCategoria(gastoEditar.categoria);
			setFecha(gastoEditar.fecha);
			setId(gastoEditar.id);
    }	
	}, [])


	const handleOcultarModal = () => 
	{
		setAnimarModal(false);

		setTimeout(() => {
			setModal(false);
		}, 250);
		setGastoEditar({});
	};

	const handleSubmit = e => 
	{
		e.preventDefault();

		if([nombre, cantidad, categoria].includes(''))
		{
			setMensaje('Todos los campos son obligatorios.');

			setTimeout(() => {
				setMensaje('');
			}, 3000)

			return;
		}

		guardarGasto({ nombre, cantidad, categoria, id, fecha });

		handleOcultarModal();
	};

	return (
		<div className='modal'>
			<div className="cerrar-modal">
				<img
					src={CerrarBtn}
					alt="cerrar modal"
					onClick={handleOcultarModal}
				/>
			</div>

			<form 
				className={`formulario ${animarModal ? "animar" : "cerrar"}`}
				onSubmit={handleSubmit}
			>
				<legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

				{mensaje && <Mensaje  tipo="error">{mensaje}</Mensaje>}

				<div className="campo">
					<label htmlFor="nombre">Nombre Gasto</label>

					<input 
						id="nombre"
						type="text" 
						placeholder="Añade el Nombre del Gasto"
						value={nombre}
						onChange={({target:{value}}) => setNombre(value)}
					/>
				</div>

				<div className="campo">
					<label htmlFor="cantidad">Cantidad</label>

					<input 
						id="cantidad"
						type="number" 
						placeholder="Añade la cantidad del gasto: ej. 300"
						value={cantidad}
						onChange={({target:{value}}) => setCantidad(Number(value))}
					/>
				</div>

				<div className="campo">
					<label htmlFor="categoria">Categoría</label>

					<select
					value={categoria}
						id="categoria"
						onChange={({target:{value}}) => setCategoria(value)}
					>
						<option value="">-- Seleccione --</option>
						<option value="ahorro">Ahorro</option>	
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="gastos">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="subscripciones">Subscripciones</option>
					</select>
				</div>

				<input 
					type="submit" 
					value={gastoEditar.nombre ? "Editar Gasto" : "Añadir Gasto"}
				/>
			</form>
		</div>
	)
}

export default Modal