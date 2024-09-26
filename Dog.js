import { Pet } from "./Pet.js";


export class Dog extends Pet{
    constructor(vardas, kailioSpalva) {
        super(vardas, kailioSpalva);
        this.sound = 'bark';
        this.eatenBones = 0;
        this.savedBones = 0; 

    }
   
    takeBones(bonesCount) {

        if (typeof bonesCount !== 'number' || !isFinite(bonesCount) || bonesCount < 0)
        {
            return 'Duodamu kaulu kiekis turi but sveikasis skaicius'
        }
        this.savedBones += bonesCount;

        return `${this.name} gavo ${bonesCount} kaulu ir dabar ju turi ${this.savedBones}}`;
    }

    eatBone() {

        if (this.savedBones === 0) {
            return `${this.name} negali valgyti kaulu nes neturi` 
        }

        if (this.savedBones >= 1) {

            this.eatenBones++;
            this.savedBones--;
            return `${this.name} suvalge 1 kaula`
        }
        
        const bonesleft = this.savedBones;
        this.eatenBones += this.savedBones;
        this.savedBones =0;

        return `${this.name} suvalge ${this.bonesleft} kaula`

    }


}