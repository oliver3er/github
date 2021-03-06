/**
 * @flow
 * @relayHash 7fbd7496eff90270ea34a304108aa100
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type remoteContainerQueryVariables = {|
  owner: string,
  name: string,
|};
export type remoteContainerQueryResponse = {|
  +repository: ?{|
    +id: string,
    +defaultBranchRef: ?{|
      +prefix: string,
      +name: string,
    |},
  |}
|};
*/


/*
query remoteContainerQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    id
    defaultBranchRef {
      prefix
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "owner",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "prefix",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "remoteContainerQuery",
  "id": null,
  "text": "query remoteContainerQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    id\n    defaultBranchRef {\n      prefix\n      name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "remoteContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": null,
        "args": v1,
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "defaultBranchRef",
            "storageKey": null,
            "args": null,
            "concreteType": "Ref",
            "plural": false,
            "selections": [
              v3,
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "remoteContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": null,
        "args": v1,
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "defaultBranchRef",
            "storageKey": null,
            "args": null,
            "concreteType": "Ref",
            "plural": false,
            "selections": [
              v3,
              v4,
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b83aa6c27c5d7e1c499badf2e6bfab6b';
module.exports = node;
