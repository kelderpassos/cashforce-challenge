import { DataTypes, Model } from 'sequelize';
import connection from '../../database/connection'

class Buyers extends Model {
  id!: number;
  name!: string;
  tradingName!: string;
  cashforceTax!: string;
  responsibleName!: string;
  responsibleEmail!: string;
  responsiblePosition!: string;
  responsiblePhone!: string;
  responsibleMobile!: string;
  website!: string;
  postalCode!: string;
  address!: string;
  number!: string;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number;
  confirm!: number;
  email!: string;
}

Buyers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tradingName: {
    type: DataTypes.STRING,
  },
  cashforceTax: {
    type: DataTypes.STRING,
  },
  responsibleName: {
    type: DataTypes.STRING,
  },
  responsibleEmail: {
    type: DataTypes.STRING,
  },
  responsiblePosition: {
    type: DataTypes.STRING,
  },
  responsiblePhone: {
    type: DataTypes.STRING,
  },
  responsibleMobile: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  postalCode: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  complement: {
    type: DataTypes.STRING,
  },
  neighborhood: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  situation: {
    type: DataTypes.STRING,
  },
  situationDate: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.STRING,
  },
  updatedAt: {
    type: DataTypes.STRING,
  },
  cnpjId: {
    type: DataTypes.STRING,
  },
  confirm: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  tableName: 'buyers',
});
