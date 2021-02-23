const getUserById = (id, callback) => {

    const user = {
        id,
        name: 'Rodrigo'
    }

    setTimeout(() => {

        callback(user);

    }, 1000);
}

getUserById(10, (user) => {
    console.log(user.name);
});