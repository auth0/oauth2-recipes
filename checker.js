var should    = require('chai').should()
var templates = require('./templates');

require('chai').config.showDiff = true;

describe('Check consistency', function () {
  function iterator(callback) {
    Object.keys(templates).forEach(function (key) {
      callback(templates[key], '[' + key + '.json]', key);
    });
  }

  describe('template', function () {
    it('should be compliant with the schema', function () {
      iterator(function (template, message) {
        Object.keys(template).should.be
          .deep.equal(['name', 'strategy', 'options'], message);

        Object.keys(template.options).should.be
          .deep.equal(['authorizationURL', 'tokenURL', 'scope', 'scripts'], message);

        Object.keys(template.options.scripts).should.be
          .deep.equal(['fetchUserProfile'], message);
      });
    });

    it('should have a property "name" equals to "filename"', function () {
      iterator(function (template, message, templateName) {
        template.should.have.property('name', templateName, message);
      });
    });

    it('should have a property "strategy" equals to "oauth2"', function () {
      iterator(function (template, message) {
        template.should.have.property('strategy', 'oauth2', message);
      });
    });

    it('should have a property "options.authorizationURL" should not be empty', function () {
      iterator(function (template, message) {
        template.options.authorizationURL.trim().should.not.be.length(0, message);
      });
    });

    it('should have a property "options.tokenURL" should not be empty', function () {
      iterator(function (template, message) {
        template.options.tokenURL.trim().should.not.be.length(0, message);
      });
    });
  });
});
