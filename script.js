window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let i = 1; i <= 5; i++) {
  promises.push(
    new Promise((resolve, reject) => {
      // Simulate some asynchronous operation
      setTimeout(() => {
        if (i === 3) {
          reject(30);
        } else {
          resolve(30);
        }
      }, 1000); // Simulating 1 second delay
    })
  );
}




Promise.any(promises).then((data)=>{
  //console.log(data);
  document.getElementById("output").innerText=data;
})


