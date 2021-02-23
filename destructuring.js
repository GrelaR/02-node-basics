const character = {
    nameIs: 'Pepe',
    lastName: 'Argento',
    job: 'Seller',
    getDescription() {
        return `${nameIs} ${lastname} es ${job}`
    }
}

const printCharacter = ({ nameIs, lastName, job }) => {
    console.log(nameIs, lastName, job);
}

printCharacter(character);