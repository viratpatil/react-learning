    export function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
   // This will be executed first.
  // Hello, 
  // I will be printed after the pause
  // World!
  // undefined