module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("region", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude: {
        type: DataTypes.FLOAT
      },
      longitude: {
        type: DataTypes.FLOAT
      }
    });
  
    return Region;
  };