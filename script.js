
/*
const word = " Jellyfish";
    var end = " sitting on a rock.";
        let count = 5;

    while (count > 0) {
        console.log(count + word + ",");
        console.log(count + word + ".");
        console.log(count + word + end);
        console.log("One fell off.")

        count = count - 1;
        
        if (count > 0) {
            console.log(count + word);
         } else {
            console.log("No" + word + ",")
            console.log("no" + word + ".")
            console.log("No" + word + end);
           }

    }
*/

document.body.style.backgroundColor = 'lightblue';
document.body.style.fontSize = '24px';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.margin = '50px';



  const list = document.querySelector('#list');

  for (var jellyfish = 5; jellyfish > 0; jellyfish--) {
    let textString = `${ jellyfish } jellyfish, ${ jellyfish } jellyfish, ${ jellyfish } jellyfish sitting on a rock. One fell off.`

console.log(textString);
  const verse = document.createElement('p');
  verse.textContent = textString;

  list.appendChild(verse);

  }
  
  alert("It's time to learn the jellyfish rhyme");

