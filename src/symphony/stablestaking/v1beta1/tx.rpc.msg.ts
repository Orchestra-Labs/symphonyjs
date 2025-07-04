//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgStakeTokens, MsgStakeTokensResponse, MsgUnstakeTokens, MsgUnstakeTokensResponse } from "./tx";
export interface Msg {
  stakeTokens(request: MsgStakeTokens): Promise<MsgStakeTokensResponse>;
  unstakeTokens(request: MsgUnstakeTokens): Promise<MsgUnstakeTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.stakeTokens = this.stakeTokens.bind(this);
    this.unstakeTokens = this.unstakeTokens.bind(this);
  }
  stakeTokens(request: MsgStakeTokens): Promise<MsgStakeTokensResponse> {
    const data = MsgStakeTokens.encode(request).finish();
    const promise = this.rpc.request("symphony.stablestaking.v1beta1.Msg", "StakeTokens", data);
    return promise.then(data => MsgStakeTokensResponse.decode(new BinaryReader(data)));
  }
  unstakeTokens(request: MsgUnstakeTokens): Promise<MsgUnstakeTokensResponse> {
    const data = MsgUnstakeTokens.encode(request).finish();
    const promise = this.rpc.request("symphony.stablestaking.v1beta1.Msg", "UnstakeTokens", data);
    return promise.then(data => MsgUnstakeTokensResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};