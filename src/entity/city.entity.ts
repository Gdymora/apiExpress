import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp, OneToMany, ManyToOne } from "typeorm";
import { Country } from "./country.entity";

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    city_id: number;

    @Column({ type: 'character', length: 50 })
    city: string;

    @Index()
    @Column({ type: 'smallint' })
    country_id: number;

    @ManyToOne(() => Country, (country: any) => country.City)
    country: Country;    

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}