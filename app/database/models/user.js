module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("user", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		auth: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	});

	return User;
};
