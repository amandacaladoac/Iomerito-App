const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Reserva = new Schema({
  nome: {
    type: String
  },
  email: {
    type: String
  },
  telefone: {
    type: Number
  },
  data: {
    type: Date
  },
  horario: {
    type: String
  },
  quantidade_pessoas: {
    type: Number
  },
  mensagem: {
    type: String
  }
},{
    collection: 'reserva'
});

module.exports = mongoose.model('Reserva', Reserva);