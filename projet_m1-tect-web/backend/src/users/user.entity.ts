import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type RoleUtilisateur = 'client' | 'admin';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id: number;

  @Column({ name: 'nom', length: 100 })
  nom: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ name: 'mot_de_passe', length: 255 })
  motDePasse: string;

  @Column({ type: 'text', nullable: true })
  adresse?: string;

  @Column({ length: 20, nullable: true })
  telephone?: string;

  @Column({ type: 'enum', enum: ['client', 'admin'], default: 'client' })
  role: RoleUtilisateur;

  @Column({ name: 'date_creation', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateCreation: Date;
}
