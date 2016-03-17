SystemJS.config({
  transpiler: "plugin-typescript",
  trace: true,
  packages: {
    "angular-starter-kit": {
      "defaultExtension": "ts",
      "main": "app/app.main",
      "format": "esm",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  typescriptOptions: {
    "tsconfig": true
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "angular-material": "github:angular/bower-material@1.0.6",
    "angular2": "npm:angular2@2.0.0-beta.9",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "es6-promise": "npm:es6-promise@3.1.2",
    "es6-shim": "github:es-shims/es6-shim@0.35.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.2",
    "scss": "github:mobilexag/plugin-sass@0.3.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.6",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "typings": "npm:typings@0.7.9",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.5.15"
  },
  packages: {
    "github:angular/bower-angular-animate@1.5.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1"
      }
    },
    "github:angular/bower-angular-aria@1.5.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1"
      }
    },
    "github:angular/bower-material@1.0.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1",
        "angular-animate": "github:angular/bower-angular-animate@1.5.1",
        "angular-aria": "github:angular/bower-angular-aria@1.5.1",
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "github:capaj/systemjs-hot-reloader@0.5.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-client": "github:socketio/socket.io-client@1.4.5",
        "weakee": "npm:weakee@1.0.0"
      }
    },
    "github:frankwallis/plugin-typescript@4.0.2": {
      "map": {
        "typescript": "npm:typescript@1.8.7"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.0"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "map": {
        "url": "npm:url@0.10.3"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:mobilexag/plugin-sass@0.3.0": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.3.3",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "lodash": "npm:lodash@3.10.1",
        "path": "github:jspm/nodelibs-path@0.1.0",
        "postcss": "npm:postcss@5.0.19",
        "reqwest": "github:ded/reqwest@2.0.5",
        "sass.js": "npm:sass.js@0.9.7",
        "url": "github:jspm/nodelibs-url@0.1.0"
      }
    },
    "npm:agent-base@2.0.1": {
      "map": {
        "extend": "npm:extend@3.0.0",
        "semver": "npm:semver@5.0.3"
      }
    },
    "npm:ansi-styles@2.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.0.0"
      }
    },
    "npm:asn1.js@4.5.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:autoprefixer@6.3.3": {
      "map": {
        "browserslist": "npm:browserslist@1.1.3",
        "caniuse-db": "npm:caniuse-db@1.0.30000431",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:boxen@0.3.1": {
      "map": {
        "chalk": "npm:chalk@1.1.1",
        "filled-array": "npm:filled-array@1.1.0",
        "object-assign": "npm:object-assign@4.0.1",
        "repeating": "npm:repeating@2.0.0",
        "string-width": "npm:string-width@1.0.1",
        "widest-line": "npm:widest-line@1.0.0"
      }
    },
    "npm:brace-expansion@1.1.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.3.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.2.3",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:browserslist@1.1.3": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000431"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:code-point-at@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:columnify@1.5.4": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wcwidth": "npm:wcwidth@1.0.0"
      }
    },
    "npm:combined-stream@0.0.7": {
      "map": {
        "delayed-stream": "npm:delayed-stream@0.0.5"
      }
    },
    "npm:concat-stream@1.5.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:configstore@1.4.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "object-assign": "npm:object-assign@4.0.1",
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "osenv": "npm:osenv@0.1.3",
        "uuid": "npm:uuid@2.0.1",
        "write-file-atomic": "npm:write-file-atomic@1.1.4",
        "xdg-basedir": "npm:xdg-basedir@2.0.0"
      }
    },
    "npm:configstore@2.0.0": {
      "map": {
        "dot-prop": "npm:dot-prop@2.4.0",
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "object-assign": "npm:object-assign@4.0.1",
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "osenv": "npm:osenv@0.1.3",
        "uuid": "npm:uuid@2.0.1",
        "write-file-atomic": "npm:write-file-atomic@1.1.4",
        "xdg-basedir": "npm:xdg-basedir@2.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "elliptic": "npm:elliptic@6.2.3"
      }
    },
    "npm:create-error-class@2.0.1": {
      "map": {
        "capture-stack-trace": "npm:capture-stack-trace@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:defaults@1.0.3": {
      "map": {
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:detect-indent@4.0.0": {
      "map": {
        "repeating": "npm:repeating@2.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:dot-prop@2.4.0": {
      "map": {
        "is-obj": "npm:is-obj@1.0.0"
      }
    },
    "npm:duplexer2@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:elliptic@6.2.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:form-data@0.2.0": {
      "map": {
        "async": "npm:async@0.9.2",
        "combined-stream": "npm:combined-stream@0.0.7",
        "mime-types": "npm:mime-types@2.0.14"
      }
    },
    "npm:glob@7.0.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:got@5.5.0": {
      "map": {
        "create-error-class": "npm:create-error-class@2.0.1",
        "duplexer2": "npm:duplexer2@0.1.4",
        "is-plain-obj": "npm:is-plain-obj@1.1.0",
        "is-redirect": "npm:is-redirect@1.0.0",
        "is-retry-allowed": "npm:is-retry-allowed@1.0.0",
        "is-stream": "npm:is-stream@1.0.1",
        "lowercase-keys": "npm:lowercase-keys@1.0.0",
        "node-status-codes": "npm:node-status-codes@1.0.0",
        "node-unzip-response": "npm:unzip-response@1.0.0",
        "object-assign": "npm:object-assign@4.0.1",
        "parse-json": "npm:parse-json@2.2.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0",
        "read-all-stream": "npm:read-all-stream@3.1.0",
        "readable-stream": "npm:readable-stream@2.0.6",
        "timed-out": "npm:timed-out@2.0.0",
        "unzip-response": "npm:unzip-response@1.0.0",
        "url-parse-lax": "npm:url-parse-lax@1.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:http-proxy-agent@1.0.0": {
      "map": {
        "agent-base": "npm:agent-base@2.0.1",
        "debug": "npm:debug@2.2.0",
        "extend": "npm:extend@3.0.0"
      }
    },
    "npm:https-proxy-agent@1.0.0": {
      "map": {
        "agent-base": "npm:agent-base@2.0.1",
        "debug": "npm:debug@2.2.0",
        "extend": "npm:extend@3.0.0"
      }
    },
    "npm:inflight@1.0.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-absolute@0.2.3": {
      "map": {
        "is-relative": "npm:is-relative@0.2.1",
        "is-windows": "npm:is-windows@0.1.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-relative@0.2.1": {
      "map": {
        "is-unc-path": "npm:is-unc-path@0.1.1"
      }
    },
    "npm:is-unc-path@0.1.1": {
      "map": {
        "unc-path-regex": "npm:unc-path-regex@0.1.1"
      }
    },
    "npm:latest-version@2.0.0": {
      "map": {
        "package-json": "npm:package-json@2.3.1"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.2"
      }
    },
    "npm:make-error-cause@1.1.0": {
      "map": {
        "make-error": "npm:make-error@1.1.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-types@2.0.14": {
      "map": {
        "mime-db": "npm:mime-db@1.12.0"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:nopt@1.0.10": {
      "map": {
        "abbrev": "npm:abbrev@1.0.7"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:osenv@0.1.3": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.1",
        "os-tmpdir": "npm:os-tmpdir@1.0.1"
      }
    },
    "npm:package-json@2.3.1": {
      "map": {
        "got": "npm:got@5.5.0",
        "rc": "npm:rc@1.1.6",
        "registry-url": "npm:registry-url@3.0.3",
        "semver": "npm:semver@5.1.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.5.2",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:pinkie-promise@2.0.0": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:popsicle-proxy-agent@1.0.0": {
      "map": {
        "http-proxy-agent": "npm:http-proxy-agent@1.0.0",
        "https-proxy-agent": "npm:https-proxy-agent@1.0.0"
      }
    },
    "npm:popsicle-retry@1.0.1": {
      "map": {
        "any-promise": "npm:any-promise@1.1.0"
      }
    },
    "npm:popsicle@4.0.0": {
      "map": {
        "any-promise": "npm:any-promise@1.1.0",
        "arrify": "npm:arrify@1.0.1",
        "concat-stream": "npm:concat-stream@1.5.1",
        "form-data": "npm:form-data@0.2.0",
        "make-error-cause": "npm:make-error-cause@1.1.0",
        "methods": "npm:methods@1.1.2",
        "node-form-data": "npm:form-data@0.2.0",
        "node-tough-cookie": "npm:tough-cookie@2.2.2",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:postcss@5.0.19": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.3",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:promise-finally@2.1.0": {
      "map": {
        "any-promise": "npm:any-promise@1.1.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1",
        "ini": "npm:ini@1.3.4",
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:read-all-stream@3.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.0",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:registry-url@3.0.3": {
      "map": {
        "rc": "npm:rc@1.1.6"
      }
    },
    "npm:repeating@2.0.0": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:rimraf@2.5.2": {
      "map": {
        "glob": "npm:glob@7.0.3"
      }
    },
    "npm:semver-diff@2.1.0": {
      "map": {
        "semver": "npm:semver@5.1.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:sort-keys@1.1.1": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-http@2.2.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:string-width@1.0.1": {
      "map": {
        "code-point-at": "npm:code-point-at@1.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:thenify@3.2.0": {
      "map": {
        "any-promise": "npm:any-promise@1.1.0"
      }
    },
    "npm:touch@1.0.0": {
      "map": {
        "nopt": "npm:nopt@1.0.10"
      }
    },
    "npm:typings-core@0.2.11": {
      "map": {
        "any-promise": "npm:any-promise@1.1.0",
        "array-uniq": "npm:array-uniq@1.0.2",
        "configstore": "npm:configstore@2.0.0",
        "debug": "npm:debug@2.2.0",
        "detect-indent": "npm:detect-indent@4.0.0",
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "has": "npm:has@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "is-absolute": "npm:is-absolute@0.2.3",
        "lockfile": "npm:lockfile@1.0.1",
        "make-error-cause": "npm:make-error-cause@1.1.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "object.pick": "npm:object.pick@1.1.1",
        "parse-json": "npm:parse-json@2.2.0",
        "popsicle": "npm:popsicle@4.0.0",
        "popsicle-proxy-agent": "npm:popsicle-proxy-agent@1.0.0",
        "popsicle-retry": "npm:popsicle-retry@1.0.1",
        "popsicle-status": "npm:popsicle-status@1.0.1",
        "promise-finally": "npm:promise-finally@2.1.0",
        "rc": "npm:rc@1.1.6",
        "rimraf": "npm:rimraf@2.5.2",
        "sort-keys": "npm:sort-keys@1.1.1",
        "string-template": "npm:string-template@1.0.0",
        "strip-bom": "npm:strip-bom@2.0.0",
        "thenify": "npm:thenify@3.2.0",
        "touch": "npm:touch@1.0.0",
        "typescript": "npm:typescript@1.8.7",
        "xtend": "npm:xtend@4.0.1",
        "zip-object": "npm:zip-object@0.1.0"
      }
    },
    "npm:typings@0.7.9": {
      "map": {
        "any-promise": "npm:any-promise@1.1.0",
        "archy": "npm:archy@1.0.0",
        "bluebird": "npm:bluebird@3.3.4",
        "chalk": "npm:chalk@1.1.1",
        "columnify": "npm:columnify@1.5.4",
        "listify": "npm:listify@1.0.0",
        "minimist": "npm:minimist@1.2.0",
        "typings-core": "npm:typings-core@0.2.11",
        "update-notifier": "npm:update-notifier@0.6.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:update-notifier@0.6.2": {
      "map": {
        "boxen": "npm:boxen@0.3.1",
        "chalk": "npm:chalk@1.1.1",
        "configstore": "npm:configstore@1.4.0",
        "is-npm": "npm:is-npm@1.0.0",
        "latest-version": "npm:latest-version@2.0.0",
        "semver-diff": "npm:semver-diff@2.1.0"
      }
    },
    "npm:url-parse-lax@1.0.0": {
      "map": {
        "prepend-http": "npm:prepend-http@1.0.3"
      }
    },
    "npm:url@0.10.3": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:wcwidth@1.0.0": {
      "map": {
        "defaults": "npm:defaults@1.0.3"
      }
    },
    "npm:widest-line@1.0.0": {
      "map": {
        "string-width": "npm:string-width@1.0.1"
      }
    },
    "npm:write-file-atomic@1.1.4": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.3",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "slide": "npm:slide@1.1.6"
      }
    },
    "npm:xdg-basedir@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.1"
      }
    },
    "npm:zone.js@0.5.15": {
      "map": {
        "es6-promise": "npm:es6-promise@3.1.2"
      }
    }
  }
});
