import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn, UpdateDateColumn, Timestamp } from "typeorm";
import { Category } from "./category.entity";
import { Film } from "./film.entity";

@Entity()
export class FilmCategory {

    @PrimaryColumn()
    film_id: number;

    @PrimaryColumn()
    category_id: number;

    @OneToOne(() => Film, (film: any)=>film.filmCategory)
    @JoinColumn({name: "film_id"} )
    film: Film;

    @OneToOne(() => Category, (category: any)=>category.filmCategory)
    @JoinColumn({name: "category_id"} )
    category: Category;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}

/* {  referencedColumnName : "category_id"  } */