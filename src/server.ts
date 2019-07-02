import app from './app'

const port = process.env.PORT || 3333

app.listen(port, (): void => {
  console.log(`Servidor rodando na porta: ${port}`)
})
