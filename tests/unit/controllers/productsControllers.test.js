const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsServices = require('../../../src/services/productsServices')
const { productsList, newProduct, attProduct } = require('../mocks/productsModels.mock');
const { expect } = chai;
const productsController = require('../../../src/controllers/productsControllers');

describe('Teste para a camada Controller de Products', function () {
  describe('Get all products', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(productsList);
    sinon.stub(productsServices, 'getAll').resolves(productsList);

    await productsController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith(products);

  });
})