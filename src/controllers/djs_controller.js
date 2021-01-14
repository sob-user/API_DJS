const { pick } = require("lodash");

const { Dj, Musicalgenre, DjMusicalgenre, Clubs } = require("../models");
const { NotFoundError, BadRequestError } = require("../helpers/errors");

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
    const findDj = await Dj.findOne({
      where: {
        name
      },
      attributes: {
        exclude: ["createdAt", "clubv_id"]
      },
      exclude: [
        {
          model: Clubs,
          attributes: ["name"],
          as: "clubs"
        },
        {
          model: Musicalgenre,
          as: "musical_genre",
          through: {
            attributes: []
          }
        }
      ]
    });

    if(!dj) throw new NotFoundError(
      "not found", "DJ doesn't exist")

    return dj;
  },

  addDj: async (data) => {
    const djName = data.name
    const clubId= data.club_id

    const findDj = await Dj.findOne({
      where: {
        name: djName
      }
    });

    if(findDj) throw new BadRequestError(
      "existing resource", "Dj already exist")

    const findClub = await Clubs.findOne({
      where: {
        id: clubId
      }
    });

    if(!findClub) throw new NotFoundError(
      "Not found", "This club already exist")

    const createNewDj = await Dj.create(data)

    const musicalGenreRegistred = await Musicalgenre.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });

    const musicalGenreUnregistered = data.musical_genre

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
