// Gyvunai
//  naminiai
//      - suo
//      - kate
//      - ziurkenas
//  zuvys
//      - lydeka
//      - auksine zuvele
//      - rykles
//  pauksciai
//      - genys
//      - zyle
//      - apuokas


class Animal { }


class Pet extends Animal{ }
// animal + Pet unique
class Fish extends Animal{ }
// animal + Fish unique
class Birds extends Animal{ }
// animal + Birds unique

// Pets
class Dog extends Pet{ }
// Pet + Pet unique + Dog unique
class Cat extends Pet{ }
// Pet + Cat unique + Pet unique
class Hamster extends Pet{ }
// Pet + Hamster unique + Pet unique

// Fish
class Shark extends Fish{ }
class GoldenFish  extends Fish{ }
class Pike extends Fish { }

// Birds
class Eagle extends Birds { }
class Stork extends Birds { }
class Pigeon extends Birds { }

