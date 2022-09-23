
function userdata(name, birthDate, todays) {
    let data = name + ', ' + birthDate + ', ' + 'it`s ' + todays + ' now.';
    return data;
}

alert(userdata(prompt('What is your name'), prompt('When is your birthday'), prompt('What year is it now')))