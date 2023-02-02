const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsServices = require('../../../src/services/productsServices')
const { productsList, newProduct, attProduct, resp, invalidId } = require('../mocks/products.mock');
const { expect } = chai;
chai.use(sinonChai);
const productsController = require('../../../src/controllers/productsControllers');

describe('Teste para a camada Controller de Products', function () {
  describe('Get all products', function () {

    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });

    it('Should return all products', async function () {

      sinon.stub(productsServices, 'getAll').resolves(productsList);

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(productsList);
    });
  });

  describe('Get a product by ID', function () {

    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });
    it('Should return a product with specific ID', async function () {

      req.params = { id: 1 };

      sinon.stub(productsServices, 'getProductById').resolves(productsList[0]);

      await productsController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(productsList[0]);
    });

    it('Should return a error', async function () {
      req.params = { id: 100 };

      sinon.stub(productsServices, 'getProductById').resolves(undefined);

      await productsController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWithExactly({ message: 'Product not found' });
    });
  });

  describe('Add a new product to DB', function () {
    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });
    it('Should return the new product ID', async function () {

      req.body = { name: 'Manopla do Infinito' };

      sinon.stub(productsServices, 'addNewProduct').resolves(newProduct);

      await productsController.addNewProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(newProduct);
    });
  });

  describe('Att a product', function () {
    const req = {};
    const res = {};

    this.beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    this.afterEach(() => {
      sinon.restore();
    });
    it('Should return the new product name', async function () {
      req.params = { id: 1 };
      req.body = { name: 'Stormbreaker' };

      sinon.stub(productsServices, 'attProduct').resolves(attProduct);

      await productsController.attProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(attProduct);
    });

    it('Should return an error with a non exist ID', async function () {
      req.params = { id: 100 };
      req.body = { name: 'Stormbreaker' };

      sinon.stub(productsServices, 'attProduct').resolves(undefined);

      await productsController.attProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWithExactly({ message: 'Product not found' });
    });
  });

  describe('Delete a product', function () {
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
      req.params = { id: 3 };

      sinon.stub(productsServices, 'deleteProduct').resolves(invalidId);

      await productsController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledOnceWith(204);
      expect(res.json).to.have.been.calledOnceWithExactly();
    });
  });
});