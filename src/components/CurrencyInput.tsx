import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const PropTypess: any = PropTypes;

const defaultMaskOptions = {
  prefix: 'R$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const CurrencyInput = ({ maskOptions, ...inputProps }: any) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })

  return <MaskedInput mask={currencyMask} {...inputProps} />
}

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
}

CurrencyInput.PropTypess = {
  inputmode: PropTypes.string,
  maskOptions: PropTypess.shape({
    prefix: PropTypess.string,
    suffix: PropTypess.string,
    
    includeThousandsSeparator: PropTypess.boolean,
    thousandsSeparatorSymbol: PropTypess.string,
    allowDecimal: PropTypess.boolean,
    decimalSymbol: PropTypess.string,
    decimalLimit: PropTypess.string,
    requireDecimal: PropTypess.boolean,
    allowNegative: PropTypess.boolean,
    allowLeadingZeroes: PropTypess.boolean,
    integerLimit: PropTypess.number,
  }),
}

export default CurrencyInput
