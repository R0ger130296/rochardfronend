import { ParentEntity } from './parentEntity.model';
export class UserModel extends ParentEntity {
    public nombre: string;
    public ci: string;
    public telefono: string;
    public direccion: string;
}