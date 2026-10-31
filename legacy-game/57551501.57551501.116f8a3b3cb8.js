"use strict";(self.webpackChunkgame_crash_point=self.webpackChunkgame_crash_point||[]).push([[0x36e2a8d],{2172277(e,t,r){var i=r(0x1474f1c),a=r(0x168e80f),n=r(6070355),s=r(0x1ee7f71);class o{constructor(e){this._gpuText=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.runners.resolutionChange.add(this),this._renderer.renderableGC.addManagedHash(this,"_gpuText")}resolutionChange(){for(let e in this._gpuText){let t=this._gpuText[e];if(!t)continue;let r=t.batchableSprite.renderable;r._autoResolution&&(r._resolution=this._renderer.resolution,r.onViewUpdate())}}validateRenderable(e){let t=this._getGpuText(e),r=e._getKey();return t.currentKey!==r}addRenderable(e,t){let r=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){let t=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),t._batcher.updateElement(t)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableById(e.uid)}_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey),a.Z.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){let t=e._getKey(),r=this._getGpuText(e),i=r.batchableSprite;r.currentKey!==t&&this._updateGpuText(e),e._didTextUpdate=!1,(0,s.s)(i,e)}_updateGpuText(e){let t=this._getGpuText(e),r=t.batchableSprite;t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),t.texture=r.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e._getKey(),r.texture=t.texture}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){let t={texture:null,currentKey:"--",batchableSprite:a.Z.get(n.K)};return t.batchableSprite.renderable=e,t.batchableSprite.transform=e.groupTransform,t.batchableSprite.bounds={minX:0,maxX:1,minY:0,maxY:0},t.batchableSprite.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuText[e.uid]=t,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._updateText(e),e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}o.extension={type:[i.Ag.WebGLPipes,i.Ag.WebGPUPipes,i.Ag.CanvasPipes],name:"text"};var l=r(0x5c210ab),u=r(0x4f7f9fc),d=r(0x2f24053),h=r(0x3618a98),c=r(0x30fae65);function f(e,t,r){for(let i=0,a=4*r*t;i<t;++i,a+=4)if(0!==e[a+3])return!1;return!0}function p(e,t,r,i,a){let n=4*t;for(let t=i,s=i*n+4*r;t<=a;++t,s+=n)if(0!==e[s+3])return!1;return!0}var x=r(0x3e55af5),g=r(0xd7d70a),m=r(0x34bc883),_=r(0x2ad53a3),b=r(0x2d50521),y=r(0x15c60f5);class v{constructor(e){this._activeTextures={},this._renderer=e}getTextureSize(e,t,r){let i=_.P.measureText(e||" ",r),a=Math.ceil(Math.ceil(Math.max(1,i.width)+2*r.padding)*t),n=Math.ceil(Math.ceil(Math.max(1,i.height)+2*r.padding)*t);return a=Math.ceil(a-1e-6),n=Math.ceil(n-1e-6),{width:a=(0,u.U5)(a),height:n=(0,u.U5)(n)}}getTexture(e,t,r,i){"string"==typeof e&&((0,x.t6)("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:r,resolution:t}),e.style instanceof g.x||(e.style=new g.x(e.style));let a=this.createTextureAndCanvas(e),n=a.texture,s=a.canvasAndContext;return this._renderer.texture.initSource(n._source),d.N.returnCanvasAndContext(s),n}createTextureAndCanvas(e){var t;let r=e.text,i=e.style,a=null!=(t=e.resolution)?t:this._renderer.resolution,n=_.P.measureText(r||" ",i),s=Math.ceil(Math.ceil(Math.max(1,n.width)+2*i.padding)*a),o=Math.ceil(Math.ceil(Math.max(1,n.height)+2*i.padding)*a),l=d.N.getOptimalCanvasAndContext(s,o),u=l.canvas;this.renderTextToCanvas(r,i,a,l);let h=(0,m.M)(u,s,o,a);if(i.trim){let e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=e.width,i=e.height,a=e.getContext("2d",{willReadFrequently:!0});if(null===a)throw TypeError("Failed to get canvas 2D context");let n=a.getImageData(0,0,r,i).data,s=0,o=0,l=r-1,u=i-1;for(;o<i&&f(n,r,o);)++o;if(o===i)return c.M.EMPTY;for(;f(n,r,u);)--u;for(;p(n,r,s,o,u);)++s;for(;p(n,r,l,o,u);)--l;return++l,++u,new c.M(s/t,o/t,(l-s)/t,(u-o)/t)}(u,a);h.frame.copyFrom(e),h.updateUvs()}return{texture:h,canvasAndContext:l}}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let t=e._getKey();if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;let r=this.createTextureAndCanvas(e),i=r.texture,a=r.canvasAndContext;return this._activeTextures[t]={canvasAndContext:a,texture:i,usageCount:1},i}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let t=this._activeTextures[e];if(t.usageCount--,0===t.usageCount){d.N.returnCanvasAndContext(t.canvasAndContext),h.W.returnTexture(t.texture);let r=t.texture.source;r.resource=null,r.uploadMethodId="unknown",r.alphaMode="no-premultiply-alpha",this._activeTextures[e]=null}}getReferenceCount(e){return this._activeTextures[e].usageCount}renderTextToCanvas(e,t,r,i){var a,n,s,o,u;let d,h,c=i.canvas,f=i.context,p=(0,b.Z)(t),x=_.P.measureText(e||" ",t),g=x.lines,m=x.lineHeight,v=x.lineWidths,T=x.maxLineWidth,S=x.fontProperties,C=c.height;if(f.resetTransform(),f.scale(r,r),f.textBaseline=t.textBaseline,null!=(a=t._stroke)&&a.width){let e=t._stroke;f.lineWidth=e.width,f.miterLimit=e.miterLimit,f.lineJoin=e.join,f.lineCap=e.cap}f.font=p;let R=t.dropShadow?2:1;for(let e=0;e<R;++e){let a=t.dropShadow&&0===e,c=a?Math.ceil(Math.max(1,C)+2*t.padding):0,p=c*r;if(a){f.fillStyle="black",f.strokeStyle="black";let e=t.dropShadow,i=e.color,a=e.alpha;f.shadowColor=l.Q.shared.setValue(i).setAlpha(a).toRgbaString();let n=e.blur*r,s=e.distance*r;f.shadowBlur=n,f.shadowOffsetX=Math.cos(e.angle)*s,f.shadowOffsetY=Math.sin(e.angle)*s+p}else f.fillStyle=t._fill?(0,y.r)(t._fill,f):null,null!=(o=t._stroke)&&o.width&&(f.strokeStyle=(0,y.r)(t._stroke,f)),f.shadowColor="black";let x=(m-S.fontSize)/2;m-S.fontSize<0&&(x=0);let _=null!=(n=null==(s=t._stroke)?void 0:s.width)?n:0;for(let e=0;e<g.length;e++)d=_/2,h=_/2+e*m+S.ascent+x,"right"===t.align?d+=T-v[e]:"center"===t.align&&(d+=(T-v[e])/2),null!=(u=t._stroke)&&u.width&&this._drawLetterSpacing(g[e],t,i,d+t.padding,h+t.padding-c,!0),void 0!==t._fill&&this._drawLetterSpacing(g[e],t,i,d+t.padding,h+t.padding-c)}}_drawLetterSpacing(e,t,r,i,a){let n=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=r.context,o=t.letterSpacing,l=!1;if(_.P.experimentalLetterSpacingSupported&&(_.P.experimentalLetterSpacing?(s.letterSpacing="".concat(o,"px"),s.textLetterSpacing="".concat(o,"px"),l=!0):(s.letterSpacing="0px",s.textLetterSpacing="0px")),0===o||l)return void(n?s.strokeText(e,i,a):s.fillText(e,i,a));let u=i,d=_.P.graphemeSegmenter(e),h=s.measureText(e).width,c=0;for(let e=0;e<d.length;++e){let t=d[e];n?s.strokeText(t,u,a):s.fillText(t,u,a);let r="";for(let t=e+1;t<d.length;++t)r+=d[t];u+=h-(c=s.measureText(r).width)+o,h=c}}destroy(){this._activeTextures=null}}v.extension={type:[i.Ag.WebGLSystem,i.Ag.WebGPUSystem,i.Ag.CanvasSystem],name:"canvasText"},i.XO.add(v),i.XO.add(o)},6070355(e,t,r){r.d(t,{K:()=>i});class i{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}},0xe6a06b(e,t,r){r.d(t,{V:()=>i});function i(e,t,r){let i=(e>>24&255)/255;t[r++]=(255&e)/255*i,t[r++]=(e>>8&255)/255*i,t[r++]=(e>>16&255)/255*i,t[r++]=i}},0xf6c7c9(e,t,r){r.d(t,{U:()=>i});class i{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(e){this._topology=e}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(e){this.texture!==e&&(this.texture=e,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),t=e.data,r=t,i=this.texture.textureMatrix;return i.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==i._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<t.length)&&(r=this._transformedUvs=new Float32Array(t.length)),this._textureMatrixUpdateId=i._updateID,this._uvUpdateId=e._updateID,i.multiplyUvs(t,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}},0x1687f7e(e,t,r){var i=r(0x1474f1c);class a{constructor(e){this._renderer=e}push(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}execute(e){"pushFilter"===e.action?this._renderer.filter.push(e):"popFilter"===e.action&&this._renderer.filter.pop()}destroy(){this._renderer=null}}a.extension={type:[i.Ag.WebGLPipes,i.Ag.WebGPUPipes,i.Ag.CanvasPipes],name:"filter"};var n=r(0xbd6382),s=r(3149334),o=r(8276788),l=r(0x400da3c),u=r(0xb2d598),d=r(0x9b7d33),h=r(0x3618a98),c=r(0xfa15b0),f=r(0xed2ee3),p=r(0x2747f41);let x=new l.V({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),format:"float32x2",stride:8,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class g{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new u.k({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new o.T({}),this.renderer=e}get activeBackTexture(){var e;return null==(e=this._activeFilterData)?void 0:e.backTexture}push(e){let t=this.renderer,r=e.filterEffect.filters;this._filterStack[this._filterStackIndex]||(this._filterStack[this._filterStackIndex]=this._getFilterData());let i=this._filterStack[this._filterStackIndex];if(this._filterStackIndex++,0===r.length){i.skip=!0;return}let a=i.bounds;if(e.renderables?!function(e,t){t.clear();let r=t.matrix;for(let r=0;r<e.length;r++){let i=e[r];i.globalDisplayStatus<7||(t.matrix=i.worldTransform,t.addBounds(i.bounds))}t.matrix=r}(e.renderables,a):e.filterEffect.filterArea?(a.clear(),a.addRect(e.filterEffect.filterArea),a.applyMatrix(e.container.worldTransform)):e.container.getFastGlobalBounds(!0,a),e.container){let t=(e.container.renderGroup||e.container.parentRenderGroup).cacheToLocalTransform;t&&a.applyMatrix(t)}let n=t.renderTarget.renderTarget.colorTexture.source,s=1/0,o=0,l=!0,u=!1,d=!1,c=!0;for(let e=0;e<r.length;e++){var f,x;let i=r[e];if(s=Math.min(s,"inherit"===i.resolution?n._resolution:i.resolution),o+=i.padding,"off"===i.antialias?l=!1:"inherit"===i.antialias&&l&&(l=n.antialias),i.clipToViewport||(c=!1),!(i.compatibleRenderers&t.type)){d=!1;break}if(i.blendRequired&&!(null==(f=null==(x=t.backBuffer)?void 0:x.useBackBuffer)||f)){(0,p.R)("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),d=!1;break}d=i.enabled||d,u||(u=i.blendRequired)}if(!d){i.skip=!0;return}if(c){let e=t.renderTarget.rootViewPort,r=t.renderTarget.renderTarget.resolution;a.fitBounds(0,e.width/r,0,e.height/r)}if(a.scale(s).ceil().scale(1/s).pad(0|o),!a.isPositive){i.skip=!0;return}i.skip=!1,i.bounds=a,i.blendRequired=u,i.container=e.container,i.filterEffect=e.filterEffect,i.previousRenderSurface=t.renderTarget.renderSurface,i.inputTexture=h.W.getOptimalTexture(a.width,a.height,s,l),t.renderTarget.bind(i.inputTexture,!0),t.globalUniforms.push({offset:a})}pop(){let e=this.renderer;this._filterStackIndex--;let t=this._filterStack[this._filterStackIndex];if(t.skip)return;this._activeFilterData=t;let r=t.inputTexture,i=t.bounds,a=d.g.EMPTY;if(e.renderTarget.finishRenderPass(),t.blendRequired){let r=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null,n=e.renderTarget.getRenderTarget(t.previousRenderSurface);a=this.getBackTexture(n,i,r)}t.backTexture=a;let n=t.filterEffect.filters;if(this._globalFilterBindGroup.setResource(r.source.style,2),this._globalFilterBindGroup.setResource(a.source,3),e.globalUniforms.pop(),1===n.length)n[0].apply(this,r,t.previousRenderSurface,!1),h.W.returnTexture(r);else{let e=t.inputTexture,r=h.W.getOptimalTexture(i.width,i.height,e.source._resolution,!1),a=0;for(a=0;a<n.length-1;++a){n[a].apply(this,e,r,!0);let t=e;e=r,r=t}n[a].apply(this,e,t.previousRenderSurface,!1),h.W.returnTexture(e),h.W.returnTexture(r)}t.blendRequired&&h.W.returnTexture(a)}getBackTexture(e,t,r){let i=e.colorTexture.source._resolution,a=h.W.getOptimalTexture(t.width,t.height,i,!1),n=t.minX,s=t.minY;r&&(n-=r.minX,s-=r.minY),n=Math.floor(n*i),s=Math.floor(s*i);let o=Math.ceil(t.width*i),l=Math.ceil(t.height*i);return this.renderer.renderTarget.copyToTexture(e,a,{x:n,y:s},{width:o,height:l},{x:0,y:0}),a}applyFilter(e,t,r,i){let a=this.renderer,n=this._filterStack[this._filterStackIndex],o=n.bounds,l=s.b.shared,u=n.previousRenderSurface===r,h=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution,f=this._filterStackIndex-1;for(;f>0&&this._filterStack[f].skip;)--f;f>0&&(h=this._filterStack[f].inputTexture.source._resolution);let p=this._filterGlobalUniforms,g=p.uniforms,m=g.uOutputFrame,_=g.uInputSize,b=g.uInputPixel,y=g.uInputClamp,v=g.uGlobalFrame,T=g.uOutputTexture;if(u){let e=this._filterStackIndex;for(;e>0;){e--;let t=this._filterStack[this._filterStackIndex-1];if(!t.skip){l.x=t.bounds.minX,l.y=t.bounds.minY;break}}m[0]=o.minX-l.x,m[1]=o.minY-l.y}else m[0]=0,m[1]=0;m[2]=t.frame.width,m[3]=t.frame.height,_[0]=t.source.width,_[1]=t.source.height,_[2]=1/_[0],_[3]=1/_[1],b[0]=t.source.pixelWidth,b[1]=t.source.pixelHeight,b[2]=1/b[0],b[3]=1/b[1],y[0]=.5*b[2],y[1]=.5*b[3],y[2]=t.frame.width*_[2]-.5*b[2],y[3]=t.frame.height*_[3]-.5*b[3];let S=this.renderer.renderTarget.rootRenderTarget.colorTexture;v[0]=l.x*h,v[1]=l.y*h,v[2]=S.source.width*h,v[3]=S.source.height*h;let C=this.renderer.renderTarget.getRenderTarget(r);if(a.renderTarget.bind(r,!!i),r instanceof d.g?(T[0]=r.frame.width,T[1]=r.frame.height):(T[0]=C.width,T[1]=C.height),T[2]=C.isRoot?-1:1,p.update(),a.renderPipes.uniformBatch){let e=a.renderPipes.uniformBatch.getUboResource(p);this._globalFilterBindGroup.setResource(e,0)}else this._globalFilterBindGroup.setResource(p,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),e.groups[0]=this._globalFilterBindGroup,a.encoder.draw({geometry:x,shader:e,state:e._state,topology:"triangle-list"}),a.type===c.W.WEBGL&&a.renderTarget.finishRenderPass()}_getFilterData(){return{skip:!1,inputTexture:null,bounds:new f.c,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){let r=this._activeFilterData,i=e.set(r.inputTexture._source.width,0,0,r.inputTexture._source.height,r.bounds.minX,r.bounds.minY),a=t.worldTransform.copyTo(n.u.shared),s=t.renderGroup||t.parentRenderGroup;return s&&s.cacheToLocalTransform&&a.prepend(s.cacheToLocalTransform),a.invert(),i.prepend(a),i.scale(1/t.texture.frame.width,1/t.texture.frame.height),i.translate(t.anchor.x,t.anchor.y),i}}g.extension={type:[i.Ag.WebGLSystem,i.Ag.WebGPUSystem],name:"filter"},i.XO.add(g),i.XO.add(a)},0x1982921(e,t,r){var i=r(0x1474f1c),a=r(0x9b7d33),n=r(0x168e80f),s=r(6070355),o=r(0x1ee7f71);class l{constructor(e){this._gpuText=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.runners.resolutionChange.add(this),this._renderer.renderableGC.addManagedHash(this,"_gpuText")}resolutionChange(){for(let e in this._gpuText){let t=this._gpuText[e];if(!t)continue;let r=t.batchableSprite.renderable;r._autoResolution&&(r._resolution=this._renderer.resolution,r.onViewUpdate())}}validateRenderable(e){let t=this._getGpuText(e),r=e._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==r}addRenderable(e,t){let r=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){let t=this._getGpuText(e).batchableSprite;e._didTextUpdate&&this._updateText(e),t._batcher.updateElement(t)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableById(e.uid)}_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey),n.Z.return(t.batchableSprite),this._gpuText[e]=null}_updateText(e){let t=e._getKey(),r=this._getGpuText(e),i=r.batchableSprite;r.currentKey!==t&&this._updateGpuText(e).catch(e=>{console.error(e)}),e._didTextUpdate=!1,(0,o.s)(i,e)}async _updateGpuText(e){var t;e._didTextUpdate=!1;let r=this._getGpuText(e);if(r.generatingTexture)return;let i=e._getKey();this._renderer.htmlText.decreaseReferenceCount(r.currentKey),r.generatingTexture=!0,r.currentKey=i;let a=null!=(t=e.resolution)?t:this._renderer.resolution,n=await this._renderer.htmlText.getManagedTexture(e.text,a,e._style,e._getKey()),s=r.batchableSprite;s.texture=r.texture=n,r.generatingTexture=!1,r.textureNeedsUploading=!0,e.onViewUpdate(),(0,o.s)(s,e)}_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){let t={texture:a.g.EMPTY,currentKey:"--",batchableSprite:n.Z.get(s.K),textureNeedsUploading:!1,generatingTexture:!1},r=t.batchableSprite;return r.renderable=e,r.transform=e.groupTransform,r.texture=a.g.EMPTY,r.bounds={minX:0,maxX:1,minY:0,maxY:0},r.roundPixels=this._renderer._roundPixels|e._roundPixels,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,this._gpuText[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null,this._renderer=null}}l.extension={type:[i.Ag.WebGLPipes,i.Ag.WebGPUPipes,i.Ag.CanvasPipes],name:"htmlText"};var u=r(0x2f24053),d=r(0x3618a98),h=r(0xfa15b0),c=r(0x4ded1f5),f=r(0x2747f41),p=r(0x34bc883),x=r(0xc00248),g=r(0x1988d60),m=r(0x47e00b2);async function _(e){let t=await c.e.get().fetch(e),r=await t.blob(),i=new FileReader;return await new Promise((e,t)=>{i.onloadend=()=>e(i.result),i.onerror=t,i.readAsDataURL(r)})}async function b(e,t){let r=await _(t);return`@font-face {
        font-family: "`.concat(e.fontFamily,`";
        src: url('`).concat(r,`');
        font-weight: `).concat(e.fontWeight,`;
        font-style: `).concat(e.fontStyle,`;
    }`)}let y=new Map;async function v(e,t,r){let i=e.filter(e=>m.l.has("".concat(e,"-and-url"))).map((e,i)=>{if(!y.has(e)){let a=m.l.get("".concat(e,"-and-url")).url;0===i?y.set(e,b({fontWeight:t.fontWeight,fontStyle:t.fontStyle,fontFamily:e},a)):y.set(e,b({fontWeight:r.fontWeight,fontStyle:r.fontStyle,fontFamily:e},a))}return y.get(e)});return(await Promise.all(i)).join(`
`)}var T=r(0x23a2236);class S{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===h.W.WEBGPU}getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}getManagedTexture(e,t,r,i){if(this._activeTextures[i])return this._increaseReferenceCount(i),this._activeTextures[i].promise;let a=this._buildTexturePromise(e,t,r).then(e=>(this._activeTextures[i].texture=e,e));return this._activeTextures[i]={texture:null,promise:a,usageCount:1},a}async _buildTexturePromise(e,t,r){var i;let a,s,o,l,d,h,f,m,_,b,y=n.Z.get(x.pF),S=function(e,t){let r=t.fontFamily,i=[],a={},n=e.match(/font-family:([^;"\s]+)/g);function s(e){a[e]||(i.push(e),a[e]=!0)}if(Array.isArray(r))for(let e=0;e<r.length;e++)s(r[e]);else s(r);for(let e in n&&n.forEach(e=>{s(e.split(":")[1].trim())}),t.tagStyles)s(t.tagStyles[e].fontFamily);return i}(e,r),C=await v(S,r,g.I.defaultTextStyle),R=(0,T.r)(e,r,C,y),B=Math.ceil(Math.ceil(Math.max(1,R.width)+2*r.padding)*t),w=Math.ceil(Math.ceil(Math.max(1,R.height)+2*r.padding)*t),P=y.image;P.width=(0|B)+2,P.height=(0|w)+2;let U=(s=y.domElement,o=y.styleElement,l=y.svgRoot,s.innerHTML="<style>".concat(r.cssStyle,"</style><div style='padding:0;'>").concat(e,"</div>"),s.setAttribute("style","transform: scale(".concat(t,");transform-origin: top left; display: inline-block")),o.textContent=C,h=(d=y.image).width,f=d.height,l.setAttribute("width",h.toString()),l.setAttribute("height",f.toString()),new XMLSerializer().serializeToString(l));await (m=c.e.get().getNavigator().userAgent,i=/^((?!chrome|android).)*safari/i.test(m)&&S.length>0,new Promise(async e=>{i&&await new Promise(e=>setTimeout(e,100)),P.onload=()=>{e()},P.src="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(U)),P.crossOrigin="anonymous"})),this._createCanvas&&((b=(_=u.N.getOptimalCanvasAndContext(P.width,P.height,t)).context).clearRect(0,0,P.width,P.height),b.drawImage(P,0,0),a=_);let M=(0,p.M)(a?a.canvas:P,P.width-2,P.height-2,t);return this._createCanvas&&(this._renderer.texture.initSource(M.source),u.N.returnCanvasAndContext(a)),n.Z.return(y),M}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let t=this._activeTextures[e];t&&(t.usageCount--,0===t.usageCount&&(t.texture?this._cleanUp(t):t.promise.then(e=>{t.texture=e,this._cleanUp(t)}).catch(()=>{(0,f.R)("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}_cleanUp(e){d.W.returnTexture(e.texture),e.texture.source.resource=null,e.texture.source.uploadMethodId="unknown"}getReferenceCount(e){return this._activeTextures[e].usageCount}destroy(){this._activeTextures=null}}S.extension={type:[i.Ag.WebGLSystem,i.Ag.WebGPUSystem,i.Ag.CanvasSystem],name:"htmlText"},S.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"},i.XO.add(S),i.XO.add(l)},0x1e5a245(e,t,r){let i,a;var n=r(0x1474f1c),s=r(0x47e00b2),o=r(0x168e80f),l=r(0x45720b1),u=r(0xbd6382),d=r(0x2b594e8),h=r(0x1e5d139),c=r(0x49ccade),f=r(4601683),p=r(0xeda338),x=r(0x191f829),g=r(0x21f79f2),m=r(0xb2d598);let _={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:` 
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
        `}},b={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:` 
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `}},y={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;
             
            }
        `}},v={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);  
              
                return coverage;
            }
        `}};class T extends g.M{constructor(){const e=new m.k({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new u.u,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}}),t=(0,d.a)();null!=i||(i=(0,h.v)({name:"sdf-shader",bits:[c.F,(0,f._)(t),_,y,p.b]})),null!=a||(a=(0,h.I)({name:"sdf-shader",bits:[c.a,(0,f.P)(t),b,v,p.m]})),super({glProgram:a,gpuProgram:i,resources:{localUniforms:e,batchSamplers:(0,x.n)(t)}})}}var S=r(0x39f1fb3),C=r(0x54148e4);class R{constructor(e){this._gpuBitmapText={},this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuBitmapText")}validateRenderable(e){let t=this._getGpuBitmapText(e);return e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,t)),this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){let r=this._getGpuBitmapText(e);B(e,r),e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,r)),this._renderer.renderPipes.graphics.addRenderable(r,t),r.context.customShader&&this._updateDistanceField(e)}destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound),this._destroyRenderableByUid(e.uid)}_destroyRenderableByUid(e){let t=this._gpuBitmapText[e].context;t.customShader&&(o.Z.return(t.customShader),t.customShader=null),o.Z.return(this._gpuBitmapText[e]),this._gpuBitmapText[e]=null}updateRenderable(e){let t=this._getGpuBitmapText(e);B(e,t),this._renderer.renderPipes.graphics.updateRenderable(t),t.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){let r=t.context,i=S.c.getFont(e.text,e._style);r.clear(),"none"===i.distanceField.type||r.customShader||(r.customShader=o.Z.get(T));let a=Array.from(e.text),n=e._style,s=i.baseLineOffset,l=(0,C.Z)(a,n,i,!0),u=0,d=n.padding,h=l.scale,c=l.width,f=l.height+l.offsetY;n._stroke&&(c+=n._stroke.width/h,f+=n._stroke.width/h),r.translate(-e._anchor._x*c-d,-e._anchor._y*f-d).scale(h,h);let p=i.applyFillAsTint?n._fill.color:0xffffff;for(let e=0;e<l.lines.length;e++){let t=l.lines[e];for(let e=0;e<t.charPositions.length;e++){let n=a[u++],o=i.chars[n];null!=o&&o.texture&&r.texture(o.texture,p||"black",Math.round(t.charPositions[e]+o.xOffset),Math.round(s+o.yOffset))}s+=i.lineHeight}}_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this.initGpuText(e)}initGpuText(e){let t=o.Z.get(l.A);return this._gpuBitmapText[e.uid]=t,this._updateContext(e,t),e.on("destroyed",this._destroyRenderableBound),this._gpuBitmapText[e.uid]}_updateDistanceField(e){let t=this._getGpuBitmapText(e).context,r=e._style.fontFamily,i=s.l.get("".concat(r,"-bitmap")),a=e.groupTransform,n=a.a,o=a.b,l=a.c,u=a.d,d=(Math.abs(Math.sqrt(n*n+o*o))+Math.abs(Math.sqrt(l*l+u*u)))/2,h=i.baseRenderedFontSize/e._style.fontSize,c=d*i.distanceField.range*(1/h);t.customShader.resources.localUniforms.uniforms.uDistance=c}destroy(){for(let e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null,this._renderer=null}}function B(e,t){t.groupTransform=e.groupTransform,t.groupColorAlpha=e.groupColorAlpha,t.groupColor=e.groupColor,t.groupBlendMode=e.groupBlendMode,t.globalDisplayStatus=e.globalDisplayStatus,t.groupTransform=e.groupTransform,t.localDisplayStatus=e.localDisplayStatus,t.groupAlpha=e.groupAlpha,t._roundPixels=e._roundPixels}R.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"bitmapText"},n.XO.add(R)},0x1e9f050(e,t,r){function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var i,a,n;i=e,a=t,n=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in i?Object.defineProperty(i,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[a]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{Ls:()=>n,_Q:()=>s,mA:()=>o});let n={name:"local-uniform-bit",vertex:{header:`

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
        `}},s=a(a({},n),{},{vertex:a(a({},n.vertex),{},{header:n.vertex.header.replace("group(1)","group(2)")})}),o={name:"local-uniform-bit",vertex:{header:`

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
        `}}},0x1ee7f71(e,t,r){r.d(t,{s:()=>a});var i=r(0x4c84763);function a(e,t){let r=e.texture,a=e.bounds;(0,i.y)(a,t._anchor,r);let n=t._style.padding;a.minX-=n,a.minY-=n,a.maxX-=n,a.maxY-=n}},0x20512b0(e,t,r){let i,a;var n=r(0x1474f1c),s=r(0x13afab2),o=r(0xff17ce),l=r(0xfa15b0),u=r(0xe6a06b),d=r(0xf6c7c9),h=r(6783805),c=r(0xbd6382),f=r(0x1e5d139),p=r(0x1e9f050),x=r(0xeda338),g=r(0x21f79f2),m=r(0xb2d598),_=r(0x9b7d33);let b={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},y={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `}};class v extends g.M{constructor(){null!=i||(i=(0,f.v)({name:"tiling-sprite-shader",bits:[p.Ls,b,x.b]})),null!=a||(a=(0,f.I)({name:"tiling-sprite-shader",bits:[p.mA,y,x.m]}));const e=new m.k({uMapCoord:{value:new c.u,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new c.u,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:a,gpuProgram:i,resources:{localUniforms:new m.k({uTransformMatrix:{value:new c.u,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:_.g.EMPTY.source,uSampler:_.g.EMPTY.source.style}})}updateUniforms(e,t,r,i,a,n){let s=this.resources.tilingUniforms,o=n.width,l=n.height,u=n.textureMatrix,d=s.uniforms.uTextureTransform;d.set(r.a*o/e,r.b*o/t,r.c*l/e,r.d*l/t,r.tx/e,r.ty/t),d.invert(),s.uniforms.uMapCoord=u.mapCoord,s.uniforms.uClampFrame=u.uClampFrame,s.uniforms.uClampOffset=u.uClampOffset,s.uniforms.uTextureTransform=d,s.uniforms.uSizeAnchor[0]=e,s.uniforms.uSizeAnchor[1]=t,s.uniforms.uSizeAnchor[2]=i,s.uniforms.uSizeAnchor[3]=a,n&&(this.resources.uTexture=n.source,this.resources.uSampler=n.source.style)}}class T extends h.u{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}}let S=new T;class C{constructor(e){this._state=o.U.default2d,this._tilingSpriteDataHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_tilingSpriteDataHash")}validateRenderable(e){let t=this._getTilingSpriteData(e),r=t.canBatch;this._updateCanBatch(e);let i=t.canBatch;if(i&&i===r){let r=t.batchableMesh;return!r._batcher.checkAndUpdateTexture(r,e.texture)}return r!==i}addRenderable(e,t){let r=this._renderer.renderPipes.batch;this._updateCanBatch(e);let i=this._getTilingSpriteData(e),a=i.geometry;if(i.canBatch){i.batchableMesh||(i.batchableMesh=new d.U);let n=i.batchableMesh;e.didViewUpdate&&(this._updateBatchableMesh(e),n.geometry=a,n.renderable=e,n.transform=e.groupTransform,n.setTexture(e._texture)),n.roundPixels=this._renderer._roundPixels|e._roundPixels,r.addToBatch(n,t)}else r.break(t),i.shader||(i.shader=new v),this.updateRenderable(e),t.add(e)}execute(e){let t=this._tilingSpriteDataHash[e.uid].shader;t.groups[0]=this._renderer.globalUniforms.bindGroup;let r=t.resources.localUniforms.uniforms;r.uTransformMatrix=e.groupTransform,r.uRound=this._renderer._roundPixels|e._roundPixels,(0,u.V)(e.groupColorAlpha,r.uColor,0),this._state.blendMode=(0,s.i)(e.groupBlendMode,e.texture._source),this._renderer.encoder.draw({geometry:S,shader:t,state:this._state})}updateRenderable(e){let t=this._getTilingSpriteData(e);if(t.canBatch){let r=t.batchableMesh;e.didViewUpdate&&this._updateBatchableMesh(e),r._batcher.updateElement(r)}else e.didViewUpdate&&t.shader.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}destroyRenderable(e){var t;let r=this._getTilingSpriteData(e);r.batchableMesh=null,null==(t=r.shader)||t.destroy(),this._tilingSpriteDataHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_getTilingSpriteData(e){return this._tilingSpriteDataHash[e.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){let t=new h.u({indices:S.indices,positions:S.positions.slice(),uvs:S.uvs.slice()});return this._tilingSpriteDataHash[e.uid]={canBatch:!0,renderable:e,geometry:t},e.on("destroyed",this._destroyRenderableBound),this._tilingSpriteDataHash[e.uid]}_updateBatchableMesh(e){var t,r;let i,a,n,s,o,l,u,d,h=this._getTilingSpriteData(e).geometry,f=e.texture.source.style;"repeat"!==f.addressMode&&(f.addressMode="repeat",f.update()),t=h.uvs,a=(i=e.texture).frame.width,n=i.frame.height,s=0,o=0,e.applyAnchorToTexture&&(s=e.anchor.x,o=e.anchor.y),t[0]=t[6]=-s,t[2]=t[4]=1-s,t[1]=t[3]=-o,t[5]=t[7]=1-o,(l=c.u.shared).copyFrom(e._tileTransform.matrix),l.tx/=e.width,l.ty/=e.height,l.invert(),l.scale(e.width/a,e.height/n),function(e,t,r){let i=0,a=e.length/2,n=r.a,s=r.b,o=r.c,l=r.d,u=r.tx,d=r.ty;for(t*=2;i<a;){let r=e[t],a=e[t+1];e[t]=n*r+o*a+u,e[t+1]=s*r+l*a+d,t+=2,i++}}(t,0,l),r=h.positions,u=e.anchor.x,d=e.anchor.y,r[0]=-u*e.width,r[1]=-d*e.height,r[2]=(1-u)*e.width,r[3]=-d*e.height,r[4]=(1-u)*e.width,r[5]=(1-d)*e.height,r[6]=-u*e.width,r[7]=(1-d)*e.height}destroy(){for(let e in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[e].renderable);this._tilingSpriteDataHash=null,this._renderer=null}_updateCanBatch(e){let t=this._getTilingSpriteData(e),r=e.texture,i=!0;return this._renderer.type===l.W.WEBGL&&(i=this._renderer.context.supports.nonPowOf2wrapping),t.canBatch=r.textureMatrix.isSimple&&(i||r.source.isPowerOfTwo),t.canBatch}}C.extension={type:[n.Ag.WebGLPipes,n.Ag.WebGPUPipes,n.Ag.CanvasPipes],name:"tilingSprite"},n.XO.add(C)},0x23e0cbc(e,t,r){var i=r(0x1474f1c),a=r(0x49f05b5),n=r(0xff17ce),s=r(0x168e80f),o=r(0xe6a06b),l=r(0x3cefdf1);class u{constructor(e,t){this.state=n.U.for2d(),this._graphicsBatchesHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.renderer=e,this._adaptor=t,this._adaptor.init(),this.renderer.renderableGC.addManagedHash(this,"_graphicsBatchesHash")}validateRenderable(e){let t=e.context,r=!!this._graphicsBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(t);return!!i.isBatchable||r!==i.isBatchable}addRenderable(e,t){let r=this.renderer.graphicsContext.updateGpuContext(e.context);e.didViewUpdate&&this._rebuild(e),r.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add(e))}updateRenderable(e){let t=this._graphicsBatchesHash[e.uid];if(t)for(let e=0;e<t.length;e++){let r=t[e];r._batcher.updateElement(r)}}destroyRenderable(e){this._graphicsBatchesHash[e.uid]&&this._removeBatchForRenderable(e.uid),e.off("destroyed",this._destroyRenderableBound)}execute(e){if(!e.isRenderable)return;let t=this.renderer,r=e.context;if(!t.graphicsContext.getGpuContext(r).batches.length)return;let i=r.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;let a=i.resources.localUniforms.uniforms;a.uTransformMatrix=e.groupTransform,a.uRound=t._roundPixels|e._roundPixels,(0,o.V)(e.groupColorAlpha,a.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){let t=!!this._graphicsBatchesHash[e.uid],r=this.renderer.graphicsContext.updateGpuContext(e.context);t&&this._removeBatchForRenderable(e.uid),r.isBatchable&&this._initBatchesForRenderable(e),e.batched=r.isBatchable}_addToBatcher(e,t){let r=this.renderer.renderPipes.batch,i=this._getBatchesForRenderable(e);for(let e=0;e<i.length;e++){let a=i[e];r.addToBatch(a,t)}}_getBatchesForRenderable(e){return this._graphicsBatchesHash[e.uid]||this._initBatchesForRenderable(e)}_initBatchesForRenderable(e){let t=e.context,r=this.renderer.graphicsContext.getGpuContext(t),i=this.renderer._roundPixels|e._roundPixels,a=r.batches.map(t=>{let r=s.Z.get(l.G);return t.copyTo(r),r.renderable=e,r.roundPixels=i,r});return void 0===this._graphicsBatchesHash[e.uid]&&e.on("destroyed",this._destroyRenderableBound),this._graphicsBatchesHash[e.uid]=a,a}_removeBatchForRenderable(e){this._graphicsBatchesHash[e].forEach(e=>{s.Z.return(e)}),this._graphicsBatchesHash[e]=null}destroy(){for(let e in this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null,this._graphicsBatchesHash)this._removeBatchForRenderable(e);this._graphicsBatchesHash=null}}u.extension={type:[i.Ag.WebGLPipes,i.Ag.WebGPUPipes,i.Ag.CanvasPipes],name:"graphics"},i.XO.add(u),i.XO.add(a.GH)},0x26e9ef5(e,t,r){var i=r(0x1474f1c),a=r(0x168e80f),n=r(0xf6c7c9),s=r(9399271);class o{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}addRenderable(e,t){let r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){let t=this._gpuSpriteHash[e.uid];e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){let t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}destroyRenderable(e){let t=this._gpuSpriteHash[e.uid];a.Z.return(t.geometry),a.Z.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){t.geometry.update(e),t.setTexture(e._texture)}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let t=a.Z.get(n.U);return t.geometry=a.Z.get(s.P),t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e.didViewUpdate||this._updateBatchableSprite(e,t),e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(let e in this._gpuSpriteHash)this._gpuSpriteHash[e].geometry.destroy();this._gpuSpriteHash=null,this._renderer=null}}o.extension={type:[i.Ag.WebGLPipes,i.Ag.WebGPUPipes,i.Ag.CanvasPipes],name:"nineSliceSprite"},i.XO.add(o)},0x34bc883(e,t,r){r.d(t,{M:()=>n});var i=r(0x3618a98);let a=new(r(0xed2ee3)).c;function n(e,t,r,n){a.minX=0,a.minY=0,a.maxX=e.width/n|0,a.maxY=e.height/n|0;let s=i.W.getOptimalTexture(a.width,a.height,n,!1);return s.source.uploadMethodId="image",s.source.resource=e,s.source.alphaMode="premultiply-alpha-on-upload",s.frame.width=t/n,s.frame.height=r/n,s.source.emit("update",s.source),s.updateUvs(),s}},0x3a6ac9f(e,t,r){var i=r(0x1474f1c),a=r(0xbd6382),n=r(8276788),s=r(0xb2d598),o=r(0x13afab2),l=r(0x168e80f),u=r(0xe6a06b),d=r(0xf6c7c9);class h{constructor(e,t){this.localUniforms=new s.k({uTransformMatrix:{value:new a.u,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new n.T({0:this.localUniforms}),this._meshDataHash=Object.create(null),this._gpuBatchableMeshHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.renderer=e,this._adaptor=t,this._adaptor.init(),e.renderableGC.addManagedHash(this,"_gpuBatchableMeshHash"),e.renderableGC.addManagedHash(this,"_meshDataHash")}validateRenderable(e){let t=this._getMeshData(e),r=t.batched,i=e.batched;if(t.batched=i,r!==i)return!0;if(i){let r=e._geometry;if(r.indices.length!==t.indexSize||r.positions.length!==t.vertexSize)return t.indexSize=r.indices.length,t.vertexSize=r.positions.length,!0;let i=this._getBatchableMesh(e);return!i._batcher.checkAndUpdateTexture(i,e.texture)}return!1}addRenderable(e,t){let r=this.renderer.renderPipes.batch;if(this._getMeshData(e).batched){let i=this._getBatchableMesh(e);i.texture=e._texture,i.geometry=e._geometry,r.addToBatch(i,t)}else r.break(t),t.add(e)}updateRenderable(e){if(e.batched){let t=this._gpuBatchableMeshHash[e.uid];t.setTexture(e._texture),t.geometry=e._geometry,t._batcher.updateElement(t)}}destroyRenderable(e){this._meshDataHash[e.uid]=null;let t=this._gpuBatchableMeshHash[e.uid];t&&(l.Z.return(t),this._gpuBatchableMeshHash[e.uid]=null),e.off("destroyed",this._destroyRenderableBound)}execute(e){if(!e.isRenderable)return;e.state.blendMode=(0,o.i)(e.groupBlendMode,e.texture._source);let t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform,t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,t.update(),(0,u.V)(e.groupColorAlpha,t.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){return this._meshDataHash[e.uid]||this._initMeshData(e)}_initMeshData(e){var t,r;return this._meshDataHash[e.uid]={batched:e.batched,indexSize:null==(t=e._geometry.indices)?void 0:t.length,vertexSize:null==(r=e._geometry.positions)?void 0:r.length},e.on("destroyed",this._destroyRenderableBound),this._meshDataHash[e.uid]}_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}_initBatchableMesh(e){let t=l.Z.get(d.U);return t.renderable=e,t.texture=e._texture,t.transform=e.groupTransform,t.roundPixels=this.renderer._roundPixels|e._roundPixels,this._gpuBatchableMeshHash[e.uid]=t,t}destroy(){for(let e in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[e]&&l.Z.return(this._gpuBatchableMeshHash[e]);this._gpuBatchableMeshHash=null,this._meshDataHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}}h.extension={type:[i.Ag.WebGLPipes,i.Ag.WebGPUPipes,i.Ag.CanvasPipes],name:"mesh"},i.XO.add(h)},0x4fe19f8(e,t,r){var i=r(0x1474f1c);class a{execute(e,t){let r=e.state,i=e.renderer,a=t.shader||e.defaultShader;a.resources.uTexture=t.texture._source,a.resources.uniforms=e.localUniforms;let n=i.gl,s=e.getBuffers(t);i.shader.bind(a),i.state.set(r),i.geometry.bind(s.geometry,a.glProgram);let o=2===s.geometry.indexBuffer.data.BYTES_PER_ELEMENT?n.UNSIGNED_SHORT:n.UNSIGNED_INT;n.drawElements(n.TRIANGLES,6*t.particleChildren.length,o,0)}}var n=r(0xbd6382),s=r(0xb2d598),o=r(0x13afab2),l=r(0xff17ce),u=r(0xe6a06b),d=r(7617640),h=r(0x1eaab37),c=r(0x400da3c),f=r(0x2a85eeb),p=r(0x18b18ef);function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=6*e;if(r>65535?t||(t=new Uint32Array(r)):t||(t=new Uint16Array(r)),t.length!==r)throw Error("Out buffer length is incorrect, got ".concat(t.length," and expected ").concat(r));for(let e=0,i=0;e<r;e+=6,i+=4)t[e+0]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3;return t}function g(e,t){let r=[];r.push(`
      
        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let i=0;for(let a in e){let n=e[a];t===n.dynamic&&(r.push("offset = index + ".concat(i)),r.push(n.code),i+=(0,f.m)(n.format).stride/4)}return r.push(`
            index += stride * 4;
        }
    `),r.unshift(`
        var stride = `.concat(i,`;
    `)),Function("ps","f32v","u32v",r.join(`
`))}class m{constructor(e){var t;this._size=0,this._generateParticleUpdateCache={};const r=this._size=null!=(t=e.size)?t:1e3,i=e.properties;let a=0,n=0;for(const e in i){const t=i[e],r=(0,f.m)(t.format);t.dynamic?n+=r.stride:a+=r.stride}this._dynamicStride=n/4,this._staticStride=a/4,this.staticAttributeBuffer=new p.u(4*r*a),this.dynamicAttributeBuffer=new p.u(4*r*n),this.indexBuffer=x(r);const s=new c.V;let o=0,l=0;for(const e in this._staticBuffer=new d.h({data:new Float32Array(1),label:"static-particle-buffer",shrinkToFit:!1,usage:h.S.VERTEX|h.S.COPY_DST}),this._dynamicBuffer=new d.h({data:new Float32Array(1),label:"dynamic-particle-buffer",shrinkToFit:!1,usage:h.S.VERTEX|h.S.COPY_DST}),i){const t=i[e],r=(0,f.m)(t.format);t.dynamic?(s.addAttribute(t.attributeName,{buffer:this._dynamicBuffer,stride:4*this._dynamicStride,offset:4*o,format:t.format}),o+=r.size):(s.addAttribute(t.attributeName,{buffer:this._staticBuffer,stride:4*this._staticStride,offset:4*l,format:t.format}),l+=r.size)}s.addIndex(this.indexBuffer);const u=this.getParticleUpdate(i);this._dynamicUpload=u.dynamicUpdate,this._staticUpload=u.staticUpdate,this.geometry=s}getParticleUpdate(e){let t=function(e){let t=[];for(let r in e){let i=e[r];t.push(r,i.code,i.dynamic?"d":"s")}return t.join("_")}(e);return this._generateParticleUpdateCache[t]||(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e)),this._generateParticleUpdateCache[t]}generateParticleUpdate(e){return{dynamicUpdate:g(e,!0),staticUpdate:g(e,!1)}}update(e,t){e.length>this._size&&(t=!0,this._size=Math.max(e.length,1.5*this._size|0),this.staticAttributeBuffer=new p.u(this._size*this._staticStride*16),this.dynamicAttributeBuffer=new p.u(this._size*this._dynamicStride*16),this.indexBuffer=x(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));let r=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,r.float32View,r.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),t){let t=this.staticAttributeBuffer;this._staticUpload(e,t.float32View,t.uint32View),this._staticBuffer.setDataWithSize(t.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}}var _=r(0x5c210ab),b=r(0x14ab023),y=r(0x215b742),v=r(0x21f79f2),T=r(0x9b7d33),S=r(0x4f8752d),C=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`,R=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`,B=`
struct ParticleUniforms {
  uProjectionMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uResolution:vec2<f32>,
  uRoundPixels:f32,
};

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   let position = vec4((uniforms.uProjectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`;class w extends v.M{constructor(){super({glProgram:b.M.from({vertex:R,fragment:C}),gpuProgram:y.B.from({fragment:{source:B,entryPoint:"mainFragment"},vertex:{source:B,entryPoint:"mainVertex"}}),resources:{uTexture:T.g.WHITE.source,uSampler:new S.n({}),uniforms:{uTranslationMatrix:{value:new n.u,type:"mat3x3<f32>"},uColor:{value:new _.Q(0xffffff),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}}})}}class P{constructor(e,t){this.state=l.U.for2d(),this._gpuBufferHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this.localUniforms=new s.k({uTranslationMatrix:{value:new n.u,type:"mat3x3<f32>"},uColor:{value:new Float32Array(4),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}),this.renderer=e,this.adaptor=t,this.defaultShader=new w,this.state=l.U.for2d()}validateRenderable(e){return!1}addRenderable(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}getBuffers(e){return this._gpuBufferHash[e.uid]||this._initBuffer(e)}_initBuffer(e){return this._gpuBufferHash[e.uid]=new m({size:e.particleChildren.length,properties:e._properties}),e.on("destroyed",this._destroyRenderableBound),this._gpuBufferHash[e.uid]}updateRenderable(e){}destroyRenderable(e){this._gpuBufferHash[e.uid].destroy(),this._gpuBufferHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}execute(e){let t=e.particleChildren;if(0===t.length)return;let r=this.renderer,i=this.getBuffers(e);e.texture||(e.texture=t[0].texture);let a=this.state;i.update(t,e._childrenDirty),e._childrenDirty=!1,a.blendMode=(0,o.i)(e.blendMode,e.texture._source);let n=this.localUniforms.uniforms,s=n.uTranslationMatrix;e.worldTransform.copyTo(s),s.prepend(r.globalUniforms.globalUniformData.projectionMatrix),n.uResolution=r.globalUniforms.globalUniformData.resolution,n.uRound=r._roundPixels|e._roundPixels,(0,u.V)(e.groupColorAlpha,n.uColor,0),this.adaptor.execute(this,e)}destroy(){this.defaultShader&&(this.defaultShader.destroy(),this.defaultShader=null)}}class U extends P{constructor(e){super(e,new a)}}U.extension={type:[i.Ag.WebGLPipes],name:"particle"};class M{execute(e,t){let r=e.renderer,i=t.shader||e.defaultShader;i.groups[0]=r.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),i.groups[1]=r.texture.getTextureBindGroup(t.texture);let a=e.state,n=e.getBuffers(t);r.encoder.draw({geometry:n.geometry,shader:t.shader||e.defaultShader,state:a,size:6*t.particleChildren.length})}}class A extends P{constructor(e){super(e,new M)}}A.extension={type:[i.Ag.WebGPUPipes],name:"particle"},i.XO.add(U),i.XO.add(A)},0x52a3aaf(e,t,r){var i=r(0x1474f1c);class a{static init(e){Object.defineProperty(this,"resizeTo",{set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{let e,t;if(this._resizeTo){if(this._cancelResize(),this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let r=this._resizeTo,i=r.clientWidth,a=r.clientHeight;e=i,t=a}this.renderer.resize(e,t),this.render()}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}a.extension=i.Ag.Application;var n=r(0x4854143),s=r(0x127bd33);class o{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,n.d.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?s.R.shared:new s.R,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}}o.extension=i.Ag.Application,i.XO.add(a),i.XO.add(o)}}]);