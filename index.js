// function capitalizes

function shout(string) {
  return string.toUpperCase();
};

// function makes lowercase

function whisper(string) {
  return string.toLowerCase();
};

// function capitalizes and logs

function logShout(string) {
  console.log(string.toUpperCase());
};

// function makes lowercase and logShout

function logWhisper(string) {
  console.log(string.toLowerCase());
};

// function with different responces to upper/lowercase

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  };
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  };
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  };
}
