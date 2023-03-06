import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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

  @Column({
    length: 10,
  })
  pin: number;

  @Column({
    length: 20,
  })
  token: string;

  @Column()
  updatedAt: string;
}
