const counters = document.querySelectorAll(".counter");
counters.forEach( (counter) => {
    // console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetData = +counter.getAttribute("data-target");
        // console.log(typeof targetData);
        const startingNumber = Number(counter.innerHTML);
        const increamet = targetData / 100 ;

        if (startingNumber < targetData) {
            counter.innerHTML = `${Math.round(startingNumber + increamet)}`;
            setTimeout(updateCounter, 10);
        }else{
            counter.innerHTML = targetData ;
        }
    }
    updateCounter();
})