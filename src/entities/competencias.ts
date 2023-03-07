import { Asignatura } from './asignaturas';
import { ResumenEvaluacion } from './resumen_evaluacion';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

@Entity({name: 'competencias'})
export class Competencia extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_competencia'})
    id: number;

    @Column()
    nombre: string;


    @ManyToOne(()=>Asignatura, asignatura=>asignatura.competencias)
    @JoinColumn({name: 'id_asignatura'})
    asignatura: Asignatura;

    @OneToMany(()=>ResumenEvaluacion, resumenEvaluacion=>resumenEvaluacion.competencia)
    resumenes: ResumenEvaluacion[]
}