//@ts-nocheck
import {
  MsgAggregateExchangeRatePrevote,
  MsgAggregateExchangeRateVote,
  MsgDelegateFeedConsent,
} from './tx';
export const AminoConverter = {
  '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote': {
    aminoType: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote',
    toAmino: MsgAggregateExchangeRatePrevote.toAmino,
    fromAmino: MsgAggregateExchangeRatePrevote.fromAmino,
  },
  '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote': {
    aminoType: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote',
    toAmino: MsgAggregateExchangeRateVote.toAmino,
    fromAmino: MsgAggregateExchangeRateVote.fromAmino,
  },
  '/symphony.oracle.v1beta1.MsgDelegateFeedConsent': {
    aminoType: '/symphony.oracle.v1beta1.MsgDelegateFeedConsent',
    toAmino: MsgDelegateFeedConsent.toAmino,
    fromAmino: MsgDelegateFeedConsent.fromAmino,
  },
};
