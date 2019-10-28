<script>
  function loadData() {
    fetch('ajax_sample.json')
      .then(res => res.json())
      .then(res => res.map(c => c.name + " " + c.code)) // OR `${c.name} ${c.code}` <- ES6 string interpolation
      .then(nameArray => {
        const instructions = document.querySelector('.content');
        instructions.innerHTML = '';

        for (let i = 0; i < 50; i++) {
          const selectNumber = getRandomIntInclusive(0, 242);
          let el = document.createElement("li");
          el.innerText = nameArray[selectNumber];

          instructions.appendChild(el);
        };
      })
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
</script>