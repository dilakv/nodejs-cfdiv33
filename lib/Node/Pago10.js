'use strict'

const Node = require('./Node')

class Pago10 extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'pago10:DoctoRelacionado'
  }

  /**
   *
   * @returns {string}
   */
  get parentNodeName() {
    return 'pago10:Pago'
  }
  /**
   *
   * @returns {boolean}
   */
  get multiple() {
    return true;
  }

}

module.exports = Pago10