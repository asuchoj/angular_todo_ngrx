const tasksData = require('../data/tasks.data');

const getNewId = function() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports.getTasks = function(req, res) {
  res.status(200).json(tasksData)
}

module.exports.addTasks = function(req, res) {
  const body = req.body;
  body.id = getNewId();
  tasksData.splice(0, 0, body);

  res.status(200).json(body.id)
}

module.exports.editTask = function(req, res) {
  const body = req.body;
  tasksData.splice([tasksData.findIndex(item => item.id === body.id)], 1, body);

  res.status(200).json({message: true});
}

module.exports.deleteTask = function(req, res) {
  const id = req.query.id;
  tasksData.splice([tasksData.findIndex(item => item.id === id)], 1);
  
  res.status(200).json({message: true});
}

module.exports.changeTaskStatus = function(req, res) {
  const id = req.body.id;
  let task = tasksData.find(item => item.id === id);
  task.isComplete = !task.isComplete;

  res.status(200).json({message: true});
}