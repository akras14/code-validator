import * as esprima from 'esprima';

function checkLists(data, state){
  let errors = [];
  let tokens = esprima.tokenize(data, {loc: true});

  let supportedTokens = state.whitelist.map(rule => rule.token);

  let whitelist = state.whitelist
    .filter(rule => rule.checked === true)
    .map(rule => rule.token);

  let blacklist = state.blacklist
    .filter(rule => rule.checked === true)
    .map(rule => rule.token);

  tokens.forEach(token => {
    let tok = token.value;
    if(supportedTokens.indexOf(tok) > -1 ){
      if(blacklist.indexOf(tok) > -1){
        errors.push("Line " + token.loc.start.line + ": '" + tok + "' not allowed");
      }
    }
  });

  whitelist.forEach(reqToken => {
    let tokenFound = tokens.some(token => reqToken === token.value);
    if(!tokenFound){
      errors.push(reqToken + " is required");
    }
  });
  return errors;
}

self.onmessage = function(e) {
  try {
    let errors = [];
    let data = e.data.newValue;
    let state = e.data.state;
    if(data && state){
      errors = errors.concat(checkLists(data, state));
    }
    self.postMessage(errors);
  } catch(err){
    self.postMessage(['Unable to parse the code']);
  }
};
