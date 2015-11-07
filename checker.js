var should  = require('chai').should()
var recipes = require('./recipes');

require('chai').config.showDiff = true;

describe('Check consistency', function () {
  function iterator(callback) {
    Object.keys(recipes).forEach(function (key) {
      callback(recipes[key], '[' + key + '.json]', key);
    });
  }

  describe('recipe', function () {
    it('should be compliant with the schema', function () {
      iterator(function (recipe, message) {
        Object.keys(recipe).should.be
          .deep.equal(['name', 'strategy', 'options'], message);

        Object.keys(recipe.options).should.be
          .deep.equal(['authorizationURL', 'tokenURL', 'scope', 'scripts'], message);

        Object.keys(recipe.options.scripts).should.be
          .deep.equal(['fetchUserProfile'], message);
      });
    });

    it('should have a property "name" equals to "filename"', function () {
      iterator(function (recipe, message, recipeName) {
        recipe.should.have.property('name', recipeName, message);
      });
    });

    it('should have a property "strategy" equals to "oauth2"', function () {
      iterator(function (recipe, message) {
        recipe.should.have.property('strategy', 'oauth2', message);
      });
    });

    it('should have a property "options.authorizationURL" should not be empty', function () {
      iterator(function (recipe, message) {
        recipe.options.authorizationURL.trim().should.not.be.length(0, message);
      });
    });

    it('should have a property "options.tokenURL" should not be empty', function () {
      iterator(function (recipe, message) {
        recipe.options.tokenURL.trim().should.not.be.length(0, message);
      });
    });
  });
});
