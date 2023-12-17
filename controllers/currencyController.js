const currencies = require('../models/currencies_data.json').currencies
const { handleErrorResponse, formattedAmount } = require('../helpers/utils')

const currencyController = {
  getCurrencies: (req, res) => {
    try {
      const {source, target, amount} = req.query
      const numberAmount = parseFloat(amount.replace(/[,$]/g, ''))

      if (!source || !target || !amount) {
        return handleErrorResponse(res, 400, 'Information is not complete！')
      }

      if (!currencies[source]) {
        return handleErrorResponse(res, 404, 'Invalid source currency！')
      }

      const sourceRates = currencies[source]

      if (!sourceRates[target]) {
        return handleErrorResponse(res, 404, 'Invalid target currency！')
      }

      const exchangeRate = sourceRates[target]
      const convertedAmount = formattedAmount(numberAmount * exchangeRate)

      return res.status(200).json({
        msg: 'success',
        amount: `$${convertedAmount}`
      })
    }catch (err) {
      return handleErrorResponse(res, 500, err)
    }
  } 
}

module.exports = currencyController