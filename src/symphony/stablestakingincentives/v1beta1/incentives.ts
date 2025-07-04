//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/**
 * @name Params
 * @package symphony.stablestakingincentives.v1beta1
 * @see proto type: symphony.stablestakingincentives.v1beta1.Params
 */
export interface Params {
  /**
   * distribution_contract_address is the address of the distribution contract that receives the minted coins
   * and distributes them to the stable coin stakers.
   */
  distributionContractAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: '/symphony.stablestakingincentives.v1beta1.Params';
  value: Uint8Array;
}
/**
 * @name ParamsAmino
 * @package symphony.stablestakingincentives.v1beta1
 * @see proto type: symphony.stablestakingincentives.v1beta1.Params
 */
export interface ParamsAmino {
  /**
   * distribution_contract_address is the address of the distribution contract that receives the minted coins
   * and distributes them to the stable coin stakers.
   */
  distribution_contract_address?: string;
}
export interface ParamsAminoMsg {
  type: '/symphony.stablestakingincentives.v1beta1.Params';
  value: ParamsAmino;
}
/**
 * @name ParamsSDKType
 * @package symphony.stablestakingincentives.v1beta1
 * @see proto type: symphony.stablestakingincentives.v1beta1.Params
 */
export interface ParamsSDKType {
  distribution_contract_address: string;
}
function createBaseParams(): Params {
  return {
    distributionContractAddress: '',
  };
}
/**
 * @name Params
 * @package symphony.stablestakingincentives.v1beta1
 * @see proto type: symphony.stablestakingincentives.v1beta1.Params
 */
export const Params = {
  typeUrl: '/symphony.stablestakingincentives.v1beta1.Params',
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        typeof o.distributionContractAddress === 'string')
    );
  },
  isSDK(o: any): o is ParamsSDKType {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        typeof o.distribution_contract_address === 'string')
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        typeof o.distribution_contract_address === 'string')
    );
  },
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.distributionContractAddress !== '') {
      writer.uint32(10).string(message.distributionContractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributionContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionContractAddress =
      object.distributionContractAddress ?? '';
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (
      object.distribution_contract_address !== undefined &&
      object.distribution_contract_address !== null
    ) {
      message.distributionContractAddress =
        object.distribution_contract_address;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_contract_address =
      message.distributionContractAddress === ''
        ? undefined
        : message.distributionContractAddress;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: '/symphony.stablestakingincentives.v1beta1.Params',
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
