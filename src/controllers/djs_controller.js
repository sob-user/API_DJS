const { pick } = require("lodash");

const { Dj, Musicalgenre, DjMusicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    // Your code here
    const djs = await Dj.findAll()
    return {djs};
  },

  getDj: async (name) => {
    // Your code here
    const dj = await Dj.findOne({where: {name}})
    if(!dj) throw new NotFoundError('dj not exist')
    return {dj};
  },

  addDj: async (data) => {
    // Your code here

    const dj = await Dj.build({data})
    return {dj};
  },

  updateDj: async (name, data) => {
    // Your code here
    return {};
  },

  deleteDj: async (name) => {
    // Your code here
    return {};
  },
};

module.exports = djsController;
