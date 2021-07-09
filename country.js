class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    display() {
        let color1 = document.getElementById('Color1');
        let color2 = document.getElementById('Color2');
        let color3 = document.getElementById('Color3');

        color1.style.backgroundColor = this.colors[0];
        color2.style.backgroundColor = this.colors[1];
        color3.style.backgroundColor = this.colors[2];

        let CountryName = document.getElementById('CountryName');
        let OfficialLanguage = document.getElementById('OfficialLanguage');
        let HelloWorld = document.getElementById('HelloWorld');

        CountryName.innerHTML = this.name;
        OfficialLanguage.innerHTML = this.lang;
        HelloWorld.innerHTML = this.greeting;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    let input = 'Mexico';
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    country.display();

}

