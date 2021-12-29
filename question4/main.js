function mono_syllable(str) {
  let arr = str.split(" ");
  let res = [];
  let ing = new RegExp("ing");
  arr.map((i) => {
    if (ing.test(i.substr(-3)) && i.length > 4) {
      res.push(i);
    }
  });

  console.log(res);
}
mono_syllable("coming bringing Letting sing");
mono_syllable("going Ping, king sHrink dOing");
