## cfdiv33

[![Build Status](https://travis-ci.org/blacktrue/nodejs-cfdiv33.svg?branch=develop)](https://travis-ci.org/blacktrue/nodejs-cfdiv33)


Genera un XML CFDI v3.3

## Instalación

```
npm install cfdiv33 --save
```

## Ejemplo de uso

```javascript
'use strict'

const CFDI = require('cfdiv33').CFDI
const Emisor = require('cfdiv33').Emisor
const Receptor = require('cfdiv33').Receptor
const Concepto = require('cfdiv33').Concepto
const CuentaPredial = require('cfdiv33').CuentaPredial
const InformacionAduanera = require('cfdiv33').InformacionAduanera
const CfdiRelacionado = require('cfdiv33').CfdiRelacionado
const Traslado = require('cfdiv33').Traslado
const Retencion = require('cfdiv33').Retencion

const cfdi = new CFDI({
  //'Serie': 'A',
  //'Folio': '167ABC',
  'Fecha': '2018-06-11T08:09:23',
  'NoCertificado': '20001000000300022815',
  'SubTotal': '1000',
  'Moneda': 'MXN',
  'Total': '1160',
  'TipoDeComprobante': 'I',
  'FormaPago': '01',
  'MetodoPago': 'PUE',
  //'CondicionesDePago': 'CONDICIONES',
  'TipoCambio': '1',
  'LugarExpedicion': '45079',
});

cfdi.cer = './test/resources/LAN7008173R5.cer.pem'
cfdi.key = './test/resources/LAN7008173R5.key.pem'
cfdi.withOutCerts = false

/*
cfdi.add(new CfdiRelacionado({
  'UUID': 'A39DA66B-52CA-49E3-879B-5C05185B0EF7'
}, {
  'TipoRelacion': '01'
}))
*/


cfdi.add(new Emisor({
  'Rfc': 'LAN7008173R5',
  'Nombre': 'CESAR RENE AGUILERA ARREOLA',
  'RegimenFiscal': '601'
}))

cfdi.add(new Receptor({
  'Rfc': 'HEPR930322977',
  //'Nombre': 'RAFAEL ALEJANDRO HERNÁNDEZ PALACIOS',
  //'ResidenciaFiscal': 'MEX',
  //'NumRegIdTrib': '0000000000000',
  'UsoCFDI': 'G01'
}))

const concepto = new Concepto({
  'ClaveProdServ': '01010101',
  'ClaveUnidad': 'F52',
  'NoIdentificacion': '00001',
  'Cantidad': '1',
  'Unidad': 'TONELADA',
  'Descripcion': 'ACERO',
  'ValorUnitario': '1000',
  'Importe': '1000'
})

concepto.add(new Traslado({
  'Base': '1000',
  'Impuesto': '002',
  'TipoFactor': 'Tasa',
  'TasaOCuota': '0.16',
  'Importe': '160'
}))

cfdi.add(concepto)

cfdi.add(new Traslado({
  'Impuesto': '002',
  'TipoFactor': 'Tasa',
  'TasaOCuota': '0.16',
  'Importe': '160'
}, {}, {
  'TotalImpuestosTrasladados': '160.00'
}))

cfdi.getXml()
.then(xml => console.log(xml))
.catch(e => console.log(e.toString(), '---> error'));

let Pagos10 = new NodoPagos10({ 'Version': '1.0', 'xmlns:pago10': 'http://www.sat.gob.mx/Pagos' });

Pagos10.add(new NodoPago10(
  {
    'IdDocumento': 'b5caf559-7ba4-4d0b-b894-9d269e6a0bb1',
    'Serie': 'P', //Esto es arbitrario, según su propio control
    'Folio': '123456', //Esto también
    'MonedaDR': 'MXN',
    'MetodoDePagoDR': 'PPD',
    'NumParcialidad': '1',
    'ImpSaldoAnt': '10.00',
    'ImpPagado': '1.00',
    'ImpSaldoInsoluto': '9.00'
  }, {
    'FechaPago': '2020-11-07T12:58:04',
    'Monto': '10.00', //La suma de todos los documentos relacionados
    'FormaDePagoP': '01',
    'MonedaP': "MXN"
  }
))

cfdi.add(Pagos10);

```