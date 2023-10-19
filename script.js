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

  