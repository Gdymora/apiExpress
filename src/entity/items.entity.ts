import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Items {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
}