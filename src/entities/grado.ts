import { ResumenEvaluacion } from './resumen_evaluacion';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
} from "typeorm";

@Entity()
export class Grado extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_grado'})
    id: number;

    @Column({name: 'nombre_grado'})
    nombre: string;

    @OneToMany(()=>ResumenEvaluacion, resumenEvaluacion=>resumenEvaluacion.grado)
    resumenes: ResumenEvaluacion[]

}