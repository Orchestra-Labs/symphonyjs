//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgUndelegateFromRebalancedValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards, MsgDelegateBondedTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference", MsgSetValidatorSetPreference], ["/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet", MsgDelegateToValidatorSet], ["/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet", MsgUndelegateFromValidatorSet], ["/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet", MsgUndelegateFromRebalancedValidatorSet], ["/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet", MsgRedelegateValidatorSet], ["/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards", MsgWithdrawDelegationRewards], ["/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens", MsgDelegateBondedTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: MsgSetValidatorSetPreference.encode(value).finish()
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: MsgDelegateToValidatorSet.encode(value).finish()
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: MsgUndelegateFromValidatorSet.encode(value).finish()
      };
    },
    undelegateFromRebalancedValidatorSet(value: MsgUndelegateFromRebalancedValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
        value: MsgUndelegateFromRebalancedValidatorSet.encode(value).finish()
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: MsgRedelegateValidatorSet.encode(value).finish()
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: MsgWithdrawDelegationRewards.encode(value).finish()
      };
    },
    delegateBondedTokens(value: MsgDelegateBondedTokens) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value: MsgDelegateBondedTokens.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value
      };
    },
    undelegateFromRebalancedValidatorSet(value: MsgUndelegateFromRebalancedValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
        value
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value
      };
    },
    delegateBondedTokens(value: MsgDelegateBondedTokens) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value
      };
    }
  },
  fromPartial: {
    setValidatorSetPreference(value: MsgSetValidatorSetPreference) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference",
        value: MsgSetValidatorSetPreference.fromPartial(value)
      };
    },
    delegateToValidatorSet(value: MsgDelegateToValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet",
        value: MsgDelegateToValidatorSet.fromPartial(value)
      };
    },
    undelegateFromValidatorSet(value: MsgUndelegateFromValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
        value: MsgUndelegateFromValidatorSet.fromPartial(value)
      };
    },
    undelegateFromRebalancedValidatorSet(value: MsgUndelegateFromRebalancedValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet",
        value: MsgUndelegateFromRebalancedValidatorSet.fromPartial(value)
      };
    },
    redelegateValidatorSet(value: MsgRedelegateValidatorSet) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet",
        value: MsgRedelegateValidatorSet.fromPartial(value)
      };
    },
    withdrawDelegationRewards(value: MsgWithdrawDelegationRewards) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
        value: MsgWithdrawDelegationRewards.fromPartial(value)
      };
    },
    delegateBondedTokens(value: MsgDelegateBondedTokens) {
      return {
        typeUrl: "/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens",
        value: MsgDelegateBondedTokens.fromPartial(value)
      };
    }
  }
};