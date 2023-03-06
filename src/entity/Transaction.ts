import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "transactions" })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({
    length: 10,
  })
  amount: string;

  @Column({
    length: 10,
  })
  currencyType: string;

  @Column({
    length: 20,
  })
  status: string;

  @Column({ type: "timestamp" })
  updatedAt: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: string;
}
