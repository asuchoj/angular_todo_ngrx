let tasksData = [
  { id: '05ox659oh', name: 'Задание 1', date: '2019-08-21', isComplete: false },
  { id: 'y517lt5w4', name: 'Задание 2', date: '2019-05-01', isComplete: false },
  { id: '6uc7u0t55', name: 'Задание 3', date: '2019-05-28', isComplete: true },
  { id: '05ox659oh1', name: 'Задание 1', date: '2019-08-21', isComplete: false },
  { id: 'y517lt5w42', name: 'Задание 2', date: '2019-05-01', isComplete: false },
  { id: '6uc7u0t554', name: 'Задание 3', date: '2019-05-28', isComplete: true }
];

const getNewId = function() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports.getTasks = function(req, res) {
  let tasks = [...tasksData];

  res.status(200).json({
    tasks: tasks.splice(req.query.from - 1, req.query.count),
    pages: Math.ceil(tasksData.length / req.query.count)
  });
}

module.exports.addTasks = function(req, res) {
  req.body.id = getNewId();
  tasksData.push(req.body);
  res.status(200).json(req.body.id)
}

module.exports.editTask = function(req, res) {
  tasksData.splice([tasksData.findIndex(item => item.id === req.body.id)], 1, req.body);
  res.status(200).json({message: true});
}

module.exports.deleteTask = function(req, res) {
  tasksData.splice([tasksData.findIndex(item => item.id === req.query.id)], 1);
  res.status(200).json({message: true});
}

module.exports.changeTaskStatus = function(req, res) {
  let task = tasksData.find(item => item.id === req.body.id);
  task.isComplete = !task.isComplete;
  res.status(200).json({message: true});
}
