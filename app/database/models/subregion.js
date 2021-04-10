module.exports = (sequelize, DataTypes) => {
    const Subregion = sequelize.define("subregion", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      timesData: {
        type: DataTypes.JSON
      },
      latitude: {
        type: DataTypes.FLOAT
      },
      longitude: {
        type: DataTypes.FLOAT
      },
    });
  
    return Subregion;
  };