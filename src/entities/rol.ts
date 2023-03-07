import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Rol extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_rol'})
    id: number;

    @Column({name: 'codigorol'})
    codigo: number;


    @Column({name: 'nombre_rol'})
    nombre: string;
}