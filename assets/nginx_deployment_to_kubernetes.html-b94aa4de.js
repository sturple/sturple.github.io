import{_ as n,r as l,o as s,c as a,a as e,d as t,b as i,e as r}from"./app-2dcb1d1d.js";const d={},c=e("h2",{id:"deploy-to-kubernetes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deploy-to-kubernetes","aria-hidden":"true"},"#"),t(" Deploy to Kubernetes")],-1),u=e("p",null,"In order to deploy this simple Nginx example to kubernetes we have to create a deployment",-1),p={href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",target:"_blank",rel:"noopener noreferrer"},m=r("<li>For the deployment we only need some basic information</li><li>apiVersion</li><li>kind</li><li>metadata (name, namespace)</li><li>containers.</li><li>to run this deployment just run <code>oc apply -f ./HowTo/Kubernetes/ConfigMaps/deployment-simple.yaml</code></li><li>to view the status of this deployment run <code>kubectl get pods</code>, if successful the status should indicate running.</li><li>Unlike docker you can&#39;t access this pod directly, so you have to port-forward.</li>",8),_=e("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[e("pre",{class:"language-yaml"},[e("code",null,"File not found")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1);function h(y,f){const o=l("ExternalLinkIcon");return s(),a("div",null,[c,u,e("ul",null,[e("li",null,[e("a",p,[t("Kubernetes deployment documentation"),i(o)])]),m]),_])}const k=n(d,[["render",h],["__file","nginx_deployment_to_kubernetes.html.vue"]]);export{k as default};
