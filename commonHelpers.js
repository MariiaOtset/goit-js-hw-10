import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const f=document.querySelector('input[id="datetime-picker"]'),h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]"),t=document.querySelector("button");t.addEventListener("click",g);t.disabled=!0;let s,o="";const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),s=e[0],s.getTime()<=Date.now()?(t.disabled=!0,m.error({title:"Error",message:"Please choose a date in the future"})):t.disabled=!1}};l("#datetime-picker",S);function g(e){if(s&&o===""){t.disabled=!0,f.disabled=!0;const a=setInterval(()=>{o=s.getTime()-Date.now();let n=q(o);h.textContent=r(n.days),y.textContent=r(n.hours),p.textContent=r(n.minutes),b.textContent=r(n.seconds),o<1e3&&clearInterval(a)},1e3)}else t.disabled=!0}function r(e){return e<=9?String(e).padStart(2,"0"):e}function q(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:i,seconds:d}}
//# sourceMappingURL=commonHelpers.js.map
