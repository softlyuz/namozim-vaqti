class CrudHelper {
    constructor(name) {
      this.name = name
      this.create = {
        success: (id) => `>> Created ${this.name}, id=${id}`,
        error: (id, error) => `>> Error while creating ${this.name} id=${id}: ${error}`
      }
      this.read = {
        error: (id, error) => `>> Error while finding ${this.name} id=${id}: ${error}`
      }
      this.update = {
        success: (id) => `>> ${this.name} id = ${id} was updated successfully`,
        problem: (id) => `>> Cannot update ${this.name} with id=${id}. Maybe ${this.name} was not found or data is empty!`,
        error: (id, error) => `>> Error updating ${this.name} with id=${id}: %O` + error
      }
      this.del = {
        success: (id) => `>> Deleted ${this.name}, id=${id}`,
        problem: (id) => `>> Cannot delete ${this.name} with id=${id}. Maybe ${this.name} was not found or data is empty!`,
        error: (id, error) => `>> Error while deleting ${this.name} id=${id}: ${error}`
      }
    }
  }
  module.exports = CrudHelper