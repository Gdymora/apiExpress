import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp, Unique, OneToMany, ManyToOne } from "typeorm";
import { Customer } from "./customer.entity";
import { Rental } from "./rental.entity";
import { Staff } from "./staff.entity";

@Entity()
export class Payment{

    @PrimaryGeneratedColumn()
    payment_id: number;
    

    @Index()
    @Column({ type: 'smallint' })
    customer_id: number;

    @Index()
    @Column({ type: 'smallint' })
    staff_id: number;

    @Index()
    @Column()
    rental_id: number;

    @ManyToOne(() => Rental, (rental: any) => rental.payment)
    rental: Rental;

    @ManyToOne(() => Customer, (customer: any) => customer.payment)
    customer: Customer;

    @ManyToOne(() => Staff, (staff: any) => staff.payment)
    staff: Staff;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}