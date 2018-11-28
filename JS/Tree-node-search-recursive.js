/**
* Find node in a multi-level tree
*/

// Example of a tree
var tree = {
  id: '1',
  children: [
    {
      id: '12',
      children: [
        {
          id: '121',
          children: [
            {
              id: '1211',
              chidren: []
            },
            {
              id: '1212',
              chidren: []
            }
          ]
        },
        {
          id: '122',
          children: []
        }
      ]
    },
    {
      id: '13',
      children: [
        {
          id: '131',
          children: []
        }
      ]
    }
  ]
}

/**
 * Find the first node in the provided tree using the given property and value
 * Eg. "getNode(tree, 'id', '131')" will search and return the node with id === 131
 * @param node Current node
 * @param prop The property
 * @param val The value
 */
function getNode(node, prop, val) {

  if (!node.hasOwnProperty(prop)) {
    return '[' + prop + ']' + ' is not an existing property!';
  }
  else if (node[prop] === val) {
    return node;
  }
  else if (node.children && node.children.length) {
    var found = null;
    for (var i = 0; i < node.children.length; i++) {
      found = getNode(node.children[i], prop, val);
      if (found) {
        return found;
      }
    }
  }
}

var found = getNode(tree, 'id', '1211');
console.log(found);
