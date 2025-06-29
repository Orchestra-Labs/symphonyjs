import telescope from '@cosmology/telescope';
import { join } from 'path';
import { sync as rimraf } from 'rimraf';
import codegen from '@cosmwasm/ts-codegen';

const protoDirs = [join(__dirname, '/../proto')];
const rewardsVestingSchema = join(__dirname, '/../contracts/vesting/schema');
const outPath = join(__dirname, '/../src');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    env: 'v-next',
    tsDisable: {
      disableAll: true,
    },
    interfaces: {
      enabled: true,
      useUnionTypes: true,
      useGlobalDecoderRegistry: true,
    },
    prototypes: {
      addTypeUrlToDecoders: true,
      addTypeUrlToObjects: true,
      excluded: {
        packages: [
          // 'ibc.applications.fee.v1',

          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.autocli.v1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.gov.v1',
          'cosmos.group.v1',
          'cosmos.group.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.orm.v1',
          'cosmos.orm.v1alpha1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1',
        ],
      },
      methods: {
        fromJSON: false,
        toJSON: false,

        encode: true,
        decode: true,
        fromPartial: true,

        // toSDK: true,
        // fromSDK: true,

        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true,
      },
      parser: {
        keepCase: false,
      },
      typingsFormat: {
        duration: 'duration',
        timestamp: 'date',
        useExact: false,
        useDeepPartial: false,
        num64: 'bigint',
        customTypes: {
          useCosmosSDKDec: true,
        },
      },
    },
    aminoEncoding: {
      enabled: true,
      exceptions: {
        // BUG in telescope? why no workie?
        // maybe because it assumes that SDK annotations are the truth!
        '/cosmos.gov.v1beta1.MsgVote': {
          aminoType: 'cosmos-sdk/MsgVote',
        },
      },
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
      useConnectComet: true,
    },
  },
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

codegen({
  contracts: [
    {
      name: 'RewardsVesting',
      dir: rewardsVestingSchema,
    },
  ],
  outPath: join(__dirname, '/../src/contracts'),
  options: {
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts',
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
      useDeclareKeyword: true,
    },
    recoil: {
      enabled: false,
    },
    useContractsHook: {
      enabled: false,
    },
    messageComposer: {
      enabled: false,
    },
    messageBuilder: {
      enabled: false,
    },
    reactQuery: {
      enabled: false,
      optionalClient: true,
      version: 'v4',
      mutations: true,
      queryKeys: true,
      queryFactory: true,
    },
  },
})
  .then(() => {
    console.log('✨ contracts codegen done!');
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
