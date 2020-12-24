const { StrFancy, strings } = require("./index");

let slice = "";

slice = StrFancy.of("This is my name").explode(" ", 2);
console.log("explode:", slice.toString());

slice = StrFancy.of("This is my name.").endsWith(["name."]);
console.log(`endsWith: ${slice}`);

slice = StrFancy.of("/foo/bar/baz").dirname(2);
console.log(`dirname: ${slice}`);

slice = StrFancy.of("This is my name").contains(["ms", "is"]);
console.log(`contains: ${slice}`);

slice = StrFancy.of("This is my name").containsAll(["my", "is"]);
console.log(`containsAll: ${slice}`);

slice = StrFancy.of(" foo_bar- baz  Vvs").studly();
console.log(`studly: ${slice}`);

slice = StrFancy.of("foo_bar_baz").camel();
console.log(`camel: ${slice}`);

slice = StrFancy.of("I am a Thura Aung").after("am ").beforeLast("Aung");
console.log(`after:`, slice + "");

slice = StrFancy.of("This is my name").afterLast("my");
console.log("afterLast: ", slice);

slice = StrFancy.of("This is").append(" my", " name");
console.log("append: ", slice);

slice = StrFancy.of("ü").ascii();
console.log("ascii: ", slice);

slice = StrFancy.of("/foo/bar/baz.jpg").basename("");
console.log("basename: ", slice);

slice = StrFancy.of("This is my name").before(" is");
console.log("before: ", slice);

slice = StrFancy.of("This is my name").beforeLast("is");
console.log("beforeLast: ", slice);

slice = StrFancy.of("This is my name").between("This", "name");
console.log("between: ", slice);

slice = StrFancy.of("foo/bar/").finish("/");
console.log("finish: ", slice);

slice = StrFancy.of("fooBar").is("*Bar");
console.log("is: ", slice);

slice = StrFancy.of("ü").isAscii();
console.log("isAscii: ", slice);

slice = StrFancy.of("fooBar").kebab("-");
console.log("kebab: ", slice);

slice = StrFancy.of("The quick brown fox jumps over the lazy dog").limit(20);
console.log("limit: ", slice);

slice = StrFancy.of("//foo/bar").ltrim("/");
console.log(`ltrim:${slice}`);

slice = StrFancy.of("foo bar").match(/foo (.*)/);
console.log(`match:${slice}`);

slice = StrFancy.of("bar fun bar fly").match(/f(\w*)/);
console.log(`matchAll: ${slice}`);

slice = StrFancy.of("bar").padBoth(10);
console.log("padBoth: ", slice);

slice = StrFancy.of("child").plural(0);
console.log("plural: ", slice);

slice = StrFancy.of("Aung").prepend("Mr. ", "Thura ");
console.log("prepend: ", slice);

slice = strings.replace(["", ""], ["7.x", "8.x"], "Laravel 6.x 7.c");
console.log("replace: ", slice);

slice = strings.replaceArray(
  "?",
  ["8:30", "9:00"],
  "The event will take place between ? and ?"
);
console.log("replaceArray: ", slice);

slice = strings.replaceFirst(
  "the",
  "a",
  "the quick brown fox jumps over the lazy dog"
);
console.log("replaceFirst: ", slice);

slice = strings.replaceLast(
  "the",
  "a",
  "the quick brown fox jumps over the lazy dog"
);
console.log("replaceLast: ", slice);
