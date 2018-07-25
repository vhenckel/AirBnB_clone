'use strict'

class HomeController {

  async index ({ request, response }) {
    //console.log(request)
    return response.json({
      name: 'Vitor Henckel',
      email: 'vitor@henckel.com.br',
    })
  }
}

module.exports = HomeController