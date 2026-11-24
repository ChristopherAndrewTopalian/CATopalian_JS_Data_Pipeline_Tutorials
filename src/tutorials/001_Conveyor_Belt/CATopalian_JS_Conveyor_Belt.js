// CATopalian_JS_Conveyor_Belt.js

// shortcut
function cl(whichText)
{
    let result = console.log(whichText);
    return result;
}

//----//

// ===
// CONVEYOR BELT STATIONS (Pure Input -> Output)
// ===

// STATION 1: INPUT: number | OUTPUT: number + 10
function addReactorBonus(whichPower)
{
    let result = whichPower + 10;
    return result;
}

// STATION 2: INPUT: number | OUTPUT: number * 2
function doubleShieldOutput(whichPower)
{
    let result = whichPower * 2;
    return result;
}

// STATION 3: INPUT: number | OUTPUT: formatted text string
function formatPowerReadout(whichPower)
{
    let result = 'Final Shield Output: ' + whichPower + ' MW';
    return result;
}

//----//

// ===
// ASSEMBLY LINE (Connects the stations in order)
// ===
function runPowerPipeline(startingPower)
{
    let step1 = addReactorBonus(startingPower);

    let step2 = doubleShieldOutput(step1);

    let step3 = formatPowerReadout(step2);

    cl('Start:  ' + startingPower);
    cl('Step 1 (+10): ' + step1);
    cl('Step 2 (*2):  ' + step2);
    cl('Step 3:       ' + step3);

    return step3;
}

//----//

// Run the belt with an initial input of 25
runPowerPipeline(25);

//----//

// Dedicated to the Creator of All Beings
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

