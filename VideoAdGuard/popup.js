(()=>{"use strict";document.addEventListener("DOMContentLoaded",(async()=>{const e=document.getElementById("apiUrl"),t=document.getElementById("apiKey"),a=document.getElementById("model"),l=document.getElementById("save"),n=document.getElementById("message"),o=document.getElementById("result"),c=document.getElementById("localOllama");if(c.addEventListener("change",(function(e){const t=e.target;document.getElementsByClassName("apiKey-field")[0].style.display=t.checked?"none":"block"})),!(e&&t&&a&&l&&n&&o))return;const r=await chrome.storage.local.get(["apiUrl","apiKey","model","enableLocalOllama"]);r.apiUrl&&(e.value=r.apiUrl),r.apiKey&&(t.value=r.apiKey),r.model&&(a.value=r.model),r.enableLocalOllama&&(c.checked=r.enableLocalOllama,document.getElementsByClassName("apiKey-field")[0].style.display="none"),l.addEventListener("click",(async()=>{const l=e.value.trim(),o=t.value.trim(),r=a.value.trim(),s=c.checked;if(!l)return n.textContent="请输入API地址",void(n.className="error");if(!s&&!o)return n.textContent="请输入API密钥",void(n.className="error");if(!r)return n.textContent="请输入模型名称",void(n.className="error");try{await chrome.storage.local.set({apiUrl:l,apiKey:o,model:r,enableLocalOllama:s}),n.textContent="设置已保存",n.className="success"}catch(e){n.textContent="保存设置失败",n.className="error",console.error("保存设置失败:",e)}})),chrome.tabs.query({active:!0,currentWindow:!0},(e=>{const t=e[0];t&&t.id&&(t.url?.includes("bilibili.com/video/")||t.url?.includes("bilibili.com/list/watchlater")?chrome.tabs.sendMessage(t.id,{type:"GET_AD_INFO"},(e=>{chrome.runtime.lastError?o.textContent="插件未完全加载，请等待或刷新":e&&e.adInfo?o.textContent=`${e.adInfo}`:o.textContent="未检测到广告信息"})):o.textContent="当前不在哔哩哔哩视频页面")}))}))})();