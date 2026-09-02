# CommonJS vs ES Modules (ESM) in Node.js

Node.js supports two module systems:

1. **CommonJS (CJS)**
2. **ECMAScript Modules (ESM)**

---

## 1. CommonJS

CommonJS is the traditional module system used by Node.js.

### Export

```js
// math.js

function add(a, b) {
    return a + b;
}

module.exports = { add };
```

### Import

```js
const { add } = require("./math");
```

### Basic Syntax

```js
const express = require("express");

module.exports = router;
```

So:

```text
CommonJS
    ↓
require()
module.exports
```

---

## 2. ES Modules (ESM)

ES Modules are the modern JavaScript module system based on the ECMAScript standard.

### Export

```js
// math.js

export function add(a, b) {
    return a + b;
}
```

### Import

```js
import { add } from "./math.js";
```

### Basic Syntax

```js
import express from "express";

export default router;
```

So:

```text
ES Modules
    ↓
import
export
```

---

# Enabling ESM in Node.js

There are three common ways to tell Node.js that a file should use ES Modules.

## Method 1: `"type": "module"`

Add the following to `package.json`:

```json
{
    "type": "module"
}
```

Now `.js` files in that package are treated as **ES Modules**.

Therefore, you can write:

```js
import express from "express";
```

instead of:

```js
const express = require("express");
```

### Example

```text
project/
│
├── package.json
├── server.js
└── math.js
```

`package.json`:

```json
{
    "type": "module"
}
```

`server.js`:

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

---

# Without `"type": "module"`

If `"type": "module"` is not specified, `.js` files are traditionally treated as **CommonJS** in Node.js.

Therefore:

```js
const express = require("express");
```

can be used.

---

# Method 2: `.cjs`

The `.cjs` extension explicitly tells Node.js that the file is a **CommonJS** module.

```text
server.cjs
```

Example:

```js
const express = require("express");
```

Even if the project's `package.json` contains:

```json
{
    "type": "module"
}
```

a `.cjs` file is still treated as CommonJS.

---

# Method 3: `.mjs`

The `.mjs` extension explicitly tells Node.js that the file is an **ES Module**.

```text
server.mjs
```

Example:

```js
import express from "express";
```

Even if `"type": "module"` is not present in `package.json`, `.mjs` is treated as ESM.

---

# `.js` vs `.cjs` vs `.mjs`

| Extension | Module System                      |
| --------- | ---------------------------------- |
| `.js`     | Depends on `package.json` `"type"` |
| `.cjs`    | CommonJS                           |
| `.mjs`    | ES Modules                         |

For example:

```text
server.cjs → CommonJS
server.mjs → ESM
server.js  → Depends on package.json
```

---

# Named Export vs Default Export

ESM supports both **named exports** and **default exports**.

## Named Export

```js
// math.js

export function add(a, b) {
    return a + b;
}
```

Import:

```js
import { add } from "./math.js";
```

The name must match the exported name.

---

## Default Export

```js
// math.js

export default function add(a, b) {
    return a + b;
}
```

Import:

```js
import add from "./math.js";
```

With a default export, the importing file can choose the local name:

```js
import sum from "./math.js";
```

Both are valid because the export is the default export.

---

# CommonJS vs ESM

| Feature           | CommonJS                     | ES Modules                  |
| ----------------- | ---------------------------- | --------------------------- |
| Import            | `require()`                  | `import`                    |
| Export            | `module.exports` / `exports` | `export` / `export default` |
| Node.js extension | `.cjs`                       | `.mjs`                      |
| `.js` by default  | CommonJS traditionally       | ESM with `"type": "module"` |
| Standard          | Node.js module system        | ECMAScript standard         |
| Modern syntax     | Older/traditional            | Modern JavaScript           |

---

# Quick Comparison

### CommonJS

```js
// math.js

function add(a, b) {
    return a + b;
}

module.exports = { add };
```

```js
// app.js

const { add } = require("./math");

console.log(add(2, 3));
```

### ESM

```js
// math.js

export function add(a, b) {
    return a + b;
}
```

```js
// app.js

import { add } from "./math.js";

console.log(add(2, 3));
```

---

# Which One Should You Learn?

For **modern Node.js projects**, ESM (`import` / `export`) is important and should be understood.

However, **do not skip CommonJS**.

You will encounter CommonJS in:

* Existing Node.js projects
* Older tutorials
* Older npm packages
* Backend codebases
* Technical interviews
* Node.js fundamentals

Therefore, you should understand both systems.

For a new project, ESM is generally a good default when the project's dependencies and tooling support it.

---

# One-Line Revision

```text
CommonJS → require + module.exports

ES Modules → import + export
```

---

# Important Point to Remember

`"type": "module"` does **not** convert every possible Node.js file into ESM.

It determines how `.js` files in that package are interpreted.

```text
package.json
"type": "module"
        ↓
.js → ESM

.cjs → CommonJS
.mjs → ESM
```
