function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var i = 0;
  var incVar = i + 1;
  
  while (katzDeliLine.length > 0) {
   "The line is currently: " + incVar +". " + katzDeliLine[i];
    i++;
  }
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
}
