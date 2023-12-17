const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect

chai.use(chaiHttp)

describe('GET /', () => {
  it('Should return success and converted amount', async () => {
    const res = await chai.request(app)
      .get('/')
      .query({ source: 'USD', target: 'JPY', amount: '$1,000' })

    expect(res).to.have.status(200)
    expect(res.body).to.have.property('msg', 'success')
    expect(res.body).to.have.property('amount').that.is.a('string')
  })

  it('Should handle incomplete information', async () => {
    const res = await chai.request(app)
      .get('/')
      .query({ source: '', target: '', amount: '$' })

    expect(res).to.have.status(400)
    expect(res.body).to.have.property('msg', 'error')
    expect(res.body).to.have.property('error', 'Information is not complete！')
  })

  it('Should handle invalid source currency', async () => {
    const res = await chai.request(app)
      .get('/')
      .query({ source: 'INVALID', target: 'JPY', amount: '$1,000' })

    expect(res).to.have.status(404)
    expect(res.body).to.have.property('msg', 'error')
    expect(res.body).to.have.property('error', 'Invalid source currency！')
  })

  it('Should handle invalid target currency', async () => {
    const res = await chai.request(app)
      .get('/')
      .query({ source: 'TWD', target: 'INVALID', amount: '$1,000' })

    expect(res).to.have.status(404)
    expect(res.body).to.have.property('msg', 'error')
    expect(res.body).to.have.property('error', 'Invalid target currency！')
  })
})
