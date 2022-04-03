import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp, CreateDateColumn, ManyToOne } from "typeorm";
import { Adress } from "./adress.entity";
import { Store } from "./store.entity";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    customer_id: number;

    @Index()
    @Column({ type: 'smallint' })
    store_id: number;

    @Column({
        length: 45,
    })
    first_name: string;

    @Index()
    @Column({
        length: 45,
    })
    last_name: string;

    @Column({ type: 'character', length: 50, nullable: true })
    email: string;

    //@Index()
    @Column({ type: 'smallint' })
    adress_id: number;

    @ManyToOne(() => Adress, (adress: any) => adress.customer)
    adress: Adress; 

    @ManyToOne(() => Store, (store: any) => store.customer)
    store: Store;

    @Column({ default: true })
    activebool: boolean;

    @CreateDateColumn({ type: 'date' })
    create_date: Date;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;

    @Column({ type: 'int' })
    active: number;
}