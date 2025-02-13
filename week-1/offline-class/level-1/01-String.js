// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}

// getLength("Godavarthi Yeswanth Sai Surya Pavan Varma");

// indexOf
function getIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("IndexOf:", str.indexOf(target));
}

// getIndexOf("Hello World", "World");

// lastIndexOf
function getLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("LastIndexOf:", str.lastIndexOf(target));
}

// getLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
// getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
// getSubstring("Hello World", 0, 5); // everything from 0 to and upto 5 letters

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
// replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
// splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim()); // trimmed out extra spaced from beginning and the end
}
// trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
