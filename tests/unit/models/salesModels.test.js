const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesModels = require('../../../src/models/salesModels')
const connection = require('../../../src/models/connection');
const { salesList } = require('../mocks/sales.mock');
const { expect } = chai;

describe('Teste para a camada Model de Sales', function () {
  describe('Get all sales', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return all sales', async function () {
      sinon.stub(connection, 'execute').resolves([salesList]);

      const result = await salesModels.getAll();

      expect(result).to.be.deep.equal(salesList);
    });
  });

  describe('Get a sale by ID', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return a sale with specifc ID', async function () {
      sinon.stub(connection, 'execute').resolves([salesList[0]]); // execute devolve um array dentro de outro array;

      const result = await salesModels.getSaleById(1);

      expect(result).to.be.deep.equal(salesList[0]);
    });
  });

  describe('Delete a sale', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should delete a sale from DB', async function () {
      sinon.stub(connection, 'execute').resolves(salesList[0]);

      const result = await salesModels.deleteSale(1);

      expect(result).to.be.deep.equal(salesList[0]);
    });
  });
});