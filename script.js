/*
  Extracted JavaScript from uploaded HTML.
  Note: the original page also referenced these external script(s), which are not expanded here:
<script data-proxy-url="/~api/analytics" defer="" src="/~flock.js"></script>
<script data-artifact-id="b52330b14647dbcc3f667cbb3beece2c549cd9c5d79c29ce0622a62d798545d4" data-artifact-kind="dwl_content_hash" data-commit-sha="7f1cf123aaaef1e73236410d94d9d46eac42b4c0" data-context-token="v1.eyJwcm9qZWN0X2lkIjoiYTJkYjFjMjMtODFiMC00MTM1LTkyYTAtOTcyYmIyZTgyNDc5IiwiYXJ0aWZhY3Rfa2luZCI6ImR3bF9jb250ZW50X2hhc2giLCJhcnRpZmFjdF9pZCI6ImI1MjMzMGIxNDY0N2RiY2MzZjY2N2NiYjNiZWVjZTJjNTQ5Y2Q5YzVkNzljMjljZTA2MjJhNjJkNzk4NTQ1ZDQiLCJjb21taXRfc2hhIjoiN2YxY2YxMjNhYWFlZjFlNzMyMzY0MTBkOTRkOWQ0NmVhYzQyYjRjMCIsImV4cCI6MTc4MjcyNjAwM30.4KI5biLmXykThjZkBS08jl0zfUCw3De3RqPwz_pXwso" defer="" src="/__l5e/events.js"></script>
<script async="" src="/assets/index-gUfCRkAE.js" type="module"></script>
*/

(function(a,f){let l;try{l=JSON.parse(sessionStorage.getItem(a)||"{}")}catch{return}const n=l?.[f||history.state?.__TSR_key];let c=!1;for(const t in n){const e=n[t],o=e?.scrollX,s=e?.scrollY;if(Number.isFinite(o)&&Number.isFinite(s)){if(t==="window")scrollTo(o,s),c=!0;else if(t)try{const r=document.querySelector(t);r&&(r.scrollLeft=o,r.scrollTop=s)}catch{}}}if(c)return;const i=location.hash.slice(1);if(i){const t=history.state?.__hashScrollIntoViewOptions??!0;if(t){const e=document.getElementById(i);e&&e.scrollIntoView(t)}return}scrollTo(0,0)})("tsr-scroll-restoration-v1_3");document.currentScript.remove()

(self.$R=self.$R||{})["tsr"]=[];self.$_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]};$_TSR.router=($R=>$R[0]={manifest:$R[1]={routes:$R[2]={__root__:$R[3]={preloads:$R[4]=["/assets/index-gUfCRkAE.js"],scripts:$R[5]=[$R[6]={attrs:$R[7]={type:"module",async:!0,src:"/assets/index-gUfCRkAE.js"}}]},"/":$R[8]={preloads:$R[9]=["/assets/routes-DMTBxW2z.js","/assets/createLucideIcon-D9qjfXGw.js"]}}},matches:$R[10]=[$R[11]={i:"__root__",u:1782722403224,s:"success",ssr:!0},$R[12]={i:"",u:1782722403224,s:"success",ssr:!0}],lastMatchId:""})($R["tsr"]);$_TSR.e();document.currentScript.remove()


	// Don't show the lovable-badge if the page is in an iframe or if it's being rendered by puppeteer (screenshot service)
	if (window.self !== window.top || navigator.userAgent.includes('puppeteer')) {
		var badge = document.getElementById('lovable-badge');
		if (badge) {
			badge.style.display = 'none';
		}
	}

	// Add click event listener to close button with animation
	var closeButton = document.getElementById('lovable-badge-close');
	if (closeButton) {
		closeButton.addEventListener('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			var badge = document.getElementById('lovable-badge');
			if (badge) {
				badge.classList.add('closing');
				setTimeout(function() {
					if (badge) {
						badge.style.display = 'none';
					}
				}, 240);
			}
		});
	}
