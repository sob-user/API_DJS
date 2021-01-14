const { pick } = require("lodash");

const { Dj, Musicalgenre, DjMusicalgenre, Clubs } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {

    const findAllDjs = await Dj.findAll({
      order: [["name", "ASC"]],
      attributes: {
        exclude: ["createdAt", "updatedAt", "club_id"],
        include: [
          {
            model: Clubs,
            attributes: ["name"]
          },
          {
            model: Musicalgenre,
            as: "musical_genres",
            through: {
              attributes: []
            }
          }
        ],
      },
      raw: true
    });

    return findAllDjs ;
  },

  getDj: async (name) => {
    // Your code here
    const dj = await Dj.findOne({where: {name}})
    if(!dj) throw new NotFoundError('dj not exist')
    return dj;
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
