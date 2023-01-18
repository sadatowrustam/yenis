'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate({ News,Mainpage }) {
            this.belongsTo(News, { foreignKey: "newsId", as: "images" })
            this.belongsTo(Mainpage, { foreignKey: "mainId", as: "main"})
        }
    }
    Image.init({
        image_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        newsId: DataTypes.INTEGER,
        mainId:DataTypes.INTEGER,
        image: DataTypes.STRING,
    }, {
        sequelize,
        tableName: "images",
        modelName: 'Images',
    });
    return Image;
};