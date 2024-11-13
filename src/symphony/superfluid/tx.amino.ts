//@ts-nocheck
import {
  MsgSuperfluidDelegate,
  MsgSuperfluidUndelegate,
  MsgSuperfluidUnbondLock,
  MsgSuperfluidUndelegateAndUnbondLock,
  MsgLockAndSuperfluidDelegate,
  MsgCreateFullRangePositionAndSuperfluidDelegate,
  MsgUnPoolWhitelistedPool,
  MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
  MsgAddToConcentratedLiquiditySuperfluidPosition,
  MsgUnbondConvertAndStake,
} from './tx';
export const AminoConverter = {
  '/symphony.superfluid.MsgSuperfluidDelegate': {
    aminoType: 'symphony/superfluid-delegate',
    toAmino: MsgSuperfluidDelegate.toAmino,
    fromAmino: MsgSuperfluidDelegate.fromAmino,
  },
  '/symphony.superfluid.MsgSuperfluidUndelegate': {
    aminoType: 'symphony/superfluid-undelegate',
    toAmino: MsgSuperfluidUndelegate.toAmino,
    fromAmino: MsgSuperfluidUndelegate.fromAmino,
  },
  '/symphony.superfluid.MsgSuperfluidUnbondLock': {
    aminoType: 'symphony/superfluid-unbond-lock',
    toAmino: MsgSuperfluidUnbondLock.toAmino,
    fromAmino: MsgSuperfluidUnbondLock.fromAmino,
  },
  '/symphony.superfluid.MsgSuperfluidUndelegateAndUnbondLock': {
    aminoType: 'symphony/superfluid-undelegate-unbond-lock',
    toAmino: MsgSuperfluidUndelegateAndUnbondLock.toAmino,
    fromAmino: MsgSuperfluidUndelegateAndUnbondLock.fromAmino,
  },
  '/symphony.superfluid.MsgLockAndSuperfluidDelegate': {
    aminoType: 'symphony/lock-and-superfluid-delegate',
    toAmino: MsgLockAndSuperfluidDelegate.toAmino,
    fromAmino: MsgLockAndSuperfluidDelegate.fromAmino,
  },
  '/symphony.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate': {
    aminoType: 'symphony/full-range-and-sf-delegate',
    toAmino: MsgCreateFullRangePositionAndSuperfluidDelegate.toAmino,
    fromAmino: MsgCreateFullRangePositionAndSuperfluidDelegate.fromAmino,
  },
  '/symphony.superfluid.MsgUnPoolWhitelistedPool': {
    aminoType: 'symphony/unpool-whitelisted-pool',
    toAmino: MsgUnPoolWhitelistedPool.toAmino,
    fromAmino: MsgUnPoolWhitelistedPool.fromAmino,
  },
  '/symphony.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition':
    {
      aminoType: 'symphony/unlock-and-migrate',
      toAmino: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.toAmino,
      fromAmino:
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromAmino,
    },
  '/symphony.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition': {
    aminoType: 'symphony/add-to-cl-superfluid-position',
    toAmino: MsgAddToConcentratedLiquiditySuperfluidPosition.toAmino,
    fromAmino: MsgAddToConcentratedLiquiditySuperfluidPosition.fromAmino,
  },
  '/symphony.superfluid.MsgUnbondConvertAndStake': {
    aminoType: 'symphony/unbond-convert-and-stake',
    toAmino: MsgUnbondConvertAndStake.toAmino,
    fromAmino: MsgUnbondConvertAndStake.fromAmino,
  },
};
