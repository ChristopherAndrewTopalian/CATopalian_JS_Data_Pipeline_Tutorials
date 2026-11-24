# CATopalian JS Data Pipeline Tutorials
### The "Conveyor Belt" Method of Pure Functional JavaScript Programming

A collection of zero-dependency, pure vanilla JavaScript and HTML tutorials demonstrating how to replace complex, deeply nested `if-else` trees with clean, modular **Input → Output** data pipelines.

---

[TOC](TABLE_OF_CONTENTS.md)

[CODE BOOK](CODE_BOOK.md)

---

## Core Concept: The Conveyor Belt Pattern

In traditional beginner code, input reading, validation, calculation, and screen updates are often mixed together inside giant `if-else` blocks. When one rule changes, the whole block becomes difficult to read and debug.

In the **Conveyor Belt (Pipes & Filters)** pattern, every program is built from small, single-purpose **Pure Functions**:

```text
[ Raw Input ] ──▶ [ Station 1 ] ──▶ [ Station 2 ] ──▶ [ Station 3 ] ──▶ [ Final Output ]
```

One Job Per Function: Each station receives an input parameter, transforms it, and returns a brand-new output.

Zero Side Effects: Logic functions never touch global variables or DOM elements (document.getElementById, etc.).

Separation of Concerns: The exact same logic functions run unchanged in a console-only .js script or inside a full visual .html web app.

Effortless Debugging: Because every step produces a clean intermediate value, you can inspect the data between any two stations on the belt.

---

### How to Download this App
1. Click the green Code Button on this github page
2. Choose Download ZIP
3. Save the Zip File
4. Extract All
5. Double click the index_links.html file to browse the tutorials by index

---

Happy Scripting :-)

//----//

// Dedicated to the Creator of All Beings
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting  
College of Scripting Music & Science

