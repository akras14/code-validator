import 'babel-polyfill';

//TODO: Expand and/or move to a shared module
let supportedItems = [
  {
    name: 'Variable Declaration',
    value: 'VariableDeclaration',
    checked: false,
    disabled: false
  },
  {
    name: 'For Loop',
    value: 'ForStatement',
    checked: false,
    disabled: false
  },
  {
    name: 'While Loop',
    value: 'WhileStatement',
    checked: false,
    disabled: false
  },
  {
    name: 'If Statement',
    value: 'IfStatement',
    checked: false,
    disabled: false
  }
];

let defaultState = {
  whitelist: [],
  blacklist: [],
  config: []
};
defaultState.whitelist = supportedItems.map(item => Object.assign({}, item));
defaultState.blacklist = supportedItems.map(item => Object.assign({}, item));

function createNewLists(state){
  state.whitelist = state.whitelist.slice();
  state.blacklist = state.blacklist.slice();
}
function updateLists(list, otherList, checked, key){
  list[key].checked = checked;
  otherList[key].disabled = checked;
}

export default function config(state = defaultState, action) {
  switch (action.type) {
    case 'WHITELIST_UPDATE':
      createNewLists(state);
      updateLists(state.whitelist, state.blacklist, action.checked, action.key);
      return state;
    case 'BLACKLIST_UPDATE':
      createNewLists(state);
      updateLists(state.blacklist, state.whitelist, action.checked, action.key);
      return state;
    case 'CONFIG_UPDATE':
      return state;
    default:
      return state;
  }
}
