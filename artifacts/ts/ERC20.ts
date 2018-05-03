export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        2222
      ]
    },
    "id": 2223,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2181,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 2182,
        "nodeType": "ImportDirective",
        "scope": 2223,
        "sourceUnit": 2255,
        "src": "26:26:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2183,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2254,
              "src": "162:10:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$2254",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 2184,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:14"
          }
        ],
        "contractDependencies": [
          2254
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 2222,
        "linearizedBaseContracts": [
          2222,
          2254
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2193,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2186,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2193,
                  "src": "196:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2188,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2193,
                  "src": "211:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2191,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2193,
                  "src": "249:7:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:14"
            },
            "scope": 2222,
            "src": "177:81:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2204,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2195,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "283:12:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2197,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "297:10:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2196,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2199,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "309:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2198,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2202,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "340:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2201,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:14"
            },
            "scope": 2222,
            "src": "261:85:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2213,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2206,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2213,
                  "src": "366:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2205,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2208,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2213,
                  "src": "383:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2207,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2211,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2213,
                  "src": "414:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2210,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:14"
            },
            "scope": 2222,
            "src": "349:71:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2221,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2215,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2221,
                  "src": "438:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2214,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2217,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2221,
                  "src": "461:23:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2216,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2219,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2221,
                  "src": "486:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:14"
            },
            "src": "423:78:14"
          }
        ],
        "scope": 2223,
        "src": "144:359:14"
      }
    ],
    "src": "0:504:14"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        2222
      ]
    },
    "id": 2223,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2181,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 2182,
        "nodeType": "ImportDirective",
        "scope": 2223,
        "sourceUnit": 2255,
        "src": "26:26:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2183,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2254,
              "src": "162:10:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$2254",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 2184,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:14"
          }
        ],
        "contractDependencies": [
          2254
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 2222,
        "linearizedBaseContracts": [
          2222,
          2254
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2193,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2186,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2193,
                  "src": "196:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2188,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2193,
                  "src": "211:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2191,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2193,
                  "src": "249:7:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:14"
            },
            "scope": 2222,
            "src": "177:81:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2204,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2195,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "283:12:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2197,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "297:10:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2196,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2199,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "309:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2198,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2202,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2204,
                  "src": "340:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2201,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:14"
            },
            "scope": 2222,
            "src": "261:85:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2213,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2206,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2213,
                  "src": "366:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2205,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2208,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2213,
                  "src": "383:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2207,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 2212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2211,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2213,
                  "src": "414:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2210,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:14"
            },
            "scope": 2222,
            "src": "349:71:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2221,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2215,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2221,
                  "src": "438:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2214,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2217,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2221,
                  "src": "461:23:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2216,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2219,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2221,
                  "src": "486:13:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:14"
            },
            "src": "423:78:14"
          }
        ],
        "scope": 2223,
        "src": "144:359:14"
      }
    ],
    "src": "0:504:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-03T07:27:33.018Z"
}