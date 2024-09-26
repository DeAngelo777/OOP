export class Pet {
    constructor(name, furColor) {
        this.name = name;
        this.fur = furColor;
        this.eyesCount = 2;
        this.legsCount = 4;
        this.sound = 'BARK MEOW';
    }

    hi() {
        return `Sveiki, mano vardas yra ${this.name}!`
    }

    intro() {
        return `Sveiki, mano kailio spalva yra ${this.fur}!. Turiu ${this.legsCount} kojas ir ${this.eyesCount} akis. Jei reikia moku pasakyti ${this.sound}`

    }


}