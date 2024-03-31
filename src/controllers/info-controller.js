const { StatusCodes } = require("http-status-codes");
const Ok = require("../helpers").Ok;
const Error = require("../helpers").Error;
const logger = require("../config/logger-config");

const information = async (req, res) => {
  try {
    logger.info("GET /info");
    return res.status(StatusCodes.OK).json(
      await Ok(
        {
          nombre: "Modelo de Express JS",
          version: "1.0.0",
          descripcion: "Modelo de API REST con Express JS.",
        },
        null,
        StatusCodes.OK
      )
    );
  } catch (error) {
    logger.info("Error en information: ", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        await Error(
          "Error en el servidor",
          null,
          StatusCodes.INTERNAL_SERVER_ERROR,
          error
        )
      );
  }
};

module.exports = {
  information,
};
