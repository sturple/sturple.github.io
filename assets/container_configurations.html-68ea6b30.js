import{_ as c,r,o as p,c as d,a as n,b as e,d as a,w as s,e as i}from"./app-8dfab3ee.js";const u="/images/nginx-docker-run.png",m={},h=i('<h1 id="container-configurations-with-nginx" tabindex="-1"><a class="header-anchor" href="#container-configurations-with-nginx" aria-hidden="true">#</a> Container Configurations with Nginx</h1><h2 id="objective" tabindex="-1"><a class="header-anchor" href="#objective" aria-hidden="true">#</a> Objective</h2><p>To understand how a container&#39;s configuration can be modified with the use of environment variables.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>',4),g=n("li",null,"Docker",-1),k=n("li",null,"Terminal program",-1),b={href:"https://hub.docker.com/_/nginx",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"deploy-a-simple-nginx-container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#deploy-a-simple-nginx-container","aria-hidden":"true"},"#"),e(" Deploy a simple Nginx container")],-1),f=n("p",null,"Using the official Nginx image and running a docker command to create a simple Nginx web server.",-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"docker"),e(" run "),n("span",{class:"token parameter variable"},"--name"),e(" learning-nginx "),n("span",{class:"token parameter variable"},"--rm"),e("  "),n("span",{class:"token parameter variable"},"-p"),e(),n("span",{class:"token number"},"30001"),e(`:80 nginx
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x=i("<p>This runs a docker container with:</p><ul><li><code>--name learning-nginx</code> name of the container</li><li><code>--rm</code> removes container after the process is exited</li><li><code>-p 30001:80</code> maps your machine&#39;s port <code>30001</code> to the container port <code>80</code></li><li><code>nginx</code> the image name</li></ul>",2),w={href:"http://127.0.0.1:30001",target:"_blank",rel:"noopener noreferrer"},N=i('<p><img src="'+u+'" alt="nginx screenshot"></p><h2 id="reasons-for-changing-configurations" tabindex="-1"><a class="header-anchor" href="#reasons-for-changing-configurations" aria-hidden="true">#</a> Reasons for Changing configurations.</h2><p>Environment variables, and mounting configurations files allow an image to be more versatile for different deployment configurations.</p><ul><li>Nginx&#39;s <code>hostname</code> and <code>port</code> number are configurations that might need to be changed</li><li>Nginx default hostname is <code>localhost</code> and default port is <code>80</code></li><li>There are a few ways to modify these configuration, lets take a look in the following examples.</li></ul><h3 id="example-1-create-a-new-image" tabindex="-1"><a class="header-anchor" href="#example-1-create-a-new-image" aria-hidden="true">#</a> Example 1 - Create a new image</h3>',5),y={href:"https://www.w3.org/Daemon/User/Installation/PrivilegedPorts.html",target:"_blank",rel:"noopener noreferrer"},T=i("<ul><li>We would create a docker image by making a new file named <code>Dockerfile</code></li><li>We would then add our new configurations which is determined by this <code>Dockerfile</code></li><li>The simplest way to modify the configuration is by using the <code>sed</code> command, this is what we did in our example</li><li>Another way of modifying the configurations is to copy new files into the image</li></ul><p>To create this image run the following command. This will create a new nginx image with a tag of port8080 <code>nginx:port8080</code> using the <code>Dockerfile</code> shown in this example.</p>",2),O=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# builds new image `nginx:port8080`"),e(`
`),n("span",{class:"token function"},"docker"),e(" buildx build "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token parameter variable"},"-t"),e(" nginx:port8080 "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token parameter variable"},"-f"),e(" Dockerfile.sed "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token parameter variable"},"--output"),e(),n("span",{class:"token assign-left variable"},"type"),n("span",{class:"token operator"},"="),e("docker "),n("span",{class:"token punctuation"},"\\"),e(`
https://github.com/sturple/sturple.github.io.git`),n("span",{class:"token comment"},"#:docker/nginx"),e(`
`)])])],-1),I=n("div",{class:"language-docker line-numbers-mode","data-ext":"docker"},[n("pre",{class:"language-docker"},[n("code",null,[n("span",{class:"token comment"},"# Dockerfile.sed - used to create an Nginx image with new port 8080"),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),e(" nginx")]),e(`
`),n("span",{class:"token comment"},"# Using sed to change port 80 to 8080 as port 80 is a privileged port."),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),e(" ["),n("span",{class:"token string"},'"/bin/bash"'),e(", "),n("span",{class:"token string"},'"-c"'),e(", "),n("span",{class:"token string"},`"sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf"`),e("]")]),e(`
`),n("span",{class:"token comment"},"# Fix up permissions"),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),e(" chmod -Rf 0777 /tmp /var /run /etc /mnt || :")]),e(`
`),n("span",{class:"token comment"},"# Switch to usermode"),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"USER"),e(" 104")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("p",null,"If we try changing the default Nginx image to use port 8080, without changing the configuration it will fail",-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# This fails because the Nginx container is still listening on port 80."),e(`
`),n("span",{class:"token function"},"docker"),e(" run "),n("span",{class:"token parameter variable"},"--name"),e(" learning-nginx "),n("span",{class:"token parameter variable"},"--rm"),e("  "),n("span",{class:"token parameter variable"},"-p"),e(),n("span",{class:"token number"},"30001"),e(`:8080 nginx
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# this works because we modified the port in the image"),e(`
`),n("span",{class:"token function"},"docker"),e(" run "),n("span",{class:"token parameter variable"},"--name"),e(" learning-nginx "),n("span",{class:"token parameter variable"},"--rm"),e("  "),n("span",{class:"token parameter variable"},"-p"),e(),n("span",{class:"token number"},"30001"),e(`:8080 nginx:port8080
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=i('<p>This solves the problem of being able to change ports. Though this has one big disadvantage, you have to create a new image for every new configuration change.</p><h3 id="example-2-adding-configuration-templates" tabindex="-1"><a class="header-anchor" href="#example-2-adding-configuration-templates" aria-hidden="true">#</a> Example 2 - Adding configuration templates</h3><p>A better approach would be to use Nginx&#39;s templates, and pass ENV&#39;s into the container.</p><ul><li>There needs to be a <code>template</code> added to the Nginx image as shown</li><li>A new docker image will be created by a <code>Dockerfile</code>, which adds this template as shown</li><li>Deploy the new image</li></ul>',4),D=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# builds new image `nginx:template`"),e(`
`),n("span",{class:"token function"},"docker"),e(" buildx build "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token parameter variable"},"-t"),e(" nginx:template "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token parameter variable"},"-f"),e(" Dockerfile.template "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token parameter variable"},"--output"),e(),n("span",{class:"token assign-left variable"},"type"),n("span",{class:"token operator"},"="),e("docker "),n("span",{class:"token punctuation"},"\\"),e(`
https://github.com/sturple/sturple.github.io.git`),n("span",{class:"token comment"},"#:docker/nginx"),e(`
`)])])],-1),P=n("div",{class:"language-docker line-numbers-mode","data-ext":"docker"},[n("pre",{class:"language-docker"},[n("code",null,[n("span",{class:"token comment"},"# Dockerfile.template - used to create an Nginx image with templates."),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"ARG"),e(" CODE_VERSION=latest")]),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),e(" nginx:"),n("span",{class:"token variable"},"${CODE_VERSION}")]),e(`
`),n("span",{class:"token comment"},"# As of Nginx 1.19 you can use templates"),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),e(" ./default.conf.template /etc/nginx/templates/")]),e(`
`),n("span",{class:"token comment"},"# Fix up permissions"),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),e(" chmod -Rf 0777 /tmp /var /run /etc /mnt || :")]),e(`
`),n("span",{class:"token comment"},"# Switch to usermode"),e(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"USER"),e(" 104")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-template line-numbers-mode","data-ext":"template"},[n("pre",{class:"language-template"},[n("code",null,`#default.conf.template
server {
   listen       \${NGINX_PORT};
   listen  [::]:\${NGINX_PORT};
   server_name  \${NGINX_HOST};

   #access_log  /var/log/nginx/host.access.log  main;

   location / {
       root   /usr/share/nginx/html;
       index  index.html index.htm;
   }

   #error_page  404              /404.html;

   # redirect server error pages to the static page /50x.html
   #
   error_page   500 502 503 504  /50x.html;
   location = /50x.html {
       root   /usr/share/nginx/html;
   }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=i(`<p>In order to checkout out our new image, lets test it out on a couple different ports.</p><h4 id="using-docker-run" tabindex="-1"><a class="header-anchor" href="#using-docker-run" aria-hidden="true">#</a> Using docker run</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># This should use the default port, when new env variables are passed.</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> learning-nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NGINX_PORT</span><span class="token operator">=</span><span class="token number">80</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NGINX_HOST</span><span class="token operator">=</span>localhost <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">30001</span>:80 <span class="token punctuation">\\</span>
nginx:template

<span class="token comment"># This should work, with Nginx using port 8080</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> learning-nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NGINX_PORT</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NGINX_HOST</span><span class="token operator">=</span>localhost <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">30001</span>:8080 <span class="token punctuation">\\</span>
nginx:template

<span class="token comment"># Lets change NGINX_HOST to example.com, </span>
<span class="token comment"># you will have to add an entry to your hosts file</span>
<span class="token comment">#/etc/hosts</span>
<span class="token punctuation">..</span>.
<span class="token number">127.0</span>.0.1  example.com

<span class="token comment"># This should work, with Nginx using port 8080 and going to http://example.com:30001</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> learning-nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NGINX_PORT</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NGINX_HOST</span><span class="token operator">=</span>example.com <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">30001</span>:8080 <span class="token punctuation">\\</span>
nginx:template
</code></pre></div><h4 id="using-docker-compose" tabindex="-1"><a class="header-anchor" href="#using-docker-compose" aria-hidden="true">#</a> Using docker-compose</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># you will need to create a docker-compose.yaml locally</span>
<span class="token function">docker</span> compose <span class="token parameter variable">-f</span> docker-compose.yaml up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yaml </span>
<span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>template
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;30001:8080&quot;</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> NGINX_HOST=example.com
   <span class="token punctuation">-</span> NGINX_PORT=8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The disadvantage of using the templates (Nginx configuration limitation), is that there is no way of adding fallback values, so these environment variables always have to be passed. Though the advantage, is that you have a highly configurable image.</p><p>In order to see all the environment variables that the Nginx container is using view the output. Notice the <code>NGINX_PORT=8080</code> and the <code>NGINX_HOST=example.com</code>.</p>`,8),H=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"docker"),e(),n("span",{class:"token builtin class-name"},"exec"),e(),n("span",{class:"token parameter variable"},"-it"),e(" learning-nginx "),n("span",{class:"token function"},"env"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br")])],-1),U=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"PATH")]),n("span",{class:"token operator"},"="),e(`/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
`),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"HOSTNAME")]),n("span",{class:"token operator"},"="),e(`49e1ae7b4f62
`),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"TERM")]),n("span",{class:"token operator"},"="),e(`xterm
`),n("span",{class:"token assign-left variable"},"NGINX_PORT"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"8080"),e(`
`),n("span",{class:"token assign-left variable"},"NGINX_HOST"),n("span",{class:"token operator"},"="),e(`example.com
`),n("span",{class:"token assign-left variable"},"NGINX_VERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1.25"),e(`.3
`),n("span",{class:"token assign-left variable"},"NJS_VERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0.8"),e(`.2
`),n("span",{class:"token assign-left variable"},"PKG_RELEASE"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),e(`~bookworm
`),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"HOME")]),n("span",{class:"token operator"},"="),e(`/root
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")])],-1),A=n("h2",{id:"conclusion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#conclusion","aria-hidden":"true"},"#"),e(" Conclusion")],-1),V=n("code",null,"env",-1),M=n("code",null,"NGINX_PORT",-1),q=n("code",null,"NGINX_HOST",-1),L={href:"https://hub.docker.com/_/postgres",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"POSTGRES_PASSWORD",-1),B=n("code",null,"POSTGRES_USER",-1),F=n("code",null,"POSTGRES_DB",-1),$=n("p",null,"Ways to pass environment variables:",-1),j=n("li",null,[e("When running "),n("code",null,"docker run"),e(" you use the "),n("code",null,"-e"),e(" flag")],-1),K=n("li",null,[e("Docker compose you pass them using the "),n("code",null,"environment"),e(" property")],-1),J={href:"https://kubernetes.io/docs/concepts/configuration/configmap/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://kubernetes.io/docs/concepts/configuration/secret/",target:"_blank",rel:"noopener noreferrer"};function z(Q,Z){const o=r("ExternalLinkIcon"),t=r("CodeGroupItem"),l=r("CodeGroup");return p(),d("div",null,[h,n("ul",null,[g,k,n("li",null,[n("a",b,[e("Nginx Image Documentation"),a(o)])])]),v,f,a(l,null,{default:s(()=>[a(t,{title:"Try me"},{default:s(()=>[_]),_:1})]),_:1}),x,n("p",null,[e("Going to "),n("a",w,[e("127.0.0.1:30001"),a(o)]),e(" should serve an Nginx web server.")]),N,n("p",null,[e("Creating new images from existing images, is an easy way to update a configuration. Lets say we need to update the Nginx port to 8080, because our platform doesn't allow the use of "),n("a",y,[e("privileged ports"),a(o)]),e(" like port 80.")]),T,a(l,null,{default:s(()=>[a(t,{title:"Try me"},{default:s(()=>[O]),_:1}),a(t,{title:"Dockerfile"},{default:s(()=>[I]),_:1})]),_:1}),R,a(l,null,{default:s(()=>[a(t,{title:"This fails"},{default:s(()=>[S]),_:1}),a(t,{title:"This works"},{default:s(()=>[G]),_:1})]),_:1}),E,a(l,null,{default:s(()=>[a(t,{title:"Try me"},{default:s(()=>[D]),_:1}),a(t,{title:"Dockerfile"},{default:s(()=>[P]),_:1}),a(t,{title:"default.conf.template"},{default:s(()=>[X]),_:1})]),_:1}),C,a(l,null,{default:s(()=>[a(t,{title:"Try me"},{default:s(()=>[H]),_:1}),a(t,{title:"Output"},{default:s(()=>[U]),_:1})]),_:1}),A,n("p",null,[e("Environmental variables within an image or the "),V,e(" on your local computer, allow configurations to be modified to change its operation. In the case of Nginx it is used for changing the "),M,e(" and the "),q,e(". Other images like "),n("a",L,[e("postgres"),a(o)]),e(" are used to change "),W,e(", "),B,e(", and "),F,e(".")]),$,n("ul",null,[j,K,n("li",null,[e("Kubernetes you pass these using "),n("a",J,[e("ConfigMaps"),a(o)]),e(" and "),n("a",Y,[e("Secrets"),a(o)])])])])}const en=c(m,[["render",z],["__file","container_configurations.html.vue"]]);export{en as default};