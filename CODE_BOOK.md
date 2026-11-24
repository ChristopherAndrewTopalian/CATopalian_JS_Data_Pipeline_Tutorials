# CODE BOOK

---

<details>
<summary><b>Section: </b></summary>


### `index.html`

```html
<!-- Dedicated to God the Father -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- index.html -->

<html>
<head>
<title> index </title>

<meta charset = 'UTF-8'>

<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>

<style>

body
{
    background-color: rgb(0, 0, 0);
    font-family: Arial;
    color: rgb(255, 255, 255);
}

</style>

<script>

// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

function gr(whichId)
{
    let result =  ge(whichId).getBoundingClientRect();
    return result;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

//-//

function makeAppLink()
{
    let theLink = 'index_links.html';

    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.margin = 10 + 'px';
    ba(mainDiv);

    //-//

    let instructions = ce('div');
    instructions.textContent = 'Click on the Link Below to Open the Application';
    mainDiv.append(instructions);

    //-//

    let appLink = ce('a');
    appLink.href = theLink;
    appLink.textContent = 'Start Application';
    appLink.style.fontSize = 50 + 'px';
    appLink.style.fontWeight = 'bold';
    mainDiv.append(appLink);
}

function whenLoaded()
{
    makeAppLink();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```

### `index_links.html`

```html
<!-- Dedicated to God the Father -->
<!-- CATopalian Starfleet Academy Index -->
<!DOCTYPE html>
<html lang='en'>
<head>
<title> Starfleet Academy Index </title>
<style>
body { margin: 0px; background-color: rgb(20, 20, 25); color: white; font-family: 'Segoe UI', Arial, sans-serif; padding: 2px; }
.headline { color: #00ffcc; border-bottom: 1px solid #444; padding-left: 5px; padding-bottom: 2px; }
ul { list-style-type: none; padding-left: 20px; border-left: 1px solid #333; margin-top: 2px; }
li { margin: 1px 0px; }
.folder_title { font-weight: bold; color: #ffcc00; font-size: 18px; }
a { color: #0088ff; text-decoration: none; font-size: 16px; transition: color 0.2s; }
a:hover { color: rgb(0, 255, 255); }
</style>
</head>
<body>
<div class = 'headline'> Tutorial Database Index </div>
<ul>
<li><details><summary class='folder_title'>001 Conveyor Belt</summary>
<ul>
</ul>
</details></li>
<li><details><summary class='folder_title'>002 Converyor Belt</summary>
<ul>
<li><a href='src/tutorials/002_Converyor_Belt/CATopalian_JS_Conveyor_Belt.html' target = 'blank'>CATopalian JS Conveyor Belt</a></li>
<li><a href='src/tutorials/002_Converyor_Belt/CATopalian_JS_Conveyor_Belt_Pure.html' target = 'blank'>CATopalian JS Conveyor Belt Pure</a></li>
</ul>
</details></li>
<li><details><summary class='folder_title'>003 Conveyor Belt</summary>
<ul>
<li><a href='src/tutorials/003_Conveyor_Belt/CATopalian_JS_Conveyor_Belt.html' target = 'blank'>CATopalian JS Conveyor Belt</a></li>
</ul>
</details></li>
<li><details><summary class='folder_title'>004 True SI</summary>
<ul>
<li><a href='src/tutorials/004_True_SI/CATopalian_JS_TRUE_SI.html' target = 'blank'>CATopalian JS TRUE SI</a></li>
</ul>
</details></li>
<li><details><summary class='folder_title'>005 Expression Pipeline</summary>
<ul>
<li><a href='src/tutorials/005_Expression_Pipeline/CATopalian_JS_Expression_Pipeline.html' target = 'blank'>CATopalian JS Expression Pipeline</a></li>
</ul>
</details></li>
<li><details><summary class='folder_title'>006 Data Pipeline</summary>
<ul>
<li><a href='src/tutorials/006_Data_Pipeline/CATopalian_JS_Data_Pipeline.html' target = 'blank'>CATopalian JS Data Pipeline</a></li>
</ul>
</details></li>
</ul>
</body>
</html>
```


</details>

---

<details>
<summary><b>Section: 002_Converyor_Belt</b></summary>


### `CATopalian_JS_Conveyor_Belt.html`

```html
<!-- Dedicated to the Creator of All Beings -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- CATopalian_JS_Conveyor_Belt.html -->

<!DOCTYPE html>
<html lang='en'>
<head>
<title> conveyor belt </title>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: white;
}

input, textarea
{
    display: block;
    margin-bottom: 12px;
    background-color: rgb(20, 20, 20);
    color: white;
    border: 2px solid rgb(0, 255, 255);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 8px;
    width: 320px;
}

</style>

<script>

// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

// 1. Clean the data (INPUT: raw string -> OUTPUT: trimmed lowercase string)
function cleanTheInputData(whichData)
{
    let result = whichData.trim().toLowerCase();

    return result;
}

// 2. Say something about their choice (INPUT: clean string -> OUTPUT: response string)
function citeTheirChoice(whichChoice)
{
    if (whichChoice === '')
    {
        return '';
    }

    if (whichChoice === 'aqua')
    {
        return 'I like aqua too';
    }

    return 'You chose: ' + whichChoice;
}

// 3. Conveyor belt (connects Station 1 -> Station 2 -> Output box)
function processData(whichData)
{
    let cleaned = cleanTheInputData(whichData);

    let choice = citeTheirChoice(cleaned);

    ge('output').value = choice;
}

function makeInterface()
{
    let theInput = ce('input');
    theInput.oninput = function()
    {
        processData(theInput.value);
    };
    ba(theInput);

    //-//

    let output = ce('textarea');
    output.id = 'output';
    ba(output);
}

function whenLoaded()
{
    makeInterface();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```

### `CATopalian_JS_Conveyor_Belt_Pure.html`

```html
<!DOCTYPE html>
<html lang='en'>
<head>
<title> conveyor belt </title>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: white;
}

input, textarea
{
    display: block;
    margin-bottom: 12px;
    background-color: rgb(20, 20, 20);
    color: white;
    border: 2px solid rgb(0, 255, 255);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 8px;
    width: 320px;
}

</style>

<script>

// ===
// shortcuts.js
// ===
function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

//----//

// ===
// LOGIC LAYER (100% Pure Input -> Output — Zero DOM references)
// ===

// 1. Clean the data (INPUT: raw string -> OUTPUT: trimmed lowercase string)
function cleanTheInputData(whichData)
{
    let result = whichData.trim().toLowerCase();

    return result;
}

// 2. Say something about their choice (INPUT: clean string -> OUTPUT: response string)
function citeTheirChoice(whichChoice)
{
    if (whichChoice === '')
    {
        return '';
    }

    if (whichChoice === 'aqua')
    {
        return 'I like aqua too';
    }

    return 'You chose: ' + whichChoice;
}

// 3. Conveyor belt (INPUT: raw string -> OUTPUT: final processed string)
function processData(whichData)
{
    let cleaned = cleanTheInputData(whichData);

    let choice = citeTheirChoice(cleaned);

    return choice;
}

//----//

// ===
// INTERFACE LAYER (Connects the DOM to the Pure Pipeline)
// ===
function showOutput(whichId, whichText)
{
    let element = ge(whichId);

    if (element)
    {
        element.value = whichText;
    }
}

function makeInterface()
{
    let theInput = ce('input');
    theInput.oninput = function()
    {
        // Send raw input into the pure conveyor belt
        let finalAnswer = processData(theInput.value);

        // Hand the returned output to the screen
        showOutput('output', finalAnswer);
    };
    ba(theInput);

    //-//

    let output = ce('textarea');
    output.id = 'output';
    ba(output);
}

function whenLoaded()
{
    makeInterface();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```


</details>

---

<details>
<summary><b>Section: 003_Conveyor_Belt</b></summary>


### `CATopalian_JS_Conveyor_Belt.html`

```html
<!-- Dedicated to the Creator of All Beings -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- CATopalian_JS_Conveyor_Belt.html -->

<!DOCTYPE html>
<html lang='en'>
<head>
<title> CATopalian JS Conveyor Belt 02 </title>

<meta charset = 'UTF-8'>
<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin: 24px;
}

input
{
    width: 220px;
    background-color: rgb(20, 20, 20);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 255, 255);
    font-family: Arial;
    font-size: 22px;
    font-weight: bold;
    padding: 8px;
    margin-bottom: 16px;
}

.station
{
    background-color: rgb(20, 20, 20);
    border-left: 5px solid rgb(0, 255, 255);
    padding: 12px 16px;
    margin-bottom: 10px;
    max-width: 560px;
}

.arrow
{
    color: rgb(255, 255, 0);
    margin: 4px 0px 10px 20px;
    font-size: 18px;
}

.label
{
    color: rgb(0, 255, 255);
    font-size: 15px;
    margin-bottom: 4px;
}

</style>

<script>

// ===
// shortcuts.js
// ===
function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichText)
{
    let result = console.log(whichText);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

//----//

// ===
// INTERFACE
// ===
function makeInterface()
{
    let title = ce('div');
    title.textContent = 'Enter Starting Reactor Power:';
    title.style.marginBottom = '8px';
    ba(title);

    let powerInput = ce('input');
    powerInput.id = 'powerInput';
    powerInput.type = 'number';
    powerInput.value = '25';
    powerInput.oninput = function()
    {
        runVisualPipeline();
    };
    ba(powerInput);

    let beltContainer = ce('div');
    beltContainer.id = 'beltContainer';
    ba(beltContainer);
}

//----//

// ===
// CONVEYOR BELT STATIONS (Exact same pure functions from Tutorial 1!)
// ===

// INPUT: element id | OUTPUT: clean number
function readStartingPower(whichId)
{
    let element = ge(whichId);

    if (!element || element.value === '')
    {
        return 0;
    }

    let result = Number(element.value);
    return result;
}

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
// VISUAL RENDERER
// ===
function renderBelt(startVal, step1Val, step2Val, step3Val)
{
    let container = ge('beltContainer');

    container.innerHTML =
        '<div class="station">' +
            '<div class="label">INPUT STATION: readStartingPower()</div>' +
            '<div>Output: ' + startVal + '</div>' +
        '</div>' +
        '<div class="arrow">↓ feeds ' + startVal + ' into addReactorBonus()</div>' +
        '<div class="station">' +
            '<div class="label">STATION 1: addReactorBonus(whichPower) -> + 10</div>' +
            '<div>Output: ' + step1Val + '</div>' +
        '</div>' +
        '<div class="arrow">↓ feeds ' + step1Val + ' into doubleShieldOutput()</div>' +
        '<div class="station">' +
            '<div class="label">STATION 2: doubleShieldOutput(whichPower) -> * 2</div>' +
            '<div>Output: ' + step2Val + '</div>' +
        '</div>' +
        '<div class="arrow">↓ feeds ' + step2Val + ' into formatPowerReadout()</div>' +
        '<div class="station" style="border-left-color: rgb(0, 255, 0);">' +
            '<div class="label" style="color: rgb(0, 255, 0);">FINAL STATION: formatPowerReadout(whichPower)</div>' +
            '<div style="font-size: 24px;">' + step3Val + '</div>' +
        '</div>';
}

//----//

// ===
// ORCHESTRATOR
// ===
function runVisualPipeline()
{
    let startVal = readStartingPower('powerInput');
    let step1Val = addReactorBonus(startVal);
    let step2Val = doubleShieldOutput(step1Val);
    let step3Val = formatPowerReadout(step2Val);

    renderBelt(startVal, step1Val, step2Val, step3Val);
}

function whenLoaded()
{
    makeInterface();
    runVisualPipeline();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```


</details>

---

<details>
<summary><b>Section: 004_True_SI</b></summary>


### `CATopalian_JS_TRUE_SI.html`

```html
<!-- Dedicated to the Creator of All Beings -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- CATopalian_JS_TRUE_SI.html -->

<!DOCTYPE html>
<html lang='en'>
<head>
<title> CATopalian JS TRUE SI </title>

<meta charset = 'UTF-8'>

<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
}

</style>

<script>

// ===
// shortcuts.js
// ===
function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichText)
{
    let result = console.log(whichText);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

//----//

// ===
// DATA
// ===
let fps = 1;
let frameDuration = 1000 / fps;
let keepThinking;
let counter = 0;

let knownWords = [
    {
        word: 'hi',
        meaning: 'greeting'
    },
    {
        word: 'weather',
        meaning: 'environment condition'
    }
];

//----//

// ===
// INTERFACE
// ===
function makeInterface()
{
    let textInput = ce('textarea');
    textInput.id = 'textInput';
    ba(textInput);
}

//----//

// ===
// MODULAR PIPELINE FUNCTIONS (Input -> Output)
// ===

// 1. INPUT: element id | OUTPUT: raw trimmed string
function listenForText(whichId)
{
    let element = ge(whichId);

    if (!element)
    {
        return '';
    }

    return element.value.trim();
}

// 2. INPUT: raw string | OUTPUT: array of clean lowercase words
function tokenizeWords(whichText)
{
    // Early return replaces wrapping everything inside an if/else
    if (whichText === '')
    {
        return [];
    }

    // Lowercase and strip punctuation so "hi," still matches "hi"
    let cleanText = whichText.toLowerCase().replace(/[^\w\s]/g, '');

    if (cleanText.trim() === '')
    {
        return [];
    }

    let wordArray = cleanText.trim().split(/\s+/);
    return wordArray;
}

// 3. INPUT: array of words + dictionary | OUTPUT: array of matching objects
function findKnownWords(whichWords, whichDictionary)
{
    let foundMatches = [];

    for (let i = 0; i < whichWords.length; i++)
    {
        for (let j = 0; j < whichDictionary.length; j++)
        {
            if (whichWords[i] === whichDictionary[j].word)
            {
                foundMatches.push(whichDictionary[j]);
                break;
            }
        }
    }

    return foundMatches;
}

// 4. INPUT: matching objects | OUTPUT: array of meanings (easy to expand later)
function extractMeanings(whichMatches)
{
    let meanings = [];

    for (let i = 0; i < whichMatches.length; i++)
    {
        meanings.push(whichMatches[i].meaning);
    }

    return meanings;
}

//----//

// ===
// MAIN LOOP (Orchestrates the pipeline)
// ===
function think()
{
    keepThinking = setInterval(function()
    {
        counter++;

        // Step-by-step data flow: each output feeds the next input
        let spokenText = listenForText('textInput');

        let words = tokenizeWords(spokenText);

        let matches = findKnownWords(words, knownWords);

        let meanings = extractMeanings(matches);

        if (matches.length > 0)
        {
            cl(words);
            cl(matches);
            cl(meanings);
        }

    }, frameDuration);
}

function whenLoaded()
{
    makeInterface();
    think();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```


</details>

---

<details>
<summary><b>Section: 005_Expression_Pipeline</b></summary>


### `CATopalian_JS_Expression_Pipeline.html`

```html
<!-- Dedicated to the Creator of All Beings -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- CATopalian_JS_Expression_Pipeline.html -->

<!DOCTYPE html>
<html lang='en'>
<head>
<title> CATopalian JS Expression Pipeline </title>

<meta charset = 'UTF-8'>
<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin: 24px;
}

input
{
    width: 420px;
    background-color: rgb(20, 20, 20);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 255, 255);
    font-family: Arial;
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
}

.stageBox
{
    background-color: rgb(22, 22, 22);
    border-left: 4px solid rgb(0, 255, 255);
    padding: 12px 16px;
    margin-top: 14px;
    max-width: 640px;
}

.stageLabel
{
    color: rgb(0, 255, 255);
    font-size: 15px;
    margin-bottom: 4px;
}

</style>

<script>

// ===
// shortcuts.js
// ===
function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichText)
{
    let result = console.log(whichText);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

//----//

// ===
// INTERFACE
// ===
function makeInterface()
{
    let title = ce('div');
    title.textContent = 'Conveyor Belt Math Evaluator (+, -, *, /)';
    title.style.marginBottom = '12px';
    ba(title);

    let expressionInput = ce('input');
    expressionInput.id = 'expressionInput';
    expressionInput.type = 'text';
    expressionInput.value = '10 + 5 * 2 - 4 / 2';
    expressionInput.oninput = function()
    {
        runPipeline();
    };
    ba(expressionInput);

    let outputArea = ce('div');
    outputArea.id = 'outputArea';
    ba(outputArea);
}

//----//

// ===
// HELPER FUNCTION
// ===
function getOperatorPriority(whichOperator)
{
    if (whichOperator === '*' || whichOperator === '/')
    {
        return 2;
    }

    if (whichOperator === '+' || whichOperator === '-')
    {
        return 1;
    }

    return 0;
}

//----//

// ===
// MODULAR PIPELINE FUNCTIONS (Input -> Output)
// ===

// STAGE 1: INPUT: element id | OUTPUT: raw trimmed string
function readExpression(whichId)
{
    let element = ge(whichId);

    if (!element)
    {
        return '';
    }

    return element.value.trim();
}

// STAGE 2: INPUT: raw string | OUTPUT: array of number and operator tokens
function tokenizeExpression(whichText)
{
    if (whichText === '')
    {
        return [];
    }

    // Separate numbers and operators even if the user typed "10+5*2" without spaces
    let spaced = whichText.replace(/([+\-*/])/g, ' $1 ');
    let parts = spaced.trim().split(/\s+/);
    let tokens = [];

    for (let i = 0; i < parts.length; i++)
    {
        let item = parts[i];

        if (item === '+' || item === '-' || item === '*' || item === '/')
        {
            tokens.push(item);
        }
        else if (!isNaN(Number(item)) && item !== '')
        {
            tokens.push(Number(item));
        }
    }

    return tokens;
}

// STAGE 3: INPUT: infix tokens | OUTPUT: postfix queue (ordered by math precedence)
function orderByPrecedence(whichTokens)
{
    let outputQueue = [];
    let operatorStack = [];

    for (let i = 0; i < whichTokens.length; i++)
    {
        let token = whichTokens[i];

        if (typeof token === 'number')
        {
            outputQueue.push(token);
        }
        else
        {
            while (
                operatorStack.length > 0 &&
                getOperatorPriority(operatorStack[operatorStack.length - 1]) >= getOperatorPriority(token)
            )
            {
                outputQueue.push(operatorStack.pop());
            }

            operatorStack.push(token);
        }
    }

    while (operatorStack.length > 0)
    {
        outputQueue.push(operatorStack.pop());
    }

    return outputQueue;
}

// STAGE 4: INPUT: postfix queue | OUTPUT: single calculated number
function evaluateQueue(whichQueue)
{
    if (whichQueue.length === 0)
    {
        return 0;
    }

    let numberStack = [];

    for (let i = 0; i < whichQueue.length; i++)
    {
        let item = whichQueue[i];

        if (typeof item === 'number')
        {
            numberStack.push(item);
        }
        else
        {
            if (numberStack.length < 2)
            {
                return 'Waiting for second number...';
            }

            let rightNumber = numberStack.pop();
            let leftNumber = numberStack.pop();

            if (item === '+')
            {
                numberStack.push(leftNumber + rightNumber);
            }
            else if (item === '-')
            {
                numberStack.push(leftNumber - rightNumber);
            }
            else if (item === '*')
            {
                numberStack.push(leftNumber * rightNumber);
            }
            else if (item === '/')
            {
                if (rightNumber === 0)
                {
                    return 'Cannot divide by zero';
                }

                numberStack.push(leftNumber / rightNumber);
            }
        }
    }

    if (numberStack.length === 1)
    {
        return numberStack[0];
    }

    return 'Incomplete expression';
}

//----//

// ===
// DISPLAY & ORCHESTRATION
// ===
function renderStages(rawText, tokens, orderedQueue, finalAnswer)
{
    let area = ge('outputArea');

    area.innerHTML =
        '<div class="stageBox">' +
            '<div class="stageLabel">STAGE 1: Raw Input</div>' +
            '<div>' + (rawText || '(empty)') + '</div>' +
        '</div>' +
        '<div class="stageBox">' +
            '<div class="stageLabel">STAGE 2: Tokenized Array</div>' +
            '<div>[ ' + tokens.join(' , ') + ' ]</div>' +
        '</div>' +
        '<div class="stageBox">' +
            '<div class="stageLabel">STAGE 3: Precedence Queue (Postfix / RPN)</div>' +
            '<div>[ ' + orderedQueue.join(' , ') + ' ]</div>' +
        '</div>' +
        '<div class="stageBox" style="border-left-color: rgb(0, 255, 0);">' +
            '<div class="stageLabel" style="color: rgb(0, 255, 0);">STAGE 4: Final Output</div>' +
            '<div style="font-size: 26px;">' + finalAnswer + '</div>' +
        '</div>';
}

function runPipeline()
{
    // The entire program reads like a 4-step assembly line:
    let rawText = readExpression('expressionInput');
    let tokens = tokenizeExpression(rawText);
    let orderedQueue = orderByPrecedence(tokens);
    let finalAnswer = evaluateQueue(orderedQueue);

    renderStages(rawText, tokens, orderedQueue, finalAnswer);
}

function whenLoaded()
{
    makeInterface();
    runPipeline();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```


</details>

---

<details>
<summary><b>Section: 006_Data_Pipeline</b></summary>


### `CATopalian_JS_Data_Pipeline.html`

```html
<!-- Dedicated to the Creator of All Beings -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- CATopalian_JS_Data_Pipeline.html -->

<!DOCTYPE html>
<html lang='en'>
<head>
<title> CATopalian JS Data Pipeline </title>

<meta charset = 'UTF-8'>
<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin: 24px;
}

button
{
    background-color: rgb(45, 45, 45);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 255, 255);
    font-family: Arial;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 14px;
    margin-right: 10px;
    margin-bottom: 14px;
    cursor: pointer;
}

button:hover
{
    background-color: rgb(0, 120, 255);
}

.stageBox
{
    background-color: rgb(20, 20, 20);
    border-left: 4px solid rgb(0, 255, 255);
    padding: 12px 16px;
    margin-bottom: 14px;
    max-width: 780px;
}

.stageTitle
{
    color: rgb(0, 255, 255);
    font-size: 15px;
    margin-bottom: 6px;
}

.recordRow
{
    font-size: 16px;
    line-height: 1.5;
}

</style>

<script>

// ===
// shortcuts.js
// ===
function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichText)
{
    let result = console.log(whichText);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

//----//

// ===
// RAW INPUT DATA (Messy spacing, mixed casing, offline/corrupt entries)
// ===
let rawTelemetry = [
    { vessel: '  uss enterprise ', sector: 'alpha', shields: 88, status: 'ACTIVE' },
    { vessel: 'uss defiant',      sector: 'gamma', shields: 42, status: 'active' },
    { vessel: '  IKS HeghTa  ',   sector: 'beta',  shields: 65, status: 'Active' },
    { vessel: 'uss voyager',      sector: 'delta', shields: 31, status: 'ACTIVE' },
    { vessel: '',                 sector: 'alpha', shields: 95, status: 'ACTIVE' },
    { vessel: 'uss excelsior',    sector: 'alpha', shields: -1, status: 'OFFLINE' },
    { vessel: 'ussreliant',       sector: 'beta',  shields: 54, status: 'active' }
];

let currentThreshold = 75;

//----//

// ===
// INTERFACE
// ===
function makeInterface()
{
    let header = ce('div');
    header.textContent = 'Conveyor Belt Data Pipeline (Clean -> Filter -> Sort -> Summarize)';
    header.style.fontSize = '22px';
    header.style.marginBottom = '14px';
    ba(header);

    let controls = ce('div');
    ba(controls);

    let thresholds = [50, 75, 100];

    for (let i = 0; i < thresholds.length; i++)
    {
        let level = thresholds[i];
        let btn = ce('button');
        btn.textContent = 'Filter Shields < ' + level + '%';
        btn.onclick = function()
        {
            currentThreshold = level;
            runDataPipeline();
        };
        controls.append(btn);
    }

    let pipelineDisplay = ce('div');
    pipelineDisplay.id = 'pipelineDisplay';
    ba(pipelineDisplay);
}

//----//

// ===
// MODULAR PIPELINE FUNCTIONS (Pure Input -> Output)
// ===

// STAGE 1: INPUT: raw array | OUTPUT: array with valid, formatted records only
function cleanRecords(whichRecords)
{
    let cleaned = [];

    for (let i = 0; i < whichRecords.length; i++)
    {
        let item = whichRecords[i];
        let cleanName = item.vessel.trim().toUpperCase();
        let cleanStatus = item.status.trim().toUpperCase();

        // Skip corrupt records with missing names, negative shields, or offline status
        if (cleanName === '' || item.shields < 0 || cleanStatus !== 'ACTIVE')
        {
            continue;
        }

        cleaned.push({
            vessel: cleanName,
            sector: item.sector.trim().toUpperCase(),
            shields: item.shields,
            status: cleanStatus
        });
    }

    return cleaned;
}

// STAGE 2: INPUT: clean array + threshold | OUTPUT: only vessels below shield threshold
function filterLowShields(whichRecords, maxShields)
{
    let filtered = [];

    for (let i = 0; i < whichRecords.length; i++)
    {
        if (whichRecords[i].shields < maxShields)
        {
            filtered.push(whichRecords[i]);
        }
    }

    return filtered;
}

// STAGE 3: INPUT: filtered array | OUTPUT: new array sorted from lowest shields to highest
function sortByUrgency(whichRecords)
{
    // Copy first so we never mutate the previous stage's array
    let sorted = whichRecords.slice();

    sorted.sort(function(a, b)
    {
        return a.shields - b.shields;
    });

    return sorted;
}

// STAGE 4: INPUT: sorted array | OUTPUT: single summary object
function summarizeAlerts(whichRecords)
{
    if (whichRecords.length === 0)
    {
        return {
            alertCount: 0,
            averageShields: 0,
            highestPriorityVessel: 'NONE'
        };
    }

    let totalShields = 0;

    for (let i = 0; i < whichRecords.length; i++)
    {
        totalShields += whichRecords[i].shields;
    }

    let average = Math.round(totalShields / whichRecords.length);

    return {
        alertCount: whichRecords.length,
        averageShields: average,
        highestPriorityVessel: whichRecords[0].vessel + ' (' + whichRecords[0].shields + '%)'
    };
}

//----//

// ===
// DISPLAY & ORCHESTRATION
// ===
function formatRecordList(whichRecords)
{
    if (whichRecords.length === 0)
    {
        return '<div class="recordRow">(No matching records)</div>';
    }

    let html = '';

    for (let i = 0; i < whichRecords.length; i++)
    {
        let r = whichRecords[i];
        html += '<div class="recordRow">' +
            (i + 1) + '. ' + r.vessel +
            ' | Sector: ' + r.sector +
            ' | Shields: ' + r.shields + '%' +
            ' | Status: ' + r.status +
            '</div>';
    }

    return html;
}

function renderPipeline(raw, cleaned, filtered, sorted, summary)
{
    let display = ge('pipelineDisplay');

    display.innerHTML =
        '<div class="stageBox">' +
            '<div class="stageTitle">STAGE 0: Raw Input (' + raw.length + ' raw entries)</div>' +
            formatRecordList(raw) +
        '</div>' +
        '<div class="stageBox">' +
            '<div class="stageTitle">STAGE 1: Cleaned & Validated (' + cleaned.length + ' valid active vessels)</div>' +
            formatRecordList(cleaned) +
        '</div>' +
        '<div class="stageBox">' +
            '<div class="stageTitle">STAGE 2: Filtered Alerts (Shields &lt; ' + currentThreshold + '%)</div>' +
            formatRecordList(filtered) +
        '</div>' +
        '<div class="stageBox">' +
            '<div class="stageTitle">STAGE 3: Sorted by Priority (Lowest Shields First)</div>' +
            formatRecordList(sorted) +
        '</div>' +
        '<div class="stageBox" style="border-left-color: rgb(0, 255, 0);">' +
            '<div class="stageTitle" style="color: rgb(0, 255, 0);">STAGE 4: Final Summary Report</div>' +
            '<div class="recordRow">Vessels Needing Attention: ' + summary.alertCount + '</div>' +
            '<div class="recordRow">Average Alert Shield Level: ' + summary.averageShields + '%</div>' +
            '<div class="recordRow">Top Priority Vessel: ' + summary.highestPriorityVessel + '</div>' +
        '</div>';
}

function runDataPipeline()
{
    // Every stage takes the previous output and returns a brand-new result:
    let cleaned = cleanRecords(rawTelemetry);
    let filtered = filterLowShields(cleaned, currentThreshold);
    let sorted = sortByUrgency(filtered);
    let summary = summarizeAlerts(sorted);

    renderPipeline(rawTelemetry, cleaned, filtered, sorted, summary);
}

function whenLoaded()
{
    makeInterface();
    runDataPipeline();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```


</details>

---

<details>
<summary><b>Section: 007_Trip_Algorithm_Pipeline</b></summary>


### `CATopalian_JS_Trip_Algorithm_Pipeline.html`

```html
<!-- Dedicated to the Creator of All Beings -->
<!-- All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 -->
<!-- https://github.com/ChristopherTopalian -->
<!-- https://github.com/ChristopherAndrewTopalian -->
<!-- CATopalian_JS_Trip_Algorithm_Pipeline.html -->

<!DOCTYPE html>
<html lang='en'>
<head>
<title> CATopalian JS Trip Algorithm Pipeline </title>

<meta charset = 'UTF-8'>
<meta name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>

<style>

body
{
    background-color: rgb(30, 30, 30);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin: 24px;
    max-width: 540px;
}

input
{
    display: block;
    width: 220px;
    background-color: rgb(20, 20, 20);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 255, 255);
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 14px;
}

hr
{
    border: 1px solid rgb(80, 80, 80);
    margin: 18px 0px;
}

.stationCard
{
    background-color: rgb(20, 20, 20);
    border-left: 4px solid rgb(0, 255, 255);
    padding: 10px 14px;
    margin-bottom: 12px;
}

</style>

<script>

// ===
// shortcuts.js
// ===
function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichText)
{
    let result = console.log(whichText);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

//----//

// ===
// LOGIC LAYER (Pure Input -> Output Algorithm Stations)
// ===

// STATION 1: INPUT: distance + speed | OUTPUT: decimal hours (e.g., 2.5)
function calculateDecimalHours(whichDistance, whichSpeed)
{
    if (whichSpeed <= 0 || whichDistance <= 0)
    {
        return 0;
    }

    let hours = whichDistance / whichSpeed;
    return hours;
}

// STATION 2: INPUT: decimal hours | OUTPUT: readable "X hrs Y mins" text
function formatHoursAndMinutes(whichDecimalHours)
{
    if (whichDecimalHours <= 0)
    {
        return '0 hrs 0 mins';
    }

    let wholeHours = Math.floor(whichDecimalHours);
    let remainingMinutes = Math.round((whichDecimalHours - wholeHours) * 60);

    if (remainingMinutes === 60)
    {
        wholeHours = wholeHours + 1;
        remainingMinutes = 0;
    }

    return wholeHours + ' hrs ' + remainingMinutes + ' mins';
}

// STATION 3: INPUT: distance + mpg | OUTPUT: gallons needed
function calculateGallonsNeeded(whichDistance, whichMpg)
{
    if (whichMpg <= 0 || whichDistance <= 0)
    {
        return 0;
    }

    let gallons = whichDistance / whichMpg;
    return gallons;
}

// STATION 4: INPUT: gallons + price per gallon | OUTPUT: formatted "$0.00" string
function calculateFuelCost(whichGallons, whichPricePerGallon)
{
    if (whichGallons <= 0 || whichPricePerGallon <= 0)
    {
        return '$0.00';
    }

    let totalCost = whichGallons * whichPricePerGallon;
    return '$' + totalCost.toFixed(2);
}

//----//

// ===
// INTERFACE LAYER (Simple Vertical DOM Elements — Zero innerHTML)
// ===
function makeInputRow(whichLabelText, whichId, whichDefaultValue)
{
    let label = ce('div');
    label.textContent = whichLabelText;
    ba(label);

    let box = ce('input');
    box.id = whichId;
    box.type = 'number';
    box.value = whichDefaultValue;
    box.oninput = function()
    {
        runTripPipeline();
    };
    ba(box);
}

function makeStationCard(whichId, isFinal)
{
    let card = ce('div');
    card.id = whichId;
    card.className = 'stationCard';

    if (isFinal)
    {
        card.style.borderLeftColor = 'rgb(0, 255, 0)';
    }

    ba(card);
}

function makeInterface()
{
    let title = ce('div');
    title.textContent = 'Trip Time & Fuel Algorithm Pipeline';
    title.style.fontSize = '24px';
    title.style.marginBottom = '16px';
    ba(title);

    makeInputRow('Distance (Miles):', 'distanceInput', '150');
    makeInputRow('Average Speed (MPH):', 'speedInput', '60');
    makeInputRow('Vehicle Efficiency (MPG):', 'mpgInput', '30');
    makeInputRow('Fuel Price ($ per Gallon):', 'priceInput', '3.25');

    let divider = ce('hr');
    ba(divider);

    makeStationCard('station1Out', false);
    makeStationCard('station2Out', false);
    makeStationCard('station3Out', false);
    makeStationCard('station4Out', true);
}

//----//

// ===
// ORCHESTRATOR
// ===
function runTripPipeline()
{
    // Read raw numbers from inputs
    let distance = Number(ge('distanceInput').value);
    let speed = Number(ge('speedInput').value);
    let mpg = Number(ge('mpgInput').value);
    let price = Number(ge('priceInput').value);

    // Run the conveyor belt stations
    let decimalHours = calculateDecimalHours(distance, speed);
    let readableTime = formatHoursAndMinutes(decimalHours);
    let gallonsNeeded = calculateGallonsNeeded(distance, mpg);
    let totalFuelCost = calculateFuelCost(gallonsNeeded, price);

    // Update each vertical station card using clean textContent
    ge('station1Out').textContent = 'Station 1 (Decimal Hours): ' + decimalHours.toFixed(2) + ' hrs';
    ge('station2Out').textContent = 'Station 2 (Travel Time): ' + readableTime;
    ge('station3Out').textContent = 'Station 3 (Fuel Required): ' + gallonsNeeded.toFixed(2) + ' gallons';
    ge('station4Out').textContent = 'Station 4 (Total Fuel Cost): ' + totalFuelCost;
}

function whenLoaded()
{
    makeInterface();
    runTripPipeline();
}

</script>

</head>

<body onload = 'whenLoaded();'>

</body>

</html>
```


</details>


---
