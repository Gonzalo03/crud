import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Administrador extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_admin'})
    id: number;

    @Column({})
    nombre: string;
    
    @Column({})
    apellido: string;

    @Column({})
    contrasena: string;
    
    @Column({})
    username: string;

    @Column({})//unique: true
    correo: string;
    
    @Column({})
    celular: number;

    @Column({name: 'cod_mod_ie'})
    codMod: number;
    
    @Column({})
    codigorol: number;
    
    @CreateDateColumn()
    fecharegistro: Date;
    
    @Column({})
    estado: number;
}
