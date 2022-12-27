import { DataTypes, Model } from 'sequelize';
import connection from '../../database/connection';

class CNPJS extends Model {
  id!: number;
  cnpj!: string;
  companyType!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

CNPJS.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  tableName: 'cnpjs',
  charset: 'latin1',
});
