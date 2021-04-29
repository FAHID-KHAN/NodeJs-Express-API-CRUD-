module.exports = (sequelize, Sequelize) => {
  const ToDo = sequelize.define("todo", {
    id: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    checked: {
      type: Sequelize.BOOLEAN
    }
  });
  return ToDo;
};
