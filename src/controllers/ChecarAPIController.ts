import { Request, Response } from 'express'

class ChecarAPIController {
  public obterStatus (req: Request, res: Response): Response {
    return res.status(200).json('Api respondendo com sucesso')
  }
}

export default new ChecarAPIController()
