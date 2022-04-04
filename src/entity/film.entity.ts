import { Entity, Column, PrimaryGeneratedColumn, Index, OneToOne, JoinColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Language } from "./language.entity";

export enum MpaaRating {
    'G',
    'PG',
    'PG-13',
    'R',
    'NC-17'
}

@Entity()
export class Film {
    
    @PrimaryGeneratedColumn()
    film_id: number

    @Index()
    @Column({
        length: 255,
    })
    title: string

    @Column({ type: "text", nullable: true })
    description: string | null;

    @Column({ type: "int", nullable: true })
    release_year: number | null;

    @Column({ type: "int", nullable: true })
    language_id: number | null;

    @Index()
    @OneToOne(() => Language, (language: any) => language.film)
    @JoinColumn({ name: "language_id" })
    language: Language;

    @Column({ type: "smallint" })
    rental_duration: number;

    @Column({ type: 'decimal', precision: 4, scale: 2, default: 0 })
    rental_rate: number;

    @Column({ type: "smallint", nullable: true })
    length: number;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    replacement_cost: number;
    //mpaa_rating NULL [G]

    @Column({ type: "enum", enum: MpaaRating, nullable: true, default: null })
    rating: MpaaRating;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;

    @Column({ type: "text", nullable: true })
    special_features: string[];

    @Index()
    @Column({ type: "text", nullable: true })
    fulltext: string;
} 