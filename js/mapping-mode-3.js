const CharSets3={'0':'\u200C','1':'\u200D','2':'\u2060','3':'\u2061','4':'\u2062','5':'\u2063','6':'\u2064','7':'\u206A','8':'\u206B','9':'\u206C','a':'\u206D','b':'\u206E','c':'\u206F','d':'\u034F','e':'\uFEFF','f':'\u061C'};const ReverseCharSets3=Object.fromEntries(Object.entries(CharSets3).map(([k,v])=>[v,k]));const PAD_MARKER='\u200B';const BYTE2ZW=new Array(256);for(let i=0;i<256;i++){BYTE2ZW[i]=CharSets3[(i>>>4).toString(16)]+CharSets3[(i&0x0F).toString(16)];}
const C4=CharSets3;const BASE64_POOL='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';const randB64=n=>{if(n<=0)return'';const buf=new Uint32Array(n);crypto.getRandomValues(buf);let s='';for(let i=0;i<n;i++)s+=BASE64_POOL[buf[i]&63];return s;};const mappingMode3={Base64ToZeroWidth(str,prefixLen=1,suffixLen=1){const bytes=new TextEncoder().encode(str);const zw=new Array(bytes.length);for(let i=0;i<bytes.length;i++)zw[i]=BYTE2ZW[bytes[i]];const padBits=(4-((bytes.length*8)&3))&3;return randB64(prefixLen)+zw.join('')+C4[padBits.toString(16)]+randB64(suffixLen);},zeroWidthToBase64(str){const nib=[];for(const ch of str){const n=parseInt(ReverseCharSets3[ch],16);if(!isNaN(n))nib.push(n);}
if(nib.length<2)return'';const padBits=nib.pop()*4;const dataBits=nib.length*4-padBits;const byteLen=dataBits>>3;if(byteLen<=0)return'';const bytes=new Uint8Array(byteLen);let buf=0,bits=0,idx=0;for(let i=0;i<nib.length;i++){buf=(buf<<4)|nib[i];bits+=4;if(bits>=8){bytes[idx++]=buf>>>(bits-8);bits-=8;}}
return new TextDecoder().decode(bytes);},async encodeBlob(blob,prefixLen=4,suffixLen=4,chunkSize=512*1024){if(!(blob instanceof Blob))throw new TypeError('输入必须是Blob对象');const cores=navigator.hardwareConcurrency||4;const tasks=Math.ceil(blob.size/chunkSize);const results=new Array(tasks);let done=0;const workerSrc=`

      const C4 = ${JSON.stringify(CharSets3)};

      const BYTE2ZW = ${JSON.stringify(BYTE2ZW)};

      const BASE64_POOL = '${BASE64_POOL}';

      const rand = n => {

        const buf = new Uint32Array(n);

        crypto.getRandomValues(buf);

        let s = '';

        for (let i = 0; i < n; ++i) s += BASE64_POOL[buf[i] & 63];

        return s;

      };

      onmessage = async ({data}) => {

        const slice = data.blob.slice(data.offset, data.offset + data.chunkSize);

        const bytes = new Uint8Array(await slice.arrayBuffer());

        let zw = '';

        for (let i = 0; i < bytes.length; i++) zw += BYTE2ZW[bytes[i]];

        const padBits = (4 - ((bytes.length * 8) & 3)) & 3;

        postMessage({idx: data.idx, res: rand(data.prefixLen) + zw + C4[padBits.toString(16)] + rand(data.suffixLen)});

      };

    `;const url=URL.createObjectURL(new Blob([workerSrc],{type:'text/javascript'}));return new Promise((resolve,reject)=>{const workers=Array.from({length:cores},()=>new Worker(url));workers.forEach(w=>{w.onmessage=({data})=>{results[data.idx]=data.res;if(++done===tasks){workers.forEach(x=>x.terminate());URL.revokeObjectURL(url);resolve(results.join(''));}};w.onerror=e=>{reject(e);workers.forEach(x=>x.terminate());URL.revokeObjectURL(url);};});for(let i=0;i<Math.min(cores,tasks);i++){workers[i].postMessage({blob,prefixLen,suffixLen,idx:i,offset:i*chunkSize,chunkSize});}});},decodeToBlob(str,mimeType='text/plain'){try{const b64=this.zeroWidthToBase64(str);const bin=atob(b64);const bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);return new Blob([bytes],{type:mimeType});}catch{return new Blob(['decode error'],{type:'text/plain'});}},getEmojiLength:s=>[...s].length};