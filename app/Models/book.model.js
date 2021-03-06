const { books: BookSchemas } = require('../../Database/Schemas');
class bookModel {
    async get() {
        try {
            return await BookSchemas.findAll();
        } catch (error) {
            console.log('error', error);
        }
    }

    async add(req) {
        try {
            return await BookSchemas.create(req);
        } catch (error) {
            console.log('error', error);
        }
    }

    async delete(id) {
        try {
            return await BookSchemas.destroy({ where: { id } })
        } catch (error) {

        }
    }

    async edit(body) {
        return await BookSchemas.update(body, { where: { id: body.id } });
    }
}

module.exports = bookModel;