import * as esprima from 'esprima';
import walk from 'esprima-walk';

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

function checkStructure(data, state){
  let errors = [];
  let ast = esprima.parse(data);
  let first = state.structure.first !== 'none' ? state.structure.first : null;
  let second = state.structure.second !== 'none' ? state.structure.second : null;

  if(first){

    let firstNodes = [];

    walk( ast, node => {
      if(node.type === first) {
        firstNodes.push(node);
      }
    });

    if(firstNodes.length === 0){
      errors.push(first + " is required");
    } else if(second){
      let secondFound = firstNodes.some(firstNode => {
        let flag = false;
        walk(firstNode, node => {
          if(node !== firstNode && node.type === second){
            flag = true;
          }
        });
        return flag;
      });
      if(!secondFound){
        errors.push(second + " is required inside of " + first);
      }
    }
  }
  return errors;
}

self.onmessage = function(e) {
  try {
    let errors = [];
    let data = e.data.newValue;
    let state = e.data.state;
    if(data && state){
      errors = errors.concat(checkLists(data, state));
      errors = errors.concat(checkStructure(data, state));
    }
    self.postMessage(errors);
  } catch(err){
    self.postMessage(['Unable to parse the code']);
  }
};
