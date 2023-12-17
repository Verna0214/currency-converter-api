module.exports = {
  handleErrorResponse: (res, statusCode, msg) => {
    return res.status(statusCode).json({
      msg: 'error',
      error: msg
    })
  },
  formattedAmount: (amount) => {
    return (Math.round(amount * 100) / 100).toLocaleString()
  }
}