'use strict'

const Node = require('./Node')

class Pago10DoctoRelacionado extends Node {
  /**
   *
   * @returns {string}
   */
  get nodeName() {
    return 'pago10:DoctoRelacionado '
  }

}

module.exports = Pago10DoctoRelacionado