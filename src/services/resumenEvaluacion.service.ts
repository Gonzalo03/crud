import { Repository } from "typeorm";

import { ResumenEvaluacion } from "../entities/resumen_evaluacion";

export class ResumenEvaluacionService {

    constructor(private readonly resumenRepository: Repository<ResumenEvaluacion>){}


    async getAllResumenes(){

        try {
            return await this.resumenRepository.findAndCount({
                relations: ['competencia', 'nivel', 'grado', 'asignatura']
            })
        } catch (error) {
            console.log(error)
        }

    }

}