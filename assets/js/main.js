"use strict";

//# Loops

//# Level_1_1
console.log("%c Level_1_1", "color: white; background-color: red");

for (let i = 0; i < 10; i++) {
  console.log(`Hello World ${i + 1}`);
}

//# Level_1_2
console.log("%c Level_1_2", "color: white; background-color: red");

let numArray = [];

for (let i = 0; i < 10; i++) {
  numArray.push(i + 1);
}

console.log(numArray);

//# Level_1_3
console.log("%c Level_1_3", "color: white; background-color: red");

let i = 0;

while (i < 10) {
  i++;
  console.log(`Hello World ${i}`);
}

//# Level_1_4
console.log("%c Level_1_4", "color: white; background-color: red");

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric"];

for (let i = 0; i < names.length; i++) {
  console.log(`Hallo ich bin ${names[i]}`);
}

//# Level_1_5
console.log("%c Level_1_5", "color: white; background-color: red");

let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}

//# Level_1_6
console.log("%c Level_1_6", "color: white; background-color: red");

let retArray = [];

for (let i = 0; i < 100; i++) {
  retArray.push(`image_${i + 1}.jpg`);
}
console.log(retArray);

//# Level_1_7
console.log("%c Level_1_7", "color: white; background-color: red");

const doWhileOutput = document.querySelector(".while_output_container");

let n = 1;
do {
  doWhileOutput.innerHTML += `<p>The number is ${n}</p>`;
  n++;
} while (n <= 5);

//# Level_2_1
console.log("%c Level_2_1", "color: white; background-color: red");

const imageArray = () => {
  let returnArray = [];
  for (let i = 0; i < 100; i++) {
    let number = (i + 1).toString().padStart(3, 0);
    // let number;
    // if (i + 1 < 9) {
    //   number = `00${i + 1}`;
    // } else if (i + 1 < 99) {
    //   number = `0${i + 1}`;
    // } else {
    //   number = i + 1;
    // }
    returnArray.push(`image_${number}.jpg`);
  }
  console.log(returnArray);
};

imageArray();

//# Level_2_2
// console.log("%c Level_2_2", "color: white; background-color: red");

// const loopMeForm = document.querySelector(".loop_me_form");
// const loopMeInput = document.querySelector("#number_input");
// const outputContainer = document.querySelector(".loop_me_output");

// loopMeForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const loopMeInputValue = loopMeInput.value;
//   // let loopCount = "";
//   const loopArray = ["L", "p"];

//   for (let i = 0; i < loopMeInputValue; i++) {
//     // loopCount += "o";
//     loopArray.splice(1, 0, "o");
//   }
//   outputContainer.textContent = loopArray.join("");
//   // outputContainer.textContent = `L${loopCount}p`;
// });

//# Level_3_1
console.log("%c Level_3_1", "color: white; background-color: red");

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

const charSeperator100 = () => {
  const outputArray = [];
  console.log(Math.ceil(text.length / 100));
  for (let i = 0; i < text.length / 100; i++) {
    const textSnippet = text.slice(i * 100, (i + 1) * 100);
    outputArray.push(`${textSnippet} - ${i + 1} of ${Math.ceil(text.length / 100)}`);

    console.log(textSnippet);
  }
  console.log(outputArray);
};

charSeperator100();

//# Level_3_2
console.log("%c Level_3_2", "color: white; background-color: red");

let numArr = [5, 22, 15, 100, 55];
const devidableOutputContainer = document.querySelector(".devidable_output_container");

const devidableCheck = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let n = 2; n < array[i]; n++) {
      const result = array[i] / n;
      if (Number.isInteger(result)) {
        // if (array[i] % n === 0) {
        // const result = array[i] / n;

        const outputText = `${array[i]} is devidable by ${n}. The result is: ${result}`;
        devidableOutputContainer.innerHTML += `<p>${outputText}</p>`;
      }
    }
  }
};

devidableCheck(numArr);

//# Level_3_3

console.log("%c Level_3_3", "color: white; background-color: red");

const loopMeForm = document.querySelector(".loop_me_form");
const loopMeInput = document.querySelector("#number_input");
const outputContainer = document.querySelector(".loop_me_output");

loopMeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loopMeInputValue = Number(loopMeInput.value);
  if (loopMeInputValue === 0) {
    outputContainer.innerHTML = `<p style="color: red">Loop mit 0 kann nicht ausgeführt werden!</p>`;
    return;
  }
  // let loopCount = "";
  const loopArray = ["L", "p"];

  for (let i = 0; i < loopMeInputValue; i++) {
    // loopCount += "o";
    // if (loopMeInputValue % 2 === 0) {
    //   loopArray.splice(1, 0, "o");
    // } else if (loopMeInputValue % 2 === 1) {
    //   if (i % 2 === 1) {
    //     loopArray.splice(1, 0, "0");
    //   } else if (i % 2 === 0) {
    //     loopArray.splice(1, 0, "o");
    //   }
    // }

    if (loopMeInputValue % 2 === 0) {
      loopArray.splice(1, 0, "o");
    } else if (loopMeInputValue % 2 === 1 && i % 2 === 1) {
      loopArray.splice(1, 0, "0");
    } else if (loopMeInputValue % 2 === 1 && i % 2 === 0) {
      loopArray.splice(1, 0, "o");
    }
  }
  outputContainer.textContent = loopArray.join("");
  // outputContainer.textContent = `L${loopCount}p`;
});

//# Level_3_4

const countMeForm = document.querySelector(".coutn_me_form");
const maxNumberInput = document.querySelector("#max_value");
const firstNumberInput = document.querySelector("#first_number");
const secondNumberInput = document.querySelector("#second_number");

const countMeOutputContainer = document.querySelector(".count_me_output_container");

countMeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let maxNumberInputValue = maxNumberInput.value;
  const firstNumberInputValue = Number(firstNumberInput.value);
  const secondNumberInputValue = Number(secondNumberInput.value);
  let result = 0;

  if (maxNumberInputValue === "") {
    countMeOutputContainer.textContent = "Bitte mach eine gültige Eingabe!";
    return;
  }

  if (firstNumberInputValue === secondNumberInputValue) {
    countMeOutputContainer.textContent = "Bitte wähle zwei unterschiedliche Werte zur Überprüfung aus!";
    return;
  }

  maxNumberInputValue = Number(maxNumberInput.value);

  for (let i = 0; i < maxNumberInputValue; i++) {
    if (i % firstNumberInputValue === 0 || i % secondNumberInputValue === 0) {
      result += i;
    }
  }
  countMeOutputContainer.textContent = result;
});
