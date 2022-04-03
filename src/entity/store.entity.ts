import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp, Unique, OneToMany, ManyToOne } from "typeorm";
import { Adress } from "./adress.entity";

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    store_id: number;

    @Column({ type: 'smallint', unique: true  })
    manager_staff_id: number;

    @Column({ type: 'smallint' })
    adress_id: number;

    @ManyToOne(() => Adress, (adress: any) => adress.store)
    adress: Adress; 

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}