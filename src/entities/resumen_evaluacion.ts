import { Competencia } from './competencias';
import { NivelLogro } from './nivel.logro';
import { Grado } from './grado';
import { Asignatura } from './asignaturas';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

@Entity({name: 'resumen_evaluacion'})
export class ResumenEvaluacion extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_resumen'})
    id: number;

    @ManyToOne(()=>Competencia, competencia=>competencia.resumenes)
    @JoinColumn({name: 'id_competencia'})
    competencia: Competencia;

    @ManyToOne(()=>NivelLogro, nivelLogro=>nivelLogro.resumenes)
    @JoinColumn({name: 'id_nivel'})
    nivel: NivelLogro;

    @Column()
    porcentaje: number;

    @Column({type: 'float'})
    promedio: number;


    @ManyToOne(()=>Grado, grado=>grado.resumenes)
    @JoinColumn({name: 'id_grado'})
    grado: Grado;

    @ManyToOne(()=>Asignatura, asignatura=>asignatura.resumenes)
    @JoinColumn({name: 'id_asignatura'})
    asignatura: Asignatura;

    
    @Column({name: 'cod_mod_ie'})
    codMod: number;

    @CreateDateColumn()
    fecha: Date;
}