import { DataTypes, Model } from 'sequelize';
import connection from '../../database/connection';

class Orders extends Model {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath!: string;
  orderFileName!: string;
  orderOriginalName!: string;
  emissionDate!: string;
  pdfFile!: string;
  emitedTo!: string;
  nNf!: string;
  CTE!: string;
  value!: string;
  cnpjId!: number;
  userId!: number;
  buyerId!: number;
  providerId!: number;
  orderStatusBuyer!: string;
  orderStatusProvider!: string;
  deliveryReceipt!: string;
  cargoPackingList!: string;
  deliveryCtrc!: string;
}

Orders.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderFileName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderOriginalName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emissionDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pdfFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nNf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CTE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  orderStatusBuyer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryReceipt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cargoPackingList: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryCtrc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  tableName: 'orders',
  charset: 'latin1',
});
