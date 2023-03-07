import { ResumenEvaluacionService } from '../services/resumenEvaluacion.service';
export class ResumenEvaluacionController {

    constructor(private readonly resumenEvaluacionService: ResumenEvaluacionService){}


    async getAllResumenes(){

        return await this.resumenEvaluacionService.getAllResumenes()

    }



}