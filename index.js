'use strict'

const CFDI = require('./lib/CFDI')
const Emisor = require('./lib/Node/Emisor')
const Receptor = require('./lib/Node/Receptor')
const Concepto = require('./lib/Node/Concepto')
const CfdiRelacionado = require('./lib/Node/CfdiRelacionado')
const Traslado = require('./lib/Node/Impuesto/Traslado')
const Retencion = require('./lib/Node/Impuesto/Retencion')
const CuentaPredial = require('./lib/Node/CuentaPredial')
const InformacionAduanera = require('./lib/Node/InformacionAduanera')
const Parte = require('./lib/Node/Parte')
const Complemento = require('./lib/Node/Complemento')

const Pago10 = require('./lib/Node/Pago10')
const Pagos10 = require('./lib/Node/Pagos10')
const Pago10DoctoRelacionado = require('./lib/Node/Pago10DoctoRelacionado')

module.exports = {
  CFDI,
  Emisor,
  Receptor,
  Concepto,
  CfdiRelacionado,
  Traslado,
  Retencion,
  CuentaPredial,
  InformacionAduanera,
  Parte,
  Complemento,
  Pago10,
  Pagos10,
  Pago10DoctoRelacionado
};