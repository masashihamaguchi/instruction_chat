(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?s(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("f36a"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(t){return o(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):s(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Du})),n.d(t,"b",(function(){return Cc})),n.d(t,"c",(function(){return pc})),n.d(t,"d",(function(){return rc})),n.d(t,"e",(function(){return cu})),n.d(t,"f",(function(){return Ac})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return xc})),n.d(t,"i",(function(){return uu})),n.d(t,"j",(function(){return lu})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return Lu})),n.d(t,"m",(function(){return Ga})),n.d(t,"n",(function(){return ae})),n.d(t,"o",(function(){return H})),n.d(t,"p",(function(){return Xa})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return Q})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return $a})),n.d(t,"u",(function(){return $u})),n.d(t,"v",(function(){return il})),n.d(t,"w",(function(){return rl})),n.d(t,"x",(function(){return _c})),n.d(t,"y",(function(){return oc})),n.d(t,"z",(function(){return ac})),n.d(t,"A",(function(){return nc})),n.d(t,"B",(function(){return Hu})),n.d(t,"C",(function(){return tl})),n.d(t,"D",(function(){return Ec})),n.d(t,"E",(function(){return cc})),n.d(t,"F",(function(){return vc})),n.d(t,"G",(function(){return bc})),n.d(t,"H",(function(){return Tc})),n.d(t,"I",(function(){return Au})),n.d(t,"J",(function(){return Ou})),n.d(t,"K",(function(){return gc})),n.d(t,"L",(function(){return Yu})),n.d(t,"M",(function(){return Fu})),n.d(t,"N",(function(){return Vu})),n.d(t,"O",(function(){return qu})),n.d(t,"P",(function(){return Bu})),n.d(t,"Q",(function(){return zu})),n.d(t,"R",(function(){return Ku})),n.d(t,"S",(function(){return sl})),n.d(t,"T",(function(){return _u})),n.d(t,"U",(function(){return Iu})),n.d(t,"V",(function(){return Sc})),n.d(t,"W",(function(){return kc})),n.d(t,"X",(function(){return Qu})),n.d(t,"Y",(function(){return Ju})),n.d(t,"Z",(function(){return bu})),n.d(t,"ab",(function(){return mu})),n.d(t,"bb",(function(){return lc})),n.d(t,"cb",(function(){return uc})),n.d(t,"db",(function(){return el})),n.d(t,"eb",(function(){return nl})),n.d(t,"fb",(function(){return Gu})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return du})),n.d(t,"ib",(function(){return Su})),n.d(t,"jb",(function(){return Eu})),n.d(t,"kb",(function(){return Wu})),n.d(t,"lb",(function(){return Ic})),n.d(t,"mb",(function(){return yu}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||v()}function w(e,t){e||v()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new u(e)}}class C{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class N{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable(()=>(e=>(null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message),t(e.token)))(n))};const n=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),new x(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.I=-1;class P{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function L(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function F(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new U(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new U(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function B(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===K.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof K?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends K{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new G(t)}static emptyPath(){return new G([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends K{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return W.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new J(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new J(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(e){if(b(!!e),"string"==typeof e){let t=0;const n=Y.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ee(e){return"string"==typeof e?J.fromBase64String(e):J.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ne(e){const t=e.mapValue.fields.__previous_value__;return te(t)?ne(t):t}function re(e){const t=X(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return null==e}function se(e){return 0===e&&1/e==-1/0}function oe(e){return"number"==typeof e&&Number.isInteger(e)&&!se(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(G.fromString(e))}static fromName(e){return new ae(G.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===G.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new G(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?te(e)?4:10:v()}function ue(e,t){const n=ce(e);if(n!==ce(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return re(e).isEqual(re(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=X(e.timestampValue),r=X(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ee(e.bytesValue).isEqual(ee(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Z(e.geoPointValue.latitude)===Z(t.geoPointValue.latitude)&&Z(e.geoPointValue.longitude)===Z(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Z(e.integerValue)===Z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Z(e.doubleValue),r=Z(t.doubleValue);return n===r?se(n)===se(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],ue);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(q(n)!==q(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ue(n[i],r[i])))return!1;return!0}(e,t);default:return v()}}function le(e,t){return void 0!==(e.values||[]).find(e=>ue(e,t))}function he(e,t){const n=ce(e),r=ce(t);if(n!==r)return L(n,r);switch(n){case 0:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Z(e.integerValue||e.doubleValue),r=Z(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return de(e.timestampValue,t.timestampValue);case 4:return de(re(e),re(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ee(e),r=ee(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=L(n[i],r[i]);if(0!==e)return e}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=L(Z(e.latitude),Z(t.latitude));return 0!==n?n:L(Z(e.longitude),Z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=he(n[i],r[i]);if(e)return e}return L(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=L(r[o],s[o]);if(0!==e)return e;const t=he(n[r[o]],i[s[o]]);if(0!==t)return t}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function de(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);const n=X(e),r=X(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function fe(e){return pe(e)}function pe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=X(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ae.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=pe(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${pe(e.fields[i])}`;return n+"}"}(e.mapValue):v();var t,n}function me(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ge(e){return!!e&&"integerValue"in e}function ye(e){return!!e&&"arrayValue"in e}function ve(e){return!!e&&"nullValue"in e}function be(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function we(e){return!!e&&"mapValue"in e}function _e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return B(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=_e(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_e(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!we(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_e(t)}setAll(e){let t=H.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_e(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());we(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];we(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){B(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ie(_e(this.value))}}function Te(e){const t=[];return B(e.fields,(e,n)=>{const r=new H([e]);if(we(n)){const e=Te(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new $(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ee{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ee(e,0,V.min(),Ie.empty(),0)}static newFoundDocument(e,t,n){return new Ee(e,1,t,n,0)}static newNoDocument(e,t){return new Ee(e,2,t,Ie.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,Ie.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ee(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function ke(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Se(e,t,n,r,i,s,o)}function Oe(e){const t=_(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Re(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ie(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Be(t.startAt)),t.endAt&&(e+="|ub:",e+=Be(t.endAt)),t.R=e}return t.R}function Ae(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${fe(t.value)}`;var t}).join(", ")}]`),ie(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Be(e.startAt)),e.endAt&&(t+=", endAt: "+Be(e.endAt)),`Target(${t})`}function Ce(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ke(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ue(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!We(e.startAt,t.startAt)&&We(e.endAt,t.endAt)}function Ne(e){return ae.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class xe extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new De(e,t,n):"array-contains"===t?new Me(e,n):"in"===t?new Fe(e,n):"not-in"===t?new Ue(e,n):"array-contains-any"===t?new Ve(e,n):new xe(e,t,n)}static P(e,t,n){return"in"===t?new je(e,n):new Pe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(he(t,this.value)):null!==t&&ce(this.value)===ce(t)&&this.v(he(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Re(e){return e.field.canonicalString()+e.op.toString()+fe(e.value)}class De extends xe{constructor(e,t,n){super(e,t,n),this.key=ae.fromName(n.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.v(t)}}class je extends xe{constructor(e,t){super(e,"in",t),this.keys=Le("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pe extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Le("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Le(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ae.fromName(e.referenceValue))}class Me extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ye(t)&&le(t.arrayValue,this.value)}}class Fe extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&le(this.value.arrayValue,t)}}class Ue extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!le(this.value.arrayValue,t)}}class Ve extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ye(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>le(this.value.arrayValue,e))}}class qe{constructor(e,t){this.position=e,this.before=t}}function Be(e){return`${e.before?"b":"a"}:${e.position.map(e=>fe(e)).join(",")}`}class ze{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ke(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ge(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ae.comparator(ae.fromName(o.referenceValue),n.key):he(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function We(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ue(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function $e(e,t,n,r,i,s,o,a){return new He(e,t,n,r,i,s,o,a)}function Qe(e){return new He(e)}function Je(e){return!ie(e.limit)&&"F"===e.limitType}function Ye(e){return!ie(e.limit)&&"L"===e.limitType}function Xe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ze(e){for(const t of e.filters)if(t.V())return t.field;return null}function et(e){return null!==e.collectionGroup}function tt(e){const t=_(e);if(null===t.S){t.S=[];const e=Ze(t),n=Xe(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new ze(e)),t.S.push(new ze(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new ze(H.keyField(),e))}}}return t.S}function nt(e){const t=_(e);if(!t.D)if("F"===t.limitType)t.D=ke(t.path,t.collectionGroup,tt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of tt(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ze(i.field,t))}const n=t.endAt?new qe(t.endAt.position,!t.endAt.before):null,r=t.startAt?new qe(t.startAt.position,!t.startAt.before):null;t.D=ke(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function rt(e,t,n){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function it(e,t){return Ce(nt(e),nt(t))&&e.limitType===t.limitType}function st(e){return`${Oe(nt(e))}|lt:${e.limitType}`}function ot(e){return`Query(target=${Ae(nt(e))}; limitType=${e.limitType})`}function at(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ae.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Ge(e.startAt,tt(e),t))&&(!e.endAt||!Ge(e.endAt,tt(e),t))}(e,t)}function ct(e){return(t,n)=>{let r=!1;for(const i of tt(e)){const e=ut(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ut(e,t,n){const r=e.field.isKeyField()?ae.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?he(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:se(t)?"-0":t}}function ht(e){return{integerValue:""+e}}function dt(e,t){return oe(t)?ht(t):lt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this._=void 0}}function pt(e,t,n){return e instanceof yt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof vt?bt(e,t):e instanceof wt?_t(e,t):function(e,t){const n=gt(e,t),r=Tt(n)+Tt(e.N);return ge(n)&&ge(e.N)?ht(r):lt(e.k,r)}(e,t)}function mt(e,t,n){return e instanceof vt?bt(e,t):e instanceof wt?_t(e,t):n}function gt(e,t){return e instanceof It?ge(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class yt extends ft{}class vt extends ft{constructor(e){super(),this.elements=e}}function bt(e,t){const n=Et(t);for(const r of e.elements)n.some(e=>ue(e,r))||n.push(r);return{arrayValue:{values:n}}}class wt extends ft{constructor(e){super(),this.elements=e}}function _t(e,t){let n=Et(t);for(const r of e.elements)n=n.filter(e=>!ue(e,r));return{arrayValue:{values:n}}}class It extends ft{constructor(e,t){super(),this.k=e,this.N=t}}function Tt(e){return Z(e.integerValue||e.doubleValue)}function Et(e){return ye(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.field=e,this.transform=t}}function kt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof vt&&t instanceof vt||e instanceof wt&&t instanceof wt?M(e.elements,t.elements,ue):e instanceof It&&t instanceof It?ue(e.N,t.N):e instanceof yt&&t instanceof yt}(e.transform,t.transform)}class Ot{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ct(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Nt{}function xt(e,t,n){e instanceof Lt?function(e,t,n){const r=e.value.clone(),i=Ut(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!Ct(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ut(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ft(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Rt(e,t,n){e instanceof Lt?function(e,t,n){if(!Ct(e.precondition,t))return;const r=e.value.clone(),i=Vt(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Pt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!Ct(e.precondition,t))return;const r=Vt(e.fieldTransforms,n,t),i=t.data;i.setAll(Ft(e)),i.setAll(r),t.convertToFoundDocument(Pt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Ct(e.precondition,t)&&t.convertToNoDocument(V.min())}(e,t)}function Dt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gt(r.transform,e||null);null!=i&&(null==n&&(n=Ie.empty()),n.set(r.field,i))}return n||null}function jt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>kt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Pt(e){return e.isFoundDocument()?e.version:V.min()}class Lt extends Nt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Mt extends Nt{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ft(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ut(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mt(o,a,n[i]))}return r}function Vt(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,pt(e,s,t))}return r}class qt extends Nt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Bt extends Nt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt,Gt;function Wt(e){switch(e){default:return v();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ht(e){if(void 0===e)return m("GRPC error has no .code"),I.UNKNOWN;switch(e){case Kt.OK:return I.OK;case Kt.CANCELLED:return I.CANCELLED;case Kt.UNKNOWN:return I.UNKNOWN;case Kt.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Kt.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Kt.INTERNAL:return I.INTERNAL;case Kt.UNAVAILABLE:return I.UNAVAILABLE;case Kt.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Kt.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Kt.NOT_FOUND:return I.NOT_FOUND;case Kt.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Kt.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Kt.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Kt.ABORTED:return I.ABORTED;case Kt.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Kt.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Kt.DATA_LOSS:return I.DATA_LOSS;default:return v()}}(Gt=Kt||(Kt={}))[Gt.OK=0]="OK",Gt[Gt.CANCELLED=1]="CANCELLED",Gt[Gt.UNKNOWN=2]="UNKNOWN",Gt[Gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gt[Gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gt[Gt.NOT_FOUND=5]="NOT_FOUND",Gt[Gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gt[Gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gt[Gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gt[Gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gt[Gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gt[Gt.ABORTED=10]="ABORTED",Gt[Gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gt[Gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gt[Gt.INTERNAL=13]="INTERNAL",Gt[Gt.UNAVAILABLE=14]="UNAVAILABLE",Gt[Gt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new $t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new $t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qt(this.root,e,this.comparator,!0)}}class Qt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Jt.RED,this.left=null!=r?r:Jt.EMPTY,this.right=null!=i?i:Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Jt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Jt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1,Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e){this.comparator=e,this.data=new $t(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xt(this.data.getIterator())}getIteratorFrom(e){return new Xt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Yt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Yt(this.comparator);return t.data=e,t}}class Xt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new $t(ae.comparator);function en(){return Zt}const tn=new $t(ae.comparator);function nn(){return tn}const rn=new $t(ae.comparator);function sn(){return rn}const on=new Yt(ae.comparator);function an(...e){let t=on;for(const n of e)t=t.add(n);return t}const cn=new Yt(L);function un(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,hn.createSynthesizedTargetChangeForCurrentChange(e,t)),new ln(V.min(),n,un(),en(),an())}}class hn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new hn(J.EMPTY_BYTE_STRING,t,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class fn{constructor(e,t){this.targetId=e,this.O=t}}class pn{constructor(e,t,n=J.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class mn{constructor(){this.M=0,this.L=vn(),this.B=J.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=an(),t=an(),n=an();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new hn(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=vn()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class gn{constructor(e){this.et=e,this.nt=new Map,this.st=en(),this.it=yn(),this.rt=new Yt(L)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach((e,n)=>{this.lt(n)&&t(n)})}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(Ne(e))if(0===n){const n=new ae(e.path);this.ct(t,n,Ee.newNoDocument(n,V.min()))}else b(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ne(i.target)){const t=new ae(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,Ee.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}});let n=an();this.it.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))});const r=new ln(e,t,this.rt,this.st,n);return this.st=en(),this.it=yn(),this.rt=new Yt(L),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new mn,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Yt(L),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new mn),this.et.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function yn(){return new $t(ae.comparator)}function vn(){return new $t(ae.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),wn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _n{constructor(e,t){this.databaseId=e,this.C=t}}function In(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tn(e,t){return e.C?t.toBase64():t.toUint8Array()}function En(e,t){return In(e,t.toTimestamp())}function Sn(e){return b(!!e),V.fromTimestamp(function(e){const t=X(e);return new U(t.seconds,t.nanos)}(e))}function kn(e,t){return function(e){return new G(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function On(e){const t=G.fromString(e);return b(tr(t)),t}function An(e,t){return kn(e.databaseId,t.path)}function Cn(e,t){const n=On(t);if(n.get(1)!==e.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ae(Dn(n))}function Nn(e,t){return kn(e.databaseId,t)}function xn(e){const t=On(e);return 4===t.length?G.emptyPath():Dn(t)}function Rn(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dn(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function jn(e,t,n){return{name:An(e,t),fields:n.value.mapValue.fields}}function Pn(e,t,n){const r=Cn(e,t.name),i=Sn(t.updateTime),s=new Ie({mapValue:{fields:t.fields}}),o=Ee.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ln(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=Cn(e,t.found.name),r=Sn(t.found.updateTime),i=new Ie({mapValue:{fields:t.found.fields}});return Ee.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=Cn(e,t.missing),r=Sn(t.readTime);return Ee.newNoDocument(n,r)}(e,t):v()}function Mn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(b(void 0===t||"string"==typeof t),J.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),J.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:Ht(e.code);return new T(t,e.message||"")}(o);n=new pn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cn(e,r.document.name),s=Sn(r.document.updateTime),o=new Ie({mapValue:{fields:r.document.fields}}),a=Ee.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new dn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Cn(e,r.document),s=r.readTime?Sn(r.readTime):V.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Cn(e,r.document),s=r.removedTargetIds||[];n=new dn([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new zt(r),s=e.targetId;n=new fn(s,i)}}return n}function Fn(e,t){let n;if(t instanceof Lt)n={update:jn(e,t.key,t.value)};else if(t instanceof qt)n={delete:An(e,t.key)};else if(t instanceof Mt)n={update:jn(e,t.key,t.data),updateMask:er(t.fieldMask)};else{if(!(t instanceof Bt))return v();n={verify:An(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof yt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof It)return{fieldPath:t.field.canonicalString(),increment:n.N};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:En(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function Un(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?At.updateTime(Sn(e.updateTime)):void 0!==e.exists?At.exists(e.exists):At.none()}(t.currentDocument):At.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new yt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new vt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new wt(e)}else"increment"in t?n=new It(e,t.increment):v();const r=H.fromServerFormat(t.fieldPath);return new St(r,n)}(e,t)):[];if(t.update){t.update.name;const i=Cn(e,t.update.name),s=new Ie({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new $(t.map(e=>H.fromServerFormat(e)))}(t.updateMask);return new Mt(i,s,e,n,r)}return new Lt(i,s,n,r)}if(t.delete){const r=Cn(e,t.delete);return new qt(r,n)}if(t.verify){const r=Cn(e,t.verify);return new Bt(r,n)}return v()}function Vn(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Sn(e.updateTime):Sn(t);return n.isEqual(V.min())&&(n=Sn(t)),new Ot(n,e.transformResults||[])}(e,t))):[]}function qn(e,t){return{documents:[Nn(e,t.path)]}}function Bn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Nn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Nn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(be(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NAN"}};if(ve(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(be(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NOT_NAN"}};if(ve(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(e.field),op:Qn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Jn(e.field),direction:$n(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||ie(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Wn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Wn(t.endAt)),n}function zn(e){let t=xn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Gn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new ze(Yn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ie(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Hn(n.startAt));let u=null;return n.endAt&&(u=Hn(n.endAt)),$e(t,i,o,s,a,"F",c,u)}function Kn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Gn(e){return e?void 0!==e.unaryFilter?[Zn(e)]:void 0!==e.fieldFilter?[Xn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Gn(e)).reduce((e,t)=>e.concat(t)):v():[]}function Wn(e){return{before:e.before,values:e.position}}function Hn(e){const t=!!e.before,n=e.values||[];return new qe(n,t)}function $n(e){return bn[e]}function Qn(e){return wn[e]}function Jn(e){return{fieldPath:e.canonicalString()}}function Yn(e){return H.fromServerFormat(e.fieldPath)}function Xn(e){return xe.create(Yn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yn(e.unaryFilter.field);return xe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(e.unaryFilter.field);return xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(e.unaryFilter.field);return xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yn(e.unaryFilter.field);return xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function er(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function tr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ir(t)),t=rr(e.get(n),t);return ir(t)}function rr(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ir(e){return e+""}function sr(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),G.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&v(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:v()}s=t+2}return new G(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class ar{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}ar.store="owner",ar.key="owner";class cr{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}cr.store="mutationQueues",cr.keyPath="userId";class ur{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ur.store="mutations",ur.keyPath="batchId",ur.userMutationsIndex="userMutationsIndex",ur.userMutationsKeyPath=["userId","batchId"];class lr{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,nr(t)]}static key(e,t,n){return[e,nr(t),n]}}lr.store="documentMutations",lr.PLACEHOLDER=new lr;class hr{constructor(e,t){this.path=e,this.readTime=t}}class dr{constructor(e,t){this.path=e,this.version=t}}class fr{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}fr.store="remoteDocuments",fr.readTimeIndex="readTimeIndex",fr.readTimeIndexPath="readTime",fr.collectionReadTimeIndex="collectionReadTimeIndex",fr.collectionReadTimeIndexPath=["parentPath","readTime"];class pr{constructor(e){this.byteSize=e}}pr.store="remoteDocumentGlobal",pr.key="remoteDocumentGlobalKey";class mr{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}mr.store="targets",mr.keyPath="targetId",mr.queryTargetsIndexName="queryTargetsIndex",mr.queryTargetsKeyPath=["canonicalId","targetId"];class gr{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}gr.store="targetDocuments",gr.keyPath=["targetId","path"],gr.documentTargetsIndex="documentTargetsIndex",gr.documentTargetsKeyPath=["path","targetId"];class yr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}yr.key="targetGlobalKey",yr.store="targetGlobal";class vr{constructor(e,t){this.collectionId=e,this.parent=t}}vr.store="collectionParents",vr.keyPath=["collectionId","parent"];class br{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}br.store="clientMetadata",br.keyPath="clientId";class wr{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}wr.store="bundles",wr.keyPath="bundleId";class _r{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}_r.store="namedQueries",_r.keyPath="name";const Ir=[cr.store,ur.store,lr.store,fr.store,mr.store,ar.store,yr.store,gr.store,br.store,pr.store,vr.store,wr.store,_r.store],Tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Sr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Sr?t:Sr.resolve(t)}catch(e){return Sr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Sr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Sr.reject(t)}static resolve(e){return new Sr((t,n)=>{t(e)})}static reject(e){return new Sr((t,n)=>{n(e)})}static waitFor(e){return new Sr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Sr.resolve(!1);for(const n of e)t=t.next(e=>e?Sr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.It=new E,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{t.error?this.It.reject(new Cr(e,t.error)):this.It.resolve()},this.transaction.onerror=t=>{const n=jr(t.target.error);this.It.reject(new Cr(e,n))}}static open(e,t,n,r){try{return new kr(t,e.transaction(r,n))}catch(e){throw new Cr(t,e)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new xr(t)}}class Or{constructor(e,t,n){this.name=e,this.version=t,this.Rt=n,12.2===Or.Pt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),Rr(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Object(o["r"])())return!1;if(Or.vt())return!0;const e=Object(o["l"])(),t=Or.Pt(e),n=0<t&&t<10,r=Or.Vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static vt(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:""}))||void 0===t?void 0:t.St)}static Dt(e,t){return e.store(t)}static Pt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Cr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Cr(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Rt.Nt(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=e=>this.kt(e)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Ct(e);const t=kr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch(e=>(t.abort(e),Sr.reject(e))).toPromise();return s.catch(()=>{}),await t.At,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ar{constructor(e){this.$t=e,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(e){this.$t=e}done(){this.Ft=!0}Lt(e){this.Ot=e}delete(){return Rr(this.$t.delete())}}class Cr extends T{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Nr(e){return"IndexedDbTransactionError"===e.name}class xr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Rr(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Rr(this.store.add(e))}get(e){return Rr(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Rr(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Rr(this.store.count())}Bt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Ut(n,(e,t)=>{r.push(t)}).next(()=>r)}qt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Kt=!1;const r=this.cursor(n);return this.Ut(r,(e,t,n)=>n.delete())}jt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Ut(r,t)}Qt(e){const t=this.cursor({});return new Sr((n,r)=>{t.onerror=e=>{const t=jr(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Ut(e,t){const n=[];return new Sr((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Ar(i),o=t(i.primaryKey,i.value,s);if(o instanceof Sr){const e=o.catch(e=>(s.done(),Sr.reject(e)));n.push(e)}s.isDone?r():null===s.Mt?i.continue():i.continue(s.Mt)}}).next(()=>Sr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Kt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rr(e){return new Sr((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=jr(e.target.error);n(t)}})}let Dr=!1;function jr(e){const t=Or.Pt(Object(o["l"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dr||(Dr=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Er{constructor(e,t){super(),this.Wt=e,this.currentSequenceNumber=t}}function Lr(e,t){const n=_(e);return Or.Dt(n.Wt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&xt(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Rt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Rt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),an())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>jt(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>jt(e,t))}}class Fr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=sn();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Fr(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n,r,i=V.min(),s=V.min(),o=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.Gt=e}}function qr(e,t){if(t.document)return Pn(e.Gt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=ae.fromSegments(t.noDocument.path),n=Wr(t.noDocument.readTime),r=Ee.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=ae.fromSegments(t.unknownDocument.path),n=Wr(t.unknownDocument.version);return Ee.newUnknownDocument(e,n)}return v()}function Br(e,t,n){const r=zr(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:An(e,t.key),fields:t.data.value.mapValue.fields,updateTime:In(e,t.version.toTimestamp())}}(e.Gt,t),s=t.hasCommittedMutations;return new fr(null,null,n,s,r,i)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=Gr(t.version),s=t.hasCommittedMutations;return new fr(null,new hr(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=Gr(t.version);return new fr(new dr(e,n),null,null,!0,r,i)}return v()}function zr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Kr(e){const t=new U(e[0],e[1]);return V.fromTimestamp(t)}function Gr(e){const t=e.toTimestamp();return new or(t.seconds,t.nanoseconds)}function Wr(e){const t=new U(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function Hr(e,t){const n=(t.baseMutations||[]).map(t=>Un(e.Gt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>Un(e.Gt,t)),i=U.fromMillis(t.localWriteTimeMs);return new Mr(t.batchId,i,n,r)}function $r(e){const t=Wr(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Wr(e.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=nt(Qe(xn(i.documents[0])))):r=function(e){return nt(zn(e))}(e.query),new Ur(r,e.targetId,0,e.lastListenSequenceNumber,t,n,J.fromBase64String(e.resumeToken))}function Qr(e,t){const n=Gr(t.snapshotVersion),r=Gr(t.lastLimboFreeSnapshotVersion);let i;i=Ne(t.target)?qn(e.Gt,t.target):Bn(e.Gt,t.target);const s=t.resumeToken.toBase64();return new mr(t.targetId,Oe(t.target),n,s,t.sequenceNumber,r,i)}function Jr(e){const t=zn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{getBundleMetadata(e,t){return Xr(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Wr(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Xr(e).put({bundleId:(n=t).id,createTime:Gr(Sn(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Zr(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Jr(t.bundledQuery),readTime:Wr(t.readTime)};var t})}saveNamedQuery(e,t){return Zr(e).put(function(e){return{name:e.name,readTime:Gr(Sn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Xr(e){return Lr(e,wr.store)}function Zr(e){return Lr(e,_r.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.zt=new ti}addToCollectionParentIndex(e,t){return this.zt.add(t),Sr.resolve()}getCollectionParents(e,t){return Sr.resolve(this.zt.getEntries(t))}}class ti{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yt(G.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yt(G.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.Ht=new ti}addToCollectionParentIndex(e,t){if(!this.Ht.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ht.add(t)});const i={collectionId:n,parent:nr(r)};return ri(e).put(i)}return Sr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[F(t),""],!1,!0);return ri(e).Bt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(sr(r.parent))}return n})}}function ri(e){return Lr(e,vr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class si{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new si(e,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t,n){const r=e.store(ur.store),i=e.store(lr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const e=lr.key(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Sr.waitFor(s).next(()=>u)}function ai(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.DEFAULT_COLLECTION_PERCENTILE=10,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,si.DEFAULT=new si(41943040,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),si.DISABLED=new si(-1,0,0);class ci{constructor(e,t,n,r){this.userId=e,this.k=t,this.Jt=n,this.referenceDelegate=r,this.Yt={}}static Xt(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new ci(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return li(e).jt({index:ur.userMutationsIndex,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=hi(e),s=li(e);return s.add({}).next(o=>{b("number"==typeof o);const a=new Mr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Fn(e.Gt,t)),i=n.mutations.map(t=>Fn(e.Gt,t));return new ur(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.k,this.userId,a),u=[];let l=new Yt((e,t)=>L(e.canonicalString(),t.canonicalString()));for(const e of r){const t=lr.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,lr.PLACEHOLDER))}return l.forEach(t=>{u.push(this.Jt.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),Sr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return li(e).get(t).next(e=>e?(b(e.userId===this.userId),Hr(this.k,e)):null)}Zt(e,t){return this.Yt[t]?Sr.resolve(this.Yt[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Yt[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return li(e).jt({index:ur.userMutationsIndex,range:r},(e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=Hr(this.k,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return li(e).jt({index:ur.userMutationsIndex,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return li(e).Bt(ur.userMutationsIndex,t).next(e=>e.map(e=>Hr(this.k,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=lr.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return hi(e).jt({range:r},(n,r,s)=>{const[o,a,c]=n,u=sr(a);if(o===this.userId&&t.path.isEqual(u))return li(e).get(c).next(e=>{if(!e)throw v();b(e.userId===this.userId),i.push(Hr(this.k,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(L);const r=[];return t.forEach(t=>{const i=lr.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=hi(e).jt({range:s},(e,r,i)=>{const[s,o,a]=e,c=sr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Sr.waitFor(r).next(()=>this.te(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=lr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Yt(L);return hi(e).jt({range:s},(e,t,i)=>{const[s,a,c]=e,u=sr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.te(e,o))}te(e,t){const n=[],r=[];return t.forEach(t=>{r.push(li(e).get(t).next(e=>{if(null===e)throw v();b(e.userId===this.userId),n.push(Hr(this.k,e))}))}),Sr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return oi(e.Wt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.ee(t.batchId)}),Sr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Sr.resolve();const n=IDBKeyRange.lowerBound(lr.prefixForUser(this.userId)),r=[];return hi(e).jt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=sr(e[1]);r.push(t)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(e,t){return ui(e,this.userId,t)}ne(e){return di(e).get(this.userId).next(e=>e||new cr(this.userId,-1,""))}}function ui(e,t,n){const r=lr.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return hi(e).jt({range:s,Kt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function li(e){return Lr(e,ur.store)}function hi(e){return Lr(e,lr.store)}function di(e){return Lr(e,cr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new fi(0)}static re(){return new fi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.referenceDelegate=e,this.k=t}allocateTargetId(e){return this.oe(e).next(t=>{const n=new fi(t.highestTargetId);return t.highestTargetId=n.next(),this.ae(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(e=>V.fromTimestamp(new U(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.oe(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.ae(e,r)))}addTargetData(e,t){return this.ce(e,t).next(()=>this.oe(e).next(n=>(n.targetCount+=1,this.ue(t,n),this.ae(e,n))))}updateTargetData(e,t){return this.ce(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>mi(e).delete(t.targetId)).next(()=>this.oe(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.ae(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return mi(e).jt((s,o)=>{const a=$r(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Sr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return mi(e).jt((e,n)=>{const r=$r(n);t(r)})}oe(e){return gi(e).get(yr.key).next(e=>(b(null!==e),e))}ae(e,t){return gi(e).put(yr.key,t)}ce(e,t){return mi(e).put(Qr(this.k,t))}ue(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.oe(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Oe(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return mi(e).jt({range:r,index:mr.queryTargetsIndexName},(e,n,r)=>{const s=$r(n);Ce(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=yi(e);return t.forEach(t=>{const s=nr(t.path);r.push(i.put(new gr(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))}),Sr.waitFor(r)}removeMatchingKeys(e,t,n){const r=yi(e);return Sr.forEach(t,t=>{const i=nr(t.path);return Sr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=yi(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=yi(e);let i=an();return r.jt({range:n,Kt:!0},(e,t,n)=>{const r=sr(e[1]),s=new ae(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=nr(t.path),r=IDBKeyRange.bound([n],[F(n)],!1,!0);let i=0;return yi(e).jt({index:gr.documentTargetsIndex,Kt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return mi(e).get(t).next(e=>e?$r(e):null)}}function mi(e){return Lr(e,mr.store)}function gi(e){return Lr(e,yr.store)}function yi(e){return Lr(e,gr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==Tr)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi([e,t],[n,r]){const i=L(e,n);return 0===i?L(t,r):i}class wi{constructor(e){this.he=e,this.buffer=new Yt(bi),this.le=0}fe(){return++this.le}de(e){const t=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();bi(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _i{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.we=!1,this._e=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(e){const t=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Nr(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await vi(e)}await this.me(e)})}}class Ii{constructor(e,t){this.ge=e,this.params=t}calculateTargetCount(e,t){return this.ge.ye(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Sr.resolve(D.I);const n=new wi(t);return this.ge.forEachTarget(e,e=>n.de(e.sequenceNumber)).next(()=>this.ge.pe(e,e=>n.de(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.ge.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.ge.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Sr.resolve(ii)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ii):this.Te(e,t))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Sr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ii(e,t)}(this,t)}ye(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Ee(e){let t=0;return this.pe(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pe(e,t){return this.Ie(e,(e,n)=>t(n))}addReference(e,t,n){return Ei(e,n)}removeReference(e,t,n){return Ei(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ei(e,t)}Ae(e,t){return function(e,t){let n=!1;return di(e).Qt(r=>ui(e,r,t).next(e=>(e&&(n=!0),Sr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ie(e,(s,o)=>{if(o<=t){const t=this.Ae(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s),yi(e).delete([0,nr(s.path)])))});r.push(t)}}).next(()=>Sr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ei(e,t)}Ie(e,t){const n=yi(e);let r,i=D.I;return n.jt({index:gr.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==D.I&&t(new ae(sr(r)),i),i=o,r=s):i=D.I}).next(()=>{i!==D.I&&t(new ae(sr(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ei(e,t){return yi(e).put(function(e,t){return new gr(0,nr(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){B(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return z(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.changes=new Si(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:V.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Ee.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Sr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.k=e,this.Jt=t}addEntry(e,t,n){return Ni(e).put(xi(t),n)}removeEntry(e,t){const n=Ni(e),r=xi(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Re(e,n)))}getEntry(e,t){return Ni(e).get(xi(t)).next(e=>this.Pe(t,e))}be(e,t){return Ni(e).get(xi(t)).next(e=>({document:this.Pe(t,e),size:ai(e)}))}getEntries(e,t){let n=en();return this.ve(e,t,(e,t)=>{const r=this.Pe(e,t);n=n.insert(e,r)}).next(()=>n)}Ve(e,t){let n=en(),r=new $t(ae.comparator);return this.ve(e,t,(e,t)=>{const i=this.Pe(e,t);n=n.insert(e,i),r=r.insert(e,ai(t))}).next(()=>({documents:n,Se:r}))}ve(e,t,n){if(t.isEmpty())return Sr.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Ni(e).jt({range:r},(e,t,r)=>{const o=ae.fromSegments(e);for(;s&&ae.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Lt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n){let r=en();const i=t.path.length+1,s={};if(n.isEqual(V.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=zr(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=fr.collectionReadTimeIndex}return Ni(e).jt(s,(e,n,s)=>{if(e.length!==i)return;const o=qr(this.k,n);t.path.isPrefixOf(o.key.path)?at(t,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(e){return new Ai(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Ci(e).get(pr.key).next(e=>(b(!!e),e))}Re(e,t){return Ci(e).put(pr.key,t)}Pe(e,t){if(t){const e=qr(this.k,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return Ee.newInvalidDocument(e)}}class Ai extends ki{constructor(e,t){super(),this.De=e,this.trackRemovals=t,this.Ce=new Si(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Yt((e,t)=>L(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Ce.get(i);if(s.document.isValidDocument()){const a=Br(this.De.k,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=ai(a);n+=c-o,t.push(this.De.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=Br(this.De.k,Ee.newNoDocument(i,V.min()),this.getReadTime(i));t.push(this.De.addEntry(e,i,n))}else t.push(this.De.removeEntry(e,i))}),r.forEach(n=>{t.push(this.De.Jt.addToCollectionParentIndex(e,n))}),t.push(this.De.updateMetadata(e,n)),Sr.waitFor(t)}getFromCache(e,t){return this.De.be(e,t).next(e=>(this.Ce.set(t,e.size),e.document))}getAllFromCache(e,t){return this.De.Ve(e,t).next(({documents:e,Se:t})=>(t.forEach((e,t)=>{this.Ce.set(e,t)}),e))}}function Ci(e){return Lr(e,pr.store)}function Ni(e){return Lr(e,fr.store)}function xi(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.k=e}Nt(e,t,n,r){b(n<r&&n>=0&&r<=11);const i=new kr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(ar.store)}(e),function(e){e.createObjectStore(cr.store,{keyPath:cr.keyPath}),e.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0}),e.createObjectStore(lr.store)}(e),Di(e),function(e){e.createObjectStore(fr.store)}(e));let s=Sr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(gr.store),e.deleteObjectStore(mr.store),e.deleteObjectStore(yr.store)}(e),Di(e)),s=s.next(()=>function(e){const t=e.store(yr.store),n=new yr(0,0,V.min().toTimestamp(),0);return t.put(yr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(ur.store).Bt().next(n=>{e.deleteObjectStore(ur.store),e.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0});const r=t.store(ur.store),i=n.map(e=>r.put(e));return Sr.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(br.store,{keyPath:br.keyPath})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ne(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore(pr.store)}(e),this.ke(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.$e(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(fr.store);t.createIndex(fr.readTimeIndex,fr.readTimeIndexPath,{unique:!1}),t.createIndex(fr.collectionReadTimeIndex,fr.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&r>=10&&(s=s.next(()=>this.Fe(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(wr.store,{keyPath:wr.keyPath})}(e),function(e){e.createObjectStore(_r.store,{keyPath:_r.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),s}ke(e){let t=0;return e.store(fr.store).jt((e,n)=>{t+=ai(n)}).next(()=>{const n=new pr(t);return e.store(pr.store).put(pr.key,n)})}Ne(e){const t=e.store(cr.store),n=e.store(ur.store);return t.Bt().next(t=>Sr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Bt(ur.userMutationsIndex,r).next(n=>Sr.forEach(n,n=>{b(n.userId===t.userId);const r=Hr(this.k,n);return oi(e,t.userId,r).next(()=>{})}))}))}xe(e){const t=e.store(gr.store),n=e.store(fr.store);return e.store(yr.store).get(yr.key).next(e=>{const r=[];return n.jt((n,i)=>{const s=new G(n),o=function(e){return[0,nr(e)]}(s);r.push(t.get(o).next(n=>n?Sr.resolve():(n=>t.put(new gr(0,nr(n),e.highestListenSequenceNumber)))(s)))}).next(()=>Sr.waitFor(r))})}$e(e,t){e.createObjectStore(vr.store,{keyPath:vr.keyPath});const n=t.store(vr.store),r=new ti,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:nr(r)})}};return t.store(fr.store).jt({Kt:!0},(e,t)=>{const n=new G(e);return i(n.popLast())}).next(()=>t.store(lr.store).jt({Kt:!0},([e,t,n],r)=>{const s=sr(t);return i(s.popLast())}))}Fe(e){const t=e.store(mr.store);return t.jt((e,n)=>{const r=$r(n),i=Qr(this.k,r);return t.put(i)})}}function Di(e){e.createObjectStore(gr.store,{keyPath:gr.keyPath}).createIndex(gr.documentTargetsIndex,gr.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(mr.store,{keyPath:mr.keyPath}).createIndex(mr.queryTargetsIndexName,mr.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(yr.store)}const ji="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pi{constructor(e,t,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Me=c,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=e=>Promise.resolve(),!Pi.bt())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ti(this,r),this.Ge=t+"main",this.k=new Vr(a),this.ze=new Or(this.Ge,11,new Ri(this.k)),this.He=new pi(this.referenceDelegate,this.k),this.Jt=new ni,this.Je=function(e,t){return new Oi(e,t)}(this.k,this.Jt),this.Ye=new Yr,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,ji);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new D(e,this.Me)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Mi(e).put(new br(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(t=>this.isPrimary&&!t?this.an(e).next(()=>!1):!!t&&this.cn(e).next(()=>!0))).catch(e=>{if(Nr(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return Li(e).get(ar.key).next(e=>Sr.resolve(this.un(e)))}hn(e){return Mi(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Lr(e,br.store);return t.Bt().next(e=>{const n=this.dn(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Sr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Xe)for(const t of e)this.Xe.removeItem(this.wn(t.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?Sr.resolve(!0):Li(e).get(ar.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)){if(this.un(t)&&this.networkEnabled)return!0;if(!this.un(t)){if(!t.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,ji);return!1}}return!(!this.networkEnabled||!this.inForeground)||Mi(e).Bt().next(e=>void 0===this.dn(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ar.store,br.store],e=>{const t=new Pr(e,D.I);return this.an(t).next(()=>this.hn(t))}),this.ze.close(),this.pn()}dn(e,t){return e.filter(e=>this.fn(e.updateTimeMs,t)&&!this._n(e.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>Mi(e).Bt().next(e=>this.dn(e,18e5).map(e=>e.clientId)))}get started(){return this.Ue}getMutationQueue(e){return ci.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.ze.runTransaction(e,r,Ir,r=>(i=new Pr(r,this.Be?this.Be.next():D.I),"readwrite-primary"===t?this.rn(i).next(e=>!!e||this.on(i)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)),new T(I.FAILED_PRECONDITION,Tr);return n(i)}).next(e=>this.cn(i).next(()=>e)):this.En(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}En(e){return Li(e).get(ar.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)&&!this.un(e)&&!(this.Le||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,ji)})}cn(e){const t=new ar(this.clientId,this.allowTabSynchronization,Date.now());return Li(e).put(ar.key,t)}static bt(){return Or.bt()}an(e){const t=Li(e);return t.get(ar.key).next(e=>this.un(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete(ar.key)):Sr.resolve())}fn(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var t;try{const n=null!==(null===(t=this.Xe)||void 0===t?void 0:t.getItem(this.wn(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(e){}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Li(e){return Lr(e,ar.store)}function Mi(e){return Lr(e,br.store)}function Fi(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ui{constructor(e,t){this.progress=e,this.In=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Pn(e,t,n))}Pn(e,t,n){return this.Je.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}vn(e,t){return this.Je.getEntries(e,t).next(t=>this.Vn(e,t).next(()=>t))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return ae.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):et(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new ae(t)).next(e=>{let t=nn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Dn(e,t,n){const r=t.collectionGroup;let i=nn();return this.Jt.getCollectionParents(e,r).next(s=>Sr.forEach(s,s=>{const o=function(e,t){return new He(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(i=t,this.Nn(e,i,r).next(e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Ee.newInvalidDocument(n),r=r.insert(n,i)),Rt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((e,n)=>{at(t,n)||(r=r.remove(e))}),r))}Nn(e,t,n){let r=an();for(const s of t)for(const e of s.mutations)e instanceof Mt&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(e,r).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=an(),r=an();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new qi(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(V.min())?this.Mn(e,t):this.On.vn(e,r).next(i=>{const o=this.Ln(t,i);return(Je(t)||Ye(t))&&this.Bn(t.limitType,o,r,n)?this.Mn(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ot(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Ln(e,t){let n=new Yt(ct(e));return t.forEach((t,r)=>{at(e,r)&&(n=n.add(r))}),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ot(t)),this.On.getDocumentsMatchingQuery(e,t,V.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new $t(L),this.Kn=new Si(e=>Oe(e),Ce),this.jn=V.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Vi(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qn))}}function Ki(e,t,n,r){return new zi(e,t,n,r)}async function Gi(e,t){const n=_(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.An.getAllMutationBatches(e).next(o=>(s=o,r=n.persistence.getMutationQueue(t),i=new Vi(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let o=an();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next(e=>({Gn:e,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function Wi(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Sr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))})}),o.next(()=>e.An.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}function Hi(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.He.getLastRemoteSnapshotVersion(e))}function $i(e,t){const n=_(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next(()=>n.He.addMatchingKeys(e,t.addedDocuments,s)));const c=t.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,u),function(e,t,n){return b(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,t)&&o.push(n.He.updateTargetData(e,u))}});let a=en();if(t.documentUpdates.forEach((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Qi(e,s,t.documentUpdates,r,void 0).next(e=>{a=e})),!r.isEqual(V.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next(t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Sr.waitFor(o).next(()=>s.apply(e)).next(()=>n.Wn.Vn(e,a)).next(()=>a)}).then(e=>(n.qn=i,e))}function Qi(e,t,n,r,i){let s=an();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=en();return n.forEach((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(V.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Ji(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t)))}function Yi(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.He.getTargetData(e,t).next(i=>i?(r=i,Sr.resolve(r)):n.He.allocateTargetId(e).next(i=>(r=new Ur(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e})}async function Xi(e,t,n){const r=_(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Nr(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Zi(e,t,n){const r=_(e);let i=V.min(),s=an();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.Kn.get(n);return void 0!==i?Sr.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,nt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:V.min(),n?s:an())).next(e=>({documents:e,zn:s})))}function es(e,t){const n=_(e),r=_(n.He),i=n.qn.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function ts(e){const t=_(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>function(e,t,n){const r=_(e);let i=en(),s=zr(n);const o=Ni(t),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:fr.readTimeIndex,range:a},(e,t)=>{const n=qr(r.k,t);i=i.insert(n.key,n),s=t.readTime}).next(()=>({In:i,readTime:Kr(s)}))}(t.Qn,e,t.jn)).then(({In:e,readTime:n})=>(t.jn=n,e))}async function ns(e){const t=_(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=Ni(e);let n=V.min();return t.jt({index:fr.readTimeIndex,reverse:!0},(e,t,r)=>{t.readTime&&(n=Kr(t.readTime)),r.done()}).next(()=>n)}(e)).then(e=>{t.jn=e})}async function rs(e,t,n,r){const i=_(e);let s=an(),o=en(),a=sn();for(const l of n){const e=t.Hn(l.metadata.name);l.document&&(s=s.add(e)),o=o.insert(e,t.Jn(l)),a=a.insert(e,t.Yn(l.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),u=await Yi(i,function(e){return nt(Qe(G.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Qi(e,c,o,V.min(),a).next(t=>(c.apply(e),t)).next(t=>i.He.removeMatchingKeysForTargetId(e,u.targetId).next(()=>i.He.addMatchingKeys(e,s,u.targetId)).next(()=>i.Wn.Vn(e,t)).next(()=>t)))}async function is(e,t,n=an()){const r=await Yi(e,nt(Jr(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=Sn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ye.saveNamedQuery(e,t);const o=r.withResumeToken(J.EMPTY_BYTE_STRING,s);return i.qn=i.qn.insert(o.targetId,o),i.He.updateTargetData(e,o).next(()=>i.He.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.He.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return Sr.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Sn(n.createTime)}),Sr.resolve()}getNamedQuery(e,t){return Sr.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Jr(e.bundledQuery),readTime:Sn(e.readTime)}}(t)),Sr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.ts=new Yt(as.es),this.ns=new Yt(as.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new as(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.os(new as(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}us(e){const t=new ae(new G([])),n=new as(t,e),r=new as(t,e+1),i=[];return this.ns.forEachInRange([n,r],e=>{this.os(e),i.push(e.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new ae(new G([])),n=new as(t,e),r=new as(t,e+1);let i=an();return this.ns.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new as(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class as{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return ae.comparator(e.key,t.key)||L(e.fs,t.fs)}static ss(e,t){return L(e.fs,t.fs)||ae.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Yt(as.es)}checkEmpty(e){return Sr.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Mr(i,t,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new as(o.key,i)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return Sr.resolve(s)}lookupMutationBatch(e,t){return Sr.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return Sr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Sr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return Sr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new as(t,0),r=new as(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],e=>{const t=this._s(e.fs);i.push(t)}),Sr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(L);return t.forEach(e=>{const t=new as(e,0),r=new as(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],e=>{n=n.add(e.fs)})}),Sr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ae.isDocumentKey(i)||(i=i.child(""));const s=new as(new ae(i),0);let o=new Yt(L);return this.ws.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)},s),Sr.resolve(this.ys(o))}ys(e){const t=[];return e.forEach(e=>{const n=this._s(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return Sr.forEach(t.mutations,r=>{const i=new as(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=n})}ee(e){}containsKey(e,t){const n=new as(t,0),r=this.ws.firstAfterOrEqual(n);return Sr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,Sr.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new $t(ae.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Sr.resolve(n?n.document.clone():Ee.newInvalidDocument(t))}getEntries(e,t){let n=en();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Ee.newInvalidDocument(e))}),Sr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=en();const i=new ae(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||at(t,i)&&(r=r.insert(i.key,i.clone()))}return Sr.resolve(r)}Es(e,t){return Sr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ls(this)}getSize(e){return Sr.resolve(this.size)}}class ls extends ki{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),Sr.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.persistence=e,this.Is=new Si(e=>Oe(e),Ce),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.As=0,this.Rs=new os,this.targetCount=0,this.Ps=fi.ie()}forEachTarget(e,t){return this.Is.forEach((e,n)=>t(n)),Sr.resolve()}getLastRemoteSnapshotVersion(e){return Sr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Sr.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),Sr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),Sr.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new fi(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Sr.resolve()}updateTargetData(e,t){return this.ce(t),Sr.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,Sr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Sr.waitFor(i).next(()=>r)}getTargetCount(e){return Sr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return Sr.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),Sr.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Sr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),Sr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return Sr.resolve(n)}containsKey(e,t){return Sr.resolve(this.Rs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.bs={},this.Be=new D(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new hs(this),this.Jt=new ei,this.Je=function(e,t){return new us(e,t)}(this.Jt,e=>this.referenceDelegate.vs(e)),this.k=new Vr(t),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new cs(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new fs(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(e=>this.referenceDelegate.Ss(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ds(e,t){return Sr.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,t)))}}class fs extends Er{constructor(e){super(),this.currentSequenceNumber=e}}class ps{constructor(e){this.persistence=e,this.Cs=new os,this.Ns=null}static ks(e){return new ps(e)}get xs(){if(this.Ns)return this.Ns;throw v()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),Sr.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),Sr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Sr.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sr.forEach(this.xs,n=>{const r=ae.fromPath(n);return this.$s(e,r).next(e=>{e||t.removeEntry(r)})}).next(()=>(this.Ns=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}vs(e){return 0}$s(e,t){return Sr.or([()=>Sr.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e,t){return`firestore_clients_${e}_${t}`}function gs(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function ys(e,t){return`firestore_targets_${e}_${t}`}class vs{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Fs(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new vs(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Fs(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new bs(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ws{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Fs(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=un();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=oe(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ws(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _s{constructor(e,t){this.clientId=e,this.onlineState=t}static Fs(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new _s(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class Is{constructor(){this.activeTargetIds=un()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ts{constructor(e,t,n,r,i){this.window=e,this.Oe=t,this.persistenceKey=n,this.Bs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new $t(L),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Qs=ms(this.persistenceKey,this.Bs),this.Ws=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new Is),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Ys=function(e){return"firestore_bundle_loaded_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const n of e){if(n===this.Bs)continue;const e=this.getItem(ms(this.persistenceKey,n));if(e){const t=ws.Fs(n,e);t&&(this.Ks=this.Ks.insert(t.clientId,t))}}this.Xs();const t=this.storage.getItem(this.Js);if(t){const e=this.Zs(t);e&&this.ti(e)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let t=!1;return this.Ks.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,t,n){this.ni(e,t,n),this.si(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ys(this.persistenceKey,e));if(n){const r=bs.Fs(e,n);r&&(t=r.state)}}return this.ii.Ms(e),this.Xs(),t}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ys(this.persistenceKey,e))}updateQueryState(e,t,n){this.ri(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.si(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ai()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Qs)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Gs.test(t.key)){if(null==t.newValue){const e=this.ci(t.key);return this.ui(e,null)}{const e=this.hi(t.key,t.newValue);if(e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.li(t.key,t.newValue);if(e)return this.fi(e)}}else if(this.Hs.test(t.key)){if(null!==t.newValue){const e=this.di(t.key,t.newValue);if(e)return this.wi(e)}}else if(t.key===this.Js){if(null!==t.newValue){const e=this.Zs(t.newValue);if(e)return this.ti(e)}}else if(t.key===this.Ws){const e=function(e){let t=D.I;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==D.I&&this.sequenceNumberHandler(e)}else if(t.key===this.Ys)return this.syncEngine._i()}else this.js.push(t)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Os())}ni(e,t,n){const r=new vs(this.currentUser,e,t,n),i=gs(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Os())}si(e){const t=gs(this.persistenceKey,this.currentUser,e);this.removeItem(t)}oi(e){const t={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(t))}ri(e,t,n){const r=ys(this.persistenceKey,e),i=new bs(e,t,n);this.setItem(r,i.Os())}ai(){this.setItem(this.Ys,"value-not-used")}ci(e){const t=this.Gs.exec(e);return t?t[1]:null}hi(e,t){const n=this.ci(e);return ws.Fs(n,t)}li(e,t){const n=this.zs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return vs.Fs(new u(i),r,t)}di(e,t){const n=this.Hs.exec(e),r=Number(n[1]);return bs.Fs(r,t)}Zs(e){return _s.Fs(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,t){const n=t?this.Ks.insert(e,t):this.Ks.remove(e),r=this.ei(this.Ks),i=this.ei(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let t=un();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Es{constructor(){this.pi=new Is,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Is,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Ui(e,t){const n=Os[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(e.status);s(new T(t,e.message))}else s(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(I.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,t,n),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new As({Vi:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",e),l.send(e))},Si:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Fi())}),m(l,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),f.Fi(new T(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Kt[e];if(void 0!==t)return Ht(t)}(e),n=i.message;void 0===t&&(t=I.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.Fi(new T(t,n)),l.close()}else p("Connection","WebChannel received:",n),f.Oi(n)}}),m(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){return"undefined"!=typeof window?window:null}function xs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){return new _n(e,!0)}class Ds{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Ds(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.rr===t&&this.Ir(e,n)},t=>{e(()=>{const e=new T(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)})})}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(e=>{n(()=>this.Ar(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget(()=>this.rr===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ps extends js{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=Mn(this.k,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?Sn(t.readTime):V.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=Rn(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Ne(r)?{documents:qn(e,r)}:{query:Bn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Tn(e,t.resumeToken):t.snapshotVersion.compareTo(V.min())>0&&(n.readTime=In(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=Kn(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Rn(this.k),t.removeTarget=e,this.gr(t)}}class Ls extends js{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=Vn(e.writeResults,e.commitTime),n=Sn(e.commitTime);return this.listener.Cr(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Rn(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Fn(this.k,e))};this.gr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}terminate(){this.$r=!0}}class Fs{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+e.toString()),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(m(t),this.Lr=!1):p("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(e=>{n.enqueueAndForget(async()=>{$s(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.Gr.add(4),await qs(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Vs(t)}(this))})}),this.Jr=new Fs(n,r)}}async function Vs(e){if($s(e))for(const t of e.zr)await t(!0)}async function qs(e){for(const t of e.zr)await t(!1)}function Bs(e,t){const n=_(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Hs(n)?Ws(n):ho(n).lr()&&Ks(n,t))}function zs(e,t){const n=_(e),r=ho(n);n.Wr.delete(t),r.lr()&&Gs(n,t),0===n.Wr.size&&(r.lr()?r._r():$s(n)&&n.Jr.set("Unknown"))}function Ks(e,t){e.Yr.X(t.targetId),ho(e).br(t)}function Gs(e,t){e.Yr.X(t),ho(e).vr(t)}function Ws(e){e.Yr=new gn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),ho(e).start(),e.Jr.Br()}function Hs(e){return $s(e)&&!ho(e).hr()&&e.Wr.size>0}function $s(e){return 0===_(e).Gr.size}function Qs(e){e.Yr=void 0}async function Js(e){e.Wr.forEach((t,n)=>{Ks(e,t)})}async function Ys(e,t){Qs(e),Hs(e)?(e.Jr.Kr(t),Ws(e)):e.Jr.set("Unknown")}async function Xs(e,t,n){if(e.Jr.set("Online"),t instanceof pn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zs(e,n)}else if(t instanceof dn?e.Yr.ot(t):t instanceof fn?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(V.min()))try{const t=await Hi(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(J.EMPTY_BYTE_STRING,n.snapshotVersion)),Gs(e,t);const r=new Ur(n.target,t,1,n.sequenceNumber);Ks(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Zs(e,t)}}async function Zs(e,t,n){if(!Nr(t))throw t;e.Gr.add(1),await qs(e),e.Jr.set("Offline"),n||(n=()=>Hi(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Vs(e)})}function eo(e,t){return t().catch(n=>Zs(e,n,t))}async function to(e){const t=_(e),n=fo(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;no(t);)try{const e=await Ji(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,ro(t,e)}catch(e){await Zs(t,e)}io(t)&&so(t)}function no(e){return $s(e)&&e.Qr.length<10}function ro(e,t){e.Qr.push(t);const n=fo(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function io(e){return $s(e)&&!fo(e).hr()&&e.Qr.length>0}function so(e){fo(e).start()}async function oo(e){fo(e).kr()}async function ao(e){const t=fo(e);for(const n of e.Qr)t.Dr(n.mutations)}async function co(e,t,n){const r=e.Qr.shift(),i=Fr.from(r,t,n);await eo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await to(e)}async function uo(e,t){t&&fo(e).Sr&&await async function(e,t){if(n=t.code,Wt(n)&&n!==I.ABORTED){const n=e.Qr.shift();fo(e).wr(),await eo(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await to(e)}var n}(e,t),io(e)&&so(e)}async function lo(e,t){const n=_(e);t?(n.Gr.delete(2),await Vs(n)):t||(n.Gr.add(2),await qs(n),n.Jr.set("Unknown"))}function ho(e){return e.Xr||(e.Xr=function(e,t,n){const r=_(e);return r.Fr(),new Ps(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Di:Js.bind(null,e),Ni:Ys.bind(null,e),Pr:Xs.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),Hs(e)?Ws(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Qs(e))})),e.Xr}function fo(e){return e.Zr||(e.Zr=function(e,t,n){const r=_(e);return r.Fr(),new Ls(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:oo.bind(null,e),Ni:uo.bind(null,e),Nr:ao.bind(null,e),Cr:co.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await to(e)):(await e.Zr.stop(),e.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class po{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new po(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mo(e,t){if(m("AsyncQueue",`${t}: ${e}`),Nr(e))return new T(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ae.comparator(t.key,n.key):(e,t)=>ae.comparator(e.key,t.key),this.keyedMap=nn(),this.sortedSet=new $t(this.comparator)}static emptySet(e){return new go(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof go))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new go;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.eo=new $t(ae.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):v():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal((t,n)=>{e.push(n)}),e}}class vo{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new vo(e,t,go.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&it(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.so=void 0,this.listeners=[]}}class wo{constructor(){this.queries=new Si(e=>st(e),it),this.onlineState="Unknown",this.io=new Set}}async function _o(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bo),i)try{s.so=await n.onListen(r)}catch(e){const n=mo(e,`Initialization of query '${ot(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&So(n)}async function Io(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function To(e,t){const n=_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(i)&&(r=!0);t.so=i}}r&&So(n)}function Eo(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function So(e){e.io.forEach(e=>{e.next()})}class ko{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new vo(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.payload=e,this.byteLength=t}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.k=e}Hn(e){return Cn(this.k,e)}Jn(e){return e.metadata.exists?Pn(this.k,e.document,!1):Ee.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return Sn(e)}}class Co{constructor(e,t,n){this.mo=e,this.localStore=t,this.k=n,this.queries=[],this.documents=[],this.progress=No(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}po(e){const t=new Map,n=new Ao(this.k);for(const r of e)if(r.metadata.queries){const e=n.Hn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||an()).add(e);t.set(n,r)}}return t}async complete(){const e=await rs(this.localStore,new Ao(this.k),this.documents,this.mo.id),t=this.po(this.documents);for(const n of this.queries)await is(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new Ui(Object.assign({},this.progress),e)}}function No(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.key=e}}class Ro{constructor(e){this.key=e}}class Do{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ct(e),this.Ro=new go(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new yo,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Je(this.query)&&r.size===this.query.limit?r.last():null,c=Ye(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=at(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),Je(this.query)||Ye(this.query))for(;s.size>this.query.limit;){const e=Je(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ao(e.doc,t.doc)),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new vo(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new yo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(e=>this.To=this.To.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.To=this.To.delete(e)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=an(),this.Ro.forEach(e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))});const t=[];return e.forEach(e=>{this.Io.has(e)||t.push(new Ro(e))}),this.Io.forEach(n=>{e.has(n)||t.push(new xo(n))}),t}ko(e){this.To=e.zn,this.Io=an();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return vo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class jo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Po{constructor(e){this.key=e,this.$o=!1}}class Lo{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new Si(e=>st(e),it),this.Mo=new Map,this.Lo=new Set,this.Bo=new $t(ae.comparator),this.Uo=new Map,this.qo=new os,this.Ko={},this.jo=new Map,this.Qo=fi.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Mo(e,t){const n=da(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await Yi(n.localStore,nt(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Fo(n,t,r,"current"===s),n.isPrimaryClient&&Bs(n.remoteStore,e)}return i}async function Fo(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await Zi(e.localStore,t.query,!1).then(({documents:e})=>t.view.bo(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Yo(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Zi(e.localStore,t,!0),s=new Do(t,i.zn),o=s.bo(i.documents),a=hn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Yo(e,n,c.Co);const u=new jo(t,n,s);return e.Oo.set(t,u),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}async function Uo(e,t){const n=_(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(e=>!it(e,t))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zs(n.remoteStore,r.targetId),Qo(n,r.targetId)}).catch(vi)):(Qo(n,r.targetId),await Xi(n.localStore,r.targetId,!0))}async function Vo(e,t,n){const r=fa(e);try{const e=await function(e,t){const n=_(e),r=U.now(),i=t.reduce((e,t)=>e.add(t.key),an());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Wn.vn(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=Dt(e,s.get(e.key));null!=t&&o.push(new Mt(e.key,t,Te(t.value.mapValue),At.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new $t(L)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await ea(r,e.changes),await to(r.remoteStore)}catch(e){const t=mo(e,"Failed to persist write");n.reject(t)}}async function qo(e,t){const n=_(e);try{const e=await $i(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Uo.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?b(r.$o):e.removedDocuments.size>0&&(b(r.$o),r.$o=!1))}),await ea(n,e,t)}catch(e){await vi(e)}}function Bo(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.ro(t)&&(r=!0)}),r&&So(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zo(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new $t(ae.comparator);e=e.insert(s,Ee.newNoDocument(s,V.min()));const n=an().add(s),i=new ln(V.min(),new Map,new Yt(L),e,n);await qo(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),Zo(r)}else await Xi(r.localStore,t,!1).then(()=>Qo(r,t,n)).catch(vi)}async function Ko(e,t){const n=_(e),r=t.batch.batchId;try{const e=await Wi(n.localStore,t);$o(n,r,null),Ho(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,e)}catch(e){await vi(e)}}async function Go(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.An.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t))).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}(r.localStore,t);$o(r,t,n),Ho(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ea(r,e)}catch(n){await vi(n)}}async function Wo(e,t){const n=_(e);$s(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.An.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.jo.get(e)||[];r.push(t),n.jo.set(e,r)}catch(e){const n=mo(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Ho(e,t){(e.jo.get(t)||[]).forEach(e=>{e.resolve()}),e.jo.delete(t)}function $o(e,t,n){const r=_(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function Qo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(t=>{e.qo.containsKey(t)||Jo(e,t)})}function Jo(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(zs(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Zo(e))}function Yo(e,t,n){for(const r of n)r instanceof xo?(e.qo.addReference(r.key,t),Xo(e,r)):r instanceof Ro?(p("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Jo(e,r.key)):v()}function Xo(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(p("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Zo(e))}function Zo(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new ae(G.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Po(n)),e.Bo=e.Bo.insert(n,r),Bs(e.remoteStore,new Ur(nt(Qe(n.path)),r,2,D.I))}}async function ea(e,t,n){const r=_(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((e,a)=>{o.push(r.Go(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=qi.$n(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Sr.forEach(t,t=>Sr.forEach(t.kn,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Sr.forEach(t.xn,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Nr(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function ta(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Gi(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach(e=>{e.forEach(e=>{e.reject(new T(I.CANCELLED,t))})}),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ea(n,e.Gn)}}function na(e,t){const n=_(e),r=n.Uo.get(t);if(r&&r.$o)return an().add(r.key);{let e=an();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}async function ra(e,t){const n=_(e),r=await Zi(n.localStore,t.query,!0),i=t.view.ko(r);return n.isPrimaryClient&&Yo(n,t.targetId,i.Co),i}async function ia(e){const t=_(e);return ts(t.localStore).then(e=>ea(t,e))}async function sa(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Zt(e,t).next(t=>t?n.Wn.vn(e,t):Sr.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await to(i.remoteStore):"acknowledged"===n||"rejected"===n?($o(i,t,r||null),Ho(i,t),function(e,t){_(_(e).An).ee(t)}(i.localStore,t)):v(),await ea(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function oa(e,t){const n=_(e);if(da(n),fa(n),!0===t&&!0!==n.Wo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await aa(n,e.toArray());n.Wo=!0,await lo(n.remoteStore,!0);for(const r of t)Bs(n.remoteStore,r)}else if(!1===t&&!1!==n.Wo){const e=[];let t=Promise.resolve();n.Mo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Qo(n,i),Xi(n.localStore,i,!0))),zs(n.remoteStore,i)}),await t,await aa(n,e),function(e){const t=_(e);t.Uo.forEach((e,n)=>{zs(t.remoteStore,n)}),t.qo.hs(),t.Uo=new Map,t.Bo=new $t(ae.comparator)}(n),n.Wo=!1,await lo(n.remoteStore,!1)}}async function aa(e,t,n){const r=_(e),i=[],s=[];for(const o of t){let e;const t=r.Mo.get(o);if(t&&0!==t.length){e=await Yi(r.localStore,nt(t[0]));for(const e of t){const t=r.Oo.get(e),n=await ra(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await es(r.localStore,o);e=await Yi(r.localStore,t),await Fo(r,ca(t),o,!1)}i.push(e)}return r.Fo.Pr(s),i}function ca(e){return $e(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function ua(e){const t=_(e);return _(_(t.localStore).persistence).Tn()}async function la(e,t,n,r){const i=_(e);if(i.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Mo.has(t))switch(n){case"current":case"not-current":{const e=await ts(i.localStore),r=ln.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await ea(i,e,r);break}case"rejected":await Xi(i.localStore,t,!0),Qo(i,t,r);break;default:v()}}async function ha(e,t,n){const r=da(e);if(r.Wo){for(const e of t){if(r.Mo.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await es(r.localStore,e),n=await Yi(r.localStore,t);await Fo(r,ca(t),n.targetId,!1),Bs(r.remoteStore,n)}for(const e of n)r.Mo.has(e)&&await Xi(r.localStore,e,!1).then(()=>{zs(r.remoteStore,e),Qo(r,e)}).catch(vi)}}function da(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=na.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zo.bind(null,t),t.Fo.Pr=To.bind(null,t.eventManager),t.Fo.zo=Eo.bind(null,t.eventManager),t}function fa(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ko.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Go.bind(null,t),t}function pa(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=Sn(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ye.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(No(r));const i=new Co(r,e.localStore,t.k);let s=await t.Ho();for(;s;){const e=await i.yo(s);e&&n._updateProgress(e),s=await t.Ho()}const o=await i.complete();await ea(e,o.In,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ye.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress)}catch(e){g("SyncEngine","Loading bundle failed with "+e),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class ma{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Rs(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Ki(this.persistence,new Bi,e.initialUser,this.k)}Yo(e){return new ds(ps.ks,this.k)}Jo(e){return new Es}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ga extends ma{constructor(e,t,n){super(),this.ta=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await ns(this.localStore),await this.ta.initialize(this,e),await fa(this.ta.syncEngine),await to(this.ta.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return Ki(this.persistence,new Bi,e.initialUser,this.k)}Xo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new _i(t,e.asyncQueue)}Yo(e){const t=Fi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?si.withCacheSize(this.cacheSizeBytes):si.DEFAULT;return new Pi(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ns(),xs(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new Es}}class ya extends ga{constructor(e,t){super(e,t,!1),this.ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ta.syncEngine;this.sharedClientState instanceof Ts&&(this.sharedClientState.syncEngine={mi:sa.bind(null,t),gi:la.bind(null,t),yi:ha.bind(null,t),Tn:ua.bind(null,t),_i:ia.bind(null,t)},await this.sharedClientState.start()),await this.persistence.sn(async e=>{await oa(this.ta.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Jo(e){const t=Ns();if(!Ts.bt(t))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Fi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ts(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class va{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Bo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ta.bind(null,this.syncEngine),await lo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wo}createDatastore(e){const t=Rs(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Cs(r));var r;return function(e,t,n,r){return new Ms(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Bo(this.syncEngine,e,0),s=ks.bt()?new ks:new Ss,new Us(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Lo(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await qs(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.sa=e,this.k=t,this.metadata=new E,this.buffer=new Uint8Array,this.ia=new TextDecoder("utf-8"),this.ra().then(e=>{e&&e._o()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.sa.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.ra()}async ra(){const e=await this.oa();if(null===e)return null;const t=this.ia.decode(e),n=Number(t);isNaN(n)&&this.aa(`length string (${t}) is not valid number`);const r=await this.ca(n);return new Oo(JSON.parse(r),e.length+n)}ua(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oa(){for(;this.ua()<0;)if(await this.ha())break;if(0===this.buffer.length)return null;const e=this.ua();e<0&&this.aa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ca(e){for(;this.buffer.length<e;)await this.ha()&&this.aa("Reached the end of bundle when more is expected.");const t=this.ia.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}aa(e){throw this.sa.cancel(),new Error("Invalid bundle format: "+e)}async ha(){const e=await this.sa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Rn(n.k)+"/documents",i={documents:t.map(e=>An(n.k,e))},s=await n.ji("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=Ln(n.k,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new qt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ae.fromPath(t);this.mutations.push(new Bt(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Rn(n.k)+"/documents",i={writes:t.map(e=>Fn(n.k,e))};await n.Bi("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?At.updateTime(t):At.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return At.updateTime(t)}return At.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.la=5,this.ur=new Ds(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const e=new Ia(this.datastore),t=this.da(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.wa(e)}))}).catch(e=>{this.wa(e)})})}da(e){try{const t=this.updateFunction(e);return!ie(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}wa(e){this.la>0&&this._a(e)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(e)}_a(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Wt(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=mo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Sa(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Gi(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ka(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Oa(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>async function(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=$s(n);n.Gr.add(3),await qs(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Vs(n)}(t.remoteStore,e)),e.onlineComponents=t}async function Oa(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Sa(e,new ma)),e.offlineComponents}async function Aa(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await ka(e,new va)),e.onlineComponents}function Ca(e){return Oa(e).then(e=>e.persistence)}function Na(e){return Oa(e).then(e=>e.localStore)}function xa(e){return Aa(e).then(e=>e.remoteStore)}function Ra(e){return Aa(e).then(e=>e.syncEngine)}async function Da(e){const t=await Aa(e),n=t.eventManager;return n.onListen=Mo.bind(null,t.syncEngine),n.onUnlisten=Uo.bind(null,t.syncEngine),n}function ja(e){return e.asyncQueue.enqueue(async()=>{const t=await Ca(e),n=await xa(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.Gr.delete(0),Vs(t)}(n)})}function Pa(e){return e.asyncQueue.enqueue(async()=>{const t=await Ca(e),n=await xa(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.Gr.add(0),await qs(t),t.Jr.set("Offline")}(n)})}function La(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.Wn.Rn(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=mo(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Na(e),t,n)),n.promise}function Ma(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new wa({next:s=>{t.enqueueAndForget(()=>Io(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ko(Qe(n.path),s,{includeMetadataChanges:!0,wo:!0});return _o(e,o)}(await Da(e),e.asyncQueue,t,n,r)),r.promise}function Fa(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Zi(e,t,!0),i=new Do(t,r.zn),s=i.bo(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=mo(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Na(e),t,n)),n.promise}function Ua(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new wa({next:n=>{t.enqueueAndForget(()=>Io(e,o)),n.fromCache&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ko(n,s,{includeMetadataChanges:!0,wo:!0});return _o(e,o)}(await Da(e),e.asyncQueue,t,n,r)),r.promise}function Va(e,t){const n=new wa(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).io.add(t),t.next()}(await Da(e),n)),()=>{n.na(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).io.delete(t)}(await Da(e),n))}}function qa(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>{const r=await function(e){return Aa(e).then(e=>e.datastore)}(e);new Ta(e.asyncQueue,r,t,n).run()}),n.promise}function Ba(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new _a(e,t)}(function(e,t){if(e instanceof Uint8Array)return ba(e,t);if(e instanceof ArrayBuffer)return ba(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Rs(t));e.asyncQueue.enqueueAndForget(async()=>{pa(await Ra(e),i,r)})}function za(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ye.getNamedQuery(e,t))}(await Na(e),t))}class Ka{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ga{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e,t,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function $a(e,t,n,r){if(!0===t&&!0===r)throw new T(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Qa(e){if(!ae.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ja(e){if(ae.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ya(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function Xa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(e);throw new T(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Za(e,t){if(t<=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$a("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,e instanceof Ga?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new N(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Wa.get(e);t&&(p("ComponentProvider","Removing Datastore"),Wa.delete(e),t.terminate())}(this),Promise.resolve()}}function nc(e,t,n,r={}){var i;const s=(e=Xa(e,tc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o["f"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new O(new S(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rc(this.firestore,e,this._key)}}class ic{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class sc extends ic{constructor(e,t,n){super(e,t,Qe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rc(this.firestore,null,new ae(e))}withConverter(e){return new sc(this.firestore,e,this._path)}}function oc(e,t,...n){if(e=Object(o["k"])(e),Ha("collection","path",t),e instanceof tc){const r=G.fromString(t,...n);return Ja(r),new sc(e,null,r)}{if(!(e instanceof rc||e instanceof sc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Ja(r),new sc(e.firestore,null,r)}}function ac(e,t){if(e=Xa(e,tc),Ha("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ic(e,null,function(e){return new He(G.emptyPath(),e)}(t))}function cc(e,t,...n){if(e=Object(o["k"])(e),1===arguments.length&&(t=P.A()),Ha("doc","path",t),e instanceof tc){const r=G.fromString(t,...n);return Qa(r),new rc(e,null,new ae(r))}{if(!(e instanceof rc||e instanceof sc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Qa(r),new rc(e.firestore,e instanceof sc?e.converter:null,new ae(r))}}function uc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),(e instanceof rc||e instanceof sc)&&(t instanceof rc||t instanceof sc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function lc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),e instanceof ic&&t instanceof ic&&e.firestore===t.firestore&&it(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hc{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Ds(this,"async_queue_retry"),this.Ra=()=>{const e=xs();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=xs();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=xs();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const t=new E;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Nr(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const t=this.ma.then(()=>(this.Ea=!0,e().catch(e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ea=!1,e))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=po.createAndSchedule(this,e,t,n,e=>this.Va(e));return this.pa.push(r),r}Pa(){this.Ta&&v()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}function dc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class fc{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=-1;class mc extends tc{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new hc,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function gc(e){return e._firestoreClient||yc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ka(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Ea(e._authCredentials,e._appCheckCredentials,e._queue,r)}function vc(e,t){Oc(e=Xa(e,mc));const n=gc(e),r=e._freezeSettings(),i=new va;return wc(n,i,new ga(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function bc(e){Oc(e=Xa(e,mc));const t=gc(e),n=e._freezeSettings(),r=new va;return wc(t,r,new ya(r,n.cacheSizeBytes))}function wc(e,t,n){const r=new E;return e.asyncQueue.enqueue(async()=>{try{await Sa(e,n),await ka(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function _c(e){if(e._initialized&&!e._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new E;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Or.bt())return Promise.resolve();const t=e+"main";await Or.delete(t)}(Fi(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Ic(e){return function(e){const t=new E;return e.asyncQueue.enqueueAndForget(async()=>Wo(await Ra(e),t)),t.promise}(gc(e=Xa(e,mc)))}function Tc(e){return ja(gc(e=Xa(e,mc)))}function Ec(e){return Pa(gc(e=Xa(e,mc)))}function Sc(e,t){const n=gc(e=Xa(e,mc)),r=new fc;return Ba(n,e._databaseId,t,r),r}function kc(e,t){return za(gc(e=Xa(e,mc)),t).then(t=>t?new ic(e,null,t.query):null)}function Oc(e){if(e._initialized||e._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cc(J.fromBase64String(e))}catch(e){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Cc(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=/^__.*__$/;class Dc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lt(e,this.data,t,this.fieldTransforms)}}class jc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Lc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return nu(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Pc(this.xa)&&Rc.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Mc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Rs(e)}ja(e,t,n,r=!1){return new Lc({xa:e,methodName:t,Ka:n,path:H.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Fc(e){const t=e._freezeSettings(),n=Rs(e._databaseId);return new Mc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uc(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);Xc("Data must be an object, but it was:",o,r);const a=Jc(r,o);let c,u;if(s.merge)c=new $(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Zc(t,r,n);if(!o.contains(i))throw new T(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ru(e,i)||e.push(i)}c=new $(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Dc(new Ie(a),c,u)}class Vc extends Nc{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(this._methodName+"() can only appear at the top level of your update data"):e.Ua(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function qc(e,t,n){return new Lc({xa:3,Ka:t.settings.Ka,methodName:e._methodName,Oa:n},t.databaseId,t.k,t.ignoreUndefinedProperties)}class Bc extends Nc{_toFieldTransform(e){return new St(e.path,new yt)}isEqual(e){return e instanceof Bc}}class zc extends Nc{constructor(e,t){super(e),this.Qa=t}_toFieldTransform(e){const t=qc(this,e,!0),n=this.Qa.map(e=>Qc(e,t)),r=new vt(n);return new St(e.path,r)}isEqual(e){return this===e}}class Kc extends Nc{constructor(e,t){super(e),this.Qa=t}_toFieldTransform(e){const t=qc(this,e,!0),n=this.Qa.map(e=>Qc(e,t)),r=new wt(n);return new St(e.path,r)}isEqual(e){return this===e}}class Gc extends Nc{constructor(e,t){super(e),this.Wa=t}_toFieldTransform(e){const t=new It(e.k,dt(e.k,this.Wa));return new St(e.path,t)}isEqual(e){return this===e}}function Wc(e,t,n,r){const i=e.ja(1,t,n);Xc("Data must be an object, but it was:",i,r);const s=[],a=Ie.empty();B(r,(e,r)=>{const c=tu(t,e,n);r=Object(o["k"])(r);const u=i.La(c);if(r instanceof Vc)s.push(c);else{const e=Qc(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new $(s);return new jc(a,c,i.fieldTransforms)}function Hc(e,t,n,r,i,s){const a=e.ja(1,t,n),c=[Zc(t,r,n)],u=[i];if(s.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Zc(t,s[o])),u.push(s[o+1]);const l=[],h=Ie.empty();for(let f=c.length-1;f>=0;--f)if(!ru(l,c[f])){const e=c[f];let t=u[f];t=Object(o["k"])(t);const n=a.La(e);if(t instanceof Vc)l.push(e);else{const r=Qc(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new $(l);return new jc(h,d,a.fieldTransforms)}function $c(e,t,n,r=!1){return Qc(n,e.ja(r?4:3,t))}function Qc(e,t){if(Yc(e=Object(o["k"])(e)))return Xc("Unsupported field value:",t,e),Jc(e,t);if(e instanceof Nc)return function(e,t){if(!Pc(t.xa))throw t.Ua(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Ua(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Qc(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dt(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=U.fromDate(e);return{timestampValue:In(t.k,n)}}if(e instanceof U){const n=new U(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:In(t.k,n)}}if(e instanceof xc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Cc)return{bytesValue:Tn(t.k,e._byteString)};if(e instanceof rc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:kn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua("Unsupported field value: "+Ya(e))}(e,t)}function Jc(e,t){const n={};return z(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):B(e,(e,r)=>{const i=Qc(r,t.Fa(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Yc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof U||e instanceof xc||e instanceof Cc||e instanceof rc||e instanceof Nc)}function Xc(e,t,n){if(!Yc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ya(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function Zc(e,t,n){if((t=Object(o["k"])(t))instanceof Ac)return t._internalPath;if("string"==typeof t)return tu(e,t);throw nu("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const eu=new RegExp("[~\\*/\\[\\]]");function tu(e,t,n){if(t.search(eu)>=0)throw nu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ac(...t.split("."))._internalPath}catch(r){throw nu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function nu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(I.INVALID_ARGUMENT,a+e+c)}function ru(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ou("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class su extends iu{data(){return super.data()}}function ou(e,t){return"string"==typeof t?tu(e,t):t instanceof Ac?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cu extends iu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class uu extends cu{data(e={}){return super.data(e)}}class lu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new au(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new uu(this._firestore,this._userDataWriter,n.key,n,new au(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new uu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new au(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new uu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new au(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:hu(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function du(e,t){return e instanceof cu&&t instanceof cu?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof lu&&t instanceof lu&&e._firestore===t._firestore&&lc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e){if(Ye(e)&&0===e.explicitOrderBy.length)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}function mu(e,...t){for(const n of t)e=n._apply(e);return e}class gu extends pu{constructor(e,t,n){super(),this.Ga=e,this.za=t,this.Ha=n,this.type="where"}_apply(e){const t=Fc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){xu(o,s);const t=[];for(const n of o)t.push(Nu(r,e,n));a={arrayValue:{values:t}}}else a=Nu(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xu(o,s),a=$c(n,t,o,"in"===s||"not-in"===s);const c=xe.create(i,s,a);return function(e,t){if(t.V()){const n=Ze(e);if(null!==n&&!n.isEqual(t.field))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Xe(e);null!==r&&Ru(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Ga,this.za,this.Ha);return new ic(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function yu(e,t,n){const r=t,i=ou("where",e);return new gu(i,r,n)}class vu extends pu{constructor(e,t){super(),this.Ga=e,this.Ja=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ze(t,n);return function(e,t){if(null===Xe(e)){const n=Ze(e);null!==n&&Ru(e,n,t.field)}}(e,r),r}(e._query,this.Ga,this.Ja);return new ic(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new He(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function bu(e,t="asc"){const n=t,r=ou("orderBy",e);return new vu(r,n)}class wu extends pu{constructor(e,t,n){super(),this.type=e,this.Ya=t,this.Xa=n}_apply(e){return new ic(e.firestore,e.converter,rt(e._query,this.Ya,this.Xa))}}function _u(e){return Za("limit",e),new wu("limit",e,"F")}function Iu(e){return Za("limitToLast",e),new wu("limitToLast",e,"L")}class Tu extends pu{constructor(e,t,n){super(),this.type=e,this.Za=t,this.tc=n}_apply(e){const t=Cu(e,this.type,this.Za,this.tc);return new ic(e.firestore,e.converter,function(e,t){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Eu(...e){return new Tu("startAt",e,!0)}function Su(...e){return new Tu("startAfter",e,!1)}class ku extends pu{constructor(e,t,n){super(),this.type=e,this.Za=t,this.tc=n}_apply(e){const t=Cu(e,this.type,this.Za,this.tc);return new ic(e.firestore,e.converter,function(e,t){return new He(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Ou(...e){return new ku("endBefore",e,!0)}function Au(...e){return new ku("endAt",e,!1)}function Cu(e,t,n,r){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof iu)return function(e,t,n,r,i){if(!r)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of tt(e))if(o.field.isKeyField())s.push(me(t,r.key));else{const e=r.data.field(o.field);if(te(e))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new qe(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Fc(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!et(e)&&-1!==s.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(G.fromString(s));if(!ae.isDocumentKey(n))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ae(n);a.push(me(t,i))}else{const e=$c(n,r,s);a.push(e)}}return new qe(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Nu(e,t,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!et(t)&&-1!==n.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(G.fromString(n));if(!ae.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return me(e,new ae(r))}if(n instanceof rc)return me(e,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function xu(e,t){if(!Array.isArray(e)||0===e.length)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ru(e,t,n){if(!n.isEqual(t))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{convertValue(e,t="none"){switch(ce(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return B(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new xc(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(re(e));default:return null}}convertTimestamp(e){const t=X(e);return new U(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);b(tr(n));const r=new Ga(n.get(1),n.get(3)),i=new ae(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Pu extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rc(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fc(e)}set(e,t,n){this._verifyNotCommitted();const r=Mu(e,this._firestore),i=ju(r.converter,t,n),s=Uc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,At.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Mu(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof Ac?Hc(this._dataReader,"WriteBatch.update",i._key,t,n,r):Wc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,At.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mu(e,this._firestore);return this._mutations=this._mutations.concat(new qt(t._key,At.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mu(e,t){if((e=Object(o["k"])(e)).firestore!==t)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e){e=Xa(e,rc);const t=Xa(e.firestore,mc);return Ma(gc(t),e._key).then(n=>Xu(t,e,n))}class Uu extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rc(this.firestore,null,t)}}function Vu(e){e=Xa(e,rc);const t=Xa(e.firestore,mc),n=gc(t),r=new Uu(t);return La(n,e._key).then(n=>new cu(t,r,e._key,n,new au(null!==n&&n.hasLocalMutations,!0),e.converter))}function qu(e){e=Xa(e,rc);const t=Xa(e.firestore,mc);return Ma(gc(t),e._key,{source:"server"}).then(n=>Xu(t,e,n))}function Bu(e){e=Xa(e,ic);const t=Xa(e.firestore,mc),n=gc(t),r=new Uu(t);return fu(e._query),Ua(n,e._query).then(n=>new lu(t,r,e,n))}function zu(e){e=Xa(e,ic);const t=Xa(e.firestore,mc),n=gc(t),r=new Uu(t);return Fa(n,e._query).then(n=>new lu(t,r,e,n))}function Ku(e){e=Xa(e,ic);const t=Xa(e.firestore,mc),n=gc(t),r=new Uu(t);return Ua(n,e._query,{source:"server"}).then(n=>new lu(t,r,e,n))}function Gu(e,t,n){e=Xa(e,rc);const r=Xa(e.firestore,mc),i=ju(e.converter,t,n);return Yu(r,[Uc(Fc(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,At.none())])}function Wu(e,t,n,...r){e=Xa(e,rc);const i=Xa(e.firestore,mc),s=Fc(i);let a;return a="string"==typeof(t=Object(o["k"])(t))||t instanceof Ac?Hc(s,"updateDoc",e._key,t,n,r):Wc(s,"updateDoc",e._key,t),Yu(i,[a.toMutation(e._key,At.exists(!0))])}function Hu(e){return Yu(Xa(e.firestore,mc),[new qt(e._key,At.none())])}function $u(e,t){const n=Xa(e.firestore,mc),r=cc(e),i=ju(e.converter,t);return Yu(n,[Uc(Fc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function Qu(e,...t){var n,r,i;e=Object(o["k"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||dc(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(dc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof rc)l=Xa(e.firestore,mc),h=Qe(e._key.path),u={next:n=>{t[a]&&t[a](Xu(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Xa(e,ic);l=Xa(n.firestore,mc),h=n._query;const r=new Uu(l);u={next:e=>{t[a]&&t[a](new lu(l,r,n,e))},error:t[a+1],complete:t[a+2]},fu(e._query)}return function(e,t,n,r){const i=new wa(r),s=new ko(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>_o(await Da(e),s)),()=>{i.na(),e.asyncQueue.enqueueAndForget(async()=>Io(await Da(e),s))}}(gc(l),h,c,u)}function Ju(e,t){return Va(gc(e=Xa(e,mc)),dc(t)?t:{next:t})}function Yu(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>Vo(await Ra(e),t,n)),n.promise}(gc(e),t)}function Xu(e,t,n){const r=n.docs.get(t._key),i=new Uu(e);return new cu(e,i,t._key,r,new au(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Fc(e)}get(e){const t=Mu(e,this._firestore),n=new Pu(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new iu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new iu(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=Mu(e,this._firestore),i=ju(r.converter,t,n),s=Uc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Mu(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof Ac?Hc(this._dataReader,"Transaction.update",i._key,t,n,r):Wc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Mu(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Mu(e,this._firestore),n=new Uu(this._firestore);return super.get(e).then(e=>new cu(this._firestore,n,t._key,e._document,new au(!1,!1),t.converter))}}function el(e,t){return qa(gc(e=Xa(e,mc)),n=>t(new Zu(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return new Vc("deleteField")}function nl(){return new Bc("serverTimestamp")}function rl(...e){return new zc("arrayUnion",e)}function il(...e){return new Kc("arrayRemove",e)}function sl(e){return new Gc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new mc(r,new A(e.getProvider("auth-internal")),new R(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.1",e),Object(r["registerVersion"])(c,"3.4.1","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===u||i(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1862:function(e,t,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.10";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(i["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new x(this,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new A(this,Object(i["z"])(this._delegate,e))}catch(t){throw T(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new A(this,e):null)}}class y extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function v(e){Object(i["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new y(e)}get(e){const t=R(e);return this._delegate.get(t).then(e=>new k(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=R(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=R(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=R(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const r=R(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=R(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=R(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new O(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new y(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new y(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i["d"](t._delegate,n,new i["n"](e)))}static forKey(e,t,n){return new I(t,new i["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new x(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new x(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["k"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=E(e),n=S(e,e=>new k(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new k(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function T(e,t,n){return e.message=e.message.replace(t,n),e}function E(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class k{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class O extends k{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class A{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new y(e)}where(e,t,n){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw T(t,"limit()","Query.limit()")}}limitToLast(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw T(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw T(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw T(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw T(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw T(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new N(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=E(e),n=S(e,e=>new N(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,n)}withConverter(e){return new A(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new O(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class N{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new A(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new O(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new C(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new O(this._firestore,n))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class x extends A{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new I(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new x(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function R(e){return Object(i["p"])(e,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new D(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["k"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new j(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new j(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new j(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new j(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new j(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={Firestore:g,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:k,Query:A,QueryDocumentSnapshot:O,QuerySnapshot:N,CollectionReference:x,FieldPath:D,FieldValue:j,setLogLevel:v,CACHE_SIZE_UNLIMITED:i["c"]};function L(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},P)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){L(e,(e,t)=>new g(e,t,new m)),e.registerVersion(a,c)}M(r["a"])},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Fe})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Rr})),n.d(t,"j",(function(){return Wi})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Er})),n.d(t,"m",(function(){return yt})),n.d(t,"n",(function(){return bt})),n.d(t,"o",(function(){return wt})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return xe})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return Pn})),n.d(t,"t",(function(){return k})),n.d(t,"u",(function(){return si})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return zt})),n.d(t,"y",(function(){return Nn})),n.d(t,"z",(function(){return zi})),n.d(t,"A",(function(){return Rn})),n.d(t,"B",(function(){return Kt})),n.d(t,"C",(function(){return Bt})),n.d(t,"D",(function(){return De})),n.d(t,"F",(function(){return Wt})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Xt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return yn})),n.d(t,"K",(function(){return ii})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return rr})),n.d(t,"N",(function(){return Qt})),n.d(t,"O",(function(){return jt})),n.d(t,"P",(function(){return Ar})),n.d(t,"Q",(function(){return Br})),n.d(t,"R",(function(){return ni})),n.d(t,"S",(function(){return Tn})),n.d(t,"T",(function(){return Pt})),n.d(t,"U",(function(){return Cr})),n.d(t,"V",(function(){return qr})),n.d(t,"W",(function(){return ei})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return qt})),n.d(t,"Z",(function(){return $t})),n.d(t,"ab",(function(){return Et})),n.d(t,"bb",(function(){return Dt})),n.d(t,"cb",(function(){return Mt})),n.d(t,"db",(function(){return Ht})),n.d(t,"eb",(function(){return Jt})),n.d(t,"fb",(function(){return Or})),n.d(t,"gb",(function(){return Vr})),n.d(t,"hb",(function(){return Xr})),n.d(t,"ib",(function(){return At})),n.d(t,"jb",(function(){return rn})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return xr})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return Gt})),n.d(t,"w",(function(){return Ts})),n.d(t,"E",(function(){return _s}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw _(e,...t)}function v(e,...t){return _(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function E(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function k(e){E(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["s"])()||Object(r["u"])()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,i,s={}){return V(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["x"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function V(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),t);try{const t=new z(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw K(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw K(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw K(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);y(e,a)}}catch(s){if(s instanceof r["c"])throw s;y(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await U(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?j(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(v(this.auth,"timeout")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function K(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return U(e,"POST","/v1/accounts:update",t)}async function H(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=Object(r["k"])(e),i=await n.getIdToken(t),s=Y(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(J(s.auth_time)),issuedAtTime:$(J(s.iat)),expirationTime:$(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function Y(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=Y(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Z(e,H(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ie(e){const t=Object(r["k"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await V(e,{},async()=>{const n=Object(r["x"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=B(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ae(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ce;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,G(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:T}=t;I(v&&T,e,"internal-error");const E=ce.fromJSON(this.name,T);I("string"===typeof v,e,"internal-error"),ue(l,e.name),ue(h,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof w,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(g,e.name),ue(y,e.name);const S=new le({uid:v,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(k(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||k(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=le._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=Object(r["l"])()){return/firefox\//i.test(e)}function ye(e=Object(r["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=Object(r["l"])()){return/crios\//i.test(e)}function be(e=Object(r["l"])()){return/iemobile/i.test(e)}function we(e=Object(r["l"])()){return/android/i.test(e)}function _e(e=Object(r["l"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["l"])()){return/webos/i.test(e)}function Te(e=Object(r["l"])()){return/iphone|ipad|ipod/i.test(e)}function Ee(e=Object(r["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=Object(r["l"])()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return Object(r["q"])()&&10===document.documentMode}function Oe(e=Object(r["l"])()){return Te(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=me(Object(r["l"])());break;case"Worker":n=`${me(Object(r["l"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Re(this),this.idTokenSubscription=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["k"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function xe(e){return Object(r["k"])(e)}class Re{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function De(e,t,n){const r=xe(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=je(t),{host:o,port:a}=Pe(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Me()}function je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pe(e){const t=je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Le(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Le(t)}}}function Le(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Me(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t){return U(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function Ve(e,t){return U(e,"POST","/v1/accounts:update",t)}async function qe(e,t){return U(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function ze(e,t){return U(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function Ke(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}async function He(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Qe(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Fe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Be(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $e(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ve(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class Ze extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["x"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function tt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function nt(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw K(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(r["y"])(Object(r["j"])(e))["link"],n=t?Object(r["y"])(Object(r["j"])(t))["deep_link_id"]:null,i=Object(r["y"])(Object(r["j"])(e))["deep_link_id"],s=i?Object(r["y"])(Object(r["j"])(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=Object(r["y"])(Object(r["j"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return I(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class yt extends Fe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="saml.";class bt extends lt{constructor(e){I(e.startsWith(vt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(e,t){return q(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),s=Tt(n),o=new It({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tt(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e){var t;const n=xe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new It({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _t(n,{returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new St(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw St._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t){const n=Object(r["k"])(e);await Nt(!0,n,t);const{providerUserInfo:i}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ot(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ct(e,t,n=!1){const r=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}async function Nt(e,t,n){await re(t);const r=Ot(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Z(e,kt(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=Y(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),It._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r="signIn",i=await kt(e,r,t),s=await It._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Dt(e,t){return Rt(xe(e),t)}async function jt(e,t){const n=Object(r["k"])(e);return await Nt(!1,n,t.providerId),Ct(n,t)}async function Pt(e,t){return xt(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t){const n=xe(e),r=await Lt(n,{token:t,returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ut._fromServerResponse(e,t):y(e,"internal-error")}}class Ut extends Ft{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ut(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t,n){const i=Object(r["k"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&Vt(i,s,n),await Ge(i,s)}async function Bt(e,t,n){await Ue(Object(r["k"])(e),{oobCode:t,newPassword:n})}async function zt(e,t){await qe(Object(r["k"])(e),{oobCode:t})}async function Kt(e,t){const n=Object(r["k"])(e),i=await Ue(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ft._fromServerResponse(xe(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Gt(e,t){const{data:n}=await Kt(Object(r["k"])(e),t);return n.email}async function Wt(e,t,n){const r=xe(e),i=await _t(r,{returnSecureToken:!0,email:t,password:n}),s=await It._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ht(e,t,n){return Dt(Object(r["k"])(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t,n){const i=Object(r["k"])(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&Vt(i,s,n),await We(i,s)}function Qt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const i=Object(r["k"])(e),s=ut.credentialWithLink(t,n||A());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Dt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t){return U(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=C()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Yt(Object(r["k"])(e),i);return s||[]}async function Zt(e,t){const n=Object(r["k"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&Vt(n.auth,s,t);const{email:o}=await Ke(n.auth,s);o!==e.email&&await e.reload()}async function en(e,t,n){const i=Object(r["k"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&Vt(i.auth,o,n);const{email:a}=await He(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){return U(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["k"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(i,tn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function rn(e,t){return on(Object(r["k"])(e),t,null)}function sn(e,t){return on(Object(r["k"])(e),null,t)}async function on(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,Ve(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new cn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new ln(s,i);case"github.com":return new hn(s,i);case"google.com":return new dn(s,i);case"twitter.com":return new fn(s,i,e.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,r,i)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class un extends cn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ln extends cn{constructor(e,t){super(e,"facebook.com",t)}}class hn extends un{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends cn{constructor(e,t){super(e,"google.com",t)}}class fn extends un{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=xe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Ft._fromServerResponse(n,e));I(r.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(r.mfaPendingCredential);return new gn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await It._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),It._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const i=Object(r["k"])(e),s=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),gn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function bn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function wn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class _n{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Ft._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new _n(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Z(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const In=new WeakMap;function Tn(e){const t=Object(r["k"])(e);return In.has(t)||In.set(t,_n._fromUser(t)),In.get(t)}const En="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){const e=Object(r["l"])();return ye(e)||Te(e)}const On=1e3,An=10;class Cn extends Sn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kn()&&Ae(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,An):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},On)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cn.type="LOCAL";const Nn=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Sn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xn.type="SESSION";const Rn=xn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new jn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Dn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.receivers=[];class Ln{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Pn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function Fn(e){Mn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return"undefined"!==typeof Mn()["WorkerGlobalScope"]&&"function"===typeof Mn()["importScripts"]}async function Vn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function qn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Bn(){return Un()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="firebaseLocalStorageDb",Kn=1,Gn="firebaseLocalStorage",Wn="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $n(e,t){return e.transaction([Gn],t?"readwrite":"readonly").objectStore(Gn)}function Qn(){const e=indexedDB.deleteDatabase(zn);return new Hn(e).toPromise()}function Jn(){const e=indexedDB.open(zn,Kn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Gn,{keyPath:Wn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Gn)?t(n):(n.close(),await Qn(),t(await Jn()))})})}async function Yn(e,t,n){const r=$n(e,!0).put({[Wn]:t,value:n});return new Hn(r).toPromise()}async function Xn(e,t){const n=$n(e,!1).get(t),r=await new Hn(n).toPromise();return void 0===r?null:r.value}function Zn(e,t){const n=$n(e,!0).delete(t);return new Hn(n).toPromise()}const er=800,tr=3;class nr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(Bn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vn(),!this.activeServiceWorker)return;this.sender=new Ln(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&qn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Yn(e,En,"1"),await Zn(e,En),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Xn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=$n(e,!1).getAll();return new Hn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),er)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nr.type="LOCAL";const rr=nr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function sr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cr(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ar().appendChild(r)})}function ur(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=500,hr=6e4,dr=1e12;class fr{constructor(e){this.auth=e,this.counter=dr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||dr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||dr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||dr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hr)},lr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=ur("rcb"),yr=new D(3e4,6e4),vr="https://www.google.com/recaptcha/api.js?";class br{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Mn().grecaptcha}load(e,t=""){return I(wr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Mn().grecaptcha):new Promise((n,i)=>{const s=Mn().setTimeout(()=>{i(v(e,"network-request-failed"))},yr.get());Mn()[gr]=()=>{Mn().clearTimeout(s),delete Mn()[gr];const r=Mn().grecaptcha;if(!r)return void i(v(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${vr}?${Object(r["x"])({onload:gr,render:"explicit",hl:t})}`;cr(o).catch(()=>{clearTimeout(s),i(v(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Mn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class _r{async load(e){return new fr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="recaptcha",Tr={theme:"light",type:"image"};class Er{constructor(e,t=Object.assign({},Tr),n){this.parameters=t,this.type=Ir,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _r:new br,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Mn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(C()&&!Un(),this.auth,"internal-error"),await Sr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await or(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Sr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Or(e,t,n){const i=xe(e),s=await Nr(i,t,Object(r["k"])(n));return new kr(s,e=>Dt(i,e))}async function Ar(e,t,n){const i=Object(r["k"])(e);await Nt(!1,i,"phone");const s=await Nr(i.auth,t,Object(r["k"])(n));return new kr(s,e=>jt(i,e))}async function Cr(e,t,n){const i=Object(r["k"])(e),s=await Nr(i.auth,t,Object(r["k"])(n));return new kr(s,e=>Pt(i,e))}async function Nr(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===Ir,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await vn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await ir(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function xr(e,t){await Ct(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.providerId=Rr.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return Nr(this.auth,e,Object(r["k"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rr.credentialFromTaggedObject(t)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dr(e,t){return t?k(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr.PROVIDER_ID="phone",Rr.PHONE_SIGN_IN_METHOD="phone";class jr extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pr(e){return Rt(e.auth,new jr(e),e.bypassAuthState)}function Lr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),xt(n,new jr(e),e.bypassAuthState)}async function Mr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ct(n,new jr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pr;case"linkViaPopup":case"linkViaRedirect":return Mr;case"reauthViaPopup":case"reauthViaRedirect":return Lr;default:y(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new D(2e3,1e4);async function Vr(e,t,n){const r=xe(e);w(e,t,lt);const i=Dr(r,n),s=new zr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function qr(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Dr(i.auth,n),o=new zr(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function Br(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Dr(i.auth,n),o=new zr(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class zr extends Fr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Pn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Ur.get())};e()}}zr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kr="pendingRedirect",Gr=new Map;class Wr extends Fr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const t=await Hr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hr(e,t){const n=Yr(t),r=Jr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function $r(e,t){return Jr(e)._set(Yr(t),"true")}function Qr(){Gr.clear()}function Jr(e){return k(e._redirectPersistence)}function Yr(e){return fe(Kr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t,n){return Zr(e,t,n)}async function Zr(e,t,n){const r=xe(e);w(e,t,lt);const i=Dr(r,n);return await $r(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Dr(i.auth,n);await $r(s,i.auth);const o=await oi(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ni(e,t,n){return ri(e,t,n)}async function ri(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Dr(i.auth,n);await Nt(!1,i,t.providerId),await $r(s,i.auth);const o=await oi(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function ii(e,t){return await xe(e)._initializationPromise,si(e,t,!1)}async function si(e,t,n=!1){const r=xe(e),i=Dr(r,t),s=new Wr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function oi(e){const t=Pn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=6e5;class ci{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!li(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ai&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function li({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return li(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e,t={}){return U(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pi=/^https?/;async function mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await di(e);for(const r of t)try{if(gi(r))return}catch(n){}y(e,"unauthorized-domain")}function gi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pi.test(n))return!1;if(fi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new D(3e4,6e4);function vi(){const e=Mn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function bi(e){return new Promise((t,n)=>{var r,i,s;function o(){vi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vi(),n(v(e,"network-request-failed"))},timeout:yi.get()})}if(null===(i=null===(r=Mn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Mn().gapi)||void 0===s?void 0:s.load)){const t=ur("iframefcb");return Mn()[t]=()=>{gapi.load?o():n(v(e,"network-request-failed"))},cr("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw wi=null,e})}let wi=null;function _i(e){return wi=wi||bi(e),wi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new D(5e3,15e3),Ti="__/auth/iframe",Ei="emulator/auth/iframe",Si={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ki=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Oi(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,Ei):`https://${e.config.authDomain}/${Ti}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=ki.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["x"])(s).slice(1)}`}async function Ai(e){const t=await _i(e),n=Mn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Oi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Si,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),s=Mn().setTimeout(()=>{r(i)},Ii.get());function o(){Mn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ni=500,xi=600,Ri="_blank",Di="http://localhost";class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Pi(e,t,n,i=Ni,s=xi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ci),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=ve(l)?Ri:n),ge(l)&&(t=t||Di,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Se(l)&&"_self"!==c)return Li(t||"",c),new ji(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new ji(d)}function Li(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="__/auth/handler",Fi="emulator/auth/handler";function Ui(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["p"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Vi(e)}?${Object(r["x"])(u).slice(1)}`}function Vi({config:e}){return e.emulator?j(e,Fi):`https://${e.authDomain}/${Mi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="webStorageSupport";class Bi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=si}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Ui(e,t,n,A(),r);return Pi(e,s,Pn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Fn(Ui(e,t,n,A(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ai(e),n=new ci(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(qi,{type:qi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[qi];void 0!==i&&t(!!i),y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ye()||Te()}}const zi=Bi;class Ki{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class Gi extends Ki{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gi(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wi{constructor(){}static assertion(e){return Gi._fromCredential(e)}}Wi.FACTOR_ID="phone";var Hi="@firebase/auth",$i="0.19.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yi(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},o=new Ne(t,r);return O(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=xe(e.getProvider("auth").getImmediate());return(e=>new Qi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Hi,$i,Ji(e)),Object(i["registerVersion"])(Hi,$i,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi("Browser");const Zi=2e3;async function es(e,t,n){var r;const{BuildInfo:i}=Xi();E(t.sessionId,"AuthEvent did not contain a session ID");const s=await ss(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:we()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Ui(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ts(e){const{BuildInfo:t}=Xi(),n={};Te()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await di(e,n)}function ns(e){const{cordova:t}=Xi();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ee()?"_blank":"_system","location=yes"),n(i)})})}async function rs(e,t,n){const{cordova:r}=Xi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(v(e,"redirect-cancelled-by-user"))},Zi))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function is(e){var t,n,r,i,s,o,a,c,u,l;const h=Xi();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(e){const t=os(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function os(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=20;class cs extends ci{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function us(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:e.tenantId,error:v(e,"no-auth-event")}}function ls(e,t){return ps()._set(ms(e),t)}async function hs(e){const t=await ps()._get(ms(e));return t&&await ps()._remove(ms(e)),t}function ds(e,t){var n,r;const i=ys(t);if(i.includes("/__/auth/callback")){const t=vs(i),s=t["firebaseError"]?gs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?v(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function fs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ps(){return k(Nn)}function ms(e){return fe("authEvent",e.config.apiKey,e.name)}function gs(e){try{return JSON.parse(e)}catch(t){return null}}function ys(e){const t=vs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=vs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=vs(i)["link"];return s||i||r||n||e}function vs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=500;class ws{constructor(){this._redirectPersistence=Rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=si}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new cs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){is(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Qr(),await this._originValidation(e);const s=us(e,n,r);await ls(e,s);const o=await es(e,s,t),a=await ns(o);return rs(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Xi(),s=setTimeout(async()=>{await hs(e),t.onEvent(Is())},bs),o=async n=>{clearTimeout(s);const r=await hs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ds(r,n["url"])),t.onEvent(i||Is())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";Xi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const _s=ws;function Is(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:v("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e,t){xe(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return P})),n.d(t,"k",(function(){return V})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return y})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return N})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return T})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return m})),n.d(t,"u",(function(){return v})),n.d(t,"v",(function(){return I})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return D})),n.d(t,"y",(function(){return j}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function O(e,t){return e.replace(A,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(R(n)&&R(s)){if(!x(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var r,y,v,b,w,_,I,T=n&&n.that,E=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),O=i(t,T),A=function(e){return r&&f(r,"normal",e),new m(!0,e)},C=function(e){return E?(o(e),k?O(e[0],e[1],A):O(e[0],e[1])):k?O(e,A):O(e)};if(S)r=e;else{if(y=d(e),!y)throw p(a(e)+" is not iterable");if(c(y)){for(v=0,b=u(e);b>v;v++)if(w=C(e[v]),w&&l(g,w))return w;return new m(!1)}r=h(e,y)}_=r.next;while(!(I=s(_,r)).done){try{w=C(I.value)}catch(N){f(r,"throw",N)}if("object"==typeof w&&w&&l(g,w))return w}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,s=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),y=n("605d"),v=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,I=a.Function,T=a.MessageChannel,E=a.String,S=0,k={},O="onreadystatechange";try{r=a.location}catch(R){}var A=function(e){if(h(k,e)){var t=k[e];delete k[e],t()}},C=function(e){return function(){A(e)}},N=function(e){A(e.data)},x=function(e){a.postMessage(E(e),r.protocol+"//"+r.host)};v&&b||(v=function(e){var t=p(arguments,1);return k[++S]=function(){c(l(e)?e:I(e),void 0,t)},i(S),S},b=function(e){delete k[e]},y?i=function(e){w.nextTick(C(e))}:_&&_.now?i=function(e){_.now(C(e))}:T&&!g?(s=new T,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(x)?(i=x,a.addEventListener("message",N,!1)):i=O in m("script")?function(e){f.appendChild(m("script"))[O]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:v,clear:b}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=o(t),c=a(t),u=c.length,l=0;while(u>l)i.f(e,n=c[l++],r[n]);return e}},"39fa":function(e,t,n){},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4b99":function(e,t,n){"use strict";var r=n("7a23"),i=n("94ed");const s={title:[String],spin:[Boolean],width:[Number,String],height:[Number,String],ariaLabel:[String],staticClass:[String],class:[String],name:{type:String,required:!0,default:"alert"},size:{type:[Number,String],default:24},viewBox:{type:String,default:"0 0 24 24"},xmlns:{type:String,default:"http://www.w3.org/2000/svg"},role:{type:String,default:"img"},spin:{type:Boolean,default:!1}};n("39fa");const o=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>e.split("-").map(o).join(""),c=(e,t,n)=>{const r=e["mdi"+a(t.name)]||i["a"],s={role:t.role,"aria-label":t.ariaLabel,...n},o={fill:"currentColor",width:t.width||t.size,height:t.height||t.size,viewBox:t.viewBox,xmlns:t.xmlns},c={d:r};return{spanAttrs:s,svgAttrs:o,pathAttrs:c}},u=(e,t)=>({[t.staticClass||""]:!0,[t.class||""]:!0,["mdi mdi-"+e.name]:!0,"mdi-spin":!0===e.spin}),l=(e,t={})=>({install(n,{icons:r}){if(void 0===r)throw new Error("Icons must be provided separately");n.component("mdicon",{name:"MDIcon",props:s,...t,render:e(r)})}}),h=e=>function(){const{spanAttrs:t,svgAttrs:n,pathAttrs:i}=c(e,this,this.$attrs);return Object(r["i"])("span",{...t,class:u(this,this)},[Object(r["i"])("svg",n,[this.title?Object(r["i"])("title",[this.title]):void 0,Object(r["i"])("path",i)])])};t["a"]=l(h)},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return L})),n.d(t,"_addComponent",(function(){return V})),n.d(t,"_addOrOverwriteComponent",(function(){return q})),n.d(t,"_apps",(function(){return F})),n.d(t,"_clearComponents",(function(){return G})),n.d(t,"_components",(function(){return U})),n.d(t,"_getProvider",(function(){return z})),n.d(t,"_registerComponent",(function(){return B})),n.d(t,"_removeServiceInstance",(function(){return K})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return Y})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.11",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",O="@firebase/performance-compat",A="@firebase/remote-config",C="@firebase/remote-config-compat",N="@firebase/storage",x="@firebase/storage-compat",R="@firebase/firestore",D="@firebase/firestore-compat",j="firebase",P="9.6.1",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[O]:"fire-perf-compat",[A]:"fire-rc",[C]:"fire-rc-compat",[N]:"fire-gcs",[x]:"fire-gcs-compat",[R]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},F=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())V(n,e);return!0}function z(e,t){return e.container.getProvider(t)}function K(e,t,n=L){z(e,t).clearInstance(n)}function G(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=P;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["h"])(e,o.options)&&Object(s["h"])(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new $(e,n,a);return F.set(i,c),c}function Y(e=L){const t=F.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function X(){return Array.from(F.values())}async function Z(e){const t=e.name;F.has(t)&&(F.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw H.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}re("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["l"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["l"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["r"])()}catch(e){return y()&&Object(s["r"])()}return!1}function y(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function v(){return(l()||Object(s["n"])()||h())&&!d()&&g()&&!y()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={LOCAL:"local",NONE:"none",SESSION:"session"},I=r["p"],T="persistence";function E(e,t){I(Object.values(_).includes(t),e,"invalid-persistence-type"),Object(s["u"])()?I(t!==_.SESSION,e,"unsupported-persistence-type"):Object(s["t"])()?I(t===_.NONE,e,"unsupported-persistence-type"):y()?I(t===_.NONE||t===_.LOCAL&&Object(s["r"])(),e,"unsupported-persistence-type"):I(t===_.NONE||g(),e,"unsupported-persistence-type")}async function S(e){await e._initializationPromise;const t=O(),n=r["v"](T,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function k(e,t){const n=O();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const i=r["v"](T,e,t),s=n.sessionStorage.getItem(i);switch(s){case _.NONE:return[r["L"]];case _.LOCAL:return[r["M"],r["A"]];case _.SESSION:return[r["A"]];default:return[]}}function O(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=r["p"];class C{constructor(){this.browserResolver=r["t"](r["z"]),this.cordovaResolver=r["t"](r["E"]),this.underlyingResolver=null,this._redirectPersistence=r["A"],this._completeRedirectFn=r["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return A(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return e.unwrap()}function x(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return j(e)}function D(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new M(e,r["J"](e,t))}else if(i){const e=j(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function j(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function P(e,t){return t.catch(t=>{throw t instanceof s["c"]&&D(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:R(e),additionalUserInfo:r["I"](e),user:F.getOrCreate(n)}})}async function L(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>P(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=x(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return P(N(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this._delegate=e,this.multiFactor=r["S"](e)}static getOrCreate(e){return F.USER_MAP.has(e)||F.USER_MAP.set(e,new F(e)),F.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return P(this.auth,r["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return L(this.auth,r["P"](this._delegate,e,t))}async linkWithPopup(e){return P(this.auth,r["Q"](this._delegate,e,C))}async linkWithRedirect(e){return await S(r["q"](this.auth)),r["R"](this._delegate,e,C)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return P(this.auth,r["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return L(this.auth,r["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return P(this.auth,r["V"](this._delegate,e,C))}async reauthenticateWithRedirect(e){return await S(r["q"](this.auth)),r["W"](this._delegate,e,C)}sendEmailVerification(e){return r["X"](this._delegate,e)}async unlink(e){return await r["ib"](this._delegate,e),this}updateEmail(e){return r["jb"](this._delegate,e)}updatePassword(e){return r["kb"](this._delegate,e)}updatePhoneNumber(e){return r["lb"](this._delegate,e)}updateProfile(e){return r["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}F.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=r["p"];class V{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;U(n,"invalid-api-key",{appName:e.name});let i=[r["L"]];if("undefined"!==typeof window){i=k(n,e.name);for(const e of[r["M"],r["y"],r["A"]])i.includes(e)||i.push(e)}U(n,"invalid-api-key",{appName:e.name});const s="undefined"!==typeof window?C:void 0;this._delegate=t.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(r["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?F.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["D"](this._delegate,e,t)}applyActionCode(e){return r["x"](this._delegate,e)}checkActionCode(e){return r["B"](this._delegate,e)}confirmPasswordReset(e,t){return r["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return P(this._delegate,r["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["H"](this._delegate,e)}isSignInWithEmailLink(e){return r["N"](this._delegate,e)}async getRedirectResult(){U(v(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["K"](this._delegate,C);return e?P(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(E(this._delegate,e),e){case _.SESSION:t=r["A"];break;case _.LOCAL:const e=await r["t"](r["M"])._isAvailable();t=e?r["M"]:r["y"];break;case _.NONE:t=r["L"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return P(this._delegate,r["ab"](this._delegate))}signInWithCredential(e){return P(this._delegate,r["bb"](this._delegate,e))}signInWithCustomToken(e){return P(this._delegate,r["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return P(this._delegate,r["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return P(this._delegate,r["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return L(this._delegate,r["fb"](this._delegate,e,t))}async signInWithPopup(e){return U(v(),this._delegate,"operation-not-supported-in-this-environment"),P(this._delegate,r["gb"](this._delegate,e,C))}async signInWithRedirect(e){return U(v(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),r["hb"](this._delegate,e,C)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function q(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&F.getOrCreate(e));return{next:s,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V.Persistence=_;class B{constructor(){this.providerId="phone",this._delegate=new r["i"](N(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}B.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,B.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=r["p"];class K{constructor(e,n,i=t["a"].app()){var s;z(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="auth-compat";function W(e){e.INTERNAL.registerComponent(new i["a"](G,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new V(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:B,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:K,TwitterAuthProvider:r["o"],Auth:V,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}W(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var m,g=h(arguments[o++]),y=d?p(a(g),d(g)):a(g),v=y.length,b=0;while(v>b)m=y[b++],r&&!s(f,g,m)||(n[m]=g[m])}return n}:d},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f(d,c(e))};e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new y),_=c(w.get),I=c(w.has),T=c(w.set);r=function(e,t){if(I(w,e))throw new g(m);return t.facade=e,T(w,e,t),t},i=function(e){return _(w,e)||{}},s=function(e){return I(w,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new g(m);return t.facade=e,l(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"j",(function(){return r["I"]})),n.d(t,"p",(function(){return r["L"]})),n.d(t,"a",(function(){return jn})),n.d(t,"d",(function(){return Wn})),n.d(t,"e",(function(){return ir})),n.d(t,"f",(function(){return Gn})),n.d(t,"g",(function(){return Xn})),n.d(t,"h",(function(){return Zn})),n.d(t,"i",(function(){return pi})),n.d(t,"k",(function(){return Vn})),n.d(t,"l",(function(){return Qe})),n.d(t,"m",(function(){return $e})),n.d(t,"n",(function(){return ur})),n.d(t,"o",(function(){return Nn})),n.d(t,"s",(function(){return Je})),n.d(t,"t",(function(){return mn})),n.d(t,"b",(function(){return ps})),n.d(t,"c",(function(){return Cs})),n.d(t,"q",(function(){return Ts})),n.d(t,"r",(function(){return Es}));var r=n("9ff4");let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,y=[];let v;const b=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!y.includes(this))try{return y.push(v=this),k(),m=1<<++p,p<=g?h(this):I(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,O(),y.pop();const e=y.length;v=e>0?y[e-1]:void 0}}stop(){this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let T=!0;const E=[];function S(){E.push(T),T=!1}function k(){E.push(T),T=!0}function O(){const e=E.pop();T=void 0===e||e}function A(e,t,n){if(!C())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;N(i,s)}function C(){return T&&void 0!==v}function N(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function x(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(w)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(w)));break;case"set":Object(r["t"])(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const D=Object(r["H"])("__proto__,__v_isRef,__isVue"),j=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),P=V(),L=V(!1,!0),M=V(!0),F=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)A(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){S();const n=Ne(this)[t].apply(this,e);return O(),n}}),e}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&s===(e?t?we:be:t?ve:ye).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if(Object(r["E"])(i)?j.has(i):D(i))return a;if(e||A(n,"get",i),t)return a;if(Le(a)){const e=!o||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Se(a):Te(a):a}}const q=z(),B=z(!0);function z(e=!1){return function(t,n,i,s){let o=t[n];if(!e&&!Ae(i)&&(i=Ne(i),o=Ne(o),!Object(r["o"])(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===Ne(s)&&(a?Object(r["j"])(i,o)&&x(t,"set",n,i,o):x(t,"add",n,i)),c}}function K(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&x(e,"delete",t,void 0,i),s}function G(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&j.has(t)||A(e,"has",t),n}function W(e){return A(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const H={get:P,set:q,deleteProperty:K,has:G,ownKeys:W},$={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=Object(r["h"])({},H,{get:L,set:B}),J=e=>e,Y=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),s=Ne(t);t!==s&&!n&&A(i,"get",t),!n&&A(i,"get",s);const{has:o}=Y(i),a=r?J:n?De:Re;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return e!==i&&!t&&A(r,"has",e),!t&&A(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&A(Ne(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=Ne(e);const t=Ne(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function ne(e,t){t=Ne(t);const n=Ne(this),{has:i,get:s}=Y(n);let o=i.call(n,e);o||(e=Ne(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function re(e){const t=Ne(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&x(t,"delete",e,void 0,s),o}function ie(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ne(s),a=t?J:e?De:Re;return!e&&A(o,"iterate",b),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=Ne(s),a=Object(r["t"])(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?J:t?De:Re;return!t&&A(o,"iterate",u?w:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)}),[e,n,t,r]}const[ue,le,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?le:ue;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const ye=new WeakMap,ve=new WeakMap,be=new WeakMap,we=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ie(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e(Object(r["O"])(e))}function Te(e){return e&&e["__v_isReadonly"]?e:ke(e,!1,H,pe,ye)}function Ee(e){return ke(e,!1,Q,me,ve)}function Se(e){return ke(e,!0,$,ge,be)}function ke(e,t,n,i,s){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ie(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Oe(e){return Ae(e)?Oe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return Oe(e)||Ae(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function xe(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["v"])(e)?Te(e):e,De=e=>Object(r["v"])(e)?Se(e):e;function je(e){C()&&(e=Ne(e),e.dep||(e.dep=c()),N(e.dep))}function Pe(e,t){e=Ne(e),e.dep&&R(e.dep)}function Le(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Le(e)?e.value:e}const Fe={get:(e,t,n)=>Me(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return Oe(e)?e:new Proxy(e,Fe)}class Ve{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(e,()=>{this._dirty||(this._dirty=!0,Pe(this))}),this["__v_isReadonly"]=n}get value(){const e=Ne(this);return je(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t){let n,i;const s=Object(r["p"])(e);s?(n=e,i=r["d"]):(n=e.get,i=e.set);const o=new Ve(n,i,s||!i);return o}Promise.resolve();new Set;new Map;function Be(e,t,...n){const i=e.vnode.props||r["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=i[e]||r["b"];o?s=n.map(e=>e.trim()):t&&(s=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(t)]||i[c=Object(r["M"])(Object(r["e"])(t))];!u&&o&&(u=i[c=Object(r["M"])(Object(r["l"])(t))]),u&&jr(u,e,6,s);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,jr(l,e,6,s)}}function ze(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=ze(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(e=>a[e]=null):Object(r["h"])(a,o),i.set(e,a),a):(i.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Ge=null,We=null;function He(e){const t=Ge;return Ge=e,We=e&&e.type.__scopeId||null,t}function $e(e){We=e}function Qe(){We=null}function Je(e,t=Ge,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zn(-1);const i=He(t),s=e(...n);return He(i),r._d&&zn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Ye(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let y,v;const b=He(e);try{if(4&n.shapeFlag){const e=s||i;y=sr(h.call(e,e,d,o,p,f,m)),v=u}else{const e=t;0,y=sr(e.length>1?e(o,{attrs:u,slots:c,emit:l}):e(o,null)),v=t.props?u:Xe(u)}}catch(_){Fn.length=0,Pr(_,e,1),y=Zn(Ln)}let w=y;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(r["u"])&&(v=Ze(v,a)),w=nr(w,v))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,He(b),y}const Xe=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},Ze=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function et(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||tt(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?tt(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ke(u,n))return!0}}return!1}function tt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ke(n,s))return!0}return!1}function nt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const rt=e=>e.__isSuspense;function it(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):ri(e)}function st(e,t){if(gr){let n=gr.provides;const r=gr.parent&&gr.parent.provides;r===n&&(n=gr.provides=Object.create(r)),n[e]=t}else 0}function ot(e,t,n=!1){const i=gr||Ge;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function at(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ct(()=>{e.isMounted=!0}),Rt(()=>{e.isUnmounting=!0}),e}const ct=[Function,Array],ut={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(e,{slots:t}){const n=yr(),r=at();let i;return()=>{const s=t.default&&gt(t.default(),!0);if(!s||!s.length)return;const o=Ne(e),{mode:a}=o;const c=s[0];if(r.isLeaving)return ft(c);const u=pt(c);if(!u)return ft(c);const l=dt(u,o,r,n);mt(u,l);const h=n.subTree,d=h&&pt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==Ln&&(!$n(u,d)||f)){const e=dt(d,o,r,n);if(mt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},ft(c);"in-out"===a&&u.type!==Ln&&(e.delayLeave=(e,t,n)=>{const i=ht(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},lt=ut;function ht(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function dt(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:y,onAppearCancelled:v}=t,b=String(e.key),w=ht(n,e),_=(e,t)=>{e&&jr(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=w[b];s&&$n(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=c,r=u,s=l;if(!n.isMounted){if(!i)return;t=g||c,r=y||u,s=v||l}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return dt(e,t,n,r)}};return I}function ft(e){if(vt(e))return e=nr(e),e.children=null,e}function pt(e){return vt(e)?e.children?e.children[0]:void 0:e}function mt(e,t){6&e.shapeFlag&&e.component?mt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===jn?(128&s.patchFlag&&r++,n=n.concat(gt(s.children,t))):(t||s.type!==Ln)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}const yt=e=>!!e.type.__asyncLoader;const vt=e=>e.type.__isKeepAlive;RegExp,RegExp;function bt(e,t){return Object(r["o"])(e)?e.some(e=>bt(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function wt(e,t){It(e,"a",t)}function _t(e,t){It(e,"da",t)}function It(e,t,n=gr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(kt(t,r,n),n){let e=n.parent;while(e&&e.parent)vt(e.parent.vnode)&&Tt(r,t,n,e),e=e.parent}}function Tt(e,t,n,i){const s=kt(t,e,i,!0);Dt(()=>{Object(r["K"])(i[t],s)},n)}function Et(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function St(e){return 128&e.shapeFlag?e.ssContent:e}function kt(e,t,n=gr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;S(),vr(n);const i=jr(t,n,e,r);return br(),O(),i});return r?i.unshift(s):i.push(s),s}}const Ot=e=>(t,n=gr)=>(!Tr||"sp"===e)&&kt(e,t,n),At=Ot("bm"),Ct=Ot("m"),Nt=Ot("bu"),xt=Ot("u"),Rt=Ot("bum"),Dt=Ot("um"),jt=Ot("sp"),Pt=Ot("rtg"),Lt=Ot("rtc");function Mt(e,t=gr){kt("ec",e,t)}let Ft=!0;function Ut(e){const t=zt(e),n=e.proxy,i=e.ctx;Ft=!1,t.beforeCreate&&qt(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:_,render:I,renderTracked:T,renderTriggered:E,errorCaptured:S,serverPrefetch:k,expose:O,inheritAttrs:A,components:C,directives:N,filters:x}=t,R=null;if(l&&Vt(l,i,R,e.appContext.config.unwrapInjectedRef),a)for(const j in a){const e=a[j];Object(r["p"])(e)&&(i[j]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(r["v"])(t)&&(e.data=Te(t))}if(Ft=!0,o)for(const j in o){const e=o[j],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const s=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=qe({get:t,set:s});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Bt(c[r],i,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{st(t,e[t])})}function D(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&qt(h,e,"c"),D(At,d),D(Ct,f),D(Nt,p),D(xt,m),D(wt,g),D(_t,y),D(Mt,S),D(Lt,T),D(Pt,E),D(Rt,b),D(Dt,_),D(jt,k),Object(r["o"])(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});I&&e.render===r["d"]&&(e.render=I),null!=A&&(e.inheritAttrs=A),C&&(e.components=C),N&&(e.directives=N)}function Vt(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=$t(e));for(const s in e){const n=e[s];let o;o=Object(r["v"])(n)?"default"in n?ot(n.from||s,n.default,!0):ot(n.from||s):ot(n),Le(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function qt(e,t,n){jr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bt(e,t,n,i){const s=i.includes(".")?di(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&ui(s,n)}else if(Object(r["p"])(e))ui(s,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Bt(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&ui(s,i,e)}else 0}function zt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Kt(c,e,o,!0)),Kt(c,t,o)):c=t,s.set(t,c),c}function Kt(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Kt(e,s,n,!0),i&&i.forEach(t=>Kt(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Gt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Gt={data:Wt,props:Jt,emits:Jt,methods:Jt,computed:Jt,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Jt,directives:Jt,watch:Yt,provide:Wt,inject:Ht};function Wt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Ht(e,t){return Jt($t(e),$t(t))}function $t(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qt(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Yt(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Qt(e[r],t[r]);return n}function Xt(e,t,n,i=!1){const s={},o={};Object(r["g"])(o,Qn,1),e.propsDefaults=Object.create(null),en(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:Ee(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Zt(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=Ne(s),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;en(e,t,s,o)&&(l=!0);for(const o in c)t&&(Object(r["k"])(t,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(t,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=tn(u,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(r["k"])(t,e)||(delete o[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const t=Object(r["e"])(a);s[t]=tn(u,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&x(e,"set","$attrs")}function en(e,t,n,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:Ke(e.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(o){const t=Ne(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=tn(s,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function tn(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(vr(s),i=r[n]=e.call(null,t),br())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function nn(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const i=e=>{u=!0;const[n,i]=nn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(r["e"])(o[h]);rn(e)&&(a[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(rn(t)){const n=o[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=an(Boolean,i.type),n=an(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function rn(e){return"$"!==e[0]}function sn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function on(e,t){return sn(e)===sn(t)}function an(e,t){return Object(r["o"])(t)?t.findIndex(t=>on(t,e)):Object(r["p"])(t)&&on(t,e)?0:-1}const cn=e=>"_"===e[0]||"$stable"===e,un=e=>Object(r["o"])(e)?e.map(sr):[sr(e)],ln=(e,t,n)=>{const r=Je((...e)=>un(t(...e)),n);return r._c=!1,r},hn=(e,t,n)=>{const i=e._ctx;for(const s in e){if(cn(s))continue;const n=e[s];if(Object(r["p"])(n))t[s]=ln(s,n,i);else if(null!=n){0;const e=un(n);t[s]=()=>e}}},dn=(e,t)=>{const n=un(t);e.slots.default=()=>n},fn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ne(t),Object(r["g"])(t,"_",n)):hn(t,e.slots={})}else e.slots={},t&&dn(e,t);Object(r["g"])(e.slots,Qn,1)},pn=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(r["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,hn(t,s)),a=t}else t&&(dn(e,t),a={default:1});if(o)for(const r in s)cn(r)||r in a||delete s[r]};function mn(e,t){const n=Ge;if(null===n)return e;const i=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=r["b"]]=t[o];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&fi(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function gn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(S(),jr(c,n,8,[e.el,a,e,t]),O())}}function yn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vn=0;function bn(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const s=yn(),o=new Set;let a=!1;const c=s.app={_uid:vn++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:mi,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(r["p"])(e.install)?(o.add(e),e.install(c,...t)):Object(r["p"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,u){if(!a){const l=Zn(n,i);return l.appContext=s,o&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Nr(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function wn(){}const _n=it;function In(e){return Tn(e)}function Tn(e,t){wn();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!$n(e,t)&&(r=$(e),z(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Pn:v(e,t,n,r);break;case Ln:b(e,t,n,r);break;case Mn:null==e&&w(t,n,r,o);break;case jn:D(e,t,n,r,i,s,o,a,c);break;default:1&h?E(e,t,n,r,i,s,o,a,c):6&h?j(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,J)}null!=l&&i&&En(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r)},I=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=f(e),i(e,n,r),e=s;i(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},E=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,s,c,u,l,d)=>{let f,p;const{type:g,props:y,shapeFlag:v,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==m&&-1===w)f=e.el=m(e.el);else{if(f=e.el=a(e.type,u,y&&y.is,y),8&v?h(f,e.children):16&v&&C(e.children,f,null,s,c,u&&"foreignObject"!==g,l,d),_&&gn(e,null,s,"created"),y){for(const t in y)"value"===t||Object(r["z"])(t)||o(f,t,null,y[t],u,e.children,s,c,H);"value"in y&&o(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&Sn(p,s,e)}A(f,e,e.scopeId,l,s)}_&&gn(e,null,s,"beforeMount");const I=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;I&&b.beforeEnter(f),i(f,t,n),((p=y&&y.onVnodeMounted)||I||_)&&_n(()=>{p&&Sn(p,s,e),I&&b.enter(f),_&&gn(e,null,s,"mounted")},c)},A=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let s=0;s<r.length;s++)p(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?or(e[u]):sr(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,i,s,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;(g=m.onVnodeBeforeUpdate)&&Sn(g,n,t,e),f&&gn(t,e,n,"beforeUpdate");const y=s&&"foreignObject"!==t.type;if(d?x(e.dynamicChildren,d,u,n,i,y,a):c||U(e,t,u,null,n,i,y,a,!1),l>0){if(16&l)R(u,t,p,m,n,i,s);else if(2&l&&p.class!==m.class&&o(u,"class",null,m.class,s),4&l&&o(u,"style",p.style,m.style,s),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||o(u,a,c,l,s,e.children,n,i,H)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||R(u,t,p,m,n,i,s);((g=m.onVnodeUpdated)||f)&&_n(()=>{g&&Sn(g,n,t,e),f&&gn(t,e,n,"updated")},i)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===jn||!$n(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},R=(e,t,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(e,u,h,l,c,t.children,s,a,H)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||o(e,u,n[u],null,c,t.children,s,a,H);"value"in i&&o(e,"value",n.value,i.value)}},D=(e,t,n,r,s,o,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(i(h,n,r),i(d,n,r),C(t.children,n,d,s,o,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,s,o,a,u),(null!=t.key||s&&t===s.subTree)&&kn(e,t,!0)):U(e,t,n,d,s,o,a,u,l)},j=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):P(t,n,r,i,s,o,c):L(e,t,c)},P=(e,t,n,r,i,s,o)=>{const a=e.component=mr(e,r,i);if(vt(e)&&(a.ctx.renderer=J),Er(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=Zn(Ln);b(null,e,t,n)}}else M(a,e,t,n,i,s,o)},L=(e,t,n)=>{const r=t.component=e.component;if(et(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,ei(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:l,vnode:h}=e,f=n;0,u.allowRecurse=!1,n?(n.el=h.el,F(e,n,a)):n=h,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Sn(t,l,n,h),u.allowRecurse=!0;const p=Ye(e);0;const m=e.subTree;e.subTree=p,y(m,p,d(m.el),$(m),e,s,o),n.el=p.el,null===f&&nt(e,p.el),c&&_n(c,s),(t=n.props&&n.props.onVnodeUpdated)&&_n(()=>Sn(t,l,n,h),s)}else{let a;const{el:c,props:l}=t,{bm:h,m:d,parent:f}=e,p=yt(t);if(u.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&Sn(a,f,t),u.allowRecurse=!0,c&&X){const n=()=>{e.subTree=Ye(e),X(c,e.subTree,e,s,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Ye(e);0,y(null,r,n,i,e,s,o),t.el=r.el}if(d&&_n(d,s),!p&&(a=l&&l.onVnodeMounted)){const e=t;_n(()=>Sn(a,f,e),s)}256&t.shapeFlag&&e.a&&_n(e.a,s),e.isMounted=!0,t=n=i=null}},u=new _(c,()=>Xr(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,u.allowRecurse=l.allowRecurse=!0,l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Zt(e,t.props,r,n),pn(e,t.children,n),S(),ii(void 0,e.update),O()},U=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void q(u,d,n,r,i,s,o,a,c);if(256&f)return void V(u,d,n,r,i,s,o,a,c)}8&p?(16&l&&H(u,i,s),d!==u&&h(n,d)):16&l?16&p?q(u,d,n,r,i,s,o,a,c):H(u,i,s,!0):(8&l&&h(n,""),16&p&&C(d,n,r,i,s,o,a,c))},V=(e,t,n,i,s,o,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?or(t[f]):sr(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?H(e,s,o,!0,!1,d):C(t,n,i,s,o,a,c,u,d)},q=(e,t,n,i,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?or(t[l]):sr(t[l]);if(!$n(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?or(t[f]):sr(t[f]);if(!$n(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)y(null,t[l]=u?or(t[l]):sr(t[l]),n,r,s,o,a,c,u),l++}}else if(l>f)while(l<=d)z(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?or(t[l]):sr(t[l]);null!=e.key&&g.set(e.key,l)}let v,b=0;const w=f-m+1;let _=!1,I=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){z(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&$n(r,t[v])){i=v;break}void 0===i?z(r,s,o,!0):(T[i-m]=l+1,i>=I?I=i:_=!0,y(r,t[i],n,null,s,o,a,c,u),b++)}const E=_?On(T):r["a"];for(v=E.length-1,l=w-1;l>=0;l--){const e=m+l,r=t[e],d=e+1<h?t[e+1].el:i;0===T[l]?y(null,r,n,d,s,o,a,c,u):_&&(v<0||l!==E[v]?B(r,n,d,2):v--)}}},B=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,J);if(a===jn){i(o,t,n);for(let e=0;e<u.length;e++)B(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Mn)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),_n(()=>c.enter(o),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),u=()=>{e(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&En(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!yt(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Sn(m,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&gn(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,J,r):u&&(s!==jn||h>0&&64&h)?H(u,t,n,!1,!0):(s===jn&&384&h||!i&&16&l)&&H(c,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&_n(()=>{m&&Sn(m,t,e),f&&gn(e,null,t,"unmounted")},n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===jn)return void G(n,r);if(t===Mn)return void T(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},G=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},W=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,z(a,e,t,n)),c&&_n(c,t),_n(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},H=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)z(e[o],t,n,r,i)},$=e=>6&e.shapeFlag?$(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),si(),t._vnode=e},J={p:y,um:z,m:B,r:K,mt:P,mc:C,pc:U,pbc:x,n:$,o:e};let Y,X;return t&&([Y,X]=t(J)),{render:Q,hydrate:Y,createApp:bn(Q,Y)}}function En(e,t,n,i,s=!1){if(Object(r["o"])(e))return void e.forEach((e,o)=>En(e,t&&(Object(r["o"])(t)?t[o]:t),n,i,s));if(yt(i)&&!s)return;const o=4&i.shapeFlag?Nr(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):Le(l)&&(l.value=null)),Object(r["D"])(u)){const e=()=>{h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)};a?(e.id=-1,_n(e,n)):e()}else if(Le(u)){const e=()=>{u.value=a};a?(e.id=-1,_n(e,n)):e()}else Object(r["p"])(u)&&Dr(u,c,12,[a,h])}function Sn(e,t,n,r=null){jr(e,t,7,[n,r])}function kn(e,t,n=!1){const i=e.children,s=t.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=or(s[r]),t.el=e.el),n||kn(e,t))}}function On(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const An=e=>e.__isTeleport;const Cn="components";function Nn(e,t){return Rn(Cn,e,!0,t)||e}const xn=Symbol();function Rn(e,t,n=!0,i=!1){const s=Ge||gr;if(s){const n=s.type;if(e===Cn){const e=xr(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const o=Dn(s[e]||n[e],t)||Dn(s.appContext[e],t);return!o&&i?n:o}}function Dn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const jn=Symbol(void 0),Pn=Symbol(void 0),Ln=Symbol(void 0),Mn=Symbol(void 0),Fn=[];let Un=null;function Vn(e=!1){Fn.push(Un=e?null:[])}function qn(){Fn.pop(),Un=Fn[Fn.length-1]||null}let Bn=1;function zn(e){Bn+=e}function Kn(e){return e.dynamicChildren=Bn>0?Un||r["a"]:null,qn(),Bn>0&&Un&&Un.push(e),e}function Gn(e,t,n,r,i,s){return Kn(Xn(e,t,n,r,i,s,!0))}function Wn(e,t,n,r,i){return Kn(Zn(e,t,n,r,i,!0))}function Hn(e){return!!e&&!0===e.__v_isVNode}function $n(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Jn=({key:e})=>null!=e?e:null,Yn=({ref:e})=>null!=e?Object(r["D"])(e)||Le(e)||Object(r["p"])(e)?{i:Ge,r:e}:e:null;function Xn(e,t=null,n=null,i=0,s=null,o=(e===jn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jn(t),ref:t&&Yn(t),scopeId:We,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(ar(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Bn>0&&!a&&Un&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Un.push(u),u}const Zn=er;function er(e,t=null,n=null,i=0,s=null,o=!1){if(e&&e!==xn||(e=Ln),Hn(e)){const r=nr(e,t,!0);return n&&ar(r,n),r}if(Rr(e)&&(e=e.__vccOpts),t){t=tr(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(Ce(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:rt(e)?128:An(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return Xn(e,t,n,i,s,a,o,!0)}function tr(e){return e?Ce(e)||Qn in e?Object(r["h"])({},e):e:null}function nr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?cr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Jn(c),ref:t&&t.ref?n&&s?Object(r["o"])(s)?s.concat(Yn(t)):[s,Yn(t)]:Yn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nr(e.ssContent),ssFallback:e.ssFallback&&nr(e.ssFallback),el:e.el,anchor:e.anchor};return u}function rr(e=" ",t=0){return Zn(Pn,null,e,t)}function ir(e="",t=!1){return t?(Vn(),Wn(Ln,null,e)):Zn(Ln,null,e)}function sr(e){return null==e||"boolean"===typeof e?Zn(Ln):Object(r["o"])(e)?Zn(jn,null,e.slice()):"object"===typeof e?or(e):Zn(Pn,null,String(e))}function or(e){return null===e.el||e.memo?e:nr(e)}function ar(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),ar(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qn in t?3===r&&Ge&&(1===Ge.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ge}}else Object(r["p"])(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),64&i?(n=16,t=[rr(t)]):n=8);e.children=t,e.shapeFlag|=n}function cr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],s=i[e];n===s||Object(r["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function ur(e,t,n,i){let s;const o=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const lr=e=>e?wr(e)?Nr(e)||e.proxy:lr(e.parent):null,hr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>lr(e.parent),$root:e=>lr(e.root),$emit:e=>e.emit,$options:e=>zt(e),$forceUpdate:e=>()=>Xr(e.update),$nextTick:e=>Jr.bind(e.proxy),$watch:e=>hi.bind(e)}),dr={get({_:e},t){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(s!==r["b"]&&Object(r["k"])(s,t))return a[t]=2,s[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,o[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];Ft&&(a[t]=0)}}const h=hr[t];let d,f;return h?("$attrs"===t&&A(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;if(s!==r["b"]&&Object(r["k"])(s,t))s[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(hr,a)||Object(r["k"])(s.config.globalProperties,a)}};const fr=yn();let pr=0;function mr(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||fr,a={uid:pr++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nn(i,s),emitsOptions:ze(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Be.bind(null,a),e.ce&&e.ce(a),a}let gr=null;const yr=()=>gr||Ge,vr=e=>{gr=e,e.scope.on()},br=()=>{gr&&gr.scope.off(),gr=null};function wr(e){return 4&e.vnode.shapeFlag}let _r,Ir,Tr=!1;function Er(e,t=!1){Tr=t;const{props:n,children:r}=e.vnode,i=wr(e);Xt(e,n,i,t),fn(e,r);const s=i?Sr(e,t):void 0;return Tr=!1,s}function Sr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xe(new Proxy(e.ctx,dr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Cr(e):null;vr(e),S();const s=Dr(i,e,0,[e.props,n]);if(O(),br(),Object(r["y"])(s)){if(s.then(br,br),t)return s.then(n=>{kr(e,n,t)}).catch(t=>{Pr(t,e,0)});e.asyncDep=s}else kr(e,s,t)}else Or(e,t)}function kr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=Ue(t)),Or(e,n)}function Or(e,t,n){const i=e.type;if(!e.render){if(!t&&_r&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=_r(t,c)}}e.render=i.render||r["d"],Ir&&Ir(e)}vr(e),S(),Ut(e),O(),br()}function Ar(e){return new Proxy(e.attrs,{get(t,n){return A(e,"get","$attrs"),t[n]}})}function Cr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ar(e))},slots:e.slots,emit:e.emit,expose:t}}function Nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ue(xe(e.exposed)),{get(t,n){return n in t?t[n]:n in hr?hr[n](e):void 0}}))}function xr(e){return Object(r["p"])(e)&&e.displayName||e.name}function Rr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Dr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Pr(s,t,n)}return i}function jr(e,t,n,i){if(Object(r["p"])(e)){const s=Dr(e,t,n,i);return s&&Object(r["y"])(s)&&s.catch(e=>{Pr(e,t,n)}),s}const s=[];for(let r=0;r<e.length;r++)s.push(jr(e[r],t,n,i));return s}function Pr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Dr(o,null,10,[e,i,s])}Lr(e,n,i,r)}function Lr(e,t,n,r=!0){console.error(e)}let Mr=!1,Fr=!1;const Ur=[];let Vr=0;const qr=[];let Br=null,zr=0;const Kr=[];let Gr=null,Wr=0;const Hr=Promise.resolve();let $r=null,Qr=null;function Jr(e){const t=$r||Hr;return e?t.then(this?e.bind(this):e):t}function Yr(e){let t=Vr+1,n=Ur.length;while(t<n){const r=t+n>>>1,i=oi(Ur[r]);i<e?t=r+1:n=r}return t}function Xr(e){Ur.length&&Ur.includes(e,Mr&&e.allowRecurse?Vr+1:Vr)||e===Qr||(null==e.id?Ur.push(e):Ur.splice(Yr(e.id),0,e),Zr())}function Zr(){Mr||Fr||(Fr=!0,$r=Hr.then(ai))}function ei(e){const t=Ur.indexOf(e);t>Vr&&Ur.splice(t,1)}function ti(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),Zr()}function ni(e){ti(e,Br,qr,zr)}function ri(e){ti(e,Gr,Kr,Wr)}function ii(e,t=null){if(qr.length){for(Qr=t,Br=[...new Set(qr)],qr.length=0,zr=0;zr<Br.length;zr++)Br[zr]();Br=null,zr=0,Qr=null,ii(e,t)}}function si(e){if(Kr.length){const e=[...new Set(Kr)];if(Kr.length=0,Gr)return void Gr.push(...e);for(Gr=e,Gr.sort((e,t)=>oi(e)-oi(t)),Wr=0;Wr<Gr.length;Wr++)Gr[Wr]();Gr=null,Wr=0}}const oi=e=>null==e.id?1/0:e.id;function ai(e){Fr=!1,Mr=!0,ii(e),Ur.sort((e,t)=>oi(e)-oi(t));r["d"];try{for(Vr=0;Vr<Ur.length;Vr++){const e=Ur[Vr];e&&!1!==e.active&&Dr(e,null,14)}}finally{Vr=0,Ur.length=0,si(e),Mr=!1,$r=null,(Ur.length||qr.length||Kr.length)&&ai(e)}}const ci={};function ui(e,t,n){return li(e,t,n)}function li(e,t,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=gr;let u,l,h=!1,d=!1;if(Le(e)?(u=()=>e.value,h=!!e._shallow):Oe(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Oe),u=()=>e.map(e=>Le(e)?e.value:Oe(e)?fi(e):Object(r["p"])(e)?Dr(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Dr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),jr(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>fi(e())}let f=e=>{l=y.onStop=()=>{Dr(e,c,4)}};if(Tr)return f=r["d"],t?n&&jr(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:ci;const m=()=>{if(y.active)if(t){const e=y.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),jr(t,c,3,[e,p===ci?void 0:p,f]),p=e)}else y.run()};let g;m.allowRecurse=!!t,g="sync"===s?m:"post"===s?()=>_n(m,c&&c.suspense):()=>{!c||c.isMounted?ni(m):m()};const y=new _(u,g);return t?n?m():p=y.run():"post"===s?_n(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,y)}}function hi(e,t,n){const i=this.proxy,s=Object(r["D"])(e)?e.includes(".")?di(i,e):()=>i[e]:e.bind(i,i);let o;Object(r["p"])(t)?o=t:(o=t.handler,n=t);const a=gr;vr(this);const c=li(s,o.bind(i),n);return a?vr(a):br(),c}function di(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function fi(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Le(e))fi(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)fi(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{fi(e,t)});else if(Object(r["x"])(e))for(const n in e)fi(e[n],t);return e}function pi(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?Hn(t)?Zn(e,null,[t]):Zn(e,t):Zn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Hn(n)&&(n=[n]),Zn(e,t,n))}Symbol("");const mi="3.2.23",gi="http://www.w3.org/2000/svg",yi="undefined"!==typeof document?document:null,vi=new Map,bi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?yi.createElementNS(gi,e):yi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>yi.createTextNode(e),createComment:e=>yi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=vi.get(e);if(!s){const t=yi.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}vi.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wi(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _i(e,t,n){const i=e.style,s=Object(r["D"])(n);if(n&&!s){for(const e in n)Ti(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Ti(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ii=/\s*!important$/;function Ti(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Ti(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=ki(e,t);Ii.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ii,""),"important"):e[i]=n}}const Ei=["Webkit","Moz","ms"],Si={};function ki(e,t){const n=Si[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Si[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ei.length;r++){const n=Ei[r]+i;if(n in e)return Si[t]=n}return t}const Oi="http://www.w3.org/1999/xlink";function Ai(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Oi,t.slice(6,t.length)):e.setAttributeNS(Oi,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ci(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Ni=Date.now,xi=!1;if("undefined"!==typeof window){Ni()>document.createEvent("Event").timeStamp&&(Ni=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);xi=!!(e&&Number(e[1])<=53)}let Ri=0;const Di=Promise.resolve(),ji=()=>{Ri=0},Pi=()=>Ri||(Di.then(ji),Ri=Ni());function Li(e,t,n,r){e.addEventListener(t,n,r)}function Mi(e,t,n,r){e.removeEventListener(t,n,r)}function Fi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=Vi(t);if(r){const o=s[t]=qi(r,i);Li(e,n,o,a)}else o&&(Mi(e,n,o,a),s[t]=void 0)}}const Ui=/(?:Once|Passive|Capture)$/;function Vi(e){let t;if(Ui.test(e)){let n;t={};while(n=e.match(Ui))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function qi(e,t){const n=e=>{const r=e.timeStamp||Ni();(xi||r>=n.attached-1)&&jr(Bi(e,n.value),t,5,[e])};return n.value=e,n.attached=Pi(),n}function Bi(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const zi=/^on[a-z]/,Ki=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?wi(e,i,s):"style"===t?_i(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||Fi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Gi(e,t,i,s))?Ci(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Ai(e,t,i,s))};function Gi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&zi.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!zi.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Wi="transition",Hi="animation",$i=(e,{slots:t})=>pi(lt,Zi(e),t);$i.displayName="Transition";const Qi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ji=$i.props=Object(r["h"])({},lt.props,Qi),Yi=(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)},Xi=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function Zi(e){const t={};for(const r in e)r in Qi||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=es(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:T=v,onAppear:E=b,onAppearCancelled:S=w}=t,k=(e,t,n)=>{rs(e,t?h:c),rs(e,t?l:a),n&&n()},O=(e,t)=>{rs(e,p),rs(e,f),t&&t()},A=e=>(t,n)=>{const r=e?E:b,s=()=>k(t,e,n);Yi(r,[t,s]),is(()=>{rs(t,e?u:o),ns(t,e?h:c),Xi(r)||os(t,i,g,s)})};return Object(r["h"])(t,{onBeforeEnter(e){Yi(v,[e]),ns(e,o),ns(e,a)},onBeforeAppear(e){Yi(T,[e]),ns(e,u),ns(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>O(e,t);ns(e,d),ls(),ns(e,f),is(()=>{rs(e,d),ns(e,p),Xi(_)||os(e,i,y,n)}),Yi(_,[e,n])},onEnterCancelled(e){k(e,!1),Yi(w,[e])},onAppearCancelled(e){k(e,!0),Yi(S,[e])},onLeaveCancelled(e){O(e),Yi(I,[e])}})}function es(e){if(null==e)return null;if(Object(r["v"])(e))return[ts(e.enter),ts(e.leave)];{const t=ts(e);return[t,t]}}function ts(e){const t=Object(r["N"])(e);return t}function ns(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function rs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function is(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ss=0;function os(e,t,n,r){const i=e._endId=++ss,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=as(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function as(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Wi+"Delay"),s=r(Wi+"Duration"),o=cs(i,s),a=r(Hi+"Delay"),c=r(Hi+"Duration"),u=cs(a,c);let l=null,h=0,d=0;t===Wi?o>0&&(l=Wi,h=o,d=s.length):t===Hi?u>0&&(l=Hi,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Wi:Hi:null,d=l?l===Wi?s.length:c.length:0);const f=l===Wi&&/\b(transform|all)(,|$)/.test(n[Wi+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function cs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>us(t)+us(e[n])))}function us(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ls(){return document.body.offsetHeight}const hs=new WeakMap,ds=new WeakMap,fs={name:"TransitionGroup",props:Object(r["h"])({},Ji,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=yr(),r=at();let i,s;return xt(()=>{if(!i.length)return;const t=e.moveClass||(e.name||"v")+"-move";if(!vs(i[0].el,n.vnode.el,t))return;i.forEach(ms),i.forEach(gs);const r=i.filter(ys);ls(),r.forEach(e=>{const n=e.el,r=n.style;ns(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,rs(n,t))};n.addEventListener("transitionend",i)})}),()=>{const o=Ne(e),a=Zi(o);let c=o.tag||jn;i=s,s=t.default?gt(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&mt(t,dt(t,a,r,n))}if(i)for(let e=0;e<i.length;e++){const t=i[e];mt(t,dt(t,a,r,n)),hs.set(t,t.el.getBoundingClientRect())}return Zn(c,null,s)}}},ps=fs;function ms(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function gs(e){ds.set(e,e.el.getBoundingClientRect())}function ys(e){const t=hs.get(e),n=ds.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function vs(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=as(r);return i.removeChild(r),s}const bs=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function ws(e){e.target.composing=!0}function _s(e){const t=e.target;t.composing&&(t.composing=!1,Is(t,"input"))}function Is(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Ts={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=bs(s);const o=i||s.props&&"number"===s.props.type;Li(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=Object(r["N"])(i)),e._assign(i)}),n&&Li(e,"change",()=>{e.value=e.value.trim()}),t||(Li(e,"compositionstart",ws),Li(e,"compositionend",_s),Li(e,"change",_s))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=bs(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const Es={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Ss(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Ss(e,!0),r.enter(e)):r.leave(e,()=>{Ss(e,!1)}):Ss(e,t))},beforeUnmount(e,{value:t}){Ss(e,t)}};function Ss(e,t){e.style.display=t?e._vod:"none"}const ks=Object(r["h"])({patchProp:Ki},bi);let Os;function As(){return Os||(Os=In(ks))}const Cs=(...e)=>{const t=As().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Ns(e);if(!i)return;const s=t._component;Object(r["p"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Ns(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),s=r.Object;e.exports=function(e){return s(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},y=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=w(),void 0===t?n:s(n,t)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),y=o.PROPER,v=o.CONFIGURABLE,b=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),I="keys",T="values",E="entries",S=function(){return this};e.exports=function(e,t,n,o,p,g,k){c(n,t,o);var O,A,C,N=function(e){if(e===p&&P)return P;if(!w&&e in D)return D[e];switch(e){case I:return function(){return new n(this,e)};case T:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},x=t+" Iterator",R=!1,D=e.prototype,j=D[_]||D["@@iterator"]||p&&D[p],P=!w&&j||N(p),L="Array"==t&&D.entries||j;if(L&&(O=u(L.call(new e)),O!==Object.prototype&&O.next&&(s||u(O)===b||(l?l(O,b):a(O[_])||f(O,_,S)),h(O,x,!0,!0),s&&(m[x]=S))),y&&p==T&&j&&j.name!==T&&(!s&&v?d(D,"name",T):(R=!0,P=function(){return i(j,this)})),p)if(A={values:N(T),keys:g?P:N(I),entries:N(E)},k)for(C in A)(w||R||!(C in D))&&f(D,C,A[C]);else r({target:t,proto:!0,forced:w||R},A);return s&&!k||D[_]===P||f(D,_,P,{name:p}),m[t]=P,A}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["i"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["g"],ErrorFactory:r["b"],deepExtend:r["i"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ar})),n.d(t,"b",(function(){return Nr})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Rr})),n.d(t,"e",(function(){return xr})),n.d(t,"f",(function(){return Dr})),n.d(t,"g",(function(){return jr})),n.d(t,"h",(function(){return kr})),n.d(t,"i",(function(){return Or}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},T=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function E(e){e:{var t=Bn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function S(e){return Array.prototype.concat.apply([],arguments)}function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var A,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function N(e,t){return-1!=e.indexOf(t)}function x(e,t){return e<t?-1:e>t?1:0}e:{var R=a.navigator;if(R){var D=R.userAgent;if(D){A=D;break e}}A=""}function j(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function U(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var V,q=N(A,"Opera"),B=N(A,"Trident")||N(A,"MSIE"),z=N(A,"Edge"),K=z||B,G=N(A,"Gecko")&&!(N(A.toLowerCase(),"webkit")&&!N(A,"Edge"))&&!(N(A,"Trident")||N(A,"MSIE"))&&!N(A,"Edge"),W=N(A.toLowerCase(),"webkit")&&!N(A,"Edge");function H(){var e=a.document;return e?e.documentMode:void 0}e:{var $="",Q=function(){var e=A;return G?/rv:([^\);]+)(\)|;)/.exec(e):z?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):q?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&($=Q?Q[1]:""),B){var J=H();if(null!=J&&J>parseFloat($)){V=String(J);break e}}V=$}var Y,X={};function Z(){return U((function(){let e=0;const t=C(String(V)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&B){var ee=H();Y=ee||(parseInt(V,10)||void 0)}else Y=void 0;var te=Y,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(G){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},v(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Te(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ye(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Se(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Te(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Te(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Te(e){return e=e[fe],e instanceof le?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function ke(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(ke,b),ke.prototype[oe]=!0,ke.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=a.JSON.stringify;function Ne(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new je,e=>e.reset());class je{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){a.setTimeout(()=>{throw e},0)}function Le(e,t){Re||Me(),Fe||(Re(),Fe=!0),Ue.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Re=function(){e.then(Ve)}}var Fe=!1,Ue=new xe;function Ve(){for(var e;e=Ne();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function qe(e,t){ke.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function Be(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function ze(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Ke(e){e.g=ze(()=>{e.g=null,e.i&&(e.i=!1,Ke(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(qe,ke),r=qe.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Be(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qe.Z.M.call(this),Be(this),delete this.g};class Ge extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ke(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(e){b.call(this),this.h=e,this.g={}}v(We,b);var He=[];function $e(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){j(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Ye(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}We.prototype.M=function(){We.Z.M.call(this),Qe(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();Oe(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Oe(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",v(st,re),nt.STAT_EVENT="statevent",v(at,re),nt.Na="timingevent",v(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,yt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function vt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new We(this),this.P=Tt,e=K?125:void 0,this.W=new qe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}v(vt,re),v(bt,re),v(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Tt=45e3,Et={},St={};function kt(e,t,n){e.K=1,e.v=Yt(Gt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),xt(e),e.A=Gt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ge(g(e.Ia,e,e.g),e.O)),$e(e.V,e.g,"readystatechange",e.gb),t=e.H?P(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Ye(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Nt(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}At(e)&&r!=St&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),jt(e))}function Nt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function xt(e){e.Y=Date.now()+e.P,Rt(e,e.P)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(g(e.eb,e),t)}function Dt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function jt(e){0==e.l.G||e.I||pr(e.l,e)}function Pt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((e.J||n.g==e)&&fr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(N(e,"spdy")||N(e,"quic")||N(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Jt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Dt(a),xt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)T(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Ut(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ut)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Vt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];qt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],qt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==$n(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=$n(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||K||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Dt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var r=Qn(this.g);e="";var i=r.length,s=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),jt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Pt(this),jt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.U?(Ct(this,h,o),K&&this.i&&3==h&&($e(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Lt(this,o)),4==h&&Pt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,xt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Pt(this),jt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=$n(this.g),t=this.g.ga();this.C<t.length&&(Dt(this),Ct(this,e,t),this.i&&4!=e&&xt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Pt(this),this.o=2,jt(this)):Rt(this,this.Y-e)},r=Ut.prototype,r.R=function(){Vt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Vt(this),this.g.concat()},r.get=function(e,t){return qt(this.h,e)?this.h[e]:t},r.set=function(e,t){qt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Bt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Kt){this.g=void 0!==t?t:e.g,Wt(this,e.j),this.s=e.s,Ht(this,e.i),$t(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Ut(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.g=!!t,Wt(this,n[1]||"",!0),this.s=en(n[2]||""),Ht(this,n[3]||"",!0),$t(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Gt(e){return new Kt(e)}function Wt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ht(e,t,n){e.i=n?en(t,!0):t}function $t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Jt(e,t,n){e.h.set(t,n)}function Yt(e){return Jt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e){return e instanceof Kt?Gt(e):new Kt(e,void 0)}function Zt(e,t,n,r){var i=new Kt(null,void 0);return e&&Wt(i,e),t&&Ht(i,t),n&&$t(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Ut,e.h=0,e.i&&zt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),qt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,qt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vt(e)))}function dn(e,t){return ln(e),t=pn(e,t),qt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),k(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){T(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=S(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var gn=class{constructor(e,t){this.h=e,this.g=t}};function yn(e){this.l=e||vn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function Tn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function En(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function Sn(){}function kn(){this.g=new Sn}function On(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(e,t){const n=new Je;if(a.Image){const r=new Image;r.onload=y(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(Cn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Nn(e){this.l=e.$b||null,this.j=e.ib||!1}function xn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Sn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Sn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},v(Nn,ft),Nn.prototype.g=function(){return new xn(this.l,this.j)},Nn.prototype.i=function(e){return function(){return e}}({}),v(xn,ke);var Rn=0;function Dn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function jn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pn(e)}function Pn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=xn.prototype,r.open=function(e,t){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,jn(this)),this.readyState=Rn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?jn(this):Pn(this),3==this.readyState&&Dn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,jn(this))},r.Ta=function(e){this.g&&(this.response=e,jn(this))},r.ha=function(){this.g&&jn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(e){ke.call(this),this.headers=new Ut,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Mn,ke);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function qn(e){return B&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Bn(e){return"content-type"==e.toLowerCase()}function zn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Kn(e),Wn(e)}function Kn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Gn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=$n(e)||2!=e.ba()))if(e.v&&4==$n(e))ze(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==$n(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Bt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var c=2<$n(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",Kn(e)}}finally{Wn(e)}}}function Wn(e,t){if(e.g){Hn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Hn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Jn(e){let t="";return j(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Yn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Jt(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Je,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,e),this.$a=Xn("retryDelaySeedMs",1e4,e),this.Ya=Xn("forwardChannelMaxRetries",2,e),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(e&&e.concurrentRequestLimit),this.Ca=new kn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=Gt(e.F);Jt(n,"SID",e.J),Jt(n,"RID",t),Jt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Yt(Gt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xt(t)}yr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new gn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,Le(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(g(e.Ha,e,t),mr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=Gt(e.F);Jt(r,"SID",e.J),Jt(r,"RID",n),Jt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Yn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),kt(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Jt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?g(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{On(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Le(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(g(e.Ga,e),mr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Gt(e.oa);Jt(t,"RID","rpc"),Jt(t,"SID",e.J),Jt(t,"CI",e.N?"0":"1"),Jt(t,"AID",e.U),ar(e,t),Jt(t,"TYPE","xmlhttp"),e.o&&e.s&&Yn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Yt(Gt(t)),n.s=null,n.U=!0,Ot(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,Tn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Oe(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}function mr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=g(e.jb,e);n||(n=new Kt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Wt(n,"https"),Yt(n)),An(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),yr(e),nr(e)}function yr(e){e.G=0,e.I=-1,e.j&&(0==En(e.i).length&&0==e.l.length||(e.i.i.length=0,k(e.l),e.l.length=0),e.j.ua())}function vr(e,t,n){let r=Xt(n);if(""!=r.i)t&&Ht(r,t+"."+r.i),$t(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&j(e.aa,(function(e,t){Jt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Jt(r,t,n),Jt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new Nn({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function _r(){if(B&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Ir(e,t){ke.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sr(this)}function Tr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Er(){bt.call(this),this.status=1}function Sr(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void zn(this,s)}e=n||"";const i=new Ut(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=E(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=I(Vn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=ze(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){zn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ln(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=P(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=Gt(this.F),Jt(n,"RID",e),Jt(n,"CVER",22),this.D&&Jt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),In(this.i,i),this.Ra&&Jt(n,"TYPE","init"),this.ja?(Jt(n,"$req",t),Jt(n,"SID","null"),i.$=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(g(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Ir(e,t)},v(Ir,ke),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Le(g(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=vr(e,null,e.W),ir(e)},Ir.prototype.close=function(){er(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=Ce(e),rr(this.g,t)):rr(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Ir.Z.M.call(this)},v(Tr,vt),v(Er,bt),v(Sr,wr),Sr.prototype.xa=function(){Oe(this.g,"a")},Sr.prototype.wa=function(e){Oe(this.g,new Tr(e))},Sr.prototype.va=function(e){Oe(this.g,new Er(e))},Sr.prototype.ua=function(){Oe(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=yt,yt.OPEN="a",yt.CLOSE="b",yt.ERROR="c",yt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var kr=s.createWebChannelTransport=function(){return new _r},Or=s.getStatEventTarget=function(){return it()},Ar=s.ErrorCode=ht,Cr=s.EventType=dt,Nr=s.Event=nt,xr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=s.FetchXmlHttpFactory=Nn,Dr=s.WebChannel=mt,jr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"94ed":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var r="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",i="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",s="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new C(r||[]);return s._invoke=S(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function y(){}function v(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(N([])));_&&_!==n&&r.call(_,s)&&(b=_);var I=v.prototype=g.prototype=Object.create(b);function T(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,s,o,a){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return x()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=k(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=v,c(I,"constructor",v),c(v,"constructor",y),y.displayName=c(v,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,a,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},T(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new E(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},T(I),c(I,a,"Generator"),c(I,s,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;t.f=i?u:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=i(r,{next:s(1,n)}),o(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return H})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return q})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return W})),n.d(t,"y",(function(){return B})),n.d(t,"z",(function(){return $})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return L})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return U})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return w})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return x})),n.d(t,"L",(function(){return _})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return se})),n.d(t,"O",(function(){return G}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||q(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),y=r(m);function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=j(e),r=j(t),n||r)return!(!n||!r)&&v(e,t);if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>b(e,t))}const _=e=>null==e?"":j(e)||q(e)&&(e.toString===z||!F(e.toString))?JSON.stringify(e,I,2):String(e),I=(e,t)=>t&&t.__v_isRef?I(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!q(t)||j(t)||W(t)?t:String(t),T={},E=[],S=()=>{},k=()=>!1,O=/^on[^a-z]/,A=e=>O.test(e),C=e=>e.startsWith("onUpdate:"),N=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,D=(e,t)=>R.call(e,t),j=Array.isArray,P=e=>"[object Map]"===K(e),L=e=>"[object Set]"===K(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,V=e=>"symbol"===typeof e,q=e=>null!==e&&"object"===typeof e,B=e=>q(e)&&F(e.then)&&F(e.catch),z=Object.prototype.toString,K=e=>z.call(e),G=e=>K(e).slice(8,-1),W=e=>"[object Object]"===K(e),H=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,$=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,Y=Q(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=Q(e=>e.replace(X,"-$1").toLowerCase()),ee=Q(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=Q(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oe;const ae=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("23cb"),o=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),h=n("1dde"),d=h("splice"),f=i.TypeError,p=Math.max,m=Math.min,g=9007199254740991,y="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,i,h,d,v,b=c(this),w=a(b),_=s(e,w),I=arguments.length;if(0===I?n=r=0:1===I?(n=0,r=w-_):(n=I-2,r=m(p(o(t),0),w-_)),w+n-r>g)throw f(y);for(i=u(b,r),h=0;h<r;h++)d=_+h,d in b&&l(i,h,b[d]);if(i.length=r,n<r){for(h=_;h<w-r;h++)d=h+r,v=h+n,d in b?b[v]=b[d]:delete b[v];for(h=w;h>w-r+n;h--)delete b[h-1]}else if(n>r)for(h=w-r;h>_;h--)d=h+r-1,v=h+n-1,d in b?b[v]=b[d]:delete b[v];for(h=0;h<n;h++)b[h+_]=arguments[h+2];return b.length=w-r+n,i}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),m=n("1626"),g=n("861d"),y=n("3a9b"),v=n("d9b5"),b=n("825a"),w=n("7b0b"),_=n("fc6a"),I=n("a04b"),T=n("577e"),E=n("5c6c"),S=n("7c73"),k=n("df75"),O=n("241c"),A=n("057f"),C=n("7418"),N=n("06cf"),x=n("9bf2"),R=n("d1e7"),D=n("f36a"),j=n("6eeb"),P=n("5692"),L=n("f772"),M=n("d012"),F=n("90e3"),U=n("b622"),V=n("e538"),q=n("746f"),B=n("d44e"),z=n("69f3"),K=n("b727").forEach,G=L("hidden"),W="Symbol",H="prototype",$=U("toPrimitive"),Q=z.set,J=z.getterFor(W),Y=Object[H],X=i.Symbol,Z=X&&X[H],ee=i.TypeError,te=i.QObject,ne=s("JSON","stringify"),re=N.f,ie=x.f,se=A.f,oe=R.f,ae=c([].push),ce=P("symbols"),ue=P("op-symbols"),le=P("string-to-symbol-registry"),he=P("symbol-to-string-registry"),de=P("wks"),fe=!te||!te[H]||!te[H].findChild,pe=l&&d((function(){return 7!=S(ie({},"a",{get:function(){return ie(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=re(Y,t);r&&delete Y[t],ie(e,t,n),r&&e!==Y&&ie(Y,t,r)}:ie,me=function(e,t){var n=ce[e]=S(Z);return Q(n,{type:W,tag:e,description:t}),l||(n.description=t),n},ge=function(e,t,n){e===Y&&ge(ue,t,n),b(e);var r=I(t);return b(n),f(ce,r)?(n.enumerable?(f(e,G)&&e[G][r]&&(e[G][r]=!1),n=S(n,{enumerable:E(0,!1)})):(f(e,G)||ie(e,G,E(1,{})),e[G][r]=!0),pe(e,r,n)):ie(e,r,n)},ye=function(e,t){b(e);var n=_(t),r=k(n).concat(Ie(n));return K(r,(function(t){l&&!a(be,n,t)||ge(e,t,n[t])})),e},ve=function(e,t){return void 0===t?S(e):ye(S(e),t)},be=function(e){var t=I(e),n=a(oe,this,t);return!(this===Y&&f(ce,t)&&!f(ue,t))&&(!(n||!f(this,t)||!f(ce,t)||f(this,G)&&this[G][t])||n)},we=function(e,t){var n=_(e),r=I(t);if(n!==Y||!f(ce,r)||f(ue,r)){var i=re(n,r);return!i||!f(ce,r)||f(n,G)&&n[G][r]||(i.enumerable=!0),i}},_e=function(e){var t=se(_(e)),n=[];return K(t,(function(e){f(ce,e)||f(M,e)||ae(n,e)})),n},Ie=function(e){var t=e===Y,n=se(t?ue:_(e)),r=[];return K(n,(function(e){!f(ce,e)||t&&!f(Y,e)||ae(r,ce[e])})),r};if(h||(X=function(){if(y(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,t=F(e),n=function(e){this===Y&&a(n,ue,e),f(this,G)&&f(this[G],t)&&(this[G][t]=!1),pe(this,t,E(1,e))};return l&&fe&&pe(Y,t,{configurable:!0,set:n}),me(t,e)},Z=X[H],j(Z,"toString",(function(){return J(this).tag})),j(X,"withoutSetter",(function(e){return me(F(e),e)})),R.f=be,x.f=ge,N.f=we,O.f=A.f=_e,C.f=Ie,V.f=function(e){return me(U(e),e)},l&&(ie(Z,"description",{configurable:!0,get:function(){return J(this).description}}),u||j(Y,"propertyIsEnumerable",be,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:X}),K(k(de),(function(e){q(e)})),r({target:W,stat:!0,forced:!h},{for:function(e){var t=T(e);if(f(le,t))return le[t];var n=X(t);return le[t]=n,he[n]=t,n},keyFor:function(e){if(!v(e))throw ee(e+" is not a symbol");if(f(he,e))return he[e]},useSetter:function(){fe=!0},useSimple:function(){fe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:ve,defineProperty:ge,defineProperties:ye,getOwnPropertyDescriptor:we}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:_e,getOwnPropertySymbols:Ie}),r({target:"Object",stat:!0,forced:d((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(w(e))}}),ne){var Te=!h||d((function(){var e=X();return"[null]"!=ne([e])||"{}"!=ne({a:e})||"{}"!=ne(Object(e))}));r({target:"JSON",stat:!0,forced:Te},{stringify:function(e,t,n){var r=D(arguments),i=t;if((g(t)||void 0!==e)&&!v(e))return p(t)||(t=function(e,t){if(m(i)&&(t=a(i,this,e,t)),!v(t))return t}),r[1]=t,o(ne,null,r)}})}if(!Z[$]){var Ee=Z.valueOf;j(Z,$,(function(e){return a(Ee,this)}))}B(X,W),M[G]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),y=n("a4b4"),v=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,I=h.Promise,T=f(h,"queueMicrotask"),E=T&&T.value;E||(r=function(){var e,t;v&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},m||v||y||!b||!w?!g&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=d(u.then,u),o=function(){l(r)}):v?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,y){for(var v,b,w=o(p),_=s(w),I=r(m,g),T=a(_),E=0,S=y||c,k=t?S(p,T):n||d?S(p,0):void 0;T>E;E++)if((f||E in _)&&(v=_[E],b=I(v,E,w),e))if(t)k[E]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:u(k,v)}else switch(e){case 4:return!1;case 7:u(k,v)}return h?-1:i||l?l:k}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c740:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(i(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,s=r&&r.bind(i);e.exports=r?function(e){return e&&s(i,e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),y=n("2626"),v=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),I=n("8925"),T=n("2266"),E=n("1c7e"),S=n("4840"),k=n("2cf4").set,O=n("b575"),A=n("cdf9"),C=n("44de"),N=n("f069"),x=n("e667"),R=n("69f3"),D=n("94ca"),j=n("b622"),P=n("6069"),L=n("605d"),M=n("2d00"),F=j("species"),U="Promise",V=R.get,q=R.set,B=R.getterFor(U),z=d&&d.prototype,K=d,G=z,W=u.TypeError,H=u.document,$=u.process,Q=N.f,J=Q,Y=!!(H&&H.createEvent&&u.dispatchEvent),X=b(u.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,re=2,ie=1,se=2,oe=!1,ae=D(U,(function(){var e=I(K),t=e!==String(K);if(!t&&66===M)return!0;if(c&&!G["finally"])return!0;if(M>=51&&/native code/.test(e))return!1;var n=new K((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,oe=n.then((function(){}))instanceof r,!oe||!t&&P&&!X})),ce=ae||!E((function(e){K.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!w(e)||!b(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;O((function(){var r=e.value,i=e.state==ne,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,d=u.resolve,f=u.reject,p=u.domain;try{l?(i||(e.rejection===se&&pe(e),e.rejection=ie),!0===l?o=r:(p&&p.enter(),o=l(r),p&&(p.exit(),c=!0)),o===u.promise?f(W("Promise-chain cycle")):(a=ue(o))?h(a,o,d,f):d(o)):f(r)}catch(m){p&&!c&&p.exit(),f(m)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var r,i;Y?(r=H.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!X&&(i=u["on"+e])?i(r):e===Z&&C("Unhandled promise rejection",n)},de=function(e){h(k,u,(function(){var t,n=e.facade,r=e.value,i=fe(e);if(i&&(t=x((function(){L?$.emit("unhandledRejection",r,n):he(Z,n,r)})),e.rejection=L||fe(e)?se:ie,t.error))throw t.value}))},fe=function(e){return e.rejection!==ie&&!e.parent},pe=function(e){h(k,u,(function(){var t=e.facade;L?$.emit("rejectionHandled",t):he(ee,t,e.value)}))},me=function(e,t,n){return function(r){e(t,r,n)}},ge=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,le(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw W("Promise can't be resolved itself");var r=ue(t);r?O((function(){var n={done:!1};try{h(r,t,me(ye,n,e),me(ge,n,e))}catch(i){ge(n,i,e)}})):(e.value=t,e.state=ne,le(e,!1))}catch(i){ge({done:!1},i,e)}}};if(ae&&(K=function(e){_(this,G),v(e),h(r,this);var t=V(this);try{e(me(ye,t),me(ge,t))}catch(n){ge(t,n)}},G=K.prototype,r=function(e){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},r.prototype=p(G,{then:function(e,t){var n=B(this),r=n.reactions,i=Q(S(this,K));return i.ok=!b(e)||e,i.fail=b(t)&&t,i.domain=L?$.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=te&&le(n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=V(e);this.promise=e,this.resolve=me(ye,t),this.reject=me(ge,t)},N.f=Q=function(e){return e===K||e===s?new i(e):J(e)},!c&&b(d)&&z!==Object.prototype)){o=z.then,oe||(f(z,"then",(function(e,t){var n=this;return new K((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(z,"catch",G["catch"],{unsafe:!0}));try{delete z.constructor}catch(ve){}m&&m(z,G)}a({global:!0,wrap:!0,forced:ae},{Promise:K}),g(K,U,!1,!0),y(U),s=l(U),a({target:U,stat:!0,forced:ae},{reject:function(e){var t=Q(this);return h(t.reject,void 0,e),t.promise}}),a({target:U,stat:!0,forced:c||ae},{resolve:function(e){return A(c&&this===s?K:this,e)}}),a({target:U,stat:!0,forced:ce},{all:function(e){var t=this,n=Q(t),r=n.resolve,i=n.reject,s=x((function(){var n=v(t.resolve),s=[],o=0,a=1;T(e,(function(e){var c=o++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,s[c]=e,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(e){var t=this,n=Q(t),r=n.reject,i=x((function(){var i=v(t.resolve);T(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.10b8c270.js.map