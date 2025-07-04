//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgUnPoolWhitelistedPool, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgAddToConcentratedLiquiditySuperfluidPosition, MsgUnbondConvertAndStake } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/symphony.superfluid.MsgSuperfluidDelegate", MsgSuperfluidDelegate], ["/symphony.superfluid.MsgSuperfluidUndelegate", MsgSuperfluidUndelegate], ["/symphony.superfluid.MsgSuperfluidUnbondLock", MsgSuperfluidUnbondLock], ["/symphony.superfluid.MsgSuperfluidUndelegateAndUnbondLock", MsgSuperfluidUndelegateAndUnbondLock], ["/symphony.superfluid.MsgLockAndSuperfluidDelegate", MsgLockAndSuperfluidDelegate], ["/symphony.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate", MsgCreateFullRangePositionAndSuperfluidDelegate], ["/symphony.superfluid.MsgUnPoolWhitelistedPool", MsgUnPoolWhitelistedPool], ["/symphony.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition", MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition], ["/symphony.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition", MsgAddToConcentratedLiquiditySuperfluidPosition], ["/symphony.superfluid.MsgUnbondConvertAndStake", MsgUnbondConvertAndStake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.encode(value).finish()
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.encode(value).finish()
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.encode(value).finish()
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.encode(value).finish()
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.encode(value).finish()
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value: MsgCreateFullRangePositionAndSuperfluidDelegate.encode(value).finish()
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.encode(value).finish()
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(value).finish()
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/symphony.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value: MsgAddToConcentratedLiquiditySuperfluidPosition.encode(value).finish()
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnbondConvertAndStake",
        value: MsgUnbondConvertAndStake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidDelegate",
        value
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUndelegate",
        value
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUnbondLock",
        value
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgLockAndSuperfluidDelegate",
        value
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnPoolWhitelistedPool",
        value
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/symphony.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnbondConvertAndStake",
        value
      };
    }
  },
  fromPartial: {
    superfluidDelegate(value: MsgSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidDelegate",
        value: MsgSuperfluidDelegate.fromPartial(value)
      };
    },
    superfluidUndelegate(value: MsgSuperfluidUndelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUndelegate",
        value: MsgSuperfluidUndelegate.fromPartial(value)
      };
    },
    superfluidUnbondLock(value: MsgSuperfluidUnbondLock) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUnbondLock",
        value: MsgSuperfluidUnbondLock.fromPartial(value)
      };
    },
    superfluidUndelegateAndUnbondLock(value: MsgSuperfluidUndelegateAndUnbondLock) {
      return {
        typeUrl: "/symphony.superfluid.MsgSuperfluidUndelegateAndUnbondLock",
        value: MsgSuperfluidUndelegateAndUnbondLock.fromPartial(value)
      };
    },
    lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgLockAndSuperfluidDelegate",
        value: MsgLockAndSuperfluidDelegate.fromPartial(value)
      };
    },
    createFullRangePositionAndSuperfluidDelegate(value: MsgCreateFullRangePositionAndSuperfluidDelegate) {
      return {
        typeUrl: "/symphony.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate",
        value: MsgCreateFullRangePositionAndSuperfluidDelegate.fromPartial(value)
      };
    },
    unPoolWhitelistedPool(value: MsgUnPoolWhitelistedPool) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnPoolWhitelistedPool",
        value: MsgUnPoolWhitelistedPool.fromPartial(value)
      };
    },
    unlockAndMigrateSharesToFullRangeConcentratedPosition(value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromPartial(value)
      };
    },
    addToConcentratedLiquiditySuperfluidPosition(value: MsgAddToConcentratedLiquiditySuperfluidPosition) {
      return {
        typeUrl: "/symphony.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition",
        value: MsgAddToConcentratedLiquiditySuperfluidPosition.fromPartial(value)
      };
    },
    unbondConvertAndStake(value: MsgUnbondConvertAndStake) {
      return {
        typeUrl: "/symphony.superfluid.MsgUnbondConvertAndStake",
        value: MsgUnbondConvertAndStake.fromPartial(value)
      };
    }
  }
};