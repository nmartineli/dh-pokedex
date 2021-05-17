module.exports = (sequelize, DataTypes) =>
	sequelize.define(
		'Legendary',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING(100),
			},
			description: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			healthPoints: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			specialAttack: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			defense: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			attack: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			experience: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			specialDefense: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
		},
		{
			tableName: 'legendaries',
			timestamps: false,
		}
	);
