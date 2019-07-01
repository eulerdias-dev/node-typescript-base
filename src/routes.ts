import express from 'express'
import ChecarAPIController from './controllers/ChecarAPIController'

class Routes {
    public router: express.Router

    public constructor () {
      this.router = express.Router()
      this.inicializarRotas()
    }

    private inicializarRotas (): void {
      this.router.get('/checarAPI', ChecarAPIController.obterStatus)
    }
}

export default new Routes().router
