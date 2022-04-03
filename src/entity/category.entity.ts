import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Category {
    
    @PrimaryGeneratedColumn()
    category_id: number

    @Column({
        length: 25,
    })
    name: string

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}