//@ts-nocheck
import {
  SuperfluidAsset,
  SuperfluidAssetAmino,
  SuperfluidAssetSDKType,
} from '../superfluid';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 * @name SetSuperfluidAssetsProposal
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export interface SetSuperfluidAssetsProposal {
  $typeUrl?: '/symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal';
  title: string;
  description: string;
  assets: SuperfluidAsset[];
}
export interface SetSuperfluidAssetsProposalProtoMsg {
  typeUrl: '/symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal';
  value: Uint8Array;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 * @name SetSuperfluidAssetsProposalAmino
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export interface SetSuperfluidAssetsProposalAmino {
  title?: string;
  description?: string;
  assets?: SuperfluidAssetAmino[];
}
export interface SetSuperfluidAssetsProposalAminoMsg {
  type: 'symphony/set-superfluid-assets-proposal';
  value: SetSuperfluidAssetsProposalAmino;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 * @name SetSuperfluidAssetsProposalSDKType
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export interface SetSuperfluidAssetsProposalSDKType {
  $typeUrl?: '/symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal';
  title: string;
  description: string;
  assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 * @name RemoveSuperfluidAssetsProposal
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export interface RemoveSuperfluidAssetsProposal {
  $typeUrl?: '/symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal';
  title: string;
  description: string;
  superfluidAssetDenoms: string[];
}
export interface RemoveSuperfluidAssetsProposalProtoMsg {
  typeUrl: '/symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal';
  value: Uint8Array;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 * @name RemoveSuperfluidAssetsProposalAmino
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export interface RemoveSuperfluidAssetsProposalAmino {
  title?: string;
  description?: string;
  superfluid_asset_denoms?: string[];
}
export interface RemoveSuperfluidAssetsProposalAminoMsg {
  type: 'symphony/del-superfluid-assets-proposal';
  value: RemoveSuperfluidAssetsProposalAmino;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 * @name RemoveSuperfluidAssetsProposalSDKType
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
  $typeUrl?: '/symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal';
  title: string;
  description: string;
  superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 * @name UpdateUnpoolWhiteListProposal
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal
 */
export interface UpdateUnpoolWhiteListProposal {
  $typeUrl?: '/symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal';
  title: string;
  description: string;
  ids: bigint[];
  isOverwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalProtoMsg {
  typeUrl: '/symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal';
  value: Uint8Array;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 * @name UpdateUnpoolWhiteListProposalAmino
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal
 */
export interface UpdateUnpoolWhiteListProposalAmino {
  title?: string;
  description?: string;
  ids?: string[];
  is_overwrite?: boolean;
}
export interface UpdateUnpoolWhiteListProposalAminoMsg {
  type: 'symphony/update-unpool-whitelist';
  value: UpdateUnpoolWhiteListProposalAmino;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 * @name UpdateUnpoolWhiteListProposalSDKType
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
  $typeUrl?: '/symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal';
  title: string;
  description: string;
  ids: bigint[];
  is_overwrite: boolean;
}
function createBaseSetSuperfluidAssetsProposal(): SetSuperfluidAssetsProposal {
  return {
    $typeUrl: '/symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal',
    title: '',
    description: '',
    assets: [],
  };
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 * @name SetSuperfluidAssetsProposal
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export const SetSuperfluidAssetsProposal = {
  typeUrl: '/symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal',
  aminoType: 'symphony/set-superfluid-assets-proposal',
  is(o: any): o is SetSuperfluidAssetsProposal {
    return (
      o &&
      (o.$typeUrl === SetSuperfluidAssetsProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.assets) &&
          (!o.assets.length || SuperfluidAsset.is(o.assets[0]))))
    );
  },
  isSDK(o: any): o is SetSuperfluidAssetsProposalSDKType {
    return (
      o &&
      (o.$typeUrl === SetSuperfluidAssetsProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.assets) &&
          (!o.assets.length || SuperfluidAsset.isSDK(o.assets[0]))))
    );
  },
  isAmino(o: any): o is SetSuperfluidAssetsProposalAmino {
    return (
      o &&
      (o.$typeUrl === SetSuperfluidAssetsProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.assets) &&
          (!o.assets.length || SuperfluidAsset.isAmino(o.assets[0]))))
    );
  },
  encode(
    message: SetSuperfluidAssetsProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): SetSuperfluidAssetsProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSuperfluidAssetsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<SetSuperfluidAssetsProposal>,
  ): SetSuperfluidAssetsProposal {
    const message = createBaseSetSuperfluidAssetsProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.assets =
      object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: SetSuperfluidAssetsProposalAmino,
  ): SetSuperfluidAssetsProposal {
    const message = createBaseSetSuperfluidAssetsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.assets =
      object.assets?.map(e => SuperfluidAsset.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: SetSuperfluidAssetsProposal,
  ): SetSuperfluidAssetsProposalAmino {
    const obj: any = {};
    obj.title = message.title === '' ? undefined : message.title;
    obj.description =
      message.description === '' ? undefined : message.description;
    if (message.assets) {
      obj.assets = message.assets.map(e =>
        e ? SuperfluidAsset.toAmino(e) : undefined,
      );
    } else {
      obj.assets = message.assets;
    }
    return obj;
  },
  fromAminoMsg(
    object: SetSuperfluidAssetsProposalAminoMsg,
  ): SetSuperfluidAssetsProposal {
    return SetSuperfluidAssetsProposal.fromAmino(object.value);
  },
  toAminoMsg(
    message: SetSuperfluidAssetsProposal,
  ): SetSuperfluidAssetsProposalAminoMsg {
    return {
      type: 'symphony/set-superfluid-assets-proposal',
      value: SetSuperfluidAssetsProposal.toAmino(message),
    };
  },
  fromProtoMsg(
    message: SetSuperfluidAssetsProposalProtoMsg,
  ): SetSuperfluidAssetsProposal {
    return SetSuperfluidAssetsProposal.decode(message.value);
  },
  toProto(message: SetSuperfluidAssetsProposal): Uint8Array {
    return SetSuperfluidAssetsProposal.encode(message).finish();
  },
  toProtoMsg(
    message: SetSuperfluidAssetsProposal,
  ): SetSuperfluidAssetsProposalProtoMsg {
    return {
      typeUrl: '/symphony.superfluid.v1beta1.SetSuperfluidAssetsProposal',
      value: SetSuperfluidAssetsProposal.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  SetSuperfluidAssetsProposal.typeUrl,
  SetSuperfluidAssetsProposal,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  SetSuperfluidAssetsProposal.aminoType,
  SetSuperfluidAssetsProposal.typeUrl,
);
function createBaseRemoveSuperfluidAssetsProposal(): RemoveSuperfluidAssetsProposal {
  return {
    $typeUrl: '/symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal',
    title: '',
    description: '',
    superfluidAssetDenoms: [],
  };
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 * @name RemoveSuperfluidAssetsProposal
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export const RemoveSuperfluidAssetsProposal = {
  typeUrl: '/symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal',
  aminoType: 'symphony/del-superfluid-assets-proposal',
  is(o: any): o is RemoveSuperfluidAssetsProposal {
    return (
      o &&
      (o.$typeUrl === RemoveSuperfluidAssetsProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.superfluidAssetDenoms) &&
          (!o.superfluidAssetDenoms.length ||
            typeof o.superfluidAssetDenoms[0] === 'string')))
    );
  },
  isSDK(o: any): o is RemoveSuperfluidAssetsProposalSDKType {
    return (
      o &&
      (o.$typeUrl === RemoveSuperfluidAssetsProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.superfluid_asset_denoms) &&
          (!o.superfluid_asset_denoms.length ||
            typeof o.superfluid_asset_denoms[0] === 'string')))
    );
  },
  isAmino(o: any): o is RemoveSuperfluidAssetsProposalAmino {
    return (
      o &&
      (o.$typeUrl === RemoveSuperfluidAssetsProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.superfluid_asset_denoms) &&
          (!o.superfluid_asset_denoms.length ||
            typeof o.superfluid_asset_denoms[0] === 'string')))
    );
  },
  encode(
    message: RemoveSuperfluidAssetsProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.superfluidAssetDenoms) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RemoveSuperfluidAssetsProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSuperfluidAssetsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.superfluidAssetDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<RemoveSuperfluidAssetsProposal>,
  ): RemoveSuperfluidAssetsProposal {
    const message = createBaseRemoveSuperfluidAssetsProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.superfluidAssetDenoms =
      object.superfluidAssetDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(
    object: RemoveSuperfluidAssetsProposalAmino,
  ): RemoveSuperfluidAssetsProposal {
    const message = createBaseRemoveSuperfluidAssetsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.superfluidAssetDenoms =
      object.superfluid_asset_denoms?.map(e => e) || [];
    return message;
  },
  toAmino(
    message: RemoveSuperfluidAssetsProposal,
  ): RemoveSuperfluidAssetsProposalAmino {
    const obj: any = {};
    obj.title = message.title === '' ? undefined : message.title;
    obj.description =
      message.description === '' ? undefined : message.description;
    if (message.superfluidAssetDenoms) {
      obj.superfluid_asset_denoms = message.superfluidAssetDenoms.map(e => e);
    } else {
      obj.superfluid_asset_denoms = message.superfluidAssetDenoms;
    }
    return obj;
  },
  fromAminoMsg(
    object: RemoveSuperfluidAssetsProposalAminoMsg,
  ): RemoveSuperfluidAssetsProposal {
    return RemoveSuperfluidAssetsProposal.fromAmino(object.value);
  },
  toAminoMsg(
    message: RemoveSuperfluidAssetsProposal,
  ): RemoveSuperfluidAssetsProposalAminoMsg {
    return {
      type: 'symphony/del-superfluid-assets-proposal',
      value: RemoveSuperfluidAssetsProposal.toAmino(message),
    };
  },
  fromProtoMsg(
    message: RemoveSuperfluidAssetsProposalProtoMsg,
  ): RemoveSuperfluidAssetsProposal {
    return RemoveSuperfluidAssetsProposal.decode(message.value);
  },
  toProto(message: RemoveSuperfluidAssetsProposal): Uint8Array {
    return RemoveSuperfluidAssetsProposal.encode(message).finish();
  },
  toProtoMsg(
    message: RemoveSuperfluidAssetsProposal,
  ): RemoveSuperfluidAssetsProposalProtoMsg {
    return {
      typeUrl: '/symphony.superfluid.v1beta1.RemoveSuperfluidAssetsProposal',
      value: RemoveSuperfluidAssetsProposal.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  RemoveSuperfluidAssetsProposal.typeUrl,
  RemoveSuperfluidAssetsProposal,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  RemoveSuperfluidAssetsProposal.aminoType,
  RemoveSuperfluidAssetsProposal.typeUrl,
);
function createBaseUpdateUnpoolWhiteListProposal(): UpdateUnpoolWhiteListProposal {
  return {
    $typeUrl: '/symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal',
    title: '',
    description: '',
    ids: [],
    isOverwrite: false,
  };
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 * @name UpdateUnpoolWhiteListProposal
 * @package symphony.superfluid.v1beta1
 * @see proto type: symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal
 */
export const UpdateUnpoolWhiteListProposal = {
  typeUrl: '/symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal',
  aminoType: 'symphony/update-unpool-whitelist',
  is(o: any): o is UpdateUnpoolWhiteListProposal {
    return (
      o &&
      (o.$typeUrl === UpdateUnpoolWhiteListProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.ids) &&
          (!o.ids.length || typeof o.ids[0] === 'bigint') &&
          typeof o.isOverwrite === 'boolean'))
    );
  },
  isSDK(o: any): o is UpdateUnpoolWhiteListProposalSDKType {
    return (
      o &&
      (o.$typeUrl === UpdateUnpoolWhiteListProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.ids) &&
          (!o.ids.length || typeof o.ids[0] === 'bigint') &&
          typeof o.is_overwrite === 'boolean'))
    );
  },
  isAmino(o: any): o is UpdateUnpoolWhiteListProposalAmino {
    return (
      o &&
      (o.$typeUrl === UpdateUnpoolWhiteListProposal.typeUrl ||
        (typeof o.title === 'string' &&
          typeof o.description === 'string' &&
          Array.isArray(o.ids) &&
          (!o.ids.length || typeof o.ids[0] === 'bigint') &&
          typeof o.is_overwrite === 'boolean'))
    );
  },
  encode(
    message: UpdateUnpoolWhiteListProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.isOverwrite === true) {
      writer.uint32(32).bool(message.isOverwrite);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UpdateUnpoolWhiteListProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUnpoolWhiteListProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        case 4:
          message.isOverwrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<UpdateUnpoolWhiteListProposal>,
  ): UpdateUnpoolWhiteListProposal {
    const message = createBaseUpdateUnpoolWhiteListProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    message.isOverwrite = object.isOverwrite ?? false;
    return message;
  },
  fromAmino(
    object: UpdateUnpoolWhiteListProposalAmino,
  ): UpdateUnpoolWhiteListProposal {
    const message = createBaseUpdateUnpoolWhiteListProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    if (object.is_overwrite !== undefined && object.is_overwrite !== null) {
      message.isOverwrite = object.is_overwrite;
    }
    return message;
  },
  toAmino(
    message: UpdateUnpoolWhiteListProposal,
  ): UpdateUnpoolWhiteListProposalAmino {
    const obj: any = {};
    obj.title = message.title === '' ? undefined : message.title;
    obj.description =
      message.description === '' ? undefined : message.description;
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    obj.is_overwrite =
      message.isOverwrite === false ? undefined : message.isOverwrite;
    return obj;
  },
  fromAminoMsg(
    object: UpdateUnpoolWhiteListProposalAminoMsg,
  ): UpdateUnpoolWhiteListProposal {
    return UpdateUnpoolWhiteListProposal.fromAmino(object.value);
  },
  toAminoMsg(
    message: UpdateUnpoolWhiteListProposal,
  ): UpdateUnpoolWhiteListProposalAminoMsg {
    return {
      type: 'symphony/update-unpool-whitelist',
      value: UpdateUnpoolWhiteListProposal.toAmino(message),
    };
  },
  fromProtoMsg(
    message: UpdateUnpoolWhiteListProposalProtoMsg,
  ): UpdateUnpoolWhiteListProposal {
    return UpdateUnpoolWhiteListProposal.decode(message.value);
  },
  toProto(message: UpdateUnpoolWhiteListProposal): Uint8Array {
    return UpdateUnpoolWhiteListProposal.encode(message).finish();
  },
  toProtoMsg(
    message: UpdateUnpoolWhiteListProposal,
  ): UpdateUnpoolWhiteListProposalProtoMsg {
    return {
      typeUrl: '/symphony.superfluid.v1beta1.UpdateUnpoolWhiteListProposal',
      value: UpdateUnpoolWhiteListProposal.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  UpdateUnpoolWhiteListProposal.typeUrl,
  UpdateUnpoolWhiteListProposal,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  UpdateUnpoolWhiteListProposal.aminoType,
  UpdateUnpoolWhiteListProposal.typeUrl,
);
