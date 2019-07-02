import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.addRoutes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb://localhost:27017/db', {
        useNewUrlParser: true
      })
    }

    private addRoutes (): void {
      this.express.use('/api', routes)
    }
}

export default new App().express
