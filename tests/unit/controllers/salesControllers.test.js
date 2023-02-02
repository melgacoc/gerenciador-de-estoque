const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const saleServices = require('../../../src/services/salesServices')
const { salesList, invalidId } = require('../mocks/sales.mock');
const { expect } = chai;
chai.use(sinonChai);
const salesController = require('../../../src/controllers/salesControllers');

describe('Teste para a camada Controller de Sales', function () {
  describe('Get all sales', function () {

    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });

    it('Should return all sales', async function () {

      sinon.stub(saleServices, 'getAll').resolves(salesList);

      await salesController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(salesList);
    });
  });

  describe('Get a sale by ID', function () {

    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });
    it('Should return a sale with specific ID', async function () {

      req.params = { id: 1 };

      sinon.stub(saleServices, 'getSaleById').resolves([salesList[0],salesList[1]]);

      await salesController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly([salesList[0], salesList[1]]);
    });

    it('Should return a error', async function () {
      req.params = { id: 100 };

      sinon.stub(saleServices, 'getSaleById').resolves(0);

      await salesController.getSaleById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWithExactly({ message: 'Sale not found' });
    });
  });

  describe('Delete a sale', function () {
    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });

    it('Should return a 204 status when a product was successfully deleted', async function () {
      req.params = { id: 1 };

      sinon.stub(saleServices, 'deleteSale').resolves(invalidId);

      await salesController.deleteSale(req, res);

      expect(res.status).to.have.been.calledOnceWith(204);
      expect(res.json).to.have.been.calledOnceWithExactly();
    });
  });
});