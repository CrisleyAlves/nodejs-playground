const AddressModel = require("@models/Address");
const UserModel = require("@models/User");

module.exports = {
  async getAddresses(user_id) {
    return UserModel.findByPk(user_id, {
      include: { association: 'addresses' }
    });
  },
  async save({ zipcode, street, number, user_id }) {
    return await AddressModel.create({
      zipcode,
      street,
      number,
      user_id,
    });
  },
  async delete({ user_id, address_id }) {
    return AddressModel.destroy({ where: { id: address_id, user_id } });
  }
};
