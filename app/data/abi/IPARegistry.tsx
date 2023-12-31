const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "moduleRegistry_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldIPOrg_",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newIPOrg_",
        type: "address",
      },
    ],
    name: "IPOrgTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ipOrg_",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "registrant_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash_",
        type: "bytes32",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "oldStatus_",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "newStatus_",
        type: "uint8",
      },
    ],
    name: "StatusChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "MODULE_REGISTRY",
    outputs: [
      {
        internalType: "contract IModuleRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
    ],
    name: "ipAsset",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "registrant",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "ipOrg",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "registrationDate",
            type: "uint64",
          },
        ],
        internalType: "struct IPAssetRegistry.IPA",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
    ],
    name: "ipAssetOrg",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
    ],
    name: "ipAssetOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ipOrg_",
        type: "address",
      },
      {
        internalType: "address",
        name: "registrant_",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "hash_",
        type: "bytes32",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "uint256",
        name: "ipAssetId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "status_",
        type: "uint8",
      },
    ],
    name: "setStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
    ],
    name: "status",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ipAssetId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "ipOrg_",
        type: "address",
      },
    ],
    name: "transferIPOrg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
export default abi;
