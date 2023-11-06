import{_ as t,r as l,o,c as i,a as n,d as e,b as p,e as s}from"./app-d7030557.js";const c={},u=n("h2",{id:"deploy-to-kubernetes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#deploy-to-kubernetes","aria-hidden":"true"},"#"),e(" Deploy to Kubernetes")],-1),r=n("p",null,"In order to deploy this simple Nginx example to kubernetes we have to create a deployment",-1),d={href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",target:"_blank",rel:"noopener noreferrer"},k=s("<li>For the deployment we only need some basic information</li><li>apiVersion</li><li>kind</li><li>metadata (name, namespace)</li><li>containers.</li><li>to run this deployment just run <code>oc apply -f ./HowTo/Kubernetes/ConfigMaps/deployment-simple.yaml</code></li><li>to view the status of this deployment run <code>kubectl get pods</code>, if successful the status should indicate running.</li><li>Unlike docker you can&#39;t access this pod directly, so you have to port-forward.</li>",8),m=s(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># deployment-simple.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
 <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
 <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
   <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
     <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
 <span class="token key atrule">template</span><span class="token punctuation">:</span>
   <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
     <span class="token key atrule">labels</span><span class="token punctuation">:</span>
       <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
   <span class="token key atrule">spec</span><span class="token punctuation">:</span>
     <span class="token key atrule">containers</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>container
         <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(y,b){const a=l("ExternalLinkIcon");return o(),i("div",null,[u,r,n("ul",null,[n("li",null,[n("a",d,[e("Kubernetes deployment documentation"),p(a)])]),k]),m])}const h=t(c,[["render",v],["__file","nginx_deployment_to_kubernetes.html.vue"]]);export{h as default};
