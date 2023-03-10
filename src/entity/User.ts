import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users"})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  name: string;

  @Column({
    length: 50,
  })
  email: string;

  @Column({
    length: 15,
  })
  contact: string;

  @Column()
  active: boolean;

  @Column({
    length: 16,
  })
  username: string;

  @Column()
  pin: number;

  @Column({
    length: 20,
  })
  token: string;

  @Column({ type: "timestamp" })
  updatedAt: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: string;
}
