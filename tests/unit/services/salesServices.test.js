const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesServices = require('../../../src/services/salesServices')
const { salesList, newProduct, attProduct } = require('../mocks/sales.mock');
const { expect } = chai;
const salesModels = require('../../../src/models/salesModels');

describe('Teste para a camada Service de Sales', function () {
  describe('Get all sales', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return all sales', async function () {
      sinon.stub(salesModels, 'getAll').resolves(salesList);

      const result = await salesServices.getAll();

      expect(result).to.be.deep.equal(salesList);
    });
  });

  describe('Get a sale by ID', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return a sale with specific ID', async function () {
      sinon.stub(salesModels, 'getSaleById').resolves(salesList[0]);

      const result = await salesServices.getSaleById(1);

      expect(result).to.be.deep.equal(salesList[0]);
    });
  });
});