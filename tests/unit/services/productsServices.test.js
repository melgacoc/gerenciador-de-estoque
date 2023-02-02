const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsServices = require('../../../src/services/productsServices')
const { productsList, newProduct, attProduct, delProduct, invalidId } = require('../mocks/products.mock');
const { expect } = chai;
const productsModels = require('../../../src/models/productsModels');
chai.use(sinonChai);

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

      const result = await productsServices.addNewProduct('Manopla do Infinito');

      expect(result).to.be.deep.equal(newProduct);
    });
  });

  describe('Att a product', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return the att name', async function () {
     const attproductmodel =  sinon.stub(productsModels, 'attProduct').resolves(1);
      sinon.stub(productsModels, 'getProductById').resolves(attProduct);

      const result = await productsServices.attProduct(1, 'Stormbreaker');

      expect(attproductmodel).to.have.been.calledOnceWithExactly(1, 'Stormbreaker');

      expect(result).to.be.deep.equal(attProduct);
      //expect(result).to.be.deep.equal(1);
    })
  });

  describe('Delete a produc', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should delete a product from DB', async function () {
      sinon.stub(productsModels, 'getProductById').resolves(3);
      sinon.stub(productsModels, 'deleteProduct').resolves(delProduct);

      const result = await productsServices.deleteProduct(3);

      expect(result).to.be.deep.equal(delProduct);
    });

    it('Should return an error when the id doesnt exists', async function () {
      describe('Delete a produc', function () {
        afterEach(() => {
          sinon.restore();
        });
        it('Should delete a product from DB', async function () {
          sinon.stub(productsModels, 'getProductById').resolves(100);

          const result = await productsServices.deleteProduct(100);

          //expect(result.type).to.be.equal(404);
          expect(result).to.be.deep.equal(invalidId);
        });
      });
    });
  });
});