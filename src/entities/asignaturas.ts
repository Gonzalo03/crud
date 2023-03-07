import { Competencia } from './competencias';
import { ResumenEvaluacion } from './resumen_evaluacion';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
} from "typeorm";

@Entity()
export class Asignatura extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_asignatura'})
    id: number;

    @Column({type: 'varchar', length: 200})
    nombre: string;

    @OneToMany(()=>Competencia, competencia=>competencia.asignatura)
    competencias: Competencia[];
    
    @OneToMany(()=>ResumenEvaluacion, resumenEvaluacion=>resumenEvaluacion.asignatura)
    resumenes: ResumenEvaluacion[];
    
}