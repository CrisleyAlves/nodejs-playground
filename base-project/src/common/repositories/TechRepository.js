const UserModel = require("@models/User");

module.exports = {
  async getTechs(user_id) {
    return await UserModel.findByPk(user_id, {
      include: {
        association: 'techs',
        attributes: ['name'],
        through: {
          attributes: [],
        }
      }
    });
  },
};
