const express = require('express');
const app = express();
const reservaRoutes = express.Router();

let Reserva = require('../model/Reserva');

// api to add reserva
reservaRoutes.route('/add').post(function (req, res) {
  let reserva = new Reserva(req.body);
  reserva.save()
  .then(reserva => {
    res.status(200).json({'status': 'success','mssg': 'reserva added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get reservas
reservaRoutes.route('/').get(function (req, res) {
  Reserva.find(function (err, reservas){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','reservas': reservas});
    }
  });
});

// api to get reserva
reservaRoutes.route('/reserva/:id').get(function (req, res) {
  let id = req.params.id;
  Reserva.findById(id, function (err, reserva){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','reserva': reserva});
    }
  });
});

// api to update route
reservaRoutes.route('/update/:id').put(function (req, res) {
    Reserva.findById(req.params.id, function(err, reserva) {
    if (!reserva){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        reserva.nome = req.body.nome;
        reserva.email = req.body.email;
        reserva.telefone = req.body.telefone;
        reserva.data = req.body.data;
        reserva.horario = req.body.horario;
        reserva.quantidade_pessoas = req.body.quantidade_pessoas;
        reserva.mensagem = req.body.mensagem;

        reserva.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
reservaRoutes.route('/delete/:id').delete(function (req, res) {
  Reserva.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = reservaRoutes;