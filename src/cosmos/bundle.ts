//@ts-nocheck
import * as _2 from './app/runtime/v1alpha1/module';
import * as _3 from './auth/module/v1/module';
import * as _4 from './auth/v1beta1/auth';
import * as _5 from './auth/v1beta1/genesis';
import * as _6 from './auth/v1beta1/query';
import * as _7 from './auth/v1beta1/tx';
import * as _8 from './authz/module/v1/module';
import * as _9 from './authz/v1beta1/authz';
import * as _10 from './authz/v1beta1/event';
import * as _11 from './authz/v1beta1/genesis';
import * as _12 from './authz/v1beta1/query';
import * as _13 from './authz/v1beta1/tx';
import * as _14 from './bank/module/v1/module';
import * as _15 from './bank/v1beta1/authz';
import * as _16 from './bank/v1beta1/bank';
import * as _17 from './bank/v1beta1/genesis';
import * as _18 from './bank/v1beta1/query';
import * as _19 from './bank/v1beta1/tx';
import * as _20 from './base/abci/v1beta1/abci';
import * as _21 from './base/node/v1beta1/query';
import * as _22 from './base/query/v1beta1/pagination';
import * as _23 from './base/reflection/v2alpha1/reflection';
import * as _24 from './base/v1beta1/coin';
import * as _25 from './circuit/module/v1/module';
import * as _26 from './circuit/v1/query';
import * as _27 from './circuit/v1/tx';
import * as _28 from './circuit/v1/types';
import * as _29 from './consensus/module/v1/module';
import * as _30 from './consensus/v1/query';
import * as _31 from './consensus/v1/tx';
import * as _32 from './crisis/module/v1/module';
import * as _33 from './crypto/ed25519/keys';
import * as _34 from './crypto/hd/v1/hd';
import * as _35 from './crypto/keyring/v1/record';
import * as _36 from './crypto/multisig/keys';
import * as _37 from './crypto/secp256k1/keys';
import * as _38 from './crypto/secp256r1/keys';
import * as _39 from './distribution/module/v1/module';
import * as _40 from './distribution/v1beta1/distribution';
import * as _41 from './distribution/v1beta1/genesis';
import * as _42 from './distribution/v1beta1/query';
import * as _43 from './distribution/v1beta1/tx';
import * as _44 from './evidence/module/v1/module';
import * as _45 from './feegrant/module/v1/module';
import * as _46 from './genutil/module/v1/module';
import * as _47 from './gov/module/v1/module';
import * as _48 from './gov/v1beta1/genesis';
import * as _49 from './gov/v1beta1/gov';
import * as _50 from './gov/v1beta1/query';
import * as _51 from './gov/v1beta1/tx';
import * as _52 from './group/module/v1/module';
import * as _53 from './mint/module/v1/module';
import * as _54 from './msg/textual/v1/textual';
import * as _55 from './nft/module/v1/module';
import * as _56 from './orm/module/v1alpha1/module';
import * as _57 from './orm/query/v1alpha1/query';
import * as _58 from './params/module/v1/module';
import * as _59 from './query/v1/query';
import * as _60 from './reflection/v1/reflection';
import * as _61 from './slashing/module/v1/module';
import * as _62 from './staking/module/v1/module';
import * as _63 from './staking/v1beta1/authz';
import * as _64 from './staking/v1beta1/genesis';
import * as _65 from './staking/v1beta1/query';
import * as _66 from './staking/v1beta1/staking';
import * as _67 from './staking/v1beta1/tx';
import * as _68 from './store/internal/kv/v1beta1/kv';
import * as _69 from './store/snapshots/v1/snapshot';
import * as _70 from './store/streaming/abci/grpc';
import * as _71 from './store/v1beta1/commit_info';
import * as _72 from './store/v1beta1/listening';
import * as _73 from './tx/config/v1/config';
import * as _74 from './tx/signing/v1beta1/signing';
import * as _75 from './tx/v1beta1/service';
import * as _76 from './tx/v1beta1/tx';
import * as _77 from './upgrade/module/v1/module';
import * as _78 from './upgrade/v1beta1/query';
import * as _79 from './upgrade/v1beta1/tx';
import * as _80 from './upgrade/v1beta1/upgrade';
import * as _81 from './vesting/module/v1/module';
import * as _209 from './auth/v1beta1/tx.amino';
import * as _210 from './authz/v1beta1/tx.amino';
import * as _211 from './bank/v1beta1/tx.amino';
import * as _212 from './circuit/v1/tx.amino';
import * as _213 from './consensus/v1/tx.amino';
import * as _214 from './distribution/v1beta1/tx.amino';
import * as _215 from './gov/v1beta1/tx.amino';
import * as _216 from './staking/v1beta1/tx.amino';
import * as _217 from './upgrade/v1beta1/tx.amino';
import * as _218 from './auth/v1beta1/tx.registry';
import * as _219 from './authz/v1beta1/tx.registry';
import * as _220 from './bank/v1beta1/tx.registry';
import * as _221 from './circuit/v1/tx.registry';
import * as _222 from './consensus/v1/tx.registry';
import * as _223 from './distribution/v1beta1/tx.registry';
import * as _224 from './gov/v1beta1/tx.registry';
import * as _225 from './staking/v1beta1/tx.registry';
import * as _226 from './upgrade/v1beta1/tx.registry';
import * as _227 from './auth/v1beta1/query.lcd';
import * as _228 from './authz/v1beta1/query.lcd';
import * as _229 from './bank/v1beta1/query.lcd';
import * as _230 from './base/node/v1beta1/query.lcd';
import * as _231 from './circuit/v1/query.lcd';
import * as _232 from './consensus/v1/query.lcd';
import * as _233 from './distribution/v1beta1/query.lcd';
import * as _234 from './gov/v1beta1/query.lcd';
import * as _235 from './staking/v1beta1/query.lcd';
import * as _236 from './tx/v1beta1/service.lcd';
import * as _237 from './upgrade/v1beta1/query.lcd';
import * as _238 from './auth/v1beta1/query.rpc.Query';
import * as _239 from './authz/v1beta1/query.rpc.Query';
import * as _240 from './bank/v1beta1/query.rpc.Query';
import * as _241 from './base/node/v1beta1/query.rpc.Service';
import * as _242 from './circuit/v1/query.rpc.Query';
import * as _243 from './consensus/v1/query.rpc.Query';
import * as _244 from './distribution/v1beta1/query.rpc.Query';
import * as _245 from './gov/v1beta1/query.rpc.Query';
import * as _246 from './orm/query/v1alpha1/query.rpc.Query';
import * as _247 from './staking/v1beta1/query.rpc.Query';
import * as _248 from './tx/v1beta1/service.rpc.Service';
import * as _249 from './upgrade/v1beta1/query.rpc.Query';
import * as _250 from './auth/v1beta1/tx.rpc.msg';
import * as _251 from './authz/v1beta1/tx.rpc.msg';
import * as _252 from './bank/v1beta1/tx.rpc.msg';
import * as _253 from './circuit/v1/tx.rpc.msg';
import * as _254 from './consensus/v1/tx.rpc.msg';
import * as _255 from './distribution/v1beta1/tx.rpc.msg';
import * as _256 from './gov/v1beta1/tx.rpc.msg';
import * as _257 from './staking/v1beta1/tx.rpc.msg';
import * as _258 from './upgrade/v1beta1/tx.rpc.msg';
import * as _355 from './lcd';
import * as _356 from './rpc.query';
import * as _357 from './rpc.tx';
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2,
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3,
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._209,
      ..._218,
      ..._227,
      ..._238,
      ..._250,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8,
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._210,
      ..._219,
      ..._228,
      ..._239,
      ..._251,
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14,
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._211,
      ..._220,
      ..._229,
      ..._240,
      ..._252,
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._230,
        ..._241,
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22,
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23,
      };
    }
    export const v1beta1 = {
      ..._24,
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._25,
      };
    }
    export const v1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._212,
      ..._221,
      ..._231,
      ..._242,
      ..._253,
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._29,
      };
    }
    export const v1 = {
      ..._30,
      ..._31,
      ..._213,
      ..._222,
      ..._232,
      ..._243,
      ..._254,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._32,
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33,
    };
    export namespace hd {
      export const v1 = {
        ..._34,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35,
      };
    }
    export const multisig = {
      ..._36,
    };
    export const secp256k1 = {
      ..._37,
    };
    export const secp256r1 = {
      ..._38,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._39,
      };
    }
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._214,
      ..._223,
      ..._233,
      ..._244,
      ..._255,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._44,
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._45,
      };
    }
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._46,
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._47,
      };
    }
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._215,
      ..._224,
      ..._234,
      ..._245,
      ..._256,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._52,
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._53,
      };
    }
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._54,
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._55,
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._56,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._57,
        ..._246,
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._58,
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._59,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._60,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._61,
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._62,
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._216,
      ..._225,
      ..._235,
      ..._247,
      ..._257,
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._68,
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._69,
      };
    }
    export namespace streaming {
      export const abci = {
        ..._70,
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._73,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._74,
      };
    }
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._236,
      ..._248,
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._77,
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._217,
      ..._226,
      ..._237,
      ..._249,
      ..._258,
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._81,
      };
    }
  }
  export const ClientFactory = {
    ..._355,
    ..._356,
    ..._357,
  };
}
