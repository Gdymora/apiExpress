import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp, ManyToOne } from "typeorm";
import { City } from "./city.entity";

@Entity()
export class Adress {

    @PrimaryGeneratedColumn()
    adress_id: number;

    @Column({ type: "character", length: 50 })
    adress: string;

    @Column({ type: "character", length: 50 })
    adress2: string;

    @Column({
        length: 20,
    })
    district: string;

    @Index()
    @Column({ type: "smallint" })
    city_id: number;

    @ManyToOne(() => City, (city: any) => city.adress)
    city: City;  

    @Column({
        length: 20
    })
    postal_code: string;

    @Column({
        length: 20
    })
    fone: string;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}