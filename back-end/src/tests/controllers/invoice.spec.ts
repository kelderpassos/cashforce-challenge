import chai from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import InvoiceModel from '../../infra/api/models/invoice.model';
import Orders from '../../infra/database/models/Orders';
import { mockInvoice } from '../mocks';

describe('Endpoint /invoices', () => {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Get method', () => {
    const invoiceModel = new InvoiceModel();

    it('should return status code "200" in case of sucess', async () => {

    });
  });
});
