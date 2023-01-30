const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsServices = require('../../../src/services/productsServices')
const { productsList, newProduct, attProduct } = require('../mocks/productsModels.mock');
const { expect } = chai;
const productsModels = require('../../../src/models/productsModels');

describe('Teste para a camada Service de Products', function () {
  describe('Get all products', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return all products', async function () {
      sinon.stub(productsModels, 'getAll').resolves(productsList);

      const result = await productsServices.getAll();

      expect(result).to.be.deep.equal(productsList);
    });
  });

  describe('Get a product by ID', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return a product with specific ID', async function () {
      sinon.stub(productsModels, 'getProductById').resolves(productsList[1]);

      const result = await productsServices.getProductById(2);

      expect(result).to.be.deep.equal(productsList[1]);
    });

    // it('Should return a error if the id doesnt exist', async function () {
    // const productId = 1;

    // sinon.stub(productsModels, 'getProductById').resolves(undefined);

    // const result = await productsServices.getProductById(productId);

    // expect(result).to.be.false;
 // });

  });

  describe('Add a new product to DB', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return the new product id', async function () {
      sinon.stub(productsModels, 'addNewProduct').resolves(4);

      const result = await productsServices.addNewProduct(newProduct);

      expect(result).to.be.deep.equal('Manopla do Infinito');
    });
  });
});