const db = require("../models");
const Todo = db.todo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    const todo = db = {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed ? req.body.completed : false
    }
    
    Todo.create(todo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the note."
            })
        })
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Todo.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Todo.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Todo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Note was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update note with id=${id}. Maybe note was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating note with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        Todo.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Note was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete note with id=${id}. Maybe note was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete note with id=" + id
            });
          });
      };
};

exports.deleteAll = (req, res) => {
    Todo.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Notes were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all notes."
          });
        });
};

exports.findAllUncompleted = (req, res) => {
    Todo.findAll({ where: { completed: false } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};