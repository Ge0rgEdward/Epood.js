class Toode{
    constructor(nimi, hind, kategooria){
        this.nimi = nimi,
        this.hind = hind,
        this.kategooria = kategooria
    }

    describe(){
        return `Toode: ${this.nimi}, Hind: ${this.hind}, Kategooria: ${this.kategooria}`      
    }

    static discountedPrice(hind, discount){ //võtab hinna ja allahindlus protsendi, mis tagastab toota allahinnatud hinna
        return hind - (hind*discount)/100
    }
}

const iPad = new Toode("ipad", 999.99, "Elektroonika");

console.log(iPad.describe())
console.log('allahindlus', Toode.discountedPrice(iPad.hind, 10))

