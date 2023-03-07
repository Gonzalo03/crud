import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class Institucion_educativa extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_ie'})
    id: number;

    @Column({name: 'cod_mod_ie'})
    codMod: number;


    @Column({name: 'nombre_ie'})
    nombre: string;
    
    @Column({name: 'nivel_ie'})
    nivel: string;
    
    @Column({name: 'departamento_ie'})
    departamento: string;
    
    @Column({name: 'provincia_ie'})
    provincia: string;

    @Column({name: 'distrito_ie'})
    distrito: string;

    @Column({name: 'estado_ie'})
    estado: number;
    
    @CreateDateColumn()
    fecharegistro: Date;
    
    @Column({name: 'estado_subido_excel'})
    estadoSubidoExcel: number;
}
