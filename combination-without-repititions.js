const combineWithoutRepitions = (comboOptions, comboLength) => {
    // if the length of the combination is 1 then each element of the original array 
    // is a combination itself
    if(comboLength === 1) {
        return comboOptions.map((comboOption) => [comboOption]);
    }

    // Init Combinations array 
    const combos = [];

    // Extract characters one by one and concatenate them to combinations of smaller lengths.
    // we need to extract them because we don't want to have repitions after concatenation.
    comboOptions.forEach((currentOption, optionIndex) => {
        // generate combinations of smaller size 
        const smallerCombos = combineWithoutRepitions(comboOptions.slice(optionIndex + 1), comboLength - 1);

        //concatenate current option with all combinations of smaller size 
        smallerCombos.forEach((smallerCombo) => {
            combos.push([currentOption].concat(smallerCombo));
        });
    });

    return combos;
}