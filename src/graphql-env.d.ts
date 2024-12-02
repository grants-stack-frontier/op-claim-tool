/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
  Boolean: unknown;
  Campaign: {
    kind: 'OBJECT';
    name: 'Campaign';
    fields: {
      _id: {
        name: '_id';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
      };
      claimLockup: {
        name: 'claimLockup';
        type: { kind: 'OBJECT'; name: 'CampaignClaimLockup'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      delegating: {
        name: 'delegating';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ended: {
        name: 'ended';
        type: { kind: 'OBJECT'; name: 'CampaignEnded'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      id: {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      manager: {
        name: 'manager';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      root: {
        name: 'root';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      token: {
        name: 'token';
        type: { kind: 'OBJECT'; name: 'CampaignToken'; ofType: null };
      };
      totalAddresses: {
        name: 'totalAddresses';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalAmountClaimed: {
        name: 'totalAmountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalClaims: {
        name: 'totalClaims';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
    };
  };
  CampaignClaimLockup: {
    kind: 'OBJECT';
    name: 'CampaignClaimLockup';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      cliff: {
        name: 'cliff';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      period: {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      periods: {
        name: 'periods';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokenLocker: {
        name: 'tokenLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  CampaignClaimLockupInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignClaimLockupInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'periods';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignClaimLockupQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignClaimLockupQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'periods_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'periods_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'cliff_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'periods_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignClaimLockupQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'cliff';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignClaimLockupQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'period_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'cliff_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'period_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'period_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignClaimLockupUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignClaimLockupUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'tokenLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliff_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenLocker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'periods_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignEnded: {
    kind: 'OBJECT';
    name: 'CampaignEnded';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      timestamp: {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  CampaignEndedInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignEndedInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignEndedQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignEndedQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'timestamp_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignEndedQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignEndedQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignEndedUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignEndedUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimLockup';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignClaimLockupInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignTokenInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ended';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignEndedInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'delegating';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'manager';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'delegating_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimLockup';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignClaimLockupQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'end_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalClaims_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'id_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'delegating';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'from_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'manager_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimLockup_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'end_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ended';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignEndedQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'start_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignTokenQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'delegating_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'from_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'id_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'token_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAddresses';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ended_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignSortByInput: {
    name: 'CampaignSortByInput';
    enumValues:
      | '_ID_ASC'
      | '_ID_DESC'
      | 'CONTRACTADDRESS_ASC'
      | 'ROOT_DESC'
      | 'TOTALAMOUNT_DESC'
      | 'FROM_DESC'
      | 'ID_ASC'
      | 'START_ASC'
      | 'TOTALAMOUNTCLAIMED_ASC'
      | 'TYPE_DESC'
      | 'CREATEDAT_ASC'
      | 'END_DESC'
      | 'START_DESC'
      | 'TOTALAMOUNT_ASC'
      | 'CONTRACTADDRESS_DESC'
      | 'ID_DESC'
      | 'TOTALAMOUNTCLAIMED_DESC'
      | 'NETWORK_ASC'
      | 'TOTALADDRESSES_ASC'
      | 'UPDATEDAT_ASC'
      | 'UPDATEDAT_DESC'
      | 'END_ASC'
      | 'MANAGER_DESC'
      | 'NETWORK_DESC'
      | 'TOTALADDRESSES_DESC'
      | 'TOTALCLAIMS_ASC'
      | 'CREATEDAT_DESC'
      | 'FROM_ASC'
      | 'MANAGER_ASC'
      | 'ROOT_ASC'
      | 'TOTALCLAIMS_DESC'
      | 'TYPE_ASC';
  };
  CampaignToken: {
    kind: 'OBJECT';
    name: 'CampaignToken';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  CampaignTokenInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignTokenInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignTokenQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignTokenQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignTokenQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaignTokenQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignTokenUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignTokenUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaignUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaignUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'delegating_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimLockup_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ended_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'delegating';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimLockup';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignClaimLockupUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAddresses_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignTokenUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'totalAmountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ended';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaignEndedUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'root';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalClaims_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Campaignevent: {
    kind: 'OBJECT';
    name: 'Campaignevent';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      campaignId: {
        name: 'campaignId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      claimType: {
        name: 'claimType';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      info: {
        name: 'info';
        type: { kind: 'OBJECT'; name: 'CampaigneventInfo'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  CampaigneventInfo: {
    kind: 'OBJECT';
    name: 'CampaigneventInfo';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      amountClaimed: {
        name: 'amountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      claimer: {
        name: 'claimer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      timestamp: {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  CampaigneventInfoInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaigneventInfoInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaigneventInfoQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaigneventInfoQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'claimer_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'timestamp_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaigneventInfoQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'timestamp_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'claimer_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaigneventInfoQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'claimer_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'claimer_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaigneventInfoUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaigneventInfoUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountClaimed_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaigneventInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaigneventInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'info';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaigneventInfoInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  CampaigneventQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaigneventQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'claimType_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaigneventQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'type_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'info';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaigneventInfoQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'claimType_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'campaignId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'claimType_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CampaigneventQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'claimType_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'info_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'claimType_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CampaigneventSortByInput: {
    name: 'CampaigneventSortByInput';
    enumValues:
      | '_ID_ASC'
      | 'CLAIMTYPE_DESC'
      | 'NETWORK_DESC'
      | 'TYPE_ASC'
      | 'NETWORK_ASC'
      | 'TYPE_DESC'
      | '_ID_DESC'
      | 'CAMPAIGNID_ASC'
      | 'CAMPAIGNID_DESC'
      | 'CLAIMTYPE_ASC';
  };
  CampaigneventUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CampaigneventUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'campaignId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'info_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'claimType_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'info';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'CampaigneventInfoUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignId_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Casestudy: {
    kind: 'OBJECT';
    name: 'Casestudy';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      averageDaysLocked: {
        name: 'averageDaysLocked';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalLocked: {
        name: 'totalLocked';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalNFTs: {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      uniqueWallets: {
        name: 'uniqueWallets';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
    };
  };
  CasestudyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CasestudyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CasestudyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CasestudyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalLocked_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CasestudyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CasestudyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalLocked_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  CasestudySortByInput: {
    name: 'CasestudySortByInput';
    enumValues:
      | 'UPDATEDAT_ASC'
      | '_ID_ASC'
      | 'AVERAGEDAYSLOCKED_DESC'
      | 'TOTALNFTS_ASC'
      | 'UNIQUEWALLETS_ASC'
      | 'UNIQUEWALLETS_DESC'
      | 'TICKER_DESC'
      | 'TOTALLOCKED_DESC'
      | '_ID_DESC'
      | 'AVERAGEDAYSLOCKED_ASC'
      | 'TICKER_ASC'
      | 'TOTALLOCKED_ASC'
      | 'TOTALNFTS_DESC'
      | 'UPDATEDAT_DESC'
      | 'CREATEDAT_ASC'
      | 'CREATEDAT_DESC';
  };
  CasestudyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CasestudyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'averageDaysLocked_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalLocked';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'uniqueWallets';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'averageDaysLocked';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Customwalletname: {
    kind: 'OBJECT';
    name: 'Customwalletname';
    fields: {
      tokenAddress: {
        name: 'tokenAddress';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
      walletAddresses: {
        name: 'walletAddresses';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: {
              kind: 'OBJECT';
              name: 'CustomwalletnameWalletAddress';
              ofType: null;
            };
          };
        };
      };
    };
  };
  CustomwalletnameInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CustomwalletnameInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'tokenAddress';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'walletAddresses';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CustomwalletnameWalletAddressInsertInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
    ];
  };
  CustomwalletnameQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CustomwalletnameQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'tokenAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'walletAddresses_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'CustomwalletnameWalletAddressQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CustomwalletnameQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CustomwalletnameQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'walletAddresses';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'CustomwalletnameWalletAddressQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'walletAddresses_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'walletAddresses_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'CustomwalletnameWalletAddressQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CustomwalletnameSortByInput: {
    name: 'CustomwalletnameSortByInput';
    enumValues: 'TOKENADDRESS_ASC' | 'TOKENADDRESS_DESC';
  };
  CustomwalletnameUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CustomwalletnameUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'tokenAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'walletAddresses';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'CustomwalletnameWalletAddressUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'walletAddresses_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CustomwalletnameWalletAddress: {
    kind: 'OBJECT';
    name: 'CustomwalletnameWalletAddress';
    fields: {
      address: {
        name: 'address';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
      customName: {
        name: 'customName';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
    };
  };
  CustomwalletnameWalletAddressInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'CustomwalletnameWalletAddressInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  CustomwalletnameWalletAddressQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'CustomwalletnameWalletAddressQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'customName_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CustomwalletnameWalletAddressQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'CustomwalletnameWalletAddressQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  CustomwalletnameWalletAddressUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'CustomwalletnameWalletAddressUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DateTime: unknown;
  Deal: {
    kind: 'OBJECT';
    name: 'Deal';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      assetCurrency: {
        name: 'assetCurrency';
        type: { kind: 'OBJECT'; name: 'DealAssetCurrency'; ofType: null };
      };
      assetCurrencyPrice: {
        name: 'assetCurrencyPrice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      assetImages: {
        name: 'assetImages';
        type: { kind: 'OBJECT'; name: 'DealAssetImage'; ofType: null };
      };
      baseCurrency: {
        name: 'baseCurrency';
        type: { kind: 'OBJECT'; name: 'DealBaseCurrency'; ofType: null };
      };
      buyer: {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      customName: {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customParameters: {
        name: 'customParameters';
        type: { kind: 'OBJECT'; name: 'DealCustomParameter'; ofType: null };
      };
      expiry: {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      featured: {
        name: 'featured';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      maximumPurchase: {
        name: 'maximumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      minimumPurchase: {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nonTransferable: {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      numPurchases: {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      open: {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      originalSize: {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      paymentCurrency: {
        name: 'paymentCurrency';
        type: { kind: 'OBJECT'; name: 'DealPaymentCurrency'; ofType: null };
      };
      paymentCurrencyPrice: {
        name: 'paymentCurrencyPrice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      paymentImages: {
        name: 'paymentImages';
        type: { kind: 'OBJECT'; name: 'DealPaymentImage'; ofType: null };
      };
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      seller: {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalSales: {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDates: {
        name: 'unlockDates';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      version: {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
    };
  };
  DealAssetCurrency: {
    kind: 'OBJECT';
    name: 'DealAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealAssetCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealAssetCurrencyPriceRelationInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetCurrencyPriceRelationInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'create';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'TokenpriceInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'link';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealAssetCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealAssetCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealAssetCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealAssetCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealAssetImage: {
    kind: 'OBJECT';
    name: 'DealAssetImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealAssetImageInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetImageInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealAssetImageQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetImageQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'thumb_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealAssetImageQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'small_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'large_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'small_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealAssetImageQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'small_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  DealAssetImageUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealAssetImageUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealBaseCurrency: {
    kind: 'OBJECT';
    name: 'DealBaseCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealBaseCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealBaseCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealBaseCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealBaseCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealBaseCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealBaseCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealBaseCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealBaseCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealCustomParameter: {
    kind: 'OBJECT';
    name: 'DealCustomParameter';
    fields: {
      canOnlyBuyOnce: {
        name: 'canOnlyBuyOnce';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      gatedNFTContracts: {
        name: 'gatedNFTContracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
      pricePerNFT: {
        name: 'pricePerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      remainingNFTs: {
        name: 'remainingNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokensPerNFT: {
        name: 'tokensPerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalNFTs: {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealCustomParameterInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealCustomParameterInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'canOnlyBuyOnce';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealCustomParameterQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealCustomParameterQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalNFTs_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'canOnlyBuyOnce';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealCustomParameterQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealCustomParameterQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'canOnlyBuyOnce_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'canOnlyBuyOnce_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealCustomParameterUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealCustomParameterUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'remainingNFTs_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokensPerNFT_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'canOnlyBuyOnce_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'pricePerNFT';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'canOnlyBuyOnce';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'gatedNFTContracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'remainingNFTs';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'paymentCurrencyPrice';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentCurrencyPriceRelationInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentCurrencyInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'paymentImages';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentImageInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetCurrencyInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'customParameters';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealCustomParameterInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'unlockDates';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealBaseCurrencyInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetImages';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetImageInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencyPrice';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetCurrencyPriceRelationInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'featured';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentCurrency: {
    kind: 'OBJECT';
    name: 'DealPaymentCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealPaymentCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentCurrencyPriceRelationInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentCurrencyPriceRelationInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'create';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'TokenpriceInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'link';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealPaymentCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealPaymentCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentImage: {
    kind: 'OBJECT';
    name: 'DealPaymentImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealPaymentImageInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentImageInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentImageQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentImageQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'thumb_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'small_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealPaymentImageQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'large_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'large_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'large_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'thumb_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'small_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealPaymentImageQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'large_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealPaymentImageUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealPaymentImageUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'small_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'thumb_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'large_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalSales_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'featured_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetImages';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetImageQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'price_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencyPrice';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'TokenpriceQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'version_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDates';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'version_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'expiry_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDates_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customParameters';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealCustomParameterQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'expiry_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentImages_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'originalSize_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'originalSize_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentImages';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentImageQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'buyer_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDates_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealBaseCurrencyQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'seller_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencyPrice';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'TokenpriceQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'featured_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDates_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'originalSize_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetImages_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyer_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'featured';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentCurrencyQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'open_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyer_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencyPrice_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencyPrice_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetCurrencyQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'expiry_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'price_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  DealSortByInput: {
    name: 'DealSortByInput';
    enumValues:
      | '_ID_DESC'
      | 'CONTRACTADDRESS_ASC'
      | 'CREATEDAT_ASC'
      | 'NETWORK_ASC'
      | 'PAYMENTCURRENCYPRICE_DESC'
      | 'UNLOCKDATE_DESC'
      | 'CUSTOMNAME_ASC'
      | 'MAXIMUMPURCHASE_ASC'
      | 'MINIMUMPURCHASE_DESC'
      | 'NETWORK_DESC'
      | 'SELLER_DESC'
      | 'UPDATEDAT_ASC'
      | '_ID_ASC'
      | 'ASSETAMOUNT_DESC'
      | 'NUMPURCHASES_ASC'
      | 'PAYMENTCURRENCYPRICE_ASC'
      | 'TOTALSALES_DESC'
      | 'UPDATEDAT_DESC'
      | 'VERSION_ASC'
      | 'BUYER_DESC'
      | 'CUSTOMNAME_DESC'
      | 'NUMPURCHASES_DESC'
      | 'PRICE_ASC'
      | 'BUYER_ASC'
      | 'CREATEDAT_DESC'
      | 'MINIMUMPURCHASE_ASC'
      | 'ORIGINALSIZE_DESC'
      | 'ASSETCURRENCYPRICE_DESC'
      | 'MAXIMUMPURCHASE_DESC'
      | 'UNLOCKDATE_ASC'
      | 'VERSION_DESC'
      | 'ASSETAMOUNT_ASC'
      | 'ASSETCURRENCYPRICE_ASC'
      | 'CONTRACTADDRESS_DESC'
      | 'EXPIRY_ASC'
      | 'EXPIRY_DESC'
      | 'ORIGINALSIZE_ASC'
      | 'INDEX_ASC'
      | 'INDEX_DESC'
      | 'PRICE_DESC'
      | 'SELLER_ASC'
      | 'TOTALSALES_ASC';
  };
  DealUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealCustomParameterUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencyPrice_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDates_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentImages';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentImageUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'customParameters_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentCurrencyUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'price_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencyPrice_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetCurrencyUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencyPrice';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealPaymentCurrencyPriceRelationInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'assetCurrencyPrice';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetCurrencyPriceRelationInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'featured';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentImages_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDates';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'maximumPurchase_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'featured_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealBaseCurrencyUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetImages_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetImages';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealAssetImageUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Dealpurchase: {
    kind: 'OBJECT';
    name: 'Dealpurchase';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      assetCurrency: {
        name: 'assetCurrency';
        type: {
          kind: 'OBJECT';
          name: 'DealpurchaseAssetCurrency';
          ofType: null;
        };
      };
      buyerAddress: {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      paymentAmount: {
        name: 'paymentAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      paymentCurrency: {
        name: 'paymentCurrency';
        type: {
          kind: 'OBJECT';
          name: 'DealpurchasePaymentCurrency';
          ofType: null;
        };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      usdValue: {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
    };
  };
  DealpurchaseAssetCurrency: {
    kind: 'OBJECT';
    name: 'DealpurchaseAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealpurchaseAssetCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchaseAssetCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchaseAssetCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchaseAssetCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealpurchaseAssetCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealpurchaseAssetCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchaseAssetCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchaseAssetCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchaseInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchaseInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'paymentCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealpurchasePaymentCurrencyInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealpurchaseAssetCurrencyInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
    ];
  };
  DealpurchasePaymentCurrency: {
    kind: 'OBJECT';
    name: 'DealpurchasePaymentCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  DealpurchasePaymentCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchasePaymentCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchasePaymentCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchasePaymentCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealpurchasePaymentCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealpurchasePaymentCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchasePaymentCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchasePaymentCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchaseQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchaseQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealpurchaseQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'paymentAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'index_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealpurchaseAssetCurrencyQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealpurchasePaymentCurrencyQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'usdValue_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'usdValue_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'usdValue_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'usdValue_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'index_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'DealpurchaseQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  DealpurchaseSortByInput: {
    name: 'DealpurchaseSortByInput';
    enumValues:
      | 'USDVALUE_ASC'
      | 'ASSETAMOUNT_ASC'
      | 'BUYERADDRESS_ASC'
      | 'INDEX_ASC'
      | 'PAYMENTAMOUNT_DESC'
      | 'TRANSACTIONHASH_ASC'
      | 'BUYERADDRESS_DESC'
      | 'INDEX_DESC'
      | 'NETWORK_ASC'
      | 'TRANSACTIONHASH_DESC'
      | 'UPDATEDAT_ASC'
      | 'PAYMENTAMOUNT_ASC'
      | 'UPDATEDAT_DESC'
      | 'USDVALUE_DESC'
      | '_ID_ASC'
      | 'ASSETAMOUNT_DESC'
      | 'CREATEDAT_ASC'
      | 'CREATEDAT_DESC'
      | 'NETWORK_DESC'
      | '_ID_DESC';
  };
  DealpurchaseUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'DealpurchaseUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealpurchaseAssetCurrencyUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'usdValue_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'DealpurchasePaymentCurrencyUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Decimal: unknown;
  DeleteManyPayload: {
    kind: 'OBJECT';
    name: 'DeleteManyPayload';
    fields: {
      deletedCount: {
        name: 'deletedCount';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
      };
    };
  };
  Endpoint: {
    kind: 'OBJECT';
    name: 'Endpoint';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      url: {
        name: 'url';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  EndpointInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'EndpointInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EndpointQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'EndpointQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'EndpointQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'url_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'EndpointQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'url_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'url_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'url_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EndpointSortByInput: {
    name: 'EndpointSortByInput';
    enumValues:
      | '_ID_ASC'
      | '_ID_DESC'
      | 'NAME_ASC'
      | 'NAME_DESC'
      | 'URL_ASC'
      | 'URL_DESC';
  };
  EndpointUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'EndpointUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'url';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'url_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Event: {
    kind: 'OBJECT';
    name: 'Event';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      blockNumber: {
        name: 'blockNumber';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      data: {
        name: 'data';
        type: { kind: 'OBJECT'; name: 'EventDatum'; ofType: null };
      };
      deal: {
        name: 'deal';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      event: {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
    };
  };
  EventDatum: {
    kind: 'OBJECT';
    name: 'EventDatum';
    fields: {
      assetAddress: {
        name: 'assetAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      buyer: {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      expiry: {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      minimumPurchase: {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      numPurchases: {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      open: {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      originalSize: {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      seller: {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalSales: {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  EventDatumInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'EventDatumInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EventDatumQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'EventDatumQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'numPurchases_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'index_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'expiry_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'index_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'EventDatumQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'open_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'price_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'expiry_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'originalSize_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyer_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'EventDatumQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'originalSize_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'numPurchases_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetAmount_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'expiry_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalSales_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EventDatumUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'EventDatumUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'minimumPurchase';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'originalSize_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalSales';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'open_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'numPurchases';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'expiry';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'minimumPurchase_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EventInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'EventInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'data';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'EventDatumInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'deal';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EventQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'EventQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'event_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'deal_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'event_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'deal_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'event_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'EventQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'event_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'data';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'EventDatumQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'blockNumber_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'data_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'EventQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  EventSortByInput: {
    name: 'EventSortByInput';
    enumValues:
      | '_ID_DESC'
      | 'EVENT_ASC'
      | 'NETWORK_DESC'
      | 'TRANSACTIONHASH_ASC'
      | 'TRANSACTIONHASH_DESC'
      | 'CONTRACTADDRESS_DESC'
      | 'DEAL_ASC'
      | 'EVENT_DESC'
      | 'NETWORK_ASC'
      | 'CONTRACTADDRESS_ASC'
      | 'CREATEDAT_DESC'
      | 'DEAL_DESC'
      | 'UPDATEDAT_DESC'
      | 'UPDATEDAT_ASC'
      | '_ID_ASC'
      | 'BLOCKNUMBER_ASC'
      | 'BLOCKNUMBER_DESC'
      | 'CREATEDAT_ASC';
  };
  EventUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'EventUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'blockNumber_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'data';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'EventDatumUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'event_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'deal_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'data_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'blockNumber_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Float: unknown;
  InsertManyPayload: {
    kind: 'OBJECT';
    name: 'InsertManyPayload';
    fields: {
      insertedIds: {
        name: 'insertedIds';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
          };
        };
      };
    };
  };
  Int: unknown;
  LockedTokenDistributionsPayload: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayload';
    fields: {
      distributions: {
        name: 'distributions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'LockedTokenDistributionsPayloadDistribution';
            ofType: null;
          };
        };
      };
    };
  };
  LockedTokenDistributionsPayloadDistribution: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistribution';
    fields: {
      schedule: {
        name: 'schedule';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'LockedTokenDistributionsPayloadDistributionSchedule';
            ofType: null;
          };
        };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionSchedule: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionSchedule';
    fields: {
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      assetCurrency: {
        name: 'assetCurrency';
        type: {
          kind: 'OBJECT';
          name: 'LockedTokenDistributionsPayloadDistributionScheduleAssetCurrency';
          ofType: null;
        };
      };
      buyerAddress: {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nft: {
        name: 'nft';
        type: {
          kind: 'OBJECT';
          name: 'LockedTokenDistributionsPayloadDistributionScheduleNft';
          ofType: null;
        };
      };
      sellerAddress: {
        name: 'sellerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokenAnalytics: {
        name: 'tokenAnalytics';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'LockedTokenDistributionsPayloadDistributionScheduleTokenAnalytic';
            ofType: null;
          };
        };
      };
      tokenPrices: {
        name: 'tokenPrices';
        type: {
          kind: 'OBJECT';
          name: 'LockedTokenDistributionsPayloadDistributionScheduleTokenPrice';
          ofType: null;
        };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      usdValue: {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleAssetCurrency: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleNft: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleNft';
    fields: {
      actions: {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'LockedTokenDistributionsPayloadDistributionScheduleNftAction';
            ofType: null;
          };
        };
      };
      chainId: {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentHolder: {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customName: {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      dna: {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      processing: {
        name: 'processing';
        type: {
          kind: 'OBJECT';
          name: 'LockedTokenDistributionsPayloadDistributionScheduleNftProcessing';
          ofType: null;
        };
      };
      series: {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tier: {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleNftAction: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleNftAction';
    fields: {
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      to: {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleNftProcessing: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleNftProcessing';
    fields: {
      burned: {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      processed: {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      toBurn: {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleTokenAnalytic: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleTokenAnalytic';
    fields: {
      images: {
        name: 'images';
        type: {
          kind: 'OBJECT';
          name: 'LockedTokenDistributionsPayloadDistributionScheduleTokenAnalyticImage';
          ofType: null;
        };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleTokenAnalyticImage: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleTokenAnalyticImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsPayloadDistributionScheduleTokenPrice: {
    kind: 'OBJECT';
    name: 'LockedTokenDistributionsPayloadDistributionScheduleTokenPrice';
    fields: {
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
    };
  };
  LockedTokenDistributionsResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'LockedTokenDistributionsResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'includeTestnets';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ordering';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'sellerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Long: unknown;
  Mutation: {
    kind: 'OBJECT';
    name: 'Mutation';
    fields: {
      deleteManyCampaignevents: {
        name: 'deleteManyCampaignevents';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyCampaigns: {
        name: 'deleteManyCampaigns';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyCasestudies: {
        name: 'deleteManyCasestudies';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyCustomwalletnames: {
        name: 'deleteManyCustomwalletnames';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyDealpurchases: {
        name: 'deleteManyDealpurchases';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyDeals: {
        name: 'deleteManyDeals';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyEndpoints: {
        name: 'deleteManyEndpoints';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyEvents: {
        name: 'deleteManyEvents';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyNetworkanalytics: {
        name: 'deleteManyNetworkanalytics';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyNetworks: {
        name: 'deleteManyNetworks';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyNfts: {
        name: 'deleteManyNfts';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyProductwhitelists: {
        name: 'deleteManyProductwhitelists';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManySummaryanalytics: {
        name: 'deleteManySummaryanalytics';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManySwaps: {
        name: 'deleteManySwaps';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyTokenanalytics: {
        name: 'deleteManyTokenanalytics';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyTokenprices: {
        name: 'deleteManyTokenprices';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteManyTransactions: {
        name: 'deleteManyTransactions';
        type: { kind: 'OBJECT'; name: 'DeleteManyPayload'; ofType: null };
      };
      deleteOneCampaign: {
        name: 'deleteOneCampaign';
        type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
      };
      deleteOneCampaignevent: {
        name: 'deleteOneCampaignevent';
        type: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
      };
      deleteOneCasestudy: {
        name: 'deleteOneCasestudy';
        type: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
      };
      deleteOneCustomwalletname: {
        name: 'deleteOneCustomwalletname';
        type: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
      };
      deleteOneDeal: {
        name: 'deleteOneDeal';
        type: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
      };
      deleteOneDealpurchase: {
        name: 'deleteOneDealpurchase';
        type: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
      };
      deleteOneEndpoint: {
        name: 'deleteOneEndpoint';
        type: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
      };
      deleteOneEvent: {
        name: 'deleteOneEvent';
        type: { kind: 'OBJECT'; name: 'Event'; ofType: null };
      };
      deleteOneNetwork: {
        name: 'deleteOneNetwork';
        type: { kind: 'OBJECT'; name: 'Network'; ofType: null };
      };
      deleteOneNetworkanalytic: {
        name: 'deleteOneNetworkanalytic';
        type: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
      };
      deleteOneNft: {
        name: 'deleteOneNft';
        type: { kind: 'OBJECT'; name: 'Nft'; ofType: null };
      };
      deleteOneProductwhitelist: {
        name: 'deleteOneProductwhitelist';
        type: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
      };
      deleteOneSummaryanalytic: {
        name: 'deleteOneSummaryanalytic';
        type: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
      };
      deleteOneSwap: {
        name: 'deleteOneSwap';
        type: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
      };
      deleteOneTokenanalytic: {
        name: 'deleteOneTokenanalytic';
        type: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
      };
      deleteOneTokenprice: {
        name: 'deleteOneTokenprice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      deleteOneTransaction: {
        name: 'deleteOneTransaction';
        type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
      };
      insertManyCampaignevents: {
        name: 'insertManyCampaignevents';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyCampaigns: {
        name: 'insertManyCampaigns';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyCasestudies: {
        name: 'insertManyCasestudies';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyCustomwalletnames: {
        name: 'insertManyCustomwalletnames';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyDealpurchases: {
        name: 'insertManyDealpurchases';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyDeals: {
        name: 'insertManyDeals';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyEndpoints: {
        name: 'insertManyEndpoints';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyEvents: {
        name: 'insertManyEvents';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyNetworkanalytics: {
        name: 'insertManyNetworkanalytics';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyNetworks: {
        name: 'insertManyNetworks';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyNfts: {
        name: 'insertManyNfts';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyProductwhitelists: {
        name: 'insertManyProductwhitelists';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManySummaryanalytics: {
        name: 'insertManySummaryanalytics';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManySwaps: {
        name: 'insertManySwaps';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyTokenanalytics: {
        name: 'insertManyTokenanalytics';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyTokenprices: {
        name: 'insertManyTokenprices';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertManyTransactions: {
        name: 'insertManyTransactions';
        type: { kind: 'OBJECT'; name: 'InsertManyPayload'; ofType: null };
      };
      insertOneCampaign: {
        name: 'insertOneCampaign';
        type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
      };
      insertOneCampaignevent: {
        name: 'insertOneCampaignevent';
        type: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
      };
      insertOneCasestudy: {
        name: 'insertOneCasestudy';
        type: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
      };
      insertOneCustomwalletname: {
        name: 'insertOneCustomwalletname';
        type: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
      };
      insertOneDeal: {
        name: 'insertOneDeal';
        type: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
      };
      insertOneDealpurchase: {
        name: 'insertOneDealpurchase';
        type: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
      };
      insertOneEndpoint: {
        name: 'insertOneEndpoint';
        type: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
      };
      insertOneEvent: {
        name: 'insertOneEvent';
        type: { kind: 'OBJECT'; name: 'Event'; ofType: null };
      };
      insertOneNetwork: {
        name: 'insertOneNetwork';
        type: { kind: 'OBJECT'; name: 'Network'; ofType: null };
      };
      insertOneNetworkanalytic: {
        name: 'insertOneNetworkanalytic';
        type: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
      };
      insertOneNft: {
        name: 'insertOneNft';
        type: { kind: 'OBJECT'; name: 'Nft'; ofType: null };
      };
      insertOneProductwhitelist: {
        name: 'insertOneProductwhitelist';
        type: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
      };
      insertOneSummaryanalytic: {
        name: 'insertOneSummaryanalytic';
        type: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
      };
      insertOneSwap: {
        name: 'insertOneSwap';
        type: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
      };
      insertOneTokenanalytic: {
        name: 'insertOneTokenanalytic';
        type: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
      };
      insertOneTokenprice: {
        name: 'insertOneTokenprice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      insertOneTransaction: {
        name: 'insertOneTransaction';
        type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
      };
      replaceOneCampaign: {
        name: 'replaceOneCampaign';
        type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
      };
      replaceOneCampaignevent: {
        name: 'replaceOneCampaignevent';
        type: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
      };
      replaceOneCasestudy: {
        name: 'replaceOneCasestudy';
        type: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
      };
      replaceOneCustomwalletname: {
        name: 'replaceOneCustomwalletname';
        type: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
      };
      replaceOneDeal: {
        name: 'replaceOneDeal';
        type: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
      };
      replaceOneDealpurchase: {
        name: 'replaceOneDealpurchase';
        type: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
      };
      replaceOneEndpoint: {
        name: 'replaceOneEndpoint';
        type: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
      };
      replaceOneEvent: {
        name: 'replaceOneEvent';
        type: { kind: 'OBJECT'; name: 'Event'; ofType: null };
      };
      replaceOneNetwork: {
        name: 'replaceOneNetwork';
        type: { kind: 'OBJECT'; name: 'Network'; ofType: null };
      };
      replaceOneNetworkanalytic: {
        name: 'replaceOneNetworkanalytic';
        type: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
      };
      replaceOneNft: {
        name: 'replaceOneNft';
        type: { kind: 'OBJECT'; name: 'Nft'; ofType: null };
      };
      replaceOneProductwhitelist: {
        name: 'replaceOneProductwhitelist';
        type: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
      };
      replaceOneSummaryanalytic: {
        name: 'replaceOneSummaryanalytic';
        type: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
      };
      replaceOneSwap: {
        name: 'replaceOneSwap';
        type: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
      };
      replaceOneTokenanalytic: {
        name: 'replaceOneTokenanalytic';
        type: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
      };
      replaceOneTokenprice: {
        name: 'replaceOneTokenprice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      replaceOneTransaction: {
        name: 'replaceOneTransaction';
        type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
      };
      updateManyCampaignevents: {
        name: 'updateManyCampaignevents';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyCampaigns: {
        name: 'updateManyCampaigns';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyCasestudies: {
        name: 'updateManyCasestudies';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyCustomwalletnames: {
        name: 'updateManyCustomwalletnames';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyDealpurchases: {
        name: 'updateManyDealpurchases';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyDeals: {
        name: 'updateManyDeals';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyEndpoints: {
        name: 'updateManyEndpoints';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyEvents: {
        name: 'updateManyEvents';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyNetworkanalytics: {
        name: 'updateManyNetworkanalytics';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyNetworks: {
        name: 'updateManyNetworks';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyNfts: {
        name: 'updateManyNfts';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyProductwhitelists: {
        name: 'updateManyProductwhitelists';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManySummaryanalytics: {
        name: 'updateManySummaryanalytics';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManySwaps: {
        name: 'updateManySwaps';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyTokenanalytics: {
        name: 'updateManyTokenanalytics';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyTokenprices: {
        name: 'updateManyTokenprices';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateManyTransactions: {
        name: 'updateManyTransactions';
        type: { kind: 'OBJECT'; name: 'UpdateManyPayload'; ofType: null };
      };
      updateOneCampaign: {
        name: 'updateOneCampaign';
        type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
      };
      updateOneCampaignevent: {
        name: 'updateOneCampaignevent';
        type: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
      };
      updateOneCasestudy: {
        name: 'updateOneCasestudy';
        type: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
      };
      updateOneCustomwalletname: {
        name: 'updateOneCustomwalletname';
        type: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
      };
      updateOneDeal: {
        name: 'updateOneDeal';
        type: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
      };
      updateOneDealpurchase: {
        name: 'updateOneDealpurchase';
        type: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
      };
      updateOneEndpoint: {
        name: 'updateOneEndpoint';
        type: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
      };
      updateOneEvent: {
        name: 'updateOneEvent';
        type: { kind: 'OBJECT'; name: 'Event'; ofType: null };
      };
      updateOneNetwork: {
        name: 'updateOneNetwork';
        type: { kind: 'OBJECT'; name: 'Network'; ofType: null };
      };
      updateOneNetworkanalytic: {
        name: 'updateOneNetworkanalytic';
        type: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
      };
      updateOneNft: {
        name: 'updateOneNft';
        type: { kind: 'OBJECT'; name: 'Nft'; ofType: null };
      };
      updateOneProductwhitelist: {
        name: 'updateOneProductwhitelist';
        type: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
      };
      updateOneSummaryanalytic: {
        name: 'updateOneSummaryanalytic';
        type: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
      };
      updateOneSwap: {
        name: 'updateOneSwap';
        type: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
      };
      updateOneTokenanalytic: {
        name: 'updateOneTokenanalytic';
        type: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
      };
      updateOneTokenprice: {
        name: 'updateOneTokenprice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      updateOneTransaction: {
        name: 'updateOneTransaction';
        type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
      };
      upsertOneCampaign: {
        name: 'upsertOneCampaign';
        type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
      };
      upsertOneCampaignevent: {
        name: 'upsertOneCampaignevent';
        type: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
      };
      upsertOneCasestudy: {
        name: 'upsertOneCasestudy';
        type: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
      };
      upsertOneCustomwalletname: {
        name: 'upsertOneCustomwalletname';
        type: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
      };
      upsertOneDeal: {
        name: 'upsertOneDeal';
        type: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
      };
      upsertOneDealpurchase: {
        name: 'upsertOneDealpurchase';
        type: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
      };
      upsertOneEndpoint: {
        name: 'upsertOneEndpoint';
        type: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
      };
      upsertOneEvent: {
        name: 'upsertOneEvent';
        type: { kind: 'OBJECT'; name: 'Event'; ofType: null };
      };
      upsertOneNetwork: {
        name: 'upsertOneNetwork';
        type: { kind: 'OBJECT'; name: 'Network'; ofType: null };
      };
      upsertOneNetworkanalytic: {
        name: 'upsertOneNetworkanalytic';
        type: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
      };
      upsertOneNft: {
        name: 'upsertOneNft';
        type: { kind: 'OBJECT'; name: 'Nft'; ofType: null };
      };
      upsertOneProductwhitelist: {
        name: 'upsertOneProductwhitelist';
        type: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
      };
      upsertOneSummaryanalytic: {
        name: 'upsertOneSummaryanalytic';
        type: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
      };
      upsertOneSwap: {
        name: 'upsertOneSwap';
        type: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
      };
      upsertOneTokenanalytic: {
        name: 'upsertOneTokenanalytic';
        type: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
      };
      upsertOneTokenprice: {
        name: 'upsertOneTokenprice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      upsertOneTransaction: {
        name: 'upsertOneTransaction';
        type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
      };
    };
  };
  NFTActionsResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'NFTActionsResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'collection';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'includeBurned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ordering';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'includeTestnets';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'walletAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NFTActionsResolverPayload: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayload';
    fields: {
      nfts: {
        name: 'nfts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTActionsResolverPayloadNft';
            ofType: null;
          };
        };
      };
    };
  };
  NFTActionsResolverPayloadNft: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNft';
    fields: {
      actions: {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTActionsResolverPayloadNftAction';
            ofType: null;
          };
        };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentHolder: {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customName: {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      dealPurchase: {
        name: 'dealPurchase';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTActionsResolverPayloadNftDealPurchase';
            ofType: null;
          };
        };
      };
      dna: {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      firstAction: {
        name: 'firstAction';
        type: {
          kind: 'OBJECT';
          name: 'NFTActionsResolverPayloadNftFirstAction';
          ofType: null;
        };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      lastModified: {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      mostRecentAction: {
        name: 'mostRecentAction';
        type: {
          kind: 'OBJECT';
          name: 'NFTActionsResolverPayloadNftMostRecentAction';
          ofType: null;
        };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      processing: {
        name: 'processing';
        type: {
          kind: 'OBJECT';
          name: 'NFTActionsResolverPayloadNftProcessing';
          ofType: null;
        };
      };
      product: {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      series: {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tier: {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokenAnalytics: {
        name: 'tokenAnalytics';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTActionsResolverPayloadNftTokenAnalytic';
            ofType: null;
          };
        };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftAction: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftAction';
    fields: {
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      to: {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftDealPurchase: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftDealPurchase';
    fields: {
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      assetCurrency: {
        name: 'assetCurrency';
        type: {
          kind: 'OBJECT';
          name: 'NFTActionsResolverPayloadNftDealPurchaseAssetCurrency';
          ofType: null;
        };
      };
      buyerAddress: {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      usdValue: {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftDealPurchaseAssetCurrency: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftDealPurchaseAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftFirstAction: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftFirstAction';
    fields: {
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      to: {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftMostRecentAction: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftMostRecentAction';
    fields: {
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      to: {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftProcessing: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftProcessing';
    fields: {
      burned: {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      processed: {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      toBurn: {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
    };
  };
  NFTActionsResolverPayloadNftTokenAnalytic: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftTokenAnalytic';
    fields: {
      images: {
        name: 'images';
        type: {
          kind: 'OBJECT';
          name: 'NFTActionsResolverPayloadNftTokenAnalyticImage';
          ofType: null;
        };
      };
    };
  };
  NFTActionsResolverPayloadNftTokenAnalyticImage: {
    kind: 'OBJECT';
    name: 'NFTActionsResolverPayloadNftTokenAnalyticImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'NFTGalleryResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'includeTestnets';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'productIn';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'issuer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'includeHiddenFromPublic';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'excludeContractAddress';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddresses';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'includeBurned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ordering';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'collection';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NFTGalleryResolverPayload: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayload';
    fields: {
      nfts: {
        name: 'nfts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNft';
            ofType: null;
          };
        };
      };
    };
  };
  NFTGalleryResolverPayloadNft: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNft';
    fields: {
      actions: {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNftAction';
            ofType: null;
          };
        };
      };
      adminTransfer: {
        name: 'adminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      chainId: {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      cliffDate: {
        name: 'cliffDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentAmount: {
        name: 'currentAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentHolder: {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customName: {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      dealPurchase: {
        name: 'dealPurchase';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNftDealPurchase';
            ofType: null;
          };
        };
      };
      dna: {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      lastModified: {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      lockup: {
        name: 'lockup';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftLockup';
          ofType: null;
        };
      };
      mockData: {
        name: 'mockData';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftMockDatum';
          ofType: null;
        };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nonTransferable: {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      period: {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      priceInfo: {
        name: 'priceInfo';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNftPriceInfo';
            ofType: null;
          };
        };
      };
      processing: {
        name: 'processing';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftProcessing';
          ofType: null;
        };
      };
      product: {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      rate: {
        name: 'rate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      revoked: {
        name: 'revoked';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftRevoked';
          ofType: null;
        };
      };
      series: {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      supportsAdminTransfer: {
        name: 'supportsAdminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      tier: {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      token: {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokenAnalytics: {
        name: 'tokenAnalytics';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNftTokenAnalytic';
            ofType: null;
          };
        };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      vestingAdmin: {
        name: 'vestingAdmin';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftAction: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftAction';
    fields: {
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      to: {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftDealPurchase: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftDealPurchase';
    fields: {
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      assetCurrency: {
        name: 'assetCurrency';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftDealPurchaseAssetCurrency';
          ofType: null;
        };
      };
      buyerAddress: {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      usdValue: {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftDealPurchaseAssetCurrency: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftDealPurchaseAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftLockup: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftLockup';
    fields: {
      adminTransfer: {
        name: 'adminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      availableAmount: {
        name: 'availableAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      beneficiary: {
        name: 'beneficiary';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      cliffDate: {
        name: 'cliffDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentAmount: {
        name: 'currentAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      latestUnlockDate: {
        name: 'latestUnlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      lockId: {
        name: 'lockId';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      period: {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      rate: {
        name: 'rate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      supportsAdminTransfer: {
        name: 'supportsAdminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      token: {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transferable: {
        name: 'transferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      vestingAdmin: {
        name: 'vestingAdmin';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftMockDatum: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftMockDatum';
    fields: {
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      lockup: {
        name: 'lockup';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNftMockDatumLockup';
            ofType: null;
          };
        };
      };
      lockupPeriod: {
        name: 'lockupPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      lockupRate: {
        name: 'lockupRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      vesting: {
        name: 'vesting';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTGalleryResolverPayloadNftMockDatumVesting';
            ofType: null;
          };
        };
      };
      vestingPeriod: {
        name: 'vestingPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      vestingRate: {
        name: 'vestingRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftMockDatumLockup: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftMockDatumLockup';
    fields: {
      x: { name: 'x'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } };
      y: { name: 'y'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } };
    };
  };
  NFTGalleryResolverPayloadNftMockDatumVesting: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftMockDatumVesting';
    fields: {
      x: { name: 'x'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } };
      y: { name: 'y'; type: { kind: 'SCALAR'; name: 'Float'; ofType: null } };
    };
  };
  NFTGalleryResolverPayloadNftPriceInfo: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftPriceInfo';
    fields: {
      lpToken: {
        name: 'lpToken';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftPriceInfoLpToken';
          ofType: null;
        };
      };
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftPriceInfoLpToken: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftPriceInfoLpToken';
    fields: {
      token0: {
        name: 'token0';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftPriceInfoLpTokenToken0';
          ofType: null;
        };
      };
      token1: {
        name: 'token1';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftPriceInfoLpTokenToken1';
          ofType: null;
        };
      };
      totalSupply: {
        name: 'totalSupply';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftPriceInfoLpTokenToken0: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftPriceInfoLpTokenToken0';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      reserve: {
        name: 'reserve';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftPriceInfoLpTokenToken1: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftPriceInfoLpTokenToken1';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      reserve: {
        name: 'reserve';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftProcessing: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftProcessing';
    fields: {
      burned: {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      processed: {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      toBurn: {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftRevoked: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftRevoked';
    fields: {
      balance: {
        name: 'balance';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      futureRevokeDate: {
        name: 'futureRevokeDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      remainder: {
        name: 'remainder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTGalleryResolverPayloadNftTokenAnalytic: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftTokenAnalytic';
    fields: {
      images: {
        name: 'images';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayloadNftTokenAnalyticImage';
          ofType: null;
        };
      };
    };
  };
  NFTGalleryResolverPayloadNftTokenAnalyticImage: {
    kind: 'OBJECT';
    name: 'NFTGalleryResolverPayloadNftTokenAnalyticImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'NFTResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NFTResolverPayload: {
    kind: 'OBJECT';
    name: 'NFTResolverPayload';
    fields: {
      nft: {
        name: 'nft';
        type: { kind: 'OBJECT'; name: 'NFTResolverPayloadNft'; ofType: null };
      };
    };
  };
  NFTResolverPayloadNft: {
    kind: 'OBJECT';
    name: 'NFTResolverPayloadNft';
    fields: {
      actions: {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTResolverPayloadNftAction';
            ofType: null;
          };
        };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentHolder: {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customName: {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      dealPurchase: {
        name: 'dealPurchase';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTResolverPayloadNftDealPurchase';
            ofType: null;
          };
        };
      };
      dna: {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      lastModified: {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      series: {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tier: {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokenAnalytics: {
        name: 'tokenAnalytics';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NFTResolverPayloadNftTokenAnalytic';
            ofType: null;
          };
        };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTResolverPayloadNftAction: {
    kind: 'OBJECT';
    name: 'NFTResolverPayloadNftAction';
    fields: {
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTResolverPayloadNftDealPurchase: {
    kind: 'OBJECT';
    name: 'NFTResolverPayloadNftDealPurchase';
    fields: {
      assetAmount: {
        name: 'assetAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      assetCurrency: {
        name: 'assetCurrency';
        type: {
          kind: 'OBJECT';
          name: 'NFTResolverPayloadNftDealPurchaseAssetCurrency';
          ofType: null;
        };
      };
      buyerAddress: {
        name: 'buyerAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      usdValue: {
        name: 'usdValue';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTResolverPayloadNftDealPurchaseAssetCurrency: {
    kind: 'OBJECT';
    name: 'NFTResolverPayloadNftDealPurchaseAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NFTResolverPayloadNftTokenAnalytic: {
    kind: 'OBJECT';
    name: 'NFTResolverPayloadNftTokenAnalytic';
    fields: {
      images: {
        name: 'images';
        type: {
          kind: 'OBJECT';
          name: 'NFTResolverPayloadNftTokenAnalyticImage';
          ofType: null;
        };
      };
    };
  };
  NFTResolverPayloadNftTokenAnalyticImage: {
    kind: 'OBJECT';
    name: 'NFTResolverPayloadNftTokenAnalyticImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  Network: {
    kind: 'OBJECT';
    name: 'Network';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      assetCurrencies: {
        name: 'assetCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NetworkAssetCurrency';
            ofType: null;
          };
        };
      };
      baseCurrency: {
        name: 'baseCurrency';
        type: { kind: 'OBJECT'; name: 'NetworkBaseCurrency'; ofType: null };
      };
      batchMintContract: {
        name: 'batchMintContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      batchPlanner: {
        name: 'batchPlanner';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      batchStreamer: {
        name: 'batchStreamer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      batchTokenVestingLocker: {
        name: 'batchTokenVestingLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      batchVester: {
        name: 'batchVester';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      chainId: {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
      };
      contracts: {
        name: 'contracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'OBJECT'; name: 'NetworkContract'; ofType: null };
        };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nonTransferableNFTContract: {
        name: 'nonTransferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nonTransferableOTCContract: {
        name: 'nonTransferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      paymentCurrencies: {
        name: 'paymentCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'NetworkPaymentCurrency';
            ofType: null;
          };
        };
      };
      testnet: {
        name: 'testnet';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      transferableNFTContract: {
        name: 'transferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transferableOTCContract: {
        name: 'transferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
    };
  };
  NetworkAssetCurrency: {
    kind: 'OBJECT';
    name: 'NetworkAssetCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      logo: {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NetworkAssetCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkAssetCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkAssetCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkAssetCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'logo_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkAssetCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'logo_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'logo_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkAssetCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkAssetCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkAssetCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkBaseCurrency: {
    kind: 'OBJECT';
    name: 'NetworkBaseCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NetworkBaseCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkBaseCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkBaseCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkBaseCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkBaseCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkBaseCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  NetworkBaseCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkBaseCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkContract: {
    kind: 'OBJECT';
    name: 'NetworkContract';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customParameters: {
        name: 'customParameters';
        type: {
          kind: 'OBJECT';
          name: 'NetworkContractCustomParameter';
          ofType: null;
        };
      };
      nftContract: {
        name: 'nftContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nonTransferable: {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      series: {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      version: {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
    };
  };
  NetworkContractCustomParameter: {
    kind: 'OBJECT';
    name: 'NetworkContractCustomParameter';
    fields: {
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      paymentCurrency: {
        name: 'paymentCurrency';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      seller: {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      token: {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NetworkContractCustomParameterInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkContractCustomParameterInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkContractCustomParameterQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkContractCustomParameterQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'seller_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkContractCustomParameterQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'token_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkContractCustomParameterQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'token_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkContractCustomParameterUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkContractCustomParameterUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'seller_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkContractInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkContractInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NetworkContractCustomParameterInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'nftContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkContractQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkContractQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'series_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nftContract_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkContractQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'type_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nftContract_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'version_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NetworkContractCustomParameterQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'version_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nftContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'version_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkContractQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkContractUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkContractUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'version_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NetworkContractCustomParameterUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nftContract_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'version';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customParameters_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'assetCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkAssetCurrencyInsertInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchVester';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkContractInsertInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'testnet';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NetworkBaseCurrencyInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkPaymentCurrencyInsertInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchMintContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkPaymentCurrency: {
    kind: 'OBJECT';
    name: 'NetworkPaymentCurrency';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      logo: {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NetworkPaymentCurrencyInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkPaymentCurrencyInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkPaymentCurrencyQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkPaymentCurrencyQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'logo_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkPaymentCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkPaymentCurrencyQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkPaymentCurrencyUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkPaymentCurrencyUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'logo';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'logo_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkContractQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NetworkBaseCurrencyQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchVester_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'testnet_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencies_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkAssetCurrencyQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'testnet';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkPaymentCurrencyQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contracts_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkContractQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contracts_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkContractQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_gt';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'testnet_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_ne';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'chainId_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contracts_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencies_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkAssetCurrencyQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkAssetCurrencyQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_lte';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_lt';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetCurrencies_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'chainId_gte';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkPaymentCurrencyQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkPaymentCurrencyQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkSortByInput: {
    name: 'NetworkSortByInput';
    enumValues:
      | 'BATCHSTREAMER_DESC'
      | 'NAME_DESC'
      | 'NONTRANSFERABLENFTCONTRACT_ASC'
      | 'NONTRANSFERABLEOTCCONTRACT_ASC'
      | 'TRANSFERABLENFTCONTRACT_DESC'
      | 'UPDATEDAT_ASC'
      | '_ID_DESC'
      | 'BATCHVESTER_DESC'
      | 'NONTRANSFERABLEOTCCONTRACT_DESC'
      | 'TRANSFERABLEOTCCONTRACT_ASC'
      | 'TRANSFERABLEOTCCONTRACT_DESC'
      | 'BATCHPLANNER_DESC'
      | 'BATCHTOKENVESTINGLOCKER_ASC'
      | 'NONTRANSFERABLENFTCONTRACT_DESC'
      | '_ID_ASC'
      | 'BATCHPLANNER_ASC'
      | 'CHAINID_ASC'
      | 'CREATEDAT_ASC'
      | 'CREATEDAT_DESC'
      | 'BATCHVESTER_ASC'
      | 'BATCHMINTCONTRACT_ASC'
      | 'NAME_ASC'
      | 'TRANSFERABLENFTCONTRACT_ASC'
      | 'BATCHMINTCONTRACT_DESC'
      | 'BATCHSTREAMER_ASC'
      | 'BATCHTOKENVESTINGLOCKER_DESC'
      | 'CHAINID_DESC'
      | 'UPDATEDAT_DESC';
  };
  NetworkUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'nonTransferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableNFTContract_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'testnet';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contracts';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkContractUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchVester';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contracts_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'testnet_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencies_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchStreamer_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Long'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchVester_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableOTCContract_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkAssetCurrencyUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchTokenVestingLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NetworkBaseCurrencyUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchPlanner_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'batchMintContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transferableNFTContract_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'chainId_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentCurrencies';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NetworkPaymentCurrencyUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'batchStreamer';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferableOTCContract';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Networkanalytic: {
    kind: 'OBJECT';
    name: 'Networkanalytic';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalDeals: {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalDeals24: {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalNFTs: {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalNFTsOutstanding: {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalValueLockedUSD: {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      tradeableLiquidityUSD: {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      tradedVolumeUSD: {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      volume: {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      volume24: {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
    };
  };
  NetworkanalyticInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkanalyticInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkanalyticQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkanalyticQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalNFTsOutstanding_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkanalyticQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'volume_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'volume_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NetworkanalyticQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NetworkanalyticSortByInput: {
    name: 'NetworkanalyticSortByInput';
    enumValues:
      | 'TOTALNFTSOUTSTANDING_ASC'
      | 'TOTALNFTSOUTSTANDING_DESC'
      | 'TOTALVALUELOCKEDUSD_ASC'
      | 'TOTALVALUELOCKEDUSD_DESC'
      | 'TRADEDVOLUMEUSD_ASC'
      | 'UPDATEDAT_DESC'
      | 'VOLUME24_DESC'
      | 'CREATEDAT_DESC'
      | 'CREATEDAT_ASC'
      | 'NAME_ASC'
      | 'TOTALDEALS_DESC'
      | 'TOTALDEALS24_DESC'
      | 'TOTALNFTS_DESC'
      | 'TRADEABLELIQUIDITYUSD_DESC'
      | 'VOLUME24_ASC'
      | '_ID_DESC'
      | 'TRADEABLELIQUIDITYUSD_ASC'
      | 'TRADEDVOLUMEUSD_DESC'
      | 'VOLUME_DESC'
      | '_ID_ASC'
      | 'TOTALDEALS_ASC'
      | 'TOTALDEALS24_ASC'
      | 'TOTALNFTS_ASC'
      | 'UPDATEDAT_ASC'
      | 'VOLUME_ASC'
      | 'NAME_DESC';
  };
  NetworkanalyticUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NetworkanalyticUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Nft: {
    kind: 'OBJECT';
    name: 'Nft';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      actions: {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'OBJECT'; name: 'NftAction'; ofType: null };
        };
      };
      adminTransfer: {
        name: 'adminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      cliffDate: {
        name: 'cliffDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      currentAmount: {
        name: 'currentAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      currentHolder: {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      customName: {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      dna: {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      hidden: {
        name: 'hidden';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      index: {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      lastModified: {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      latestUnlockDate: {
        name: 'latestUnlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      mockData: {
        name: 'mockData';
        type: { kind: 'OBJECT'; name: 'NftMockDatum'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nonTransferable: {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      period: {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      processing: {
        name: 'processing';
        type: { kind: 'OBJECT'; name: 'NftProcessing'; ofType: null };
      };
      product: {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      rate: {
        name: 'rate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      revoked: {
        name: 'revoked';
        type: { kind: 'OBJECT'; name: 'NftRevoked'; ofType: null };
      };
      series: {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      source: {
        name: 'source';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      supportsAdminTransfer: {
        name: 'supportsAdminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      tier: {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      token: {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      vestingAdmin: {
        name: 'vestingAdmin';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NftAction: {
    kind: 'OBJECT';
    name: 'NftAction';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      date: {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      to: {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NftActionInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftActionInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftActionQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftActionQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'from_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftActionQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'to_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'from_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'date_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftActionQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'to_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'type_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftActionUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftActionUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'to_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'to';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'date_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'currentAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processing';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftProcessingInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'revoked';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftRevokedInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'hidden';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftActionInsertInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'mockData';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftMockDatumInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'supportsAdminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'adminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatum: {
    kind: 'OBJECT';
    name: 'NftMockDatum';
    fields: {
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      lockup: {
        name: 'lockup';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'OBJECT'; name: 'NftMockDatumLockup'; ofType: null };
        };
      };
      lockupPeriod: {
        name: 'lockupPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      lockupRate: {
        name: 'lockupRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      vesting: {
        name: 'vesting';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'OBJECT'; name: 'NftMockDatumVesting'; ofType: null };
        };
      };
      vestingPeriod: {
        name: 'vestingPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      vestingRate: {
        name: 'vestingRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NftMockDatumInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vesting';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumVestingInsertInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'lockup';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumLockupInsertInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'vestingRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumLockup: {
    kind: 'OBJECT';
    name: 'NftMockDatumLockup';
    fields: {
      x: { name: 'x'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } };
      y: { name: 'y'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } };
    };
  };
  NftMockDatumLockupInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumLockupInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'x';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumLockupQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumLockupQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'y_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'y_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftMockDatumLockupQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftMockDatumLockupQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'y_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'x';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'y_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'x_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumLockupUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumLockupUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'x';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'vestingRate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftMockDatumQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vesting';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumVestingQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftMockDatumQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'end_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vestingRate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vesting_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumVestingQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'lockup_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockup_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumLockupQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockup';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumLockupQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'vesting_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumVestingQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'lockupRate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vesting_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lockupRate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lockup_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumLockupQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'vestingRate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'end_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'vestingRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockup';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumLockupUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'lockup_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vesting';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftMockDatumVestingUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'start_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingRate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vesting_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupPeriod';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lockupRate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumVesting: {
    kind: 'OBJECT';
    name: 'NftMockDatumVesting';
    fields: {
      x: { name: 'x'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } };
      y: { name: 'y'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null } };
    };
  };
  NftMockDatumVestingInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumVestingInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'x';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumVestingQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumVestingQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'x_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'y_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'y_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftMockDatumVestingQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'x_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftMockDatumVestingQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'y_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  NftMockDatumVestingUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftMockDatumVestingUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'x';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'x_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'y_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftProcessing: {
    kind: 'OBJECT';
    name: 'NftProcessing';
    fields: {
      burned: {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      processed: {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      toBurn: {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
    };
  };
  NftProcessingInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftProcessingInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftProcessingQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftProcessingQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftProcessingQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'burned_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processed_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'toBurn_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'toBurn_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftProcessingQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'burned_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processed_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftProcessingUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftProcessingUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'burned';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'burned_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processed';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processed_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'toBurn';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'toBurn_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'source_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'currentHolder_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'hidden';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processing';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftProcessingQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'end_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'source';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'mockData';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftMockDatumQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'customName_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'from_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'cliffDate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'period_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'from_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'supportsAdminTransfer_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalAmount_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'currentAmount_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'currentHolder_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'currentHolder_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'revoked';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftRevokedQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'currentAmount_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'processing_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tier_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftActionQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'actions_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'product_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'adminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'mockData_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'dna_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'start_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'end_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'adminTransfer_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'cliffDate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'rate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'cliffDate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tier_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'supportsAdminTransfer_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'supportsAdminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'token_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'hidden_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'dna_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'customName_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lastModified_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'lastModified_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'source_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'revoked_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'period_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'period_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'actions_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftActionQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'product_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'currentAmount_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'adminTransfer_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'actions_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftActionQueryInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'hidden_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'source_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'from_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'currentAmount_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'dna_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftRevoked: {
    kind: 'OBJECT';
    name: 'NftRevoked';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      balance: {
        name: 'balance';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      remainder: {
        name: 'remainder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      timestamp: {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  NftRevokedInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftRevokedInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftRevokedQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftRevokedQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'remainder_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftRevokedQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'balance_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'remainder_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'NftRevokedQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'remainder_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'balance_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'balance_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'remainder_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'timestamp_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  NftRevokedUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftRevokedUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'remainder_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'timestamp_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'balance_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'remainder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  NftSortByInput: {
    name: 'NftSortByInput';
    enumValues:
      | 'CLIFFDATE_DESC'
      | 'CUSTOMNAME_ASC'
      | 'NETWORK_DESC'
      | 'UNLOCKDATE_ASC'
      | 'UNLOCKDATE_DESC'
      | 'UPDATEDAT_ASC'
      | 'INDEX_DESC'
      | 'LASTMODIFIED_ASC'
      | 'RATE_ASC'
      | 'VESTINGADMIN_ASC'
      | 'CURRENTAMOUNT_ASC'
      | 'CURRENTAMOUNT_DESC'
      | 'DNA_DESC'
      | 'END_DESC'
      | 'SERIES_DESC'
      | '_ID_ASC'
      | 'CLIFFDATE_ASC'
      | 'PERIOD_DESC'
      | 'PRODUCT_DESC'
      | 'TOTALAMOUNT_ASC'
      | 'TIER_ASC'
      | 'TRANSACTIONHASH_DESC'
      | 'UPDATEDAT_DESC'
      | 'LATESTUNLOCKDATE_DESC'
      | 'SOURCE_ASC'
      | 'TOKEN_DESC'
      | 'FROM_ASC'
      | 'LASTMODIFIED_DESC'
      | 'START_ASC'
      | 'CREATEDAT_ASC'
      | 'CUSTOMNAME_DESC'
      | 'RATE_DESC'
      | 'CONTRACTADDRESS_ASC'
      | 'PERIOD_ASC'
      | 'VESTINGADMIN_DESC'
      | 'TIER_DESC'
      | 'CURRENTHOLDER_ASC'
      | 'SERIES_ASC'
      | 'END_ASC'
      | 'NETWORK_ASC'
      | 'INDEX_ASC'
      | 'LATESTUNLOCKDATE_ASC'
      | 'START_DESC'
      | '_ID_DESC'
      | 'CREATEDAT_DESC'
      | 'TOTALAMOUNT_DESC'
      | 'PRODUCT_ASC'
      | 'TOKEN_ASC'
      | 'CONTRACTADDRESS_DESC'
      | 'CURRENTHOLDER_DESC'
      | 'SOURCE_DESC'
      | 'TRANSACTIONHASH_ASC'
      | 'DNA_ASC'
      | 'FROM_DESC';
  };
  NftUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'NftUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'rate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'rate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'mockData_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'supportsAdminTransfer_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'cliffDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'series';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'supportsAdminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'source';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'revoked_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'nonTransferable_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'end_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'hidden_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'start_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tier';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'lastModified_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'hidden';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'mockData';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftMockDatumUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'token';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'dna';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processing_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'currentAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'customName_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'adminTransfer';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'latestUnlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'processing';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftProcessingUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'source_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'adminTransfer_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'vestingAdmin';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'actions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'INPUT_OBJECT';
            name: 'NftActionUpdateInput';
            ofType: null;
          };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'index';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'revoked';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'NftRevokedUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'actions_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ObjectId: unknown;
  OpenOTCMarketsResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'OpenOTCMarketsResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'nftVersions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'showTestnets';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'versions';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  OpenOTCMarketsResolverPayload: {
    kind: 'OBJECT';
    name: 'OpenOTCMarketsResolverPayload';
    fields: {
      assets: {
        name: 'assets';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'OpenOTCMarketsResolverPayloadAsset';
            ofType: null;
          };
        };
      };
      networks: {
        name: 'networks';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
    };
  };
  OpenOTCMarketsResolverPayloadAsset: {
    kind: 'OBJECT';
    name: 'OpenOTCMarketsResolverPayloadAsset';
    fields: {
      networks: {
        name: 'networks';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  Productwhitelist: {
    kind: 'OBJECT';
    name: 'Productwhitelist';
    fields: {
      _id: {
        name: '_id';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
      };
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      note: {
        name: 'note';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      product: {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      project: {
        name: 'project';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  ProductwhitelistInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'ProductwhitelistInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ProductwhitelistQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'ProductwhitelistQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'note_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'product_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'note_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'ProductwhitelistQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'project_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'project_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'project_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'ProductwhitelistQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'product_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'project_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'product_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  ProductwhitelistSortByInput: {
    name: 'ProductwhitelistSortByInput';
    enumValues:
      | 'ADDRESS_ASC'
      | 'NOTE_DESC'
      | 'PRODUCT_ASC'
      | 'PROJECT_DESC'
      | 'PROJECT_ASC'
      | '_ID_ASC'
      | '_ID_DESC'
      | 'ADDRESS_DESC'
      | 'NOTE_ASC'
      | 'PRODUCT_DESC';
  };
  ProductwhitelistUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'ProductwhitelistUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'note';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'note_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'project_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Query: {
    kind: 'OBJECT';
    name: 'Query';
    fields: {
      LockedTokenDistributions: {
        name: 'LockedTokenDistributions';
        type: {
          kind: 'OBJECT';
          name: 'LockedTokenDistributionsPayload';
          ofType: null;
        };
      };
      NFTActions: {
        name: 'NFTActions';
        type: {
          kind: 'OBJECT';
          name: 'NFTActionsResolverPayload';
          ofType: null;
        };
      };
      NFTGallery: {
        name: 'NFTGallery';
        type: {
          kind: 'OBJECT';
          name: 'NFTGalleryResolverPayload';
          ofType: null;
        };
      };
      NFTdetails: {
        name: 'NFTdetails';
        type: { kind: 'OBJECT'; name: 'NFTResolverPayload'; ofType: null };
      };
      TokenCampaignEvents: {
        name: 'TokenCampaignEvents';
        type: {
          kind: 'OBJECT';
          name: 'TokenCampaignEventsResolverPayload';
          ofType: null;
        };
      };
      TokenClaimCampaigns: {
        name: 'TokenClaimCampaigns';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayload';
          ofType: null;
        };
      };
      campaign: {
        name: 'campaign';
        type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
      };
      campaignevent: {
        name: 'campaignevent';
        type: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
      };
      campaignevents: {
        name: 'campaignevents';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Campaignevent'; ofType: null };
          };
        };
      };
      campaigns: {
        name: 'campaigns';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Campaign'; ofType: null };
          };
        };
      };
      casestudies: {
        name: 'casestudies';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
          };
        };
      };
      casestudy: {
        name: 'casestudy';
        type: { kind: 'OBJECT'; name: 'Casestudy'; ofType: null };
      };
      customwalletname: {
        name: 'customwalletname';
        type: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
      };
      customwalletnames: {
        name: 'customwalletnames';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Customwalletname'; ofType: null };
          };
        };
      };
      deal: {
        name: 'deal';
        type: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
      };
      dealpurchase: {
        name: 'dealpurchase';
        type: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
      };
      dealpurchases: {
        name: 'dealpurchases';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Dealpurchase'; ofType: null };
          };
        };
      };
      deals: {
        name: 'deals';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Deal'; ofType: null };
          };
        };
      };
      endpoint: {
        name: 'endpoint';
        type: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
      };
      endpoints: {
        name: 'endpoints';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Endpoint'; ofType: null };
          };
        };
      };
      event: {
        name: 'event';
        type: { kind: 'OBJECT'; name: 'Event'; ofType: null };
      };
      events: {
        name: 'events';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Event'; ofType: null };
          };
        };
      };
      network: {
        name: 'network';
        type: { kind: 'OBJECT'; name: 'Network'; ofType: null };
      };
      networkanalytic: {
        name: 'networkanalytic';
        type: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
      };
      networkanalytics: {
        name: 'networkanalytics';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Networkanalytic'; ofType: null };
          };
        };
      };
      networks: {
        name: 'networks';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Network'; ofType: null };
          };
        };
      };
      nft: { name: 'nft'; type: { kind: 'OBJECT'; name: 'Nft'; ofType: null } };
      nfts: {
        name: 'nfts';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Nft'; ofType: null };
          };
        };
      };
      openOTCMarkets: {
        name: 'openOTCMarkets';
        type: {
          kind: 'OBJECT';
          name: 'OpenOTCMarketsResolverPayload';
          ofType: null;
        };
      };
      productwhitelist: {
        name: 'productwhitelist';
        type: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
      };
      productwhitelists: {
        name: 'productwhitelists';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Productwhitelist'; ofType: null };
          };
        };
      };
      summaryanalytic: {
        name: 'summaryanalytic';
        type: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
      };
      summaryanalytics: {
        name: 'summaryanalytics';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Summaryanalytic'; ofType: null };
          };
        };
      };
      swap: {
        name: 'swap';
        type: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
      };
      swaps: {
        name: 'swaps';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Swap'; ofType: null };
          };
        };
      };
      tokenanalytic: {
        name: 'tokenanalytic';
        type: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
      };
      tokenanalytics: {
        name: 'tokenanalytics';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Tokenanalytic'; ofType: null };
          };
        };
      };
      tokenprice: {
        name: 'tokenprice';
        type: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
      };
      tokenprices: {
        name: 'tokenprices';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Tokenprice'; ofType: null };
          };
        };
      };
      transaction: {
        name: 'transaction';
        type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
      };
      transactions: {
        name: 'transactions';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: {
            kind: 'LIST';
            name: never;
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null };
          };
        };
      };
    };
  };
  String: unknown;
  Summaryanalytic: {
    kind: 'OBJECT';
    name: 'Summaryanalytic';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      largestDeal: {
        name: 'largestDeal';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      longestLock: {
        name: 'longestLock';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalNFTs: {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalValueLocked: {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      tradedVolume: {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      volume: {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
    };
  };
  SummaryanalyticInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'SummaryanalyticInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SummaryanalyticQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'SummaryanalyticQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalNFTs_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SummaryanalyticQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'longestLock_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'largestDeal_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'volume_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'largestDeal_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'longestLock_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'longestLock_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'volume_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SummaryanalyticQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SummaryanalyticSortByInput: {
    name: 'SummaryanalyticSortByInput';
    enumValues:
      | 'TOTALNFTS_ASC'
      | 'TOTALVALUELOCKED_DESC'
      | 'UPDATEDAT_ASC'
      | 'CREATEDAT_ASC'
      | 'LARGESTDEAL_ASC'
      | 'TRADEDVOLUME_ASC'
      | 'LONGESTLOCK_DESC'
      | 'UPDATEDAT_DESC'
      | 'VOLUME_ASC'
      | 'VOLUME_DESC'
      | '_ID_ASC'
      | '_ID_DESC'
      | 'CREATEDAT_DESC'
      | 'LARGESTDEAL_DESC'
      | 'LONGESTLOCK_ASC'
      | 'TOTALNFTS_DESC'
      | 'TOTALVALUELOCKED_ASC'
      | 'TRADEDVOLUME_DESC';
  };
  SummaryanalyticUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'SummaryanalyticUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'longestLock';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'largestDeal_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Swap: {
    kind: 'OBJECT';
    name: 'Swap';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      amountA: {
        name: 'amountA';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      amountB: {
        name: 'amountB';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      executor: {
        name: 'executor';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      initiator: {
        name: 'initiator';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      status: {
        name: 'status';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      swapId: {
        name: 'swapId';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      tokenA: {
        name: 'tokenA';
        type: { kind: 'OBJECT'; name: 'SwapTokenA'; ofType: null };
      };
      tokenB: {
        name: 'tokenB';
        type: { kind: 'OBJECT'; name: 'SwapTokenB'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      unlockDate: {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
    };
  };
  SwapInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenA';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'SwapTokenAInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'swapId';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenB';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'SwapTokenBInsertInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SwapQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'initiator';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenA_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenB_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'amountA_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'status_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'amountB';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenB';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'SwapTokenBQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'amountB_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'executor_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SwapQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'contractAddress_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'executor_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'amountB_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'swapId_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'unlockDate_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'swapId_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenA';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'SwapTokenAQueryInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'amountA_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SwapQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  SwapSortByInput: {
    name: 'SwapSortByInput';
    enumValues:
      | 'AMOUNTB_ASC'
      | 'AMOUNTB_DESC'
      | 'CREATEDAT_ASC'
      | 'EXECUTOR_ASC'
      | 'EXECUTOR_DESC'
      | 'NETWORK_ASC'
      | 'SWAPID_ASC'
      | 'AMOUNTA_ASC'
      | 'UPDATEDAT_ASC'
      | 'UNLOCKDATE_ASC'
      | 'CONTRACTADDRESS_ASC'
      | 'CREATEDAT_DESC'
      | 'INITIATOR_ASC'
      | 'TRANSACTIONHASH_DESC'
      | 'AMOUNTA_DESC'
      | '_ID_DESC'
      | 'CONTRACTADDRESS_DESC'
      | 'SWAPID_DESC'
      | 'TRANSACTIONHASH_ASC'
      | 'UNLOCKDATE_DESC'
      | '_ID_ASC'
      | 'NETWORK_DESC'
      | 'STATUS_ASC'
      | 'STATUS_DESC'
      | 'UPDATEDAT_DESC'
      | 'INITIATOR_DESC';
  };
  SwapTokenA: {
    kind: 'OBJECT';
    name: 'SwapTokenA';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  SwapTokenAInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapTokenAInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SwapTokenAQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapTokenAQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SwapTokenAQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SwapTokenAQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SwapTokenAUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapTokenAUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SwapTokenB: {
    kind: 'OBJECT';
    name: 'SwapTokenB';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  SwapTokenBInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapTokenBInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SwapTokenBQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapTokenBQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SwapTokenBQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'SwapTokenBQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  SwapTokenBUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapTokenBUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  SwapUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'SwapUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'tokenB_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'unlockDate';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenA';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'SwapTokenAUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'initiator';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'transactionHash_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenB';
        type: {
          kind: 'INPUT_OBJECT';
          name: 'SwapTokenBUpdateInput';
          ofType: null;
        };
        defaultValue: null;
      },
      {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tokenA_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountA';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'amountB';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'swapId_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'contractAddress_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'initiator_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'status_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'executor';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenCampaignEventsResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenCampaignEventsResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'eventType';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'includeTestnets';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'campaignType';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenCampaignEventsResolverPayload: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayload';
    fields: {
      events: {
        name: 'events';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'TokenCampaignEventsResolverPayloadEvent';
            ofType: null;
          };
        };
      };
    };
  };
  TokenCampaignEventsResolverPayloadEvent: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayloadEvent';
    fields: {
      campaign: {
        name: 'campaign';
        type: {
          kind: 'OBJECT';
          name: 'TokenCampaignEventsResolverPayloadEventCampaign';
          ofType: null;
        };
      };
      campaignId: {
        name: 'campaignId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      chainId: {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      info: {
        name: 'info';
        type: {
          kind: 'OBJECT';
          name: 'TokenCampaignEventsResolverPayloadEventInfo';
          ofType: null;
        };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      nft: {
        name: 'nft';
        type: {
          kind: 'OBJECT';
          name: 'TokenCampaignEventsResolverPayloadEventNft';
          ofType: null;
        };
      };
      prices: {
        name: 'prices';
        type: {
          kind: 'OBJECT';
          name: 'TokenCampaignEventsResolverPayloadEventPrice';
          ofType: null;
        };
      };
    };
  };
  TokenCampaignEventsResolverPayloadEventCampaign: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayloadEventCampaign';
    fields: {
      id: {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      product: {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      token: {
        name: 'token';
        type: {
          kind: 'OBJECT';
          name: 'TokenCampaignEventsResolverPayloadEventCampaignToken';
          ofType: null;
        };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenCampaignEventsResolverPayloadEventCampaignToken: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayloadEventCampaignToken';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenCampaignEventsResolverPayloadEventInfo: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayloadEventInfo';
    fields: {
      amountClaimed: {
        name: 'amountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      timestamp: {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenCampaignEventsResolverPayloadEventNft: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayloadEventNft';
    fields: {
      currentHolder: {
        name: 'currentHolder';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenCampaignEventsResolverPayloadEventPrice: {
    kind: 'OBJECT';
    name: 'TokenCampaignEventsResolverPayloadEventPrice';
    fields: {
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenClaimCampaignsResolverInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenClaimCampaignsResolverInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'includeTestnets';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'manager';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenClaimsResolverPayload: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayload';
    fields: {
      campaigns: {
        name: 'campaigns';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'OBJECT';
            name: 'TokenClaimsResolverPayloadCampaign';
            ofType: null;
          };
        };
      };
    };
  };
  TokenClaimsResolverPayloadCampaign: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaign';
    fields: {
      analytics: {
        name: 'analytics';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayloadCampaignAnalytic';
          ofType: null;
        };
      };
      chainId: {
        name: 'chainId';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      claimLockup: {
        name: 'claimLockup';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayloadCampaignClaimLockup';
          ofType: null;
        };
      };
      contractAddress: {
        name: 'contractAddress';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      end: {
        name: 'end';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ended: {
        name: 'ended';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayloadCampaignEnded';
          ofType: null;
        };
      };
      from: {
        name: 'from';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      id: {
        name: 'id';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      manager: {
        name: 'manager';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      prices: {
        name: 'prices';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayloadCampaignPrice';
          ofType: null;
        };
      };
      product: {
        name: 'product';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      root: {
        name: 'root';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      token: {
        name: 'token';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayloadCampaignToken';
          ofType: null;
        };
      };
      totalAddresses: {
        name: 'totalAddresses';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      totalAmount: {
        name: 'totalAmount';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalAmountClaimed: {
        name: 'totalAmountClaimed';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalClaims: {
        name: 'totalClaims';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      type: {
        name: 'type';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenClaimsResolverPayloadCampaignAnalytic: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaignAnalytic';
    fields: {
      images: {
        name: 'images';
        type: {
          kind: 'OBJECT';
          name: 'TokenClaimsResolverPayloadCampaignAnalyticImage';
          ofType: null;
        };
      };
    };
  };
  TokenClaimsResolverPayloadCampaignAnalyticImage: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaignAnalyticImage';
    fields: {
      large: {
        name: 'large';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      small: {
        name: 'small';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      thumb: {
        name: 'thumb';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenClaimsResolverPayloadCampaignClaimLockup: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaignClaimLockup';
    fields: {
      cliff: {
        name: 'cliff';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      period: {
        name: 'period';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      periods: {
        name: 'periods';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      start: {
        name: 'start';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      tokenLocker: {
        name: 'tokenLocker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenClaimsResolverPayloadCampaignEnded: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaignEnded';
    fields: {
      timestamp: {
        name: 'timestamp';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      transactionHash: {
        name: 'transactionHash';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenClaimsResolverPayloadCampaignPrice: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaignPrice';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  TokenClaimsResolverPayloadCampaignToken: {
    kind: 'OBJECT';
    name: 'TokenClaimsResolverPayloadCampaignToken';
    fields: {
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
    };
  };
  Tokenanalytic: {
    kind: 'OBJECT';
    name: 'Tokenanalytic';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      baseCurrency: {
        name: 'baseCurrency';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      decimals: {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      totalDeals: {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalDeals24: {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalNFTs: {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalNFTsOutstanding: {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
      totalValueLocked: {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      totalValueLockedUSD: {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      tradeableLiquidity: {
        name: 'tradeableLiquidity';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      tradeableLiquidityUSD: {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      tradedVolume: {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      tradedVolumeUSD: {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      volume: {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      volume24: {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
    };
  };
  TokenanalyticInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenanalyticInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenanalyticQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenanalyticQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'volume24_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'volume24_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'volume_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'decimals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'TokenanalyticQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_ne';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'TokenanalyticQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenanalyticSortByInput: {
    name: 'TokenanalyticSortByInput';
    enumValues:
      | 'UPDATEDAT_ASC'
      | '_ID_DESC'
      | 'NETWORK_DESC'
      | 'TICKER_ASC'
      | 'TRADEABLELIQUIDITYUSD_DESC'
      | 'TRADEDVOLUME_ASC'
      | 'ADDRESS_DESC'
      | 'DECIMALS_ASC'
      | 'TOTALDEALS_ASC'
      | 'TOTALDEALS24_ASC'
      | 'TOTALNFTSOUTSTANDING_DESC'
      | 'TOTALVALUELOCKED_ASC'
      | 'TOTALVALUELOCKED_DESC'
      | 'VOLUME_DESC'
      | 'TRADEABLELIQUIDITY_ASC'
      | 'TRADEABLELIQUIDITY_DESC'
      | 'TRADEDVOLUMEUSD_DESC'
      | '_ID_ASC'
      | 'CREATEDAT_DESC'
      | 'DECIMALS_DESC'
      | 'NAME_DESC'
      | 'TOTALNFTS_ASC'
      | 'TOTALVALUELOCKEDUSD_DESC'
      | 'UPDATEDAT_DESC'
      | 'VOLUME_ASC'
      | 'VOLUME24_ASC'
      | 'ADDRESS_ASC'
      | 'CREATEDAT_ASC'
      | 'NAME_ASC'
      | 'TICKER_DESC'
      | 'TRADEABLELIQUIDITYUSD_ASC'
      | 'NETWORK_ASC'
      | 'TOTALNFTS_DESC'
      | 'TRADEDVOLUMEUSD_ASC'
      | 'VOLUME24_DESC'
      | 'TOTALDEALS_DESC'
      | 'TOTALDEALS24_DESC'
      | 'TOTALNFTSOUTSTANDING_ASC'
      | 'TOTALVALUELOCKEDUSD_ASC'
      | 'TRADEDVOLUME_DESC';
  };
  TokenanalyticUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenanalyticUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'baseCurrency';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidity_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTsOutstanding_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLocked_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalNFTs';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume24';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'volume';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalValueLockedUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradeableLiquidityUSD_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolume_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'tradedVolumeUSD_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'totalDeals24_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'decimals';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'baseCurrency_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Tokenprice: {
    kind: 'OBJECT';
    name: 'Tokenprice';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      address: {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      coingeckoId: {
        name: 'coingeckoId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      name: {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      price: {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
      };
      ticker: {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
    };
  };
  TokenpriceInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenpriceInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenpriceQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenpriceQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'price_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'price_gt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'TokenpriceQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'coingeckoId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'name_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_lte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_ne';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'TokenpriceQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'name_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'address_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'ticker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_gte';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_lt';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TokenpriceSortByInput: {
    name: 'TokenpriceSortByInput';
    enumValues:
      | 'COINGECKOID_DESC'
      | 'CREATEDAT_DESC'
      | 'NAME_ASC'
      | 'ADDRESS_ASC'
      | 'CREATEDAT_ASC'
      | 'UPDATEDAT_DESC'
      | '_ID_ASC'
      | 'ADDRESS_DESC'
      | 'PRICE_DESC'
      | 'TICKER_ASC'
      | 'TICKER_DESC'
      | '_ID_DESC'
      | 'COINGECKOID_ASC'
      | 'NAME_DESC'
      | 'PRICE_ASC'
      | 'UPDATEDAT_ASC';
  };
  TokenpriceUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'TokenpriceUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'name_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'name';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'address_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'ticker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'coingeckoId_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'price';
        type: { kind: 'SCALAR'; name: 'Decimal'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  Transaction: {
    kind: 'OBJECT';
    name: 'Transaction';
    fields: {
      _id: {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
      };
      assetTicker: {
        name: 'assetTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      createdAt: {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      event: {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      network: {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      paymentTicker: {
        name: 'paymentTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
      };
      updatedAt: {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
      };
      value: {
        name: 'value';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
      };
      valueUSD: {
        name: 'valueUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
      };
    };
  };
  TransactionInsertInput: {
    kind: 'INPUT_OBJECT';
    name: 'TransactionInsertInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'assetTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TransactionQueryInput: {
    kind: 'INPUT_OBJECT';
    name: 'TransactionQueryInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'assetTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'value_lte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_lt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_lt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetTicker_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_gte';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'valueUSD_gte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'network_ne';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'assetTicker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lte';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_gt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_lt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_lte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'updatedAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_gt';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_ne';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'OR';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'TransactionQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'valueUSD_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'AND';
        type: {
          kind: 'LIST';
          name: never;
          ofType: {
            kind: 'NON_NULL';
            name: never;
            ofType: {
              kind: 'INPUT_OBJECT';
              name: 'TransactionQueryInput';
              ofType: null;
            };
          };
        };
        defaultValue: null;
      },
      {
        name: 'createdAt_gte';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_gt';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_in';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: 'event_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_gt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_ne';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_lt';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_lte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_exists';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_lte';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_gte';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_lt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_gt';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_ne';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_nin';
        type: {
          kind: 'LIST';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'String'; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: '_id_ne';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  TransactionSortByInput: {
    name: 'TransactionSortByInput';
    enumValues:
      | 'ASSETTICKER_DESC'
      | 'CREATEDAT_ASC'
      | 'VALUEUSD_ASC'
      | 'VALUEUSD_DESC'
      | '_ID_DESC'
      | 'NETWORK_ASC'
      | 'PAYMENTTICKER_ASC'
      | 'PAYMENTTICKER_DESC'
      | 'UPDATEDAT_ASC'
      | 'CREATEDAT_DESC'
      | 'EVENT_ASC'
      | 'VALUE_ASC'
      | 'VALUE_DESC'
      | 'ASSETTICKER_ASC'
      | 'EVENT_DESC'
      | 'NETWORK_DESC'
      | 'UPDATEDAT_DESC'
      | '_ID_ASC';
  };
  TransactionUpdateInput: {
    kind: 'INPUT_OBJECT';
    name: 'TransactionUpdateInput';
    isOneOf: false;
    inputFields: [
      {
        name: 'valueUSD';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_inc';
        type: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: '_id';
        type: { kind: 'SCALAR'; name: 'ObjectId'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'paymentTicker_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'valueUSD_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'value_inc';
        type: { kind: 'SCALAR'; name: 'Float'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'assetTicker';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'updatedAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network';
        type: { kind: 'SCALAR'; name: 'String'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'event_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'network_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt';
        type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null };
        defaultValue: null;
      },
      {
        name: 'createdAt_unset';
        type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null };
        defaultValue: null;
      },
    ];
  };
  UpdateManyPayload: {
    kind: 'OBJECT';
    name: 'UpdateManyPayload';
    fields: {
      matchedCount: {
        name: 'matchedCount';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
      };
      modifiedCount: {
        name: 'modifiedCount';
        type: {
          kind: 'NON_NULL';
          name: never;
          ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null };
        };
      };
    };
  };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection;
  }
}
