import { DataTypes } from "sequelize";
import Tasks from "./TaskModel";
import sequelize from "../config/Database";

const { STRING, INTEGER } = DataTypes;

const Users = sequelize.define(
  "to_do_users",
  {
    username: {
      type: STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: "Username already in use!",
      },
    },

    email: {
      type: STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
    },
    password: {
      type: STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);

Users.hasMany(Tasks, { foreignKey: "user_id" });
// Tasks.belongsTo(Users, { foreignKey: "id" });

export default Users;
