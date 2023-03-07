import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import resumenEvaluacionRoutes from './routes/resumenEvaluacion.routes';

import { AppDataSource } from './db';

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const router = resumenEvaluacionRoutes(AppDataSource)

app.use('/', router)

export default app;