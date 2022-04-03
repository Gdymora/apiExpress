import { Entity, Column, PrimaryGeneratedColumn, Index, UpdateDateColumn, Timestamp, Unique, OneToMany, ManyToOne } from "typeorm";
import { Customer } from "./customer.entity";
import { Inventory } from "./inventory.entity";
import { Staff } from "./staff.entity";

@Entity()
export class Rental {

    @PrimaryGeneratedColumn()
    rental_id: number;

    @Unique(['rental_date', 'inventory_id', 'customer_id'])
    @Column({ type: 'timestamptz' })
    rental_date: Date;

    @Index()
    @Column({ type: 'smallint' })
    inventory_id: number;

    @Column({ type: 'smallint' })
    customer_id: number;

    @Column({ type: 'timestamptz' })
    return_date: Date;

    @Column()
    staff_id: number;

    @ManyToOne(() => Staff, (staff: any) => staff.rental)
    staff: Staff;

    @ManyToOne(() => Customer, (customer: any) => customer.rental)
    customer: Customer;

    @ManyToOne(() => Inventory, (inventory: any) => inventory.rental)
    inventory: Inventory;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}