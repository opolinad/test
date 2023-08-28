
import { Table, Model, Column, DataType, Unique } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'user' })
export default class User extends Model {
    @Column(DataType.STRING)
    username: string;

    @Column(DataType.STRING)
    password: string;

    @Column(DataType.STRING)
    firstname: string;

    @Column(DataType.STRING)
    lastname: string;

    @Column(DataType.STRING)
    @Unique
    email: string;
}