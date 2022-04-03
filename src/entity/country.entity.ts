import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    country_id: number;

    @Column({ type: 'character', length: 50 })
    country: string;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}