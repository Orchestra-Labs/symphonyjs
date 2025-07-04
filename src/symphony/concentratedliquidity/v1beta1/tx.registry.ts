//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives, MsgTransferPositions } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/symphony.concentratedliquidity.v1beta1.MsgCreatePosition", MsgCreatePosition], ["/symphony.concentratedliquidity.v1beta1.MsgWithdrawPosition", MsgWithdrawPosition], ["/symphony.concentratedliquidity.v1beta1.MsgAddToPosition", MsgAddToPosition], ["/symphony.concentratedliquidity.v1beta1.MsgCollectSpreadRewards", MsgCollectSpreadRewards], ["/symphony.concentratedliquidity.v1beta1.MsgCollectIncentives", MsgCollectIncentives], ["/symphony.concentratedliquidity.v1beta1.MsgTransferPositions", MsgTransferPositions]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.encode(value).finish()
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.encode(value).finish()
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgAddToPosition",
        value: MsgAddToPosition.encode(value).finish()
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value: MsgCollectSpreadRewards.encode(value).finish()
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.encode(value).finish()
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgTransferPositions",
        value: MsgTransferPositions.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCreatePosition",
        value
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgAddToPosition",
        value
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgTransferPositions",
        value
      };
    }
  },
  fromPartial: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.fromPartial(value)
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.fromPartial(value)
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgAddToPosition",
        value: MsgAddToPosition.fromPartial(value)
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value: MsgCollectSpreadRewards.fromPartial(value)
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.fromPartial(value)
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/symphony.concentratedliquidity.v1beta1.MsgTransferPositions",
        value: MsgTransferPositions.fromPartial(value)
      };
    }
  }
};