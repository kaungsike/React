import "./style.css";

const fetchBtn = document.querySelector("#fetch-btn");

const handleFetchBtn = async () => {

  const res1 = await fetch("http://localhost:5000/tasks/1");
  const data1 = await res1.json().then((data) => {
    console.log(data);
  }
  );

  const res2 = await fetch("http://localhost:5000/tasks/2");
  const data2 = await res2.json().then((data) => {
    console.log(data);
  }
  );

  const res3 = await fetch("http://localhost:5000/tasks/3");
  const data3 = await res3.json().then((data) => {
    console.log(data);
  }
  );


  // console.log("U click");
  // const res = fetch("http://localhost:5000/tasks/1").then((response) => response.json()).then((data) => console.log(data));
  // console.log(res);

  // const p = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const val = Math.floor(Math.random() * 10);

  //     console.log(val);

  //     if (val > 5) {
  //       resolve(val);
  //     } else {
  //       reject(val);
  //     }
  //   }, 1000);
  // })
  
  // p.then(
  //   (x) => {
  //     console.log(x, "resolved");
  //   },
  //   (y) => {
  //     console.log(y , "rejected");
  //   }
  // );

  // console.log(p);

  // let x = 0;

  // setTimeout (() => {
  //   x = 5
  // },100)

  // console.log(x);

  // const p = new Promise((resolve,reject) => {
  //   setTimeout(() => {
  //     resolve(5);
  //   },3000)
  // });

  // p.then((data) => {
  //   x = data;
  //   console.log(x==5? "good" : "bad");
  // })
};

fetchBtn.addEventListener("click", handleFetchBtn);
