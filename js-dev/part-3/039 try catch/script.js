let json = '{"id": 2}';
// let user = 'unknown';

try {
    let user = JSON.parse(json);
    console.log(user);
    
    // console.log('Normal');
    // console.log(a);
    // console.log('After a');
    if(!user.name) {
        throw new Error("Data without name");
    }
    
} catch (error){
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
    // console.log(error);
    
    // user = null;
} finally {
    console.log('Я выполнюсь всегда!');
    
}

console.log(user);
