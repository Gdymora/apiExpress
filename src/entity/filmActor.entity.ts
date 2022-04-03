import { Entity, Column, Index, PrimaryColumn, OneToOne, JoinColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Actor } from "./actor.entity";
import { Film } from "./film.entity";

@Entity()
export class FilmActor {

    @PrimaryColumn()
    actor_id: number;

    @Index()
    @PrimaryColumn()
    film_id: number;

    @OneToOne(() => Film, (film: any) => film.filmActor)
    @JoinColumn({ name: "film_id" })
    film: Film;

    @OneToOne(() => Actor, (actor: any) => actor.filmActor)
    @JoinColumn({ name: "actor_id" })
    actor: Actor;

    
    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}