function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}


class CanSayHi {
    name: string;
    sayHi() {
        return `Hello ${this.name}`;
    }
}

class HasSuperPower {
    heroName: string;
    superpower() {
        return `${this.heroName}`
    }
}

class Superhero implements CanSayHi, HasSuperPower {
    heroName: string;
    constructor(public name) {
        this.heroName = `SUPER ${name}`;
    }
    sayHi: () => string;
    superpower: () => string;
}

applyMixins(Superhero, [CanSayHi, HasSuperPower]);

const ts = new Superhero('typescript');
console.log(ts.superpower());