import { DataSource } from "typeorm";
import { ResumenEvaluacion } from './entities/resumen_evaluacion';
import { Administrador } from './entities/adm';
import { Competencia } from './entities/competencias';
import { Grado } from './entities/grado';
import { Institucion_educativa } from './entities/institucion_educativa';
import { NivelLogro } from './entities/nivel.logro';
import { Upload } from './entities/upload';
import { Asignatura } from './entities/asignaturas';




export const AppDataSource = new DataSource({//Conexion a la BD
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "evalua_diagnostica",
  synchronize: true,
  entities: [ResumenEvaluacion, Administrador, Competencia, Grado, Institucion_educativa, NivelLogro, Upload, Asignatura]
});

