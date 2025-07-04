//@ts-nocheck
import {
  MsgSetValidatorSetPreference,
  MsgDelegateToValidatorSet,
  MsgUndelegateFromValidatorSet,
  MsgUndelegateFromRebalancedValidatorSet,
  MsgRedelegateValidatorSet,
  MsgWithdrawDelegationRewards,
  MsgDelegateBondedTokens,
} from './tx';
export const AminoConverter = {
  '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference': {
    aminoType: 'symphony/MsgSetValidatorSetPreference',
    toAmino: MsgSetValidatorSetPreference.toAmino,
    fromAmino: MsgSetValidatorSetPreference.fromAmino,
  },
  '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet': {
    aminoType: 'symphony/MsgDelegateToValidatorSet',
    toAmino: MsgDelegateToValidatorSet.toAmino,
    fromAmino: MsgDelegateToValidatorSet.fromAmino,
  },
  '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet': {
    aminoType: 'symphony/MsgUndelegateFromValidatorSet',
    toAmino: MsgUndelegateFromValidatorSet.toAmino,
    fromAmino: MsgUndelegateFromValidatorSet.fromAmino,
  },
  '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet': {
    aminoType: 'symphony/MsgUndelegateFromRebalValset',
    toAmino: MsgUndelegateFromRebalancedValidatorSet.toAmino,
    fromAmino: MsgUndelegateFromRebalancedValidatorSet.fromAmino,
  },
  '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet': {
    aminoType: 'symphony/MsgRedelegateValidatorSet',
    toAmino: MsgRedelegateValidatorSet.toAmino,
    fromAmino: MsgRedelegateValidatorSet.fromAmino,
  },
  '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards': {
    aminoType: 'symphony/MsgWithdrawDelegationRewards',
    toAmino: MsgWithdrawDelegationRewards.toAmino,
    fromAmino: MsgWithdrawDelegationRewards.fromAmino,
  },
  '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens': {
    aminoType: 'symphony/MsgDelegateBondedTokens',
    toAmino: MsgDelegateBondedTokens.toAmino,
    fromAmino: MsgDelegateBondedTokens.fromAmino,
  },
};
