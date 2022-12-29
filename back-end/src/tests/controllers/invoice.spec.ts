/* eslint-disable @typescript-eslint/no-unused-expressions */
import chai, { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import InvoiceModel from '../../infra/api/models/invoice.model';
import Orders from '../../infra/database/models/Orders';
import { mockInvoice } from '../mocks';
import InvoiceController from '../../infra/api/controllers/invoice.controller';

describe('Endpoint /invoices', () => {
  const invoiceModel = new InvoiceModel();

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
    it('should return status code "200" in case of sucess', async () => {
      const invoiceController = new InvoiceController();
      sinon.stub(invoiceModel, 'findAll').resolves(mockInvoice as unknown as Orders[]);

      req.params = { id: '1' };

      await invoiceController.findAll(req, res);

      const resStub = res.status as sinon.SinonStub;

      expect(resStub.calledWith(200)).to.be.true;
    });
  });
});
