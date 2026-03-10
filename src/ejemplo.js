import dotenv from 'dotenv'
dotenv.config()
import { initBaseDeDatos } from './bd/init.js'
import { Pedido } from './bd/modelos/pedido.js'

await initBaseDeDatos()
const pedido = new Pedido({
  nombre: 'Hugo Varela Lopez',
  telefono: '4181231234',
  fecha_solicitud: '07/02/2026',
  fecha_envio: '09/02/2026',
  total: 45.00,
  pagado: ['NO PAGADO'],
  abono: 45.00,
  comentario: 'NO Ha sido pagado el pedido',
})
await pedido.save()
const createdPedido = await pedido.save()
await Pedido.findByIdAndUpdate(createdPedido._id, {
  $set: { nombre: 'Juan Gabriel Lopez Beltran' },
})
const pedidos = await Pedido.find()
console.log(pedidos)  