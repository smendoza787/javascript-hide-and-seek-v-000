function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div.target');
}

function increaseRankBy(n) {
  let rankedLis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = (parseInt(rankedLis[i].innerHTML, 10) + n);
  }
}

function deepestChild() {
  let node = document.querySelector('#grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
