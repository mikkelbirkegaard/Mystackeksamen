    // Form for at tilmelde sig info om 2. sortering

    function email() {
        let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Indtast valid email");
          return false;
        }
      }