import { Entity, Column, UpdateDateColumn, Timestamp, PrimaryColumn } from "typeorm";

@Entity()
export class ActorInfo {

    @PrimaryColumn()
    actor_id: number;

    @Column({ type: "varchar", length: 45, nullable: true })
    first_name: string;

    @Column({ type: "varchar", length: 25, nullable: true })
    last_name: string;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    last_update: Timestamp;
}