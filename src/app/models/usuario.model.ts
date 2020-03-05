

export class Usuario {

    static fromFirebase( { email, uid, nombre } ) {
        return new Usuario( uid, nombre, email );
    }


    constructor(
        public uid: string,
        public nombre: string,
        public email: string
    ){}

}
