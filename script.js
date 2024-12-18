// const res = fetch("https://restcountries.com/v3.1/all");
// res
//   .then((data) => data.json())
//   .then((result) => {
//     for (let i = 0; i < result.length; i++) {
//       console.log(result[i].name.common);
//       console.log(result[i].capital);
//       console.log(result[i].population);

//     }
//   });

// async function res() {
//   const data = await fetch("https://restcountries.com/v3.1/all");
//   const result = await data.json();
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i].name.common);
//   }
// }
// console.log(`well come ${res()}`);

async function res() {
   try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const result = await data.json();
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name.common);
    }
   } catch (error) {
    console.log(error);
    
   }
  }
res()