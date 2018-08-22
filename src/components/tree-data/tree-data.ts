import { Component} from '@angular/core';
@Component({
  selector: 'tree-data',
  // templateUrl: "tree-data.html"
  template: `
    <tree-root [focused]="true" [nodes]="nodes"></tree-root>
    <br>
    <p>Keys:</p>
    down | up | left | right | space | enter
  `,
})
export class TreeDataComponent {
  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        {
          name: 'child2.2', children: [
            { name: 'grandchild2.2.1' }
          ]
        }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];
  options;
  constructor() {
    this.nodes = [
      {
        name: 'root1',
        children: [
          { name: 'child1' },
          { name: 'child2' }
        ]
      },
      {
        name: 'root2',
        children: [
          { name: 'child2.1', children: [] },
          {
            name: 'child2.2', children: [
              { name: 'grandchild2.2.1' }
            ]
          }
        ]
      },
      { name: 'root3' },
      { name: 'root4', children: [] },
      { name: 'root5', children: null }
    ];

  }


  ngOnInit() {
   

  }
 
  
}