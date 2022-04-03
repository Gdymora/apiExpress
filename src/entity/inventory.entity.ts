import { Entity, Column, PrimaryGeneratedColumn, Index, Timestamp, UpdateDateColumn, ManyToOne } from "typeorm";
import { Film } from "./film.entity";
import { Store } from "./store.entity";

@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    inventory_id: number
    /* film_id One-to-many/zero or many */

    @Index()
    @Column({ type: "smallint" })
    film_id: number;

    @Index()
    @Column({ type: "smallint" })
    store_id: number;

    @ManyToOne(() => Store, (store: any) => store.inventory)
    store: Store;

    @ManyToOne(() => Film, (film: any) => film.inventory)
    film:  Film;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}