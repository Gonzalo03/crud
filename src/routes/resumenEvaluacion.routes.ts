import { Router } from "express";
import { DataSource } from 'typeorm';

import { ResumenEvaluacionService } from '../services/resumenEvaluacion.service';
import { ResumenEvaluacion } from '../entities/resumen_evaluacion';
import { ResumenEvaluacionController } from '../controllers/resumenEvaluacion.controller';


export default (dataSource: DataSource) => {

    const controller = new ResumenEvaluacionController(new ResumenEvaluacionService(dataSource.getRepository(ResumenEvaluacion)))

    const router = Router()

    router.get('/resumenes', async (req, res) =>{

        return res.json({ok: await controller.getAllResumenes()})

    })

    return router

}
