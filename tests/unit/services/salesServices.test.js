const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesServices = require('../../../src/services/salesServices')
const { salesList, invalidId } = require('../mocks/sales.mock');
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

  describe('Delete a sale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should delete a sale from DB', async function () {
      sinon.stub(salesServices, 'getSaleById').resolves(3);
      sinon.stub(salesServices, 'deleteSale').resolves(salesList[0]);

      const result = await salesServices.deleteSale(3);

      expect(result).to.be.deep.equal(salesList[0]);
    });
  });

  describe('Delete a sale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should delete a sale from DB', async function () {
      sinon.stub(salesModels, 'getSaleById').resolves(1);
      sinon.stub(salesModels, 'deleteSale').resolves(salesList[0]);

      const result = await salesServices.deleteSale(1);

      expect(result).to.be.deep.equal(salesList[0]);
    });

    it('Should return an error when the id doesnt exists', async function () {
        it('Should delete a product from DB', async function () {
          sinon.stub(salesModels, 'getSaleById').resolves(100);

          const result = await salesServices.deleteSale(100);

          //expect(result.type).to.be.equal(404);
          expect(result).to.be.deep.equal(invalidId);
        });
    });
  });
});