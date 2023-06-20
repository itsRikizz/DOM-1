const paras = document.querySelectorAll(".paras");

console.log(paras);

const people = ["sanmay", "riki", "Rahul"];

let data = [];
people.forEach((item) => {
  //   console.log(item);
  data.push(item);
});
console.log(data);
paras.forEach((item) => { 
  //   console.log(data);
  //   data.forEach((items) => {
  //     item.innerHTML += `<span>${items}</span>`;
  //   });

  item += data[0];
});
