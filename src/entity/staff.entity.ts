import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, Timestamp, ManyToOne } from 'typeorm';
import { Adress } from './adress.entity';
import { Store } from './store.entity';

@Entity()
export class Staff {

    @PrimaryGeneratedColumn()
    astaff_id: number;

    @Column({ type: 'character', length: 50 })
    first_name: string;

    @Column({ type: 'character', length: 45 })
    last_name: string;

    @Column({ type: 'smallint' })
    adress_id: number;

    @Column({ type: 'character', length: 45 })
    email: string;

    @Column({ type: 'smallint' })
    store_id: number;

    @ManyToOne(() => Store, (store: any) => store.staff)
    store: Store;

    @ManyToOne(() => Adress, (adress: any) => adress.staff)
    adress: Adress; 

    @Column({ default: true })
    active: boolean;

    @Column({ type: 'character', length: 16 })
    username: string;

    @Column({ type: 'character', length: 40, nullable: true })
    password: string;

    @Column({
        type: 'bytea',
        nullable: true
    })
    picture?: Buffer;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}