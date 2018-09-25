// Todo Entity
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  item: string

  @Column({ default: false })
  completed: boolean
}

