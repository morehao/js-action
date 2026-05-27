const p1 = (tag) => {
  return new Promise((resolve, reject)=> {
    if (tag) {
      resolve('Success');
    } else {
      reject('failed')
    }
  });
}

p1(true).then((data) => {
  console.log('data-1:', data);
}, (error)=> {
  console.log('error-1:', error);
})

p1(false).then((data) => {
    console.log('data-2:', data);
  })
  .catch((error)=> {
    console.log('error-2:', error);
  })
