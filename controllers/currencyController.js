const currencies = require('../models/currencies_data.json').currencies

const currencyController = {
  getCurrencies: async (req, res, next) => {
    try {
      const {source, target, amount} = req.query
      const numberAmount = parseFloat(amount.replace(/[,$]/g, ''))

      if (!source || !target || !amount) {
        return res.status(400).json({
          msg: 'error',
          error: 'Information is not complete！'
        })
      }

      if (!currencies[source]) {
        return res.status(404).json({
          msg: 'error',
          error: 'Invalid source currency！'
        })
      }

      const sourceRates = currencies[source]

      if (!sourceRates[target]) {
        return res.status(404).json({
          msg: 'error',
          error: 'Invalid target currency！'
        })
      }

      const exchangeRate = sourceRates[target]
      const convertedAmount = (Math.round(numberAmount * exchangeRate * 100) / 100).toLocaleString()

      return res.status(200).json({
        msg: 'success',
        amount: `$${convertedAmount}`
      })
    }catch (err) {
      return res.status(500).json({
        error: `${err}`
      })
    }
  } 
}

module.exports = currencyController