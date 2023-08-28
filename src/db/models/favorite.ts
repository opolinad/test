
import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import User from "./user";

@Table({ timestamps: true, tableName: 'favorite' })
export default class Favorite extends Model {
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @Column(DataType.STRING)
    pokemonId: string;

}