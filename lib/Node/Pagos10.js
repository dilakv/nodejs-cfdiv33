'use strict'

const Node = require('./Node')

class Pagos10 extends Node {

  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'pago10:Pagos'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'cfdi:Complemento'
  }

  /**
    *
    * @returns {boolean}
    */
  get multiple() {
    return true;
  }
}

module.exports = Pagos10