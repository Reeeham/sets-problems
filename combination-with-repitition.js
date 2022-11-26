const combineWithRepitition = (comboOptions, comboLength) => {
    if(comboLength === 1) {
        return comboOptions.map((comboOption) => [comboOption]);
    }

    const combos = [];

    comboOptions.forEach((currentOption, optionIndex) => {
        const smallerCombos = combineWithRepitition(comboOptions.slice(optionIndex), comboLength - 1);
        
        smallerCombos.forEach((smallerCombo) => {
            combos.push([currentOption].concat(smallerCombo));
        });
    });

    return combos;

}

console.log(combineWithRepitition(['a','b','c'], 2))