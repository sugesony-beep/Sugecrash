"use strict";(self.webpackChunkgame_crash_point=self.webpackChunkgame_crash_point||[]).push([[4492262],{4765261(e,t,r){r.d(t,{l:()=>h});var n=r(0xbd6382),a=r(0x30fae65),i=r(0x3e0ff6c),o=r(0x59e6dac),s=r(0x2793d77),l=r(0x156ae3e),u=r(0x9b7d33),d=r(0xaa26d6),c=r(0x4505f92);class h{constructor(e){this.rootViewPort=new a.M,this.viewport=new a.M,this.onRenderTargetChange=new o.C("onRenderTargetChange"),this.projectionMatrix=new n.u,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=e,e.renderableGC.addManagedHash(this,"_gpuRenderTargetHash")}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart(e){var t,r;let n,a=e.target,i=e.clear,o=e.clearColor,s=e.frame;this._renderTargetStack.length=0,this.push(a,i,o,s),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=(n=this.rootRenderTarget.colorTexture.source.resource,globalThis.HTMLCanvasElement&&n instanceof HTMLCanvasElement&&document.body.contains(n)),null==(t=(r=this.adaptor).prerender)||t.call(r,this.rootRenderTarget)}postrender(){var e,t;null==(e=(t=this.adaptor).postrender)||e.call(t,this.rootRenderTarget)}bind(e){var t,r,n;let a,i=!(arguments.length>1)||void 0===arguments[1]||arguments[1],o=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,l=this.getRenderTarget(e),d=this.renderTarget!==l;this.renderTarget=l,this.renderSurface=e;let c=this.getGpuRenderTarget(l);(l.pixelWidth!==c.width||l.pixelHeight!==c.height)&&(this.adaptor.resizeGpuRenderTarget(l),c.width=l.pixelWidth,c.height=l.pixelHeight);let h=l.colorTexture,f=this.viewport,p=h.pixelWidth,v=h.pixelHeight;if(!s&&e instanceof u.g&&(s=e.frame),s){let e=h._resolution;f.x=s.x*e+.5|0,f.y=s.y*e+.5|0,f.width=s.width*e+.5|0,f.height=s.height*e+.5|0}else f.x=0,f.y=0,f.width=p,f.height=v;return t=this.projectionMatrix,r=f.width/h.resolution,n=f.height/h.resolution,a=l.isRoot?-1:1,t.identity(),t.a=1/r*2,t.d=1/n*2*a,t.tx=-1-0*t.a,t.ty=-a-0*t.d,this.adaptor.startRenderPass(l,i,o,f),d&&this.onRenderTargetChange.emit(l),l}clear(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.u.ALL,r=arguments.length>2?arguments[2]:void 0;t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,r,this.viewport))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.u.ALL,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,a=this.bind(e,t,r,n);return this._renderTargetStack.push({renderTarget:a,frame:n}),a}pop(){this._renderTargetStack.pop();let e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}getRenderTarget(e){var t;return e.isTexture&&(e=e.source),null!=(t=this._renderSurfaceToRenderTargetHash.get(e))?t:this._initRenderTarget(e)}copyToTexture(e,t,r,n,a){r.x<0&&(n.width+=r.x,a.x-=r.x,r.x=0),r.y<0&&(n.height+=r.y,a.y-=r.y,r.y=0);let i=e.pixelWidth,o=e.pixelHeight;return n.width=Math.min(n.width,i-r.x),n.height=Math.min(n.height,o-r.y),this.adaptor.copyToTexture(e,t,r,n,a)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport))}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t&&e.destroy()}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;return s.q.test(e)&&(e=(0,d.c)(e).source),e instanceof c.O?t=e:e instanceof l.v&&(t=new c.O({colorTextures:[e]}),s.q.test(e.source.resource)&&(t.isRoot=!0),e.once("destroy",()=>{t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e);let r=this._gpuRenderTargetHash[t.uid];r&&(this._gpuRenderTargetHash[t.uid]=null,this.adaptor.destroyGpuRenderTarget(r))})),this._renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}resetState(){this.renderTarget=null,this.renderSurface=null}}},6070355(e,t,r){r.d(t,{K:()=>n});class n{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}},8116595(e,t,r){r.d(t,{g:()=>a});var n=r(0x2d4e258);let a=[];a[n.K.NONE]=void 0,a[n.K.DISABLED]={stencilWriteMask:0,stencilReadMask:0},a[n.K.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}},a[n.K.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}},a[n.K.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}},a[n.K.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"not-equal",passOp:"replace"},stencilBack:{compare:"not-equal",passOp:"replace"}}},0xe6a06b(e,t,r){r.d(t,{V:()=>n});function n(e,t,r){let n=(e>>24&255)/255;t[r++]=(255&e)/255*n,t[r++]=(e>>8&255)/255*n,t[r++]=(e>>16&255)/255*n,t[r++]=n}},0x121709f(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t){let r=e*t;return`
        for (let i = 0; i < `.concat(r,`; i++) {
            data[offset + (((i / `).concat(e,")|0) * 4) + (i % ").concat(e,`)] = v[i];
        }
    `)}r.d(t,{_:()=>s,g:()=>o});let o={f32:`
        data[offset] = v;`,i32:`
        dataInt32[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"vec2<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,"vec3<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,"vec4<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":i(3,2),"mat4x2<f32>":i(4,2),"mat2x3<f32>":i(2,3),"mat4x3<f32>":i(4,3),"mat2x4<f32>":i(2,4),"mat3x4<f32>":i(3,4)},s=a(a({},o),{},{"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `})},0x1861f3d(e,t,r){r.d(t,{q:()=>i});var n=r(0x2747f41),a=r(0x2a85eeb);function i(e,t){for(let r in e.attributes){let a=e.attributes[r],i=t[r];if(i)null!=a.format||(a.format=i.format),null!=a.offset||(a.offset=i.offset),null!=a.instance||(a.instance=i.instance);else(0,n.R)("Attribute ".concat(r," is not present in the shader, but is present in the geometry. Unable to infer attribute details."))}!function(e){let t=e.buffers,r=e.attributes,n={},i={};for(let e in t){let r=t[e];n[r.uid]=0,i[r.uid]=0}for(let e in r){let t=r[e];n[t.buffer.uid]+=(0,a.m)(t.format).stride}for(let e in r){let t=r[e];null!=t.stride||(t.stride=n[t.buffer.uid]),null!=t.start||(t.start=i[t.buffer.uid]),i[t.buffer.uid]+=(0,a.m)(t.format).stride}}(e)}},0x1e9f050(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{Ls:()=>i,_Q:()=>o,mA:()=>s});let i={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},o=a(a({},i),{},{vertex:a(a({},i.vertex),{},{header:i.vertex.header.replace("group(1)","group(2)")})}),s={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}}},0x2208c4f(e,t,r){r.d(t,{f:()=>eI,i:()=>eU});var n=r(0x1474f1c);class a{constructor(e){this._renderer=e}updateRenderable(){}destroyRenderable(){}validateRenderable(){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}}a.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"customRender"};var i=r(0xbd6382),o=r(0x168e80f),s=r(6070355);function l(e,t){let r=e.instructionSet,n=r.instructions;for(let e=0;e<r.instructionSize;e++){let r=n[e];t[r.renderPipeId].execute(r)}}let u=new i.u;class d{constructor(e){this._renderer=e}addRenderGroup(e,t){e.isCachedAsTexture?this._addRenderableCacheAsTexture(e,t):this._addRenderableDirect(e,t)}execute(e){e.isRenderable&&(e.isCachedAsTexture?this._executeCacheAsTexture(e):this._executeDirect(e))}destroy(){this._renderer=null}_addRenderableDirect(e,t){this._renderer.renderPipes.batch.break(t),e._batchableRenderGroup&&(o.Z.return(e._batchableRenderGroup),e._batchableRenderGroup=null),t.add(e)}_addRenderableCacheAsTexture(e,t){var r;let n=null!=(r=e._batchableRenderGroup)?r:e._batchableRenderGroup=o.Z.get(s.K);n.renderable=e.root,n.transform=e.root.relativeGroupTransform,n.texture=e.texture,n.bounds=e._textureBounds,t.add(e),this._renderer.renderPipes.batch.addToBatch(n,t)}_executeCacheAsTexture(e){if(e.textureNeedsUpdate){e.textureNeedsUpdate=!1;let t=u.identity().translate(-e._textureBounds.x,-e._textureBounds.y);this._renderer.renderTarget.push(e.texture,!0,null,e.texture.frame),this._renderer.globalUniforms.push({worldTransformMatrix:t,worldColor:0xffffffff}),l(e,this._renderer.renderPipes),this._renderer.renderTarget.finishRenderPass(),this._renderer.renderTarget.pop(),this._renderer.globalUniforms.pop()}e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup),e._batchableRenderGroup._batcher.geometry.buffers[0].update()}_executeDirect(e){this._renderer.globalUniforms.push({worldTransformMatrix:e.inverseParentTextureTransform,worldColor:e.worldColorAlpha}),l(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop()}}d.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"renderGroup"};var c=r(0x3618a98),h=r(0xed2ee3);function f(e,t){t||(t=0);for(let r=t;r<e.length;r++)if(e[r])e[r]=null;else break}var p=r(0x4c9c3c9),v=r(0x2382960);let m=new p.mc,b=p.fR|p.ig|p.u;function g(e,t,r){if(r&p.ig){e.groupColor=(0,v.j)(e.localColor,t.groupColor);let r=e.localAlpha*t.groupAlpha;e.groupAlpha=r=r<0?0:r>1?1:r,e.groupColorAlpha=e.groupColor+(255*r<<24)}r&p.u&&(e.groupBlendMode="inherit"===e.localBlendMode?t.groupBlendMode:e.localBlendMode),r&p.fR&&(e.globalDisplayStatus=e.localDisplayStatus&t.globalDisplayStatus),e._updateFlags=0}let x=new i.u;class _{constructor(e){this._renderer=e}render(e){let t=e.container,r=e.transform,n=t.parent,a=t.renderGroup.renderGroupParent;t.parent=null,t.renderGroup.renderGroupParent=null;let i=this._renderer,o=x;r&&(o=o.copyFrom(t.renderGroup.localTransform),t.renderGroup.localTransform.copyFrom(r));let s=i.renderPipes;this._updateCachedRenderGroups(t.renderGroup,null),this._updateRenderGroups(t.renderGroup),i.globalUniforms.start({worldTransformMatrix:r?t.renderGroup.localTransform:t.renderGroup.worldTransform,worldColor:t.renderGroup.worldColorAlpha}),l(t.renderGroup,s),s.uniformBatch&&s.uniformBatch.renderEnd(),r&&t.renderGroup.localTransform.copyFrom(o),t.parent=n,t.renderGroup.renderGroupParent=a}destroy(){this._renderer=null}_updateCachedRenderGroups(e,t){if(e.isCachedAsTexture){if(!e.updateCacheTexture)return;t=e}e._parentCacheAsTextureRenderGroup=t;for(let r=e.renderGroupChildren.length-1;r>=0;r--)this._updateCachedRenderGroups(e.renderGroupChildren[r],t);if(e.invalidateMatrices(),e.isCachedAsTexture){if(e.textureNeedsUpdate){var r;let t=e.root.getLocalBounds();t.ceil();let n=e.texture;e.texture&&c.W.returnTexture(e.texture);let a=this._renderer,i=e.textureOptions.resolution||a.view.resolution,o=null!=(r=e.textureOptions.antialias)?r:a.view.antialias;e.texture=c.W.getOptimalTexture(t.width,t.height,i,o),e._textureBounds||(e._textureBounds=new h.c),e._textureBounds.copyFrom(t),n!==e.texture&&e.renderGroupParent&&(e.renderGroupParent.structureDidChange=!0)}}else e.texture&&(c.W.returnTexture(e.texture),e.texture=null)}_updateRenderGroups(e){let t=this._renderer,r=t.renderPipes;if(e.runOnRender(t),e.instructionSet.renderPipes=r,e.structureDidChange?f(e.childrenRenderablesToUpdate.list,0):!function(e,t){let r=e.childrenRenderablesToUpdate,n=r.list,a=r.index,i=!1;for(let e=0;e<a;e++){let r=n[e];if(i=t[r.renderPipeId].validateRenderable(r))break}e.structureDidChange=i}(e,r),!function e(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var n=t;let a,i=n.root;if(n.renderGroupParent){let e=n.renderGroupParent;n.worldTransform.appendFrom(i.relativeGroupTransform,e.worldTransform),n.worldColor=(0,v.j)(i.groupColor,e.worldColor),a=i.groupAlpha*e.worldAlpha}else n.worldTransform.copyFrom(i.localTransform),n.worldColor=i.localColor,a=i.localAlpha;n.worldAlpha=a=a<0?0:a>1?1:a,n.worldColorAlpha=n.worldColor+(255*a<<24);let o=t.childrenToUpdate,s=t.updateTick++;for(let e in o){let r=Number(e),n=o[e],a=n.list,i=n.index;for(let e=0;e<i;e++){let n=a[e];n.parentRenderGroup===t&&n.relativeRenderGroupDepth===r&&function e(t,r,n){if(r===t.updateTick)return;t.updateTick=r,t.didChange=!1;let a=t.localTransform;t.updateLocalTransform();let i=t.parent;if(i&&!i.renderGroup?(n|=t._updateFlags,t.relativeGroupTransform.appendFrom(a,i.relativeGroupTransform),n&b&&g(t,i,n)):(n=t._updateFlags,t.relativeGroupTransform.copyFrom(a),n&b&&g(t,m,n)),!t.renderGroup){let a=t.children,i=a.length;for(let t=0;t<i;t++)e(a[t],r,n);let o=t.parentRenderGroup;t.renderPipeId&&!o.structureDidChange&&o.updateRenderable(t)}}(n,s,0)}f(a,i),n.index=0}if(r)for(let n=0;n<t.renderGroupChildren.length;n++)e(t.renderGroupChildren[n],r)}(e),e.structureDidChange?(e.structureDidChange=!1,this._buildInstructions(e,t)):this._updateRenderables(e),e.childrenRenderablesToUpdate.index=0,t.renderPipes.batch.upload(e.instructionSet),!e.isCachedAsTexture||e.textureNeedsUpdate)for(let t=0;t<e.renderGroupChildren.length;t++)this._updateRenderGroups(e.renderGroupChildren[t])}_updateRenderables(e){let t=e.childrenRenderablesToUpdate,r=t.list,n=t.index;for(let t=0;t<n;t++){let n=r[t];n.didViewUpdate&&e.updateRenderable(n)}f(r,n)}_buildInstructions(e,t){let r=e.root,n=e.instructionSet;n.reset();let a=t.renderPipes?t:t.batch.renderer,i=a.renderPipes;i.batch.buildStart(n),i.blendMode.buildStart(),i.colorMask.buildStart(),r.sortableChildren&&r.sortChildren(),r.collectRenderablesWithEffects(n,a,null),i.batch.buildEnd(n),i.blendMode.buildEnd(n)}}_.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem,n.Ag.CanvasSystem],name:"renderGroup"};class y{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}addRenderable(e,t){let r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){let t=this._gpuSpriteHash[e.uid];e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){let t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}destroyRenderable(e){let t=this._gpuSpriteHash[e.uid];o.Z.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){t.bounds=e.visualBounds,t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let t=o.Z.get(s.K);return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.visualBounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(let e in this._gpuSpriteHash)o.Z.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}}y.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"sprite"};var k=r(0x5e574c4),P=r(0xff17ce),T=r(0x2c4c091);let O=class e{constructor(e,t){var r,n;this.state=P.U.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,null==(r=(n=this._adaptor).init)||r.call(n,this)}static getBatcher(e){return new this._availableBatchers[e]}buildStart(e){let t=this._batchersByInstructionSet[e.uid];for(let r in!t&&((t=this._batchersByInstructionSet[e.uid]=Object.create(null)).default||(t.default=new T.J)),this._activeBatches=t,this._activeBatch=this._activeBatches.default,this._activeBatches)this._activeBatches[r].begin()}addToBatch(t,r){if(this._activeBatch.name!==t.batcherName){this._activeBatch.break(r);let n=this._activeBatches[t.batcherName];n||(n=this._activeBatches[t.batcherName]=e.getBatcher(t.batcherName)).begin(),this._activeBatch=n}this._activeBatch.add(t)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);let t=this._activeBatches;for(let e in t){let r=t[e],n=r.geometry;n.indexBuffer.setDataWithSize(r.indexBuffer,r.indexSize,!0),n.buffers[0].setDataWithSize(r.attributeBuffer.float32View,r.attributeSize,!1)}}upload(e){let t=this._batchersByInstructionSet[e.uid];for(let e in t){let r=t[e],n=r.geometry;r.dirty&&(r.dirty=!1,n.buffers[0].update(4*r.attributeSize))}}execute(e){if("startBatch"===e.action){let t=e.batcher,r=t.geometry,n=t.shader;this._adaptor.start(this,r,n)}this._adaptor.execute(this,e)}destroy(){for(let e in this.state=null,this.renderer=null,this._adaptor=null,this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};O.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"batch"},O._availableBatchers=Object.create(null),n.XO.handleByMap(n.Ag.Batcher,O._availableBatchers),n.XO.add(T.J);var w=r(0xb4a7c4),S=r(0x14ab023),C=r(0x215b742),M=r(0xb2d598),G=r(0x1812b09),A=r(0x2d5d68f),R=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    float a = alphaMul * masky.r * npmAlpha * clip;

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`,j=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,B=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);

    var a: f32 = alphaMul * mask.r * uAlpha * clip;

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`;let U=["sprite"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}class E extends A.d{constructor(e){const t=e.sprite,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,U),n=new G.N(t.texture),a=new M.k({uFilterMatrix:{value:new i.u,type:"mat3x3<f32>"},uMaskClamp:{value:n.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"},uInverse:{value:+!!e.inverse,type:"f32"}}),o=C.B.from({vertex:{source:B,entryPoint:"mainVertex"},fragment:{source:B,entryPoint:"mainFragment"}}),s=S.M.from({vertex:j,fragment:R,name:"mask-filter"});super(D(D({},r),{},{gpuProgram:o,glProgram:s,resources:{filterUniforms:a,uMaskTexture:t.texture.source}})),this.sprite=t,this._textureMatrix=n}set inverse(e){this.resources.filterUniforms.uniforms.uInverse=+!!e}get inverse(){return 1===this.resources.filterUniforms.uniforms.uInverse}apply(e,t,r,n){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,e.applyFilter(this,t,r,n)}}var F=r(0x3f46ece),H=r(0xcef753),W=r(0x9b7d33),z=r(0xfa15b0);let L=new h.c;class N extends w.a{constructor(){super(),this.filters=[new E({sprite:new H.k(W.g.EMPTY),inverse:!1,resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}get inverse(){return this.filters[0].inverse}set inverse(e){this.filters[0].inverse=e}}class V{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,r){let n=this._renderer;if(n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t}),e.inverse=t._maskOptions.inverse,e.renderMaskToTexture){let t=e.mask;t.includeInBuild=!0,t.collectRenderables(r,n,null),t.includeInBuild=!1}n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){let t=this._renderer,r=e.mask.renderMaskToTexture;if("pushMaskBegin"===e.action){let n=o.Z.get(N);if(n.inverse=e.inverse,r){e.mask.mask.measurable=!0;let r=(0,F.fB)(e.mask.mask,!0,L);e.mask.mask.measurable=!1,r.ceil();let a=t.renderTarget.renderTarget.colorTexture.source,i=c.W.getOptimalTexture(r.width,r.height,a._resolution,a.antialias);t.renderTarget.push(i,!0),t.globalUniforms.push({offset:r,worldColor:0xffffffff});let o=n.sprite;o.texture=i,o.worldTransform.tx=r.minX,o.worldTransform.ty=r.minY,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer,filterTexture:i})}else n.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer})}else if("pushMaskEnd"===e.action){let e=this._activeMaskStage[this._activeMaskStage.length-1];r&&(t.type===z.W.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:e.maskedContainer,filterEffect:e.filterEffect,canBundle:!1})}else if("popMaskEnd"===e.action){t.filter.pop();let e=this._activeMaskStage.pop();r&&c.W.returnTexture(e.filterTexture),o.Z.return(e.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}}V.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"alphaMask"};class K{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,r){this._renderer.renderPipes.batch.break(r);let n=this._colorStack;n[this._colorStackIndex]=n[this._colorStackIndex-1]&e.mask;let a=this._colorStack[this._colorStackIndex];a!==this._currentColor&&(this._currentColor=a,r.add({renderPipeId:"colorMask",colorMask:a,canBundle:!1})),this._colorStackIndex++}pop(e,t,r){this._renderer.renderPipes.batch.break(r);let n=this._colorStack;this._colorStackIndex--;let a=n[this._colorStackIndex-1];a!==this._currentColor&&(this._currentColor=a,r.add({renderPipeId:"colorMask",colorMask:a,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}}K.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"colorMask"};var q=r(0x3e0ff6c),Z=r(0x2d4e258);class Y{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,r){var n;let a=this._renderer;a.renderPipes.batch.break(r),a.renderPipes.blendMode.setBlendMode(e.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});let i=e.mask;i.includeInBuild=!0,this._maskHash.has(e)||this._maskHash.set(e,{instructionsStart:0,instructionsLength:0});let o=this._maskHash.get(e);o.instructionsStart=r.instructionSize,i.collectRenderables(r,a,null),i.includeInBuild=!1,a.renderPipes.batch.break(r),r.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});let s=r.instructionSize-o.instructionsStart-1;o.instructionsLength=s;let l=a.renderTarget.renderTarget.uid;null!=(n=this._maskStackHash)[l]||(n[l]=0)}pop(e,t,r){let n=this._renderer;n.renderPipes.batch.break(r),n.renderPipes.blendMode.setBlendMode(e.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"popMaskBegin",inverse:t._maskOptions.inverse,canBundle:!1});let a=this._maskHash.get(e);for(let e=0;e<a.instructionsLength;e++)r.instructions[r.instructionSize++]=r.instructions[a.instructionsStart++];r.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){var t,r;let n=this._renderer,a=n.renderTarget.renderTarget.uid,i=null!=(t=(r=this._maskStackHash)[a])?t:r[a]=0;"pushMaskBegin"===e.action?(n.renderTarget.ensureDepthStencil(),n.stencil.setStencilMode(Z.K.RENDERING_MASK_ADD,i),i++,n.colorMask.setMask(0)):"pushMaskEnd"===e.action?(e.inverse?n.stencil.setStencilMode(Z.K.INVERSE_MASK_ACTIVE,i):n.stencil.setStencilMode(Z.K.MASK_ACTIVE,i),n.colorMask.setMask(15)):"popMaskBegin"===e.action?(n.colorMask.setMask(0),0!==i?n.stencil.setStencilMode(Z.K.RENDERING_MASK_REMOVE,i):(n.renderTarget.clear(null,q.u.STENCIL),n.stencil.setStencilMode(Z.K.DISABLED,i)),i--):"popMaskEnd"===e.action&&(e.inverse?n.stencil.setStencilMode(Z.K.INVERSE_MASK_ACTIVE,i):n.stencil.setStencilMode(Z.K.MASK_ACTIVE,i),n.colorMask.setMask(15)),this._maskStackHash[a]=i}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}}Y.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"stencilMask"};var $=r(0x5c210ab);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let X=class e{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new $.Q(0),this.color=this._backgroundColor,this.alpha=1}init(t){t=Q(Q({},e.defaultOptions),t),this.clearBeforeRender=t.clearBeforeRender,this.color=t.background||t.backgroundColor||this._backgroundColor,this.alpha=t.backgroundAlpha,this._backgroundColor.setAlpha(t.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};X.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem,n.Ag.CanvasSystem],name:"background",priority:0},X.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var ee=r(0x2747f41);let et={};n.XO.handle(n.Ag.BlendMode,e=>{if(!e.name)throw Error("BlendMode extension must have a name property");et[e.name]=e.ref},e=>{delete et[e.name]});class er{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e,this._renderer.runners.prerender.add(this)}prerender(){this._activeBlendMode="normal",this._isAdvanced=!1}setBlendMode(e,t,r){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(r),this._isAdvanced=!!et[t],this._isAdvanced&&(this._beginAdvancedBlendMode(r),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);let t=this._activeBlendMode;if(!et[t])return void(0,ee.R)("Unable to assign BlendMode: '".concat(t,"'. You may want to include: import 'pixi.js/advanced-blend-modes'"));let r=this._filterHash[t];r||((r=this._filterHash[t]=new w.a).filters=[new et[t]]);let n={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:r,canBundle:!1};this._renderableList=n.renderables,e.add(n)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){for(let e in this._renderer=null,this._renderableList=null,this._filterHash)this._filterHash[e].destroy();this._filterHash=null}}function en(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ea(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?en(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):en(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}er.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"blendMode"};let ei={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},eo=class e{constructor(e){this._renderer=e}_normalizeOptions(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e instanceof p.mc||e instanceof W.g?ea({target:e},t):ea(ea({},t),e)}async image(e){let t=new Image;return t.src=await this.base64(e),t}async base64(t){let r=t=this._normalizeOptions(t,e.defaultImageOptions),n=r.format,a=r.quality,i=this.canvas(t);if(void 0!==i.toBlob)return new Promise((e,t)=>{i.toBlob(r=>{if(!r)return void t(Error("ICanvas.toBlob failed!"));let n=new FileReader;n.onload=()=>e(n.result),n.onerror=t,n.readAsDataURL(r)},ei[n],a)});if(void 0!==i.toDataURL)return i.toDataURL(ei[n],a);if(void 0!==i.convertToBlob){let e=await i.convertToBlob({type:ei[n],quality:a});return new Promise((t,r)=>{let n=new FileReader;n.onload=()=>t(n.result),n.onerror=r,n.readAsDataURL(e)})}throw Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(e){let t=(e=this._normalizeOptions(e)).target,r=this._renderer;if(t instanceof W.g)return r.texture.generateCanvas(t);let n=r.textureGenerator.generateTexture(e),a=r.texture.generateCanvas(n);return n.destroy(!0),a}pixels(e){let t=(e=this._normalizeOptions(e)).target,r=this._renderer,n=t instanceof W.g?t:r.textureGenerator.generateTexture(e),a=r.texture.getPixels(n);return t instanceof p.mc&&n.destroy(!0),a}texture(e){return(e=this._normalizeOptions(e)).target instanceof W.g?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){var t;e=this._normalizeOptions(e);let r=this.canvas(e),n=document.createElement("a");n.download=null!=(t=e.filename)?t:"image.png",n.href=r.toDataURL("image/png"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}log(e){var t;let r=null!=(t=e.width)?t:200;e=this._normalizeOptions(e);let n=this.canvas(e),a=n.toDataURL();console.log("[Pixi Texture] ".concat(n.width,"px ").concat(n.height,"px")),console.log("%c ",["font-size: 1px;","padding: ".concat(r,"px ",300,"px;"),"background: url(".concat(a,") no-repeat;"),"background-size: contain;"].join(" "))}destroy(){this._renderer=null}};eo.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem],name:"extract"},eo.defaultImageOptions={format:"png",quality:1};var es=r(0x30fae65),el=r(0x4c219c2),eu=r(0x156ae3e);class ed extends W.g{static create(e){return new ed({source:new eu.v(e)})}resize(e,t,r){return this.source.resize(e,t,r),this}}function ec(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eh(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ec(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ec(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let ef=new es.M,ep=new h.c,ev=[0,0,0,0];class em{constructor(e){this._renderer=e}generateTexture(e){var t;e instanceof p.mc&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});let r=e.resolution||this._renderer.resolution,n=e.antialias||this._renderer.view.antialias,a=e.target,o=e.clearColor;o=o?Array.isArray(o)&&4===o.length?o:$.Q.shared.setValue(o).toArray():ev;let s=(null==(t=e.frame)?void 0:t.copyTo(ef))||(0,el.n)(a,ep).rectangle;s.width=0|Math.max(s.width,1/r),s.height=0|Math.max(s.height,1/r);let l=ed.create(eh(eh({},e.textureSourceOptions),{},{width:s.width,height:s.height,resolution:r,antialias:n})),u=i.u.shared.translate(-s.x,-s.y);return this._renderer.render({container:a,transform:u,target:l,clearColor:o}),l.source.updateMipmaps(),l}destroy(){this._renderer=null}}em.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem],name:"textureGenerator"};var eb=r(3149334),eg=r(0xe6a06b),ex=r(8276788);class e_{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind(e){let t,r=e.size,n=e.projectionMatrix,a=e.worldTransformMatrix,o=e.worldColor,s=e.offset,l=this._renderer.renderTarget.renderTarget,u=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:l,worldTransformMatrix:new i.u,worldColor:0xffffffff,offset:new eb.b},d={projectionMatrix:n||this._renderer.renderTarget.projectionMatrix,resolution:r||l.size,worldTransformMatrix:a||u.worldTransformMatrix,worldColor:o||u.worldColor,offset:s||u.offset,bindGroup:null},c=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(c);let h=c.uniforms;h.uProjectionMatrix=d.projectionMatrix,h.uResolution=d.resolution,h.uWorldTransformMatrix.copyFrom(d.worldTransformMatrix),h.uWorldTransformMatrix.tx-=d.offset.x,h.uWorldTransformMatrix.ty-=d.offset.y,(0,eg.V)(d.worldColor,h.uWorldColorAlpha,0),c.update(),this._renderer.renderPipes.uniformBatch?t=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(c,!1):(t=this._bindGroupPool.pop()||new ex.T,this._activeBindGroups.push(t),t.setResource(c,0)),d.bindGroup=t,this._currentGlobalUniformData=d}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===z.W.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get globalUniformData(){return this._currentGlobalUniformData}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new M.k({uProjectionMatrix:{value:new i.u,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new i.u,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null}}e_.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem,n.Ag.CanvasSystem],name:"globalUniforms"};var ey=r(0x127bd33);let ek=1;class eP{constructor(){this._tasks=[],this._offset=0}init(){ey.R.system.add(this._update,this)}repeat(e,t){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=ek++,a=0;return r&&(this._offset+=1e3,a=this._offset),this._tasks.push({func:e,duration:t,start:performance.now(),offset:a,last:performance.now(),repeat:!0,id:n}),n}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e)return void this._tasks.splice(t,1)}_update(){let e=performance.now();for(let t=0;t<this._tasks.length;t++){let r=this._tasks[t];if(e-r.offset-r.last>=r.duration){let t=e-r.start;r.func(t),r.last=e}}}destroy(){ey.R.system.remove(this._update,this),this._tasks.length=0}}eP.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem,n.Ag.CanvasSystem],name:"scheduler",priority:0};var eT=r(0x4ded1f5),eO=r(4398964);let ew=!1;class eS{constructor(e){this._renderer=e}init(e){if(e.hello){let e=this._renderer.name;this._renderer.type===z.W.WEBGL&&(e+=" ".concat(this._renderer.context.webGLVersion));var t=e;if(!ew){if(eT.e.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){let e=["%c  %c  %c  %c  %c PixiJS %c v".concat(eO.xv," (").concat(t,`) http://www.pixijs.com/

`),"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log("PixiJS ".concat(eO.xv," - ").concat(t," - http://www.pixijs.com/"));ew=!0}}}}function eC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eM(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eC(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eC(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}eS.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem,n.Ag.CanvasSystem],name:"hello",priority:-2},eS.defaultOptions={hello:!1};let eG=0,eA=class e{constructor(e){this._managedRenderables=[],this._managedHashes=[],this._managedArrays=[],this._renderer=e}init(t){t=eM(eM({},e.defaultOptions),t),this.maxUnusedTime=t.renderableGCMaxUnusedTime,this._frequency=t.renderableGCFrequency,this.enabled=t.renderableGCActive}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?(this._handler=this._renderer.scheduler.repeat(()=>this.run(),this._frequency,!1),this._hashHandler=this._renderer.scheduler.repeat(()=>{for(let e of this._managedHashes)e.context[e.hash]=function(e){let t=!1;for(let r in e)if(void 0==e[r]){t=!0;break}if(!t)return e;let r=Object.create(null);for(let t in e){let n=e[t];n&&(r[t]=n)}return r}(e.context[e.hash])},this._frequency),this._arrayHandler=this._renderer.scheduler.repeat(()=>{for(let e of this._managedArrays)!function(e){let t=0;for(let r=0;r<e.length;r++)void 0==e[r]?t++:e[r-t]=e[r];e.length-=t}(e.context[e.hash])},this._frequency)):(this._renderer.scheduler.cancel(this._handler),this._renderer.scheduler.cancel(this._hashHandler),this._renderer.scheduler.cancel(this._arrayHandler)))}addManagedHash(e,t){this._managedHashes.push({context:e,hash:t})}addManagedArray(e,t){this._managedArrays.push({context:e,hash:t})}prerender(e){let t=e.container;this._now=performance.now(),t.renderGroup.gcTick=eG++,this._updateInstructionGCTick(t.renderGroup,t.renderGroup.gcTick)}addRenderable(e){this.enabled&&(-1===e._lastUsed&&(this._managedRenderables.push(e),e.once("destroyed",this._removeRenderable,this)),e._lastUsed=this._now)}run(){let e=this._now,t=this._managedRenderables,r=this._renderer.renderPipes,n=0;for(let l=0;l<t.length;l++){var a,i,o,s;let u=t[l];if(null===u){n++;continue}let d=null!=(a=u.renderGroup)?a:u.parentRenderGroup,c=null!=(i=null==d||null==(o=d.instructionSet)?void 0:o.gcTick)?i:-1;(null!=(s=null==d?void 0:d.gcTick)?s:0)===c&&(u._lastUsed=e),e-u._lastUsed>this.maxUnusedTime?(u.destroyed||(d&&(d.structureDidChange=!0),r[u.renderPipeId].destroyRenderable(u)),u._lastUsed=-1,n++,u.off("destroyed",this._removeRenderable,this)):t[l-n]=u}t.length-=n}destroy(){this.enabled=!1,this._renderer=null,this._managedRenderables.length=0,this._managedHashes.length=0,this._managedArrays.length=0}_removeRenderable(e){let t=this._managedRenderables.indexOf(e);t>=0&&(e.off("destroyed",this._removeRenderable,this),this._managedRenderables[t]=null)}_updateInstructionGCTick(e,t){for(let r of(e.instructionSet.gcTick=t,e.renderGroupChildren))this._updateInstructionGCTick(r,t)}};function eR(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ej(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eR(Object(r),!0).forEach(function(t){var n,a,i;n=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eR(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}eA.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem],name:"renderableGC",priority:0},eA.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};let eB=class e{constructor(e){this._renderer=e,this.count=0,this.checkCount=0}init(t){var r;t=ej(ej({},e.defaultOptions),t),this.checkCountMax=t.textureGCCheckCountMax,this.maxIdle=null!=(r=t.textureGCAMaxIdle)?r:t.textureGCMaxIdle,this.active=t.textureGCActive}postrender(){!this._renderer.renderingToScreen||(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){let e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){let r=e[t];r.autoGarbageCollect&&r.resource&&r._touched>-1&&this.count-r._touched>this.maxIdle&&(r._touched=-1,r.unload())}}destroy(){this._renderer=null}};eB.extension={type:[n.Ag.WebGLSystem,n.Ag.WebGPUSystem],name:"textureGC"},eB.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:3600,textureGCCheckCountMax:600};let eU=[X,e_,eS,r(8410721).v,_,eB,em,eo,k.d,eA,eP],eI=[er,O,y,d,V,Y,K,a]},0x3c44140(e,t,r){r.d(t,{E:()=>a});var n=r(0x493dc13);function a(e,t,r,a){let i=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],o=0;for(let s=0;s<e.length;s++){let l=e[s],u=l.data.name,d=!1,c=0;for(let e=0;e<n.$.length;e++)if(n.$[e].test(l.data)){c=l.offset/4,i.push('name = "'.concat(u,'";'),"offset += ".concat(c-o,";"),n.$[e][t]||n.$[e].ubo),d=!0;break}if(!d)if(l.data.size>1)c=l.offset/4,i.push(r(l,c-o));else{let e=a[l.data.type];c=l.offset/4,i.push(`
                    v = uv.`.concat(u,`;
                    offset += `).concat(c-o,`;
                    `).concat(e,`;
                `))}o=c}return Function("uv","data","dataInt32","offset",i.join(`
`))}},0x493dc13(e,t,r){r.d(t,{$:()=>n});let n=[{type:"mat3x3<f32>",test:e=>void 0!==e.value.a,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:e=>"vec4<f32>"===e.type&&1===e.size&&void 0!==e.value.width,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:e=>"vec2<f32>"===e.type&&1===e.size&&void 0!==e.value.x,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:e=>"vec4<f32>"===e.type&&1===e.size&&void 0!==e.value.red,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:e=>"vec3<f32>"===e.type&&1===e.size&&void 0!==e.value.red,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}]},0x54356e0(e,t,r){r.d(t,{d:()=>i});var n=r(0x144f92c),a=r(0x188d85c);class i extends n.A{constructor(e){let t=e.buffer,r=e.offset,n=e.size;super(),this.uid=(0,a.L)("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=(0,a.L)("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=t,this.offset=0|r,this.size=n,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this._resourceId=(0,a.L)("resource"),this.emit("change",this)}destroy(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e&&this.buffer.destroy(),this.emit("change",this),this.buffer=null}}},0x594e3fe(e,t,r){r.d(t,{R:()=>n,m:()=>a});let n={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},a={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}}},0x5f2e34c(e,t,r){r.d(t,{W:()=>o});var n=r(6949158),a=r(7617640),i=r(0x1eaab37);class o{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!(0,n.f)())throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(e){let t=this.getUniformGroupData(e);e.buffer||(e.buffer=new a.h({data:new Float32Array(t.layout.size/4),usage:i.S.UNIFORM|i.S.COPY_DST}))}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){let t=e._signature,r=this._syncFunctionHash[t];if(!r){let n=Object.keys(e.uniformStructures).map(t=>e.uniformStructures[t]),a=this._adaptor.createUboElements(n),i=this._generateUboSync(a.uboElements);r=this._syncFunctionHash[t]={layout:a,syncFunction:i}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,r){let n=this.getUniformGroupData(e);e.buffer||(e.buffer=new a.h({data:new Float32Array(n.layout.size/4),usage:i.S.UNIFORM|i.S.COPY_DST}));let o=null;return t||(t=e.buffer.data,o=e.buffer.dataInt32),r||(r=0),n.syncFunction(e.uniforms,t,o,r),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}}}}]);