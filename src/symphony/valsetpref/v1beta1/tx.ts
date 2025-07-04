//@ts-nocheck
import {
  ValidatorPreference,
  ValidatorPreferenceAmino,
  ValidatorPreferenceSDKType,
} from './state';
import {
  Coin,
  CoinAmino,
  CoinSDKType,
} from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/**
 * MsgCreateValidatorSetPreference is a list that holds validator-set.
 * @name MsgSetValidatorSetPreference
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference
 */
export interface MsgSetValidatorSetPreference {
  /**
   * delegator is the user who is trying to create a validator-set.
   */
  delegator: string;
  /**
   * list of {valAddr, weight} to delegate to
   */
  preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference';
  value: Uint8Array;
}
/**
 * MsgCreateValidatorSetPreference is a list that holds validator-set.
 * @name MsgSetValidatorSetPreferenceAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference
 */
export interface MsgSetValidatorSetPreferenceAmino {
  /**
   * delegator is the user who is trying to create a validator-set.
   */
  delegator?: string;
  /**
   * list of {valAddr, weight} to delegate to
   */
  preferences?: ValidatorPreferenceAmino[];
}
export interface MsgSetValidatorSetPreferenceAminoMsg {
  type: 'symphony/MsgSetValidatorSetPreference';
  value: MsgSetValidatorSetPreferenceAmino;
}
/**
 * MsgCreateValidatorSetPreference is a list that holds validator-set.
 * @name MsgSetValidatorSetPreferenceSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference
 */
export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
/**
 * @name MsgSetValidatorSetPreferenceResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse
 */
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse';
  value: Uint8Array;
}
/**
 * @name MsgSetValidatorSetPreferenceResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse
 */
export interface MsgSetValidatorSetPreferenceResponseAmino {}
export interface MsgSetValidatorSetPreferenceResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse';
  value: MsgSetValidatorSetPreferenceResponseAmino;
}
/**
 * @name MsgSetValidatorSetPreferenceResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse
 */
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 * @name MsgDelegateToValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet
 */
export interface MsgDelegateToValidatorSet {
  /**
   * delegator is the user who is trying to delegate.
   */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet';
  value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 * @name MsgDelegateToValidatorSetAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet
 */
export interface MsgDelegateToValidatorSetAmino {
  /**
   * delegator is the user who is trying to delegate.
   */
  delegator?: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin?: CoinAmino;
}
export interface MsgDelegateToValidatorSetAminoMsg {
  type: 'symphony/MsgDelegateToValidatorSet';
  value: MsgDelegateToValidatorSetAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 * @name MsgDelegateToValidatorSetSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet
 */
export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
/**
 * @name MsgDelegateToValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse
 */
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse';
  value: Uint8Array;
}
/**
 * @name MsgDelegateToValidatorSetResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse
 */
export interface MsgDelegateToValidatorSetResponseAmino {}
export interface MsgDelegateToValidatorSetResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse';
  value: MsgDelegateToValidatorSetResponseAmino;
}
/**
 * @name MsgDelegateToValidatorSetResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse
 */
export interface MsgDelegateToValidatorSetResponseSDKType {}
/**
 * @name MsgUndelegateFromValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet
 */
export interface MsgUndelegateFromValidatorSet {
  /**
   * delegator is the user who is trying to undelegate.
   */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet';
  value: Uint8Array;
}
/**
 * @name MsgUndelegateFromValidatorSetAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet
 */
export interface MsgUndelegateFromValidatorSetAmino {
  /**
   * delegator is the user who is trying to undelegate.
   */
  delegator?: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetAminoMsg {
  type: 'symphony/MsgUndelegateFromValidatorSet';
  value: MsgUndelegateFromValidatorSetAmino;
}
/**
 * @name MsgUndelegateFromValidatorSetSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet
 */
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
/**
 * @name MsgUndelegateFromValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse
 */
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse';
  value: Uint8Array;
}
/**
 * @name MsgUndelegateFromValidatorSetResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse
 */
export interface MsgUndelegateFromValidatorSetResponseAmino {}
export interface MsgUndelegateFromValidatorSetResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse';
  value: MsgUndelegateFromValidatorSetResponseAmino;
}
/**
 * @name MsgUndelegateFromValidatorSetResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse
 */
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
/**
 * @name MsgUndelegateFromRebalancedValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet
 */
export interface MsgUndelegateFromRebalancedValidatorSet {
  /**
   * delegator is the user who is trying to undelegate.
   */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin: Coin;
}
export interface MsgUndelegateFromRebalancedValidatorSetProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet';
  value: Uint8Array;
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSetAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet
 */
export interface MsgUndelegateFromRebalancedValidatorSetAmino {
  /**
   * delegator is the user who is trying to undelegate.
   */
  delegator?: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
   * Our undelegate logic would first check the current delegation balance.
   * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
   * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
   * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
   * undelegated from ValB.
   */
  coin?: CoinAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetAminoMsg {
  type: 'symphony/MsgUndelegateFromRebalValset';
  value: MsgUndelegateFromRebalancedValidatorSetAmino;
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSetSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet
 */
export interface MsgUndelegateFromRebalancedValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse
 */
export interface MsgUndelegateFromRebalancedValidatorSetResponse {}
export interface MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse';
  value: Uint8Array;
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSetResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse
 */
export interface MsgUndelegateFromRebalancedValidatorSetResponseAmino {}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse';
  value: MsgUndelegateFromRebalancedValidatorSetResponseAmino;
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSetResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse
 */
export interface MsgUndelegateFromRebalancedValidatorSetResponseSDKType {}
/**
 * @name MsgRedelegateValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet
 */
export interface MsgRedelegateValidatorSet {
  /**
   * delegator is the user who is trying to create a validator-set.
   */
  delegator: string;
  /**
   * list of {valAddr, weight} to delegate to
   */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet';
  value: Uint8Array;
}
/**
 * @name MsgRedelegateValidatorSetAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet
 */
export interface MsgRedelegateValidatorSetAmino {
  /**
   * delegator is the user who is trying to create a validator-set.
   */
  delegator?: string;
  /**
   * list of {valAddr, weight} to delegate to
   */
  preferences?: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetAminoMsg {
  type: 'symphony/MsgRedelegateValidatorSet';
  value: MsgRedelegateValidatorSetAmino;
}
/**
 * @name MsgRedelegateValidatorSetSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet
 */
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
/**
 * @name MsgRedelegateValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse
 */
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse';
  value: Uint8Array;
}
/**
 * @name MsgRedelegateValidatorSetResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse
 */
export interface MsgRedelegateValidatorSetResponseAmino {}
export interface MsgRedelegateValidatorSetResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse';
  value: MsgRedelegateValidatorSetResponseAmino;
}
/**
 * @name MsgRedelegateValidatorSetResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse
 */
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 * @name MsgWithdrawDelegationRewards
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards
 */
export interface MsgWithdrawDelegationRewards {
  /**
   * delegator is the user who is trying to claim staking rewards.
   */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards';
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 * @name MsgWithdrawDelegationRewardsAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards
 */
export interface MsgWithdrawDelegationRewardsAmino {
  /**
   * delegator is the user who is trying to claim staking rewards.
   */
  delegator?: string;
}
export interface MsgWithdrawDelegationRewardsAminoMsg {
  type: 'symphony/MsgWithdrawDelegationRewards';
  value: MsgWithdrawDelegationRewardsAmino;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 * @name MsgWithdrawDelegationRewardsSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards
 */
export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
/**
 * @name MsgWithdrawDelegationRewardsResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse
 */
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse';
  value: Uint8Array;
}
/**
 * @name MsgWithdrawDelegationRewardsResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse
 */
export interface MsgWithdrawDelegationRewardsResponseAmino {}
export interface MsgWithdrawDelegationRewardsResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse';
  value: MsgWithdrawDelegationRewardsResponseAmino;
}
/**
 * @name MsgWithdrawDelegationRewardsResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse
 */
export interface MsgWithdrawDelegationRewardsResponseSDKType {}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 * @name MsgDelegateBondedTokens
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokens
 */
export interface MsgDelegateBondedTokens {
  /**
   * delegator is the user who is trying to force unbond osmo and delegate.
   */
  delegator: string;
  /**
   * lockup id of osmo in the pool
   */
  lockID: bigint;
}
export interface MsgDelegateBondedTokensProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens';
  value: Uint8Array;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 * @name MsgDelegateBondedTokensAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokens
 */
export interface MsgDelegateBondedTokensAmino {
  /**
   * delegator is the user who is trying to force unbond osmo and delegate.
   */
  delegator?: string;
  /**
   * lockup id of osmo in the pool
   */
  lockID?: string;
}
export interface MsgDelegateBondedTokensAminoMsg {
  type: 'symphony/MsgDelegateBondedTokens';
  value: MsgDelegateBondedTokensAmino;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 * @name MsgDelegateBondedTokensSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokens
 */
export interface MsgDelegateBondedTokensSDKType {
  delegator: string;
  lockID: bigint;
}
/**
 * @name MsgDelegateBondedTokensResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse
 */
export interface MsgDelegateBondedTokensResponse {}
export interface MsgDelegateBondedTokensResponseProtoMsg {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse';
  value: Uint8Array;
}
/**
 * @name MsgDelegateBondedTokensResponseAmino
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse
 */
export interface MsgDelegateBondedTokensResponseAmino {}
export interface MsgDelegateBondedTokensResponseAminoMsg {
  type: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse';
  value: MsgDelegateBondedTokensResponseAmino;
}
/**
 * @name MsgDelegateBondedTokensResponseSDKType
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse
 */
export interface MsgDelegateBondedTokensResponseSDKType {}
function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: '',
    preferences: [],
  };
}
/**
 * MsgCreateValidatorSetPreference is a list that holds validator-set.
 * @name MsgSetValidatorSetPreference
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference
 */
export const MsgSetValidatorSetPreference = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference',
  aminoType: 'symphony/MsgSetValidatorSetPreference',
  is(o: any): o is MsgSetValidatorSetPreference {
    return (
      o &&
      (o.$typeUrl === MsgSetValidatorSetPreference.typeUrl ||
        (typeof o.delegator === 'string' &&
          Array.isArray(o.preferences) &&
          (!o.preferences.length || ValidatorPreference.is(o.preferences[0]))))
    );
  },
  isSDK(o: any): o is MsgSetValidatorSetPreferenceSDKType {
    return (
      o &&
      (o.$typeUrl === MsgSetValidatorSetPreference.typeUrl ||
        (typeof o.delegator === 'string' &&
          Array.isArray(o.preferences) &&
          (!o.preferences.length ||
            ValidatorPreference.isSDK(o.preferences[0]))))
    );
  },
  isAmino(o: any): o is MsgSetValidatorSetPreferenceAmino {
    return (
      o &&
      (o.$typeUrl === MsgSetValidatorSetPreference.typeUrl ||
        (typeof o.delegator === 'string' &&
          Array.isArray(o.preferences) &&
          (!o.preferences.length ||
            ValidatorPreference.isAmino(o.preferences[0]))))
    );
  },
  encode(
    message: MsgSetValidatorSetPreference,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetValidatorSetPreference {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(
            ValidatorPreference.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgSetValidatorSetPreference>,
  ): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? '';
    message.preferences =
      object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: MsgSetValidatorSetPreferenceAmino,
  ): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences =
      object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: MsgSetValidatorSetPreference,
  ): MsgSetValidatorSetPreferenceAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e =>
        e ? ValidatorPreference.toAmino(e) : undefined,
      );
    } else {
      obj.preferences = message.preferences;
    }
    return obj;
  },
  fromAminoMsg(
    object: MsgSetValidatorSetPreferenceAminoMsg,
  ): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgSetValidatorSetPreference,
  ): MsgSetValidatorSetPreferenceAminoMsg {
    return {
      type: 'symphony/MsgSetValidatorSetPreference',
      value: MsgSetValidatorSetPreference.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgSetValidatorSetPreferenceProtoMsg,
  ): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreference): Uint8Array {
    return MsgSetValidatorSetPreference.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetValidatorSetPreference,
  ): MsgSetValidatorSetPreferenceProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreference',
      value: MsgSetValidatorSetPreference.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgSetValidatorSetPreference.typeUrl,
  MsgSetValidatorSetPreference,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgSetValidatorSetPreference.aminoType,
  MsgSetValidatorSetPreference.typeUrl,
);
function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}
/**
 * @name MsgSetValidatorSetPreferenceResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse
 */
export const MsgSetValidatorSetPreferenceResponse = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse',
  is(o: any): o is MsgSetValidatorSetPreferenceResponse {
    return o && o.$typeUrl === MsgSetValidatorSetPreferenceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetValidatorSetPreferenceResponseSDKType {
    return o && o.$typeUrl === MsgSetValidatorSetPreferenceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetValidatorSetPreferenceResponseAmino {
    return o && o.$typeUrl === MsgSetValidatorSetPreferenceResponse.typeUrl;
  },
  encode(
    _: MsgSetValidatorSetPreferenceResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetValidatorSetPreferenceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgSetValidatorSetPreferenceResponse>,
  ): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  fromAmino(
    _: MsgSetValidatorSetPreferenceResponseAmino,
  ): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  toAmino(
    _: MsgSetValidatorSetPreferenceResponse,
  ): MsgSetValidatorSetPreferenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgSetValidatorSetPreferenceResponseAminoMsg,
  ): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetValidatorSetPreferenceResponseProtoMsg,
  ): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreferenceResponse): Uint8Array {
    return MsgSetValidatorSetPreferenceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetValidatorSetPreferenceResponse,
  ): MsgSetValidatorSetPreferenceResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse',
      value: MsgSetValidatorSetPreferenceResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgSetValidatorSetPreferenceResponse.typeUrl,
  MsgSetValidatorSetPreferenceResponse,
);
function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: '',
    coin: Coin.fromPartial({}),
  };
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 * @name MsgDelegateToValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet
 */
export const MsgDelegateToValidatorSet = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet',
  aminoType: 'symphony/MsgDelegateToValidatorSet',
  is(o: any): o is MsgDelegateToValidatorSet {
    return (
      o &&
      (o.$typeUrl === MsgDelegateToValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.is(o.coin)))
    );
  },
  isSDK(o: any): o is MsgDelegateToValidatorSetSDKType {
    return (
      o &&
      (o.$typeUrl === MsgDelegateToValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.isSDK(o.coin)))
    );
  },
  isAmino(o: any): o is MsgDelegateToValidatorSetAmino {
    return (
      o &&
      (o.$typeUrl === MsgDelegateToValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.isAmino(o.coin)))
    );
  },
  encode(
    message: MsgDelegateToValidatorSet,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgDelegateToValidatorSet {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgDelegateToValidatorSet>,
  ): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? '';
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgDelegateToValidatorSetAminoMsg,
  ): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgDelegateToValidatorSet,
  ): MsgDelegateToValidatorSetAminoMsg {
    return {
      type: 'symphony/MsgDelegateToValidatorSet',
      value: MsgDelegateToValidatorSet.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgDelegateToValidatorSetProtoMsg,
  ): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSet): Uint8Array {
    return MsgDelegateToValidatorSet.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDelegateToValidatorSet,
  ): MsgDelegateToValidatorSetProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSet',
      value: MsgDelegateToValidatorSet.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgDelegateToValidatorSet.typeUrl,
  MsgDelegateToValidatorSet,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgDelegateToValidatorSet.aminoType,
  MsgDelegateToValidatorSet.typeUrl,
);
function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}
/**
 * @name MsgDelegateToValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse
 */
export const MsgDelegateToValidatorSetResponse = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse',
  is(o: any): o is MsgDelegateToValidatorSetResponse {
    return o && o.$typeUrl === MsgDelegateToValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateToValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgDelegateToValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateToValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgDelegateToValidatorSetResponse.typeUrl;
  },
  encode(
    _: MsgDelegateToValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgDelegateToValidatorSetResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgDelegateToValidatorSetResponse>,
  ): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  fromAmino(
    _: MsgDelegateToValidatorSetResponseAmino,
  ): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  toAmino(
    _: MsgDelegateToValidatorSetResponse,
  ): MsgDelegateToValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDelegateToValidatorSetResponseAminoMsg,
  ): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDelegateToValidatorSetResponseProtoMsg,
  ): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSetResponse): Uint8Array {
    return MsgDelegateToValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDelegateToValidatorSetResponse,
  ): MsgDelegateToValidatorSetResponseProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse',
      value: MsgDelegateToValidatorSetResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgDelegateToValidatorSetResponse.typeUrl,
  MsgDelegateToValidatorSetResponse,
);
function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: '',
    coin: Coin.fromPartial({}),
  };
}
/**
 * @name MsgUndelegateFromValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet
 */
export const MsgUndelegateFromValidatorSet = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
  aminoType: 'symphony/MsgUndelegateFromValidatorSet',
  is(o: any): o is MsgUndelegateFromValidatorSet {
    return (
      o &&
      (o.$typeUrl === MsgUndelegateFromValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.is(o.coin)))
    );
  },
  isSDK(o: any): o is MsgUndelegateFromValidatorSetSDKType {
    return (
      o &&
      (o.$typeUrl === MsgUndelegateFromValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.isSDK(o.coin)))
    );
  },
  isAmino(o: any): o is MsgUndelegateFromValidatorSetAmino {
    return (
      o &&
      (o.$typeUrl === MsgUndelegateFromValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.isAmino(o.coin)))
    );
  },
  encode(
    message: MsgUndelegateFromValidatorSet,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUndelegateFromValidatorSet {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgUndelegateFromValidatorSet>,
  ): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? '';
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
  fromAmino(
    object: MsgUndelegateFromValidatorSetAmino,
  ): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(
    message: MsgUndelegateFromValidatorSet,
  ): MsgUndelegateFromValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgUndelegateFromValidatorSetAminoMsg,
  ): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgUndelegateFromValidatorSet,
  ): MsgUndelegateFromValidatorSetAminoMsg {
    return {
      type: 'symphony/MsgUndelegateFromValidatorSet',
      value: MsgUndelegateFromValidatorSet.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgUndelegateFromValidatorSetProtoMsg,
  ): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSet): Uint8Array {
    return MsgUndelegateFromValidatorSet.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUndelegateFromValidatorSet,
  ): MsgUndelegateFromValidatorSetProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
      value: MsgUndelegateFromValidatorSet.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgUndelegateFromValidatorSet.typeUrl,
  MsgUndelegateFromValidatorSet,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgUndelegateFromValidatorSet.aminoType,
  MsgUndelegateFromValidatorSet.typeUrl,
);
function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}
/**
 * @name MsgUndelegateFromValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse
 */
export const MsgUndelegateFromValidatorSetResponse = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse',
  is(o: any): o is MsgUndelegateFromValidatorSetResponse {
    return o && o.$typeUrl === MsgUndelegateFromValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUndelegateFromValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgUndelegateFromValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUndelegateFromValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgUndelegateFromValidatorSetResponse.typeUrl;
  },
  encode(
    _: MsgUndelegateFromValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUndelegateFromValidatorSetResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgUndelegateFromValidatorSetResponse>,
  ): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  fromAmino(
    _: MsgUndelegateFromValidatorSetResponseAmino,
  ): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  toAmino(
    _: MsgUndelegateFromValidatorSetResponse,
  ): MsgUndelegateFromValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUndelegateFromValidatorSetResponseAminoMsg,
  ): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUndelegateFromValidatorSetResponseProtoMsg,
  ): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSetResponse): Uint8Array {
    return MsgUndelegateFromValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUndelegateFromValidatorSetResponse,
  ): MsgUndelegateFromValidatorSetResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse',
      value: MsgUndelegateFromValidatorSetResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgUndelegateFromValidatorSetResponse.typeUrl,
  MsgUndelegateFromValidatorSetResponse,
);
function createBaseMsgUndelegateFromRebalancedValidatorSet(): MsgUndelegateFromRebalancedValidatorSet {
  return {
    delegator: '',
    coin: Coin.fromPartial({}),
  };
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet
 */
export const MsgUndelegateFromRebalancedValidatorSet = {
  typeUrl:
    '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
  aminoType: 'symphony/MsgUndelegateFromRebalValset',
  is(o: any): o is MsgUndelegateFromRebalancedValidatorSet {
    return (
      o &&
      (o.$typeUrl === MsgUndelegateFromRebalancedValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.is(o.coin)))
    );
  },
  isSDK(o: any): o is MsgUndelegateFromRebalancedValidatorSetSDKType {
    return (
      o &&
      (o.$typeUrl === MsgUndelegateFromRebalancedValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.isSDK(o.coin)))
    );
  },
  isAmino(o: any): o is MsgUndelegateFromRebalancedValidatorSetAmino {
    return (
      o &&
      (o.$typeUrl === MsgUndelegateFromRebalancedValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' && Coin.isAmino(o.coin)))
    );
  },
  encode(
    message: MsgUndelegateFromRebalancedValidatorSet,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUndelegateFromRebalancedValidatorSet {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgUndelegateFromRebalancedValidatorSet>,
  ): MsgUndelegateFromRebalancedValidatorSet {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    message.delegator = object.delegator ?? '';
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
  fromAmino(
    object: MsgUndelegateFromRebalancedValidatorSetAmino,
  ): MsgUndelegateFromRebalancedValidatorSet {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(
    message: MsgUndelegateFromRebalancedValidatorSet,
  ): MsgUndelegateFromRebalancedValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgUndelegateFromRebalancedValidatorSetAminoMsg,
  ): MsgUndelegateFromRebalancedValidatorSet {
    return MsgUndelegateFromRebalancedValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgUndelegateFromRebalancedValidatorSet,
  ): MsgUndelegateFromRebalancedValidatorSetAminoMsg {
    return {
      type: 'symphony/MsgUndelegateFromRebalValset',
      value: MsgUndelegateFromRebalancedValidatorSet.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgUndelegateFromRebalancedValidatorSetProtoMsg,
  ): MsgUndelegateFromRebalancedValidatorSet {
    return MsgUndelegateFromRebalancedValidatorSet.decode(message.value);
  },
  toProto(message: MsgUndelegateFromRebalancedValidatorSet): Uint8Array {
    return MsgUndelegateFromRebalancedValidatorSet.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUndelegateFromRebalancedValidatorSet,
  ): MsgUndelegateFromRebalancedValidatorSetProtoMsg {
    return {
      typeUrl:
        '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
      value: MsgUndelegateFromRebalancedValidatorSet.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgUndelegateFromRebalancedValidatorSet.typeUrl,
  MsgUndelegateFromRebalancedValidatorSet,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgUndelegateFromRebalancedValidatorSet.aminoType,
  MsgUndelegateFromRebalancedValidatorSet.typeUrl,
);
function createBaseMsgUndelegateFromRebalancedValidatorSetResponse(): MsgUndelegateFromRebalancedValidatorSetResponse {
  return {};
}
/**
 * @name MsgUndelegateFromRebalancedValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse
 */
export const MsgUndelegateFromRebalancedValidatorSetResponse = {
  typeUrl:
    '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse',
  is(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponse {
    return (
      o &&
      o.$typeUrl === MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl
    );
  },
  isSDK(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponseSDKType {
    return (
      o &&
      o.$typeUrl === MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl
    );
  },
  isAmino(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponseAmino {
    return (
      o &&
      o.$typeUrl === MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl
    );
  },
  encode(
    _: MsgUndelegateFromRebalancedValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUndelegateFromRebalancedValidatorSetResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgUndelegateFromRebalancedValidatorSetResponse>,
  ): MsgUndelegateFromRebalancedValidatorSetResponse {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    return message;
  },
  fromAmino(
    _: MsgUndelegateFromRebalancedValidatorSetResponseAmino,
  ): MsgUndelegateFromRebalancedValidatorSetResponse {
    const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
    return message;
  },
  toAmino(
    _: MsgUndelegateFromRebalancedValidatorSetResponse,
  ): MsgUndelegateFromRebalancedValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg,
  ): MsgUndelegateFromRebalancedValidatorSetResponse {
    return MsgUndelegateFromRebalancedValidatorSetResponse.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg,
  ): MsgUndelegateFromRebalancedValidatorSetResponse {
    return MsgUndelegateFromRebalancedValidatorSetResponse.decode(
      message.value,
    );
  },
  toProto(
    message: MsgUndelegateFromRebalancedValidatorSetResponse,
  ): Uint8Array {
    return MsgUndelegateFromRebalancedValidatorSetResponse.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: MsgUndelegateFromRebalancedValidatorSetResponse,
  ): MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse',
      value:
        MsgUndelegateFromRebalancedValidatorSetResponse.encode(
          message,
        ).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl,
  MsgUndelegateFromRebalancedValidatorSetResponse,
);
function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: '',
    preferences: [],
  };
}
/**
 * @name MsgRedelegateValidatorSet
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet
 */
export const MsgRedelegateValidatorSet = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet',
  aminoType: 'symphony/MsgRedelegateValidatorSet',
  is(o: any): o is MsgRedelegateValidatorSet {
    return (
      o &&
      (o.$typeUrl === MsgRedelegateValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' &&
          Array.isArray(o.preferences) &&
          (!o.preferences.length || ValidatorPreference.is(o.preferences[0]))))
    );
  },
  isSDK(o: any): o is MsgRedelegateValidatorSetSDKType {
    return (
      o &&
      (o.$typeUrl === MsgRedelegateValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' &&
          Array.isArray(o.preferences) &&
          (!o.preferences.length ||
            ValidatorPreference.isSDK(o.preferences[0]))))
    );
  },
  isAmino(o: any): o is MsgRedelegateValidatorSetAmino {
    return (
      o &&
      (o.$typeUrl === MsgRedelegateValidatorSet.typeUrl ||
        (typeof o.delegator === 'string' &&
          Array.isArray(o.preferences) &&
          (!o.preferences.length ||
            ValidatorPreference.isAmino(o.preferences[0]))))
    );
  },
  encode(
    message: MsgRedelegateValidatorSet,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRedelegateValidatorSet {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(
            ValidatorPreference.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgRedelegateValidatorSet>,
  ): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? '';
    message.preferences =
      object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences =
      object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e =>
        e ? ValidatorPreference.toAmino(e) : undefined,
      );
    } else {
      obj.preferences = message.preferences;
    }
    return obj;
  },
  fromAminoMsg(
    object: MsgRedelegateValidatorSetAminoMsg,
  ): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgRedelegateValidatorSet,
  ): MsgRedelegateValidatorSetAminoMsg {
    return {
      type: 'symphony/MsgRedelegateValidatorSet',
      value: MsgRedelegateValidatorSet.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgRedelegateValidatorSetProtoMsg,
  ): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSet): Uint8Array {
    return MsgRedelegateValidatorSet.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRedelegateValidatorSet,
  ): MsgRedelegateValidatorSetProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSet',
      value: MsgRedelegateValidatorSet.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgRedelegateValidatorSet.typeUrl,
  MsgRedelegateValidatorSet,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgRedelegateValidatorSet.aminoType,
  MsgRedelegateValidatorSet.typeUrl,
);
function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}
/**
 * @name MsgRedelegateValidatorSetResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse
 */
export const MsgRedelegateValidatorSetResponse = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse',
  is(o: any): o is MsgRedelegateValidatorSetResponse {
    return o && o.$typeUrl === MsgRedelegateValidatorSetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRedelegateValidatorSetResponseSDKType {
    return o && o.$typeUrl === MsgRedelegateValidatorSetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRedelegateValidatorSetResponseAmino {
    return o && o.$typeUrl === MsgRedelegateValidatorSetResponse.typeUrl;
  },
  encode(
    _: MsgRedelegateValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRedelegateValidatorSetResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgRedelegateValidatorSetResponse>,
  ): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  fromAmino(
    _: MsgRedelegateValidatorSetResponseAmino,
  ): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  toAmino(
    _: MsgRedelegateValidatorSetResponse,
  ): MsgRedelegateValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRedelegateValidatorSetResponseAminoMsg,
  ): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRedelegateValidatorSetResponseProtoMsg,
  ): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSetResponse): Uint8Array {
    return MsgRedelegateValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRedelegateValidatorSetResponse,
  ): MsgRedelegateValidatorSetResponseProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse',
      value: MsgRedelegateValidatorSetResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgRedelegateValidatorSetResponse.typeUrl,
  MsgRedelegateValidatorSetResponse,
);
function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: '',
  };
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 * @name MsgWithdrawDelegationRewards
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards
 */
export const MsgWithdrawDelegationRewards = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
  aminoType: 'symphony/MsgWithdrawDelegationRewards',
  is(o: any): o is MsgWithdrawDelegationRewards {
    return (
      o &&
      (o.$typeUrl === MsgWithdrawDelegationRewards.typeUrl ||
        typeof o.delegator === 'string')
    );
  },
  isSDK(o: any): o is MsgWithdrawDelegationRewardsSDKType {
    return (
      o &&
      (o.$typeUrl === MsgWithdrawDelegationRewards.typeUrl ||
        typeof o.delegator === 'string')
    );
  },
  isAmino(o: any): o is MsgWithdrawDelegationRewardsAmino {
    return (
      o &&
      (o.$typeUrl === MsgWithdrawDelegationRewards.typeUrl ||
        typeof o.delegator === 'string')
    );
  },
  encode(
    message: MsgWithdrawDelegationRewards,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawDelegationRewards {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgWithdrawDelegationRewards>,
  ): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? '';
    return message;
  },
  fromAmino(
    object: MsgWithdrawDelegationRewardsAmino,
  ): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    return message;
  },
  toAmino(
    message: MsgWithdrawDelegationRewards,
  ): MsgWithdrawDelegationRewardsAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    return obj;
  },
  fromAminoMsg(
    object: MsgWithdrawDelegationRewardsAminoMsg,
  ): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgWithdrawDelegationRewards,
  ): MsgWithdrawDelegationRewardsAminoMsg {
    return {
      type: 'symphony/MsgWithdrawDelegationRewards',
      value: MsgWithdrawDelegationRewards.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgWithdrawDelegationRewardsProtoMsg,
  ): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewards): Uint8Array {
    return MsgWithdrawDelegationRewards.encode(message).finish();
  },
  toProtoMsg(
    message: MsgWithdrawDelegationRewards,
  ): MsgWithdrawDelegationRewardsProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
      value: MsgWithdrawDelegationRewards.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgWithdrawDelegationRewards.typeUrl,
  MsgWithdrawDelegationRewards,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgWithdrawDelegationRewards.aminoType,
  MsgWithdrawDelegationRewards.typeUrl,
);
function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}
/**
 * @name MsgWithdrawDelegationRewardsResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse
 */
export const MsgWithdrawDelegationRewardsResponse = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse',
  is(o: any): o is MsgWithdrawDelegationRewardsResponse {
    return o && o.$typeUrl === MsgWithdrawDelegationRewardsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWithdrawDelegationRewardsResponseSDKType {
    return o && o.$typeUrl === MsgWithdrawDelegationRewardsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWithdrawDelegationRewardsResponseAmino {
    return o && o.$typeUrl === MsgWithdrawDelegationRewardsResponse.typeUrl;
  },
  encode(
    _: MsgWithdrawDelegationRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawDelegationRewardsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgWithdrawDelegationRewardsResponse>,
  ): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  fromAmino(
    _: MsgWithdrawDelegationRewardsResponseAmino,
  ): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  toAmino(
    _: MsgWithdrawDelegationRewardsResponse,
  ): MsgWithdrawDelegationRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgWithdrawDelegationRewardsResponseAminoMsg,
  ): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgWithdrawDelegationRewardsResponseProtoMsg,
  ): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewardsResponse): Uint8Array {
    return MsgWithdrawDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgWithdrawDelegationRewardsResponse,
  ): MsgWithdrawDelegationRewardsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse',
      value: MsgWithdrawDelegationRewardsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgWithdrawDelegationRewardsResponse.typeUrl,
  MsgWithdrawDelegationRewardsResponse,
);
function createBaseMsgDelegateBondedTokens(): MsgDelegateBondedTokens {
  return {
    delegator: '',
    lockID: BigInt(0),
  };
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 * @name MsgDelegateBondedTokens
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokens
 */
export const MsgDelegateBondedTokens = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens',
  aminoType: 'symphony/MsgDelegateBondedTokens',
  is(o: any): o is MsgDelegateBondedTokens {
    return (
      o &&
      (o.$typeUrl === MsgDelegateBondedTokens.typeUrl ||
        (typeof o.delegator === 'string' && typeof o.lockID === 'bigint'))
    );
  },
  isSDK(o: any): o is MsgDelegateBondedTokensSDKType {
    return (
      o &&
      (o.$typeUrl === MsgDelegateBondedTokens.typeUrl ||
        (typeof o.delegator === 'string' && typeof o.lockID === 'bigint'))
    );
  },
  isAmino(o: any): o is MsgDelegateBondedTokensAmino {
    return (
      o &&
      (o.$typeUrl === MsgDelegateBondedTokens.typeUrl ||
        (typeof o.delegator === 'string' && typeof o.lockID === 'bigint'))
    );
  },
  encode(
    message: MsgDelegateBondedTokens,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegator !== '') {
      writer.uint32(10).string(message.delegator);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgDelegateBondedTokens {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgDelegateBondedTokens>,
  ): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    message.delegator = object.delegator ?? '';
    message.lockID =
      object.lockID !== undefined && object.lockID !== null
        ? BigInt(object.lockID.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDelegateBondedTokensAmino): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID);
    }
    return message;
  },
  toAmino(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAmino {
    const obj: any = {};
    obj.delegator = message.delegator === '' ? undefined : message.delegator;
    obj.lockID =
      message.lockID !== BigInt(0) ? message.lockID?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgDelegateBondedTokensAminoMsg,
  ): MsgDelegateBondedTokens {
    return MsgDelegateBondedTokens.fromAmino(object.value);
  },
  toAminoMsg(
    message: MsgDelegateBondedTokens,
  ): MsgDelegateBondedTokensAminoMsg {
    return {
      type: 'symphony/MsgDelegateBondedTokens',
      value: MsgDelegateBondedTokens.toAmino(message),
    };
  },
  fromProtoMsg(
    message: MsgDelegateBondedTokensProtoMsg,
  ): MsgDelegateBondedTokens {
    return MsgDelegateBondedTokens.decode(message.value);
  },
  toProto(message: MsgDelegateBondedTokens): Uint8Array {
    return MsgDelegateBondedTokens.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDelegateBondedTokens,
  ): MsgDelegateBondedTokensProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokens',
      value: MsgDelegateBondedTokens.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgDelegateBondedTokens.typeUrl,
  MsgDelegateBondedTokens,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgDelegateBondedTokens.aminoType,
  MsgDelegateBondedTokens.typeUrl,
);
function createBaseMsgDelegateBondedTokensResponse(): MsgDelegateBondedTokensResponse {
  return {};
}
/**
 * @name MsgDelegateBondedTokensResponse
 * @package symphony.valsetpref.v1beta1
 * @see proto type: symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse
 */
export const MsgDelegateBondedTokensResponse = {
  typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse',
  is(o: any): o is MsgDelegateBondedTokensResponse {
    return o && o.$typeUrl === MsgDelegateBondedTokensResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateBondedTokensResponseSDKType {
    return o && o.$typeUrl === MsgDelegateBondedTokensResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateBondedTokensResponseAmino {
    return o && o.$typeUrl === MsgDelegateBondedTokensResponse.typeUrl;
  },
  encode(
    _: MsgDelegateBondedTokensResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgDelegateBondedTokensResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    _: Partial<MsgDelegateBondedTokensResponse>,
  ): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  fromAmino(
    _: MsgDelegateBondedTokensResponseAmino,
  ): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  toAmino(
    _: MsgDelegateBondedTokensResponse,
  ): MsgDelegateBondedTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDelegateBondedTokensResponseAminoMsg,
  ): MsgDelegateBondedTokensResponse {
    return MsgDelegateBondedTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDelegateBondedTokensResponseProtoMsg,
  ): MsgDelegateBondedTokensResponse {
    return MsgDelegateBondedTokensResponse.decode(message.value);
  },
  toProto(message: MsgDelegateBondedTokensResponse): Uint8Array {
    return MsgDelegateBondedTokensResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDelegateBondedTokensResponse,
  ): MsgDelegateBondedTokensResponseProtoMsg {
    return {
      typeUrl: '/symphony.valsetpref.v1beta1.MsgDelegateBondedTokensResponse',
      value: MsgDelegateBondedTokensResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgDelegateBondedTokensResponse.typeUrl,
  MsgDelegateBondedTokensResponse,
);
