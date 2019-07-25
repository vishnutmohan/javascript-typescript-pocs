function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
var CanSayHi = /** @class */ (function () {
    function CanSayHi() {
    }
    CanSayHi.prototype.sayHi = function () {
        return "Hello " + this.name;
    };
    return CanSayHi;
}());
var HasSuperPower = /** @class */ (function () {
    function HasSuperPower() {
    }
    HasSuperPower.prototype.superpower = function () {
        return "" + this.heroName;
    };
    return HasSuperPower;
}());
var Superhero = /** @class */ (function () {
    function Superhero(name) {
        this.name = name;
        this.heroName = "SUPER " + name;
    }
    return Superhero;
}());
applyMixins(Superhero, [CanSayHi, HasSuperPower]);
var ts = new Superhero('typescript');
console.log(ts.superpower());
