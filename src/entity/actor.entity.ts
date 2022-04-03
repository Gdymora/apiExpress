import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Actor {

    @PrimaryGeneratedColumn()
    actor_id: number;

    @Column({
        length: 25,
    })
    first_name: string;

    @Index()
    @Column({
        length: 25,
    })
    last_name: string;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}