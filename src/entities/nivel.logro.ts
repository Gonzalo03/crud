import { ResumenEvaluacion } from './resumen_evaluacion';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
} from "typeorm";

@Entity({name: 'nivel_logro'})
export class NivelLogro extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_nivel'})
    id_nivel: number;

    @Column()
    nombre: string;
    
    @Column({name: 'letra_nombre'})
    letraNombre: string;

    @OneToMany(()=>ResumenEvaluacion, resumenEvaluacion=>resumenEvaluacion.nivel)
    resumenes: ResumenEvaluacion[]
}