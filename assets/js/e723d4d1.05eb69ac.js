"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[667],{660:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=r(4848),t=r(8453);const o={id:"mcn-connectivity_zh",title:"\u591a\u96c6\u7fa4\u7f51\u7edc\u8054\u901a"},l="\u591a\u96c6\u7fa4\u7f51\u7edc\u8054\u901a",c={id:"i18n/zh/v0.2.0/mcn-connectivity_zh",title:"\u591a\u96c6\u7fa4\u7f51\u7edc\u8054\u901a",description:"Kosmos \u591a\u96c6\u7fa4\u89e3\u51b3\u65b9\u6848\u7684 Clusterlink \u8bbe\u8ba1\u65e8\u5728\u4e92\u8fde\u591a\u4e2a Kubernetes \u96c6\u7fa4\u7684\u8282\u70b9\u548c\u8d44\u6e90\uff0c\u5f62\u6210\u7edf\u4e00\u7684\u8d44\u6e90\u6c60\u3002",source:"@site/docs/i18n/zh/v0.2.0/multi-cluster-network_zh.md",sourceDirName:"i18n/zh/v0.2.0",slug:"/i18n/zh/v0.2.0/mcn-connectivity_zh",permalink:"/website/i18n/zh/v0.2.0/mcn-connectivity_zh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/i18n/zh/v0.2.0/multi-cluster-network_zh.md",tags:[],version:"current",frontMatter:{id:"mcn-connectivity_zh",title:"\u591a\u96c6\u7fa4\u7f51\u7edc\u8054\u901a"}},i={},a=[{value:"\u591a\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848",id:"\u591a\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5b89\u88c5 Kosmos",id:"\u5b89\u88c5-kosmos",level:4},{value:"\u52a0\u5165\u53f6\u5b50\u96c6\u7fa4",id:"\u52a0\u5165\u53f6\u5b50\u96c6\u7fa4",level:4},{value:"\u8de8\u96c6\u7fa4 L3 \u7f51\u7edc\u8fde\u63a5\u6027",id:"\u8de8\u96c6\u7fa4-l3-\u7f51\u7edc\u8fde\u63a5\u6027",level:3},{value:"Gateway \u6a21\u5f0f",id:"gateway-\u6a21\u5f0f",level:4},{value:"P2P \u6a21\u5f0f",id:"p2p-\u6a21\u5f0f",level:4},{value:"\u542f\u52a8 ClusterLink",id:"\u542f\u52a8-clusterlink",level:3},{value:"\u4f7f\u7528 P2P \u6a21\u5f0f",id:"\u4f7f\u7528-p2p-\u6a21\u5f0f",level:4},{value:"\u521b\u5efa\u6d4b\u8bd5 Pods",id:"\u521b\u5efa\u6d4b\u8bd5-pods",level:4},{value:"\u4e00\u952e\u8bca\u65ad\u96c6\u7fa4\u8fde\u63a5",id:"\u4e00\u952e\u8bca\u65ad\u96c6\u7fa4\u8fde\u63a5",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u591a\u96c6\u7fa4\u7f51\u7edc\u8054\u901a",children:"\u591a\u96c6\u7fa4\u7f51\u7edc\u8054\u901a"})}),"\n",(0,s.jsx)(e.p,{children:"Kosmos \u591a\u96c6\u7fa4\u89e3\u51b3\u65b9\u6848\u7684 Clusterlink \u8bbe\u8ba1\u65e8\u5728\u4e92\u8fde\u591a\u4e2a Kubernetes \u96c6\u7fa4\u7684\u8282\u70b9\u548c\u8d44\u6e90\uff0c\u5f62\u6210\u7edf\u4e00\u7684\u8d44\u6e90\u6c60\u3002\r\n\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u7684\u57fa\u7840\u4e4b\u4e00\u662f\u6784\u5efa\u591a\u96c6\u7fa4\u7f51\u7edc\u67b6\u6784\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u96c6\u7fa4\u4e4b\u95f4\u7684\u901a\u4fe1\u9700\u6c42\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u591a\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848",children:"\u591a\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(e.h3,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsx)(e.p,{children:"Clusterlink \u5305\u542b\u4e24\u79cd\u7f51\u7edc\u6a21\u5f0f\uff1aGateway \u548c P2P\u3002\r\n\u5728 Gateway \u6a21\u5f0f\u4e0b\uff0c\u5f53 Pod \u53d1\u9001\u6570\u636e\u5305\u65f6\uff0c\u9996\u5148\u901a\u8fc7\u96c6\u7fa4\u5185\u7684 vx-local \u96a7\u9053\u5230\u8fbe\u8be5\u96c6\u7fa4\u7684 Gateway \u8282\u70b9\uff0c\u7136\u540e\u7a7f\u8fc7\u8de8\u96c6\u7fa4\u96a7\u9053\u5230\u8fbe\u5bf9\u7aef\u96c6\u7fa4\u3002\r\n\u4e00\u65e6\u6570\u636e\u5305\u5230\u8fbe\u5bf9\u7aef\u96c6\u7fa4\uff0c\u7531 CNI \u5904\u7406\u5e76\u901a\u8fc7\u5355\u96c6\u7fa4\u7f51\u7edc\u5230\u8fbe\u76ee\u6807 Pod\u3002\r\n\u8fd9\u79cd\u6a21\u5f0f\u7684\u4f18\u70b9\u662f\u6bcf\u4e2a\u96c6\u7fa4\u53ea\u9700\u8981\u4e00\u4e2a\u8282\u70b9\uff08\u6216\u4e24\u4e2a\u7528\u4e8e\u9ad8\u53ef\u7528\u6027\uff09\u63d0\u4f9b\u5916\u90e8\u8bbf\u95ee\uff0c\u9002\u7528\u4e8e\u591a\u4e91\u548c\u6df7\u5408\u4e91\u573a\u666f\u3002\r\n\u7f3a\u70b9\u662f\u7531\u4e8e\u8f83\u957f\u7684\u7f51\u7edc\u8def\u5f84\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u6027\u80fd\u635f\u5931\u3002\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u4e00\u95ee\u9898\uff0cClusterlink \u63d0\u4f9b\u4e86 P2P \u6a21\u5f0f\uff0c\u9002\u7528\u4e8e\u5bf9\u7f51\u7edc\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\u7684\u573a\u666f\u3002\r\n\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c\u6570\u636e\u5305\u76f4\u63a5\u53d1\u9001\u5230\u76ee\u6807 Pod \u6240\u5728\u7684\u8282\u70b9\u3002\r\n\u6b64\u5916\uff0cP2P \u548c Gateway \u6a21\u5f0f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8bbe\u8ba1",children:"\u8bbe\u8ba1"}),"\n",(0,s.jsx)(e.p,{children:"Kosmos \u591a\u96c6\u7fa4\u7f51\u7edc Gateway \u89e3\u51b3\u65b9\u6848\u7684\u67b6\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"MCN GW_Architecture.png",src:r(2550).A+"",width:"1019",height:"287"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsx)(e.p,{children:"\u63d0\u4f9b\u4e86\u5f88\u5f3a\u7684\u517c\u5bb9\u6027\uff0c\u6bcf\u4e2a\u96c6\u7fa4\u53ea\u9700\u8981\u4e00\u4e2a\u8282\u70b9\uff08\u6216\u4e24\u4e2a\u7528\u4e8e\u9ad8\u53ef\u7528\u6027\uff09\u63d0\u4f9b\u5916\u90e8\u8bbf\u95ee\uff0c\u9002\u7528\u4e8e\u8de8\u4e91\u573a\u666f\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"Kosmos \u591a\u96c6\u7fa4\u7f51\u7edc P2P \u89e3\u51b3\u65b9\u6848\u7684\u67b6\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"MCN P2P_Architecture.png",src:r(3568).A+"",width:"1019",height:"310"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,s.jsx)(e.p,{children:"\u5177\u6709\u8f83\u77ed\u7684\u7f51\u7edc\u8def\u5f84\u548c\u66f4\u597d\u7684\u6027\u80fd\uff0c\u9002\u7528\u4e8e\u5b8c\u5168\u4e92\u8054\u7684 Underlay \u573a\u666f\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5148\u51b3\u6761\u4ef6",children:"\u5148\u51b3\u6761\u4ef6"}),"\n",(0,s.jsx)(e.h4,{id:"\u5b89\u88c5-kosmos",children:"\u5b89\u88c5 Kosmos"}),"\n",(0,s.jsxs)(e.p,{children:["\u53c2\u8003 Kosmos \u5feb\u901f\u5165\u95e8\u6587\u6863 ",(0,s.jsx)(e.a,{href:"https://github.com/kosmos-io/kosmos",children:"https://github.com/kosmos-io/kosmos"})," \u5e76\u542f\u7528 ClusterLink \u6a21\u5757\u4ee5\u8fdb\u884c\u591a\u96c6\u7fa4\u7f51\u7edc\u914d\u7f6e\u3002\r\n\u4f7f\u7528 kosmosctl \u5de5\u5177\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:"kosmosctl install --cni calico --default-nic eth0 // \u6211\u4eec\u6839\u636e\u53c2\u6570 default-nic \u4f20\u9012\u7684\u7f51\u7edc\u63a5\u53e3\u503c\u5efa\u7acb\u7f51\u7edc\u96a7\u9053\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u52a0\u5165\u53f6\u5b50\u96c6\u7fa4",children:"\u52a0\u5165\u53f6\u5b50\u96c6\u7fa4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:"kosmosctl join cluster --name cluster1 --kubeconfig ~/kubeconfig/cluster1-kubeconfig --cni calico --default-nic eth0 --enable-link\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u8de8\u96c6\u7fa4-l3-\u7f51\u7edc\u8fde\u63a5\u6027",children:"\u8de8\u96c6\u7fa4 L3 \u7f51\u7edc\u8fde\u63a5\u6027"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u5b9e\u73b0 Kosmos \u4e2d\u7684\u8de8\u96c6\u7fa4 L3 \u7f51\u7edc\u8fde\u63a5\u6027\uff0c\u9700\u8981\u81f3\u5c11\u4e24\u4e2a\u4e0d\u540c\u96c6\u7fa4\u7684\u8282\u70b9\u5728\u4e3b\u673a\u7f51\u7edc\u5c42\u80fd\u591f\u76f8\u4e92\u901a\u4fe1\uff0c\u5e76\u4e14\u96c6\u7fa4\u5fc5\u987b\u6b63\u786e\u90e8\u7f72\u5e76\u652f\u6301 VXLAN \u6216 IPSec \u6280\u672f\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"gateway-\u6a21\u5f0f",children:"Gateway \u6a21\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Kosmos \u8054\u90a6\u4e2d\u7684\u6bcf\u4e2a Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u4f7f\u7528 Elector \u6a21\u5757\u9009\u4e3e\u4e00\u4e2a\u8282\u70b9\u4f5c\u4e3a Gateway\uff08GW\uff09\u8282\u70b9\u3002\r\n\u4e24\u4e2a\u96c6\u7fa4\u7684 GW \u8282\u70b9\u901a\u8fc7 vx-bridge \u96a7\u9053\uff08\u7531 Kosmos \u521b\u5efa\uff09\u8fdb\u884c\u901a\u4fe1\u4ee5\u5efa\u7acb\u8fde\u63a5\u3002\r\n\u5728\u6bcf\u4e2a\u96c6\u7fa4\u5185\uff0c\u8def\u7531\u7531 GW \u8282\u70b9\u5904\u7406\u3002\r\n\u76f8\u6bd4 P2P \u6a21\u5f0f\uff0cGW \u6a21\u5f0f\u7531\u4e8e GW \u8282\u70b9\u7684\u989d\u5916\u6570\u636e\u5305\u5c01\u88c5\u548c\u89e3\u5c01\u88c5\uff0c\u7f51\u7edc\u6027\u80fd\u7565\u4f4e\u3002\r\n\u7136\u800c\uff0c\u5176\u4f18\u52bf\u5728\u4e8e\u96c6\u7fa4\u8282\u70b9\u7684\u8def\u7531\u8868\u548c FDB \u8868\u51e0\u4e4e\u53ef\u4ee5\u4fdd\u6301\u4e0d\u53d8\u3002\r\n\u56e0\u6b64\uff0cGW \u6a21\u5f0f\u9002\u7528\u4e8e\u5bf9\u7f51\u7edc\u6027\u80fd\u8981\u6c42\u4e0d\u9ad8\u7684\u66f4\u5927\u89c4\u6a21\u591a\u96c6\u7fa4\u573a\u666f\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"p2p-\u6a21\u5f0f",children:"P2P \u6a21\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 P2P \u6a21\u5f0f\u4e0b\uff0c\u4e0d\u9700\u8981\u4f7f\u7528 Elector \u6a21\u5757\u3002\r\nKosmos \u5728\u6bcf\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u521b\u5efa vx-bridge \u63a5\u53e3\uff0c\u5b9e\u73b0\u4e0d\u540c\u96c6\u7fa4\u8282\u70b9\u4e4b\u95f4\u7684\u76f4\u63a5\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1\u3002\r\n\u6b64\u6a21\u5f0f\u4e0b\u7684\u7f51\u7edc\u6027\u80fd\u51e0\u4e4e\u4e0e\u5355\u4e2a Kubernetes \u96c6\u7fa4\u76f8\u540c\u3002\r\n\u7136\u800c\uff0c\u5728 P2P \u6a21\u5f0f\u4e0b\uff0c\u6bcf\u4e2a\u96c6\u7fa4\u7684\u6bcf\u4e2a\u8282\u70b9\u9700\u8981\u4e3a Kosmos \u8054\u90a6\u4e2d\u7684\u6240\u6709\u8282\u70b9\u914d\u7f6e\u8bbf\u95ee\u89c4\u5219\uff0c\u5bfc\u81f4\u8f83\u5927\u7684\u8def\u7531\u548c FDB \u8868\u5927\u5c0f\u3002\r\n\u56e0\u6b64\uff0cP2P \u6a21\u5f0f\u9002\u7528\u4e8e\u5bf9\u7f51\u7edc\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\u4f46\u6bcf\u4e2a\u96c6\u7fa4\u8282\u70b9\u6570\u91cf\u8f83\u5c11\u7684\u573a\u666f\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u542f\u52a8-clusterlink",children:"\u542f\u52a8 ClusterLink"}),"\n",(0,s.jsx)(e.h4,{id:"\u4f7f\u7528-p2p-\u6a21\u5f0f",children:"\u4f7f\u7528 P2P \u6a21\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:'# \u5b8c\u6210\u201c\u5b89\u88c5 Kosmos\u201d\u548c\u201c\u52a0\u5165\u53f6\u5b50\u96c6\u7fa4\u201d\u90e8\u5206\u7684\u6b65\u9aa4\r\n# \u68c0\u67e5\u96c6\u7fa4\u8d44\u6e90\u662f\u5426\u6b63\u786e\u521b\u5efa\r\n[root@kosmos-control-cluster yaml]# kubectl --kubeconfig config-14 get clusters.kosmos.io\r\nNAME                     NETWORK_TYPE   IP_FAMILY\r\ncluster38                p2p            all\r\nkosmos-control-cluster   p2p            all\r\n\r\n# \u68c0\u67e5 clusternodes \u8d44\u6e90\u662f\u5426\u6b63\u786e\u521b\u5efa\r\n[root@kosmos-control-cluster yaml]# kubectl get clusternodes.kosmos.io\r\nNAME                         ROLES         INTERFACE    IP\r\ncluster38-001                              bond0.1820   10.*.*.38\r\ncluster38-002                              bond0.1820   10.*.*.39\r\ncluster38-003                              bond0.1830   10.*.*.94\r\ncluster38-004                ["gateway"]   bond0.1830   10.*.*.95\r\nkosmos-control-cluster-001                 bond0.1820   10.*.*.14\r\nkosmos-control-cluster-002                 bond0.1820   10.*.*.15\r\nkosmos-control-cluster-003   ["gateway"]   bond0.1565   10.*.*.38\r\nkosmos-control-cluster-004                 bond0.1565   10.*.*.31\r\nkosmos-control-cluster-005                 bond0.1565   10.*.*.32\r\nkosmos-control-cluster-006                 bond0.1565   10.*.*.33\r\nkosmos-control-cluster-007                 bond0.1565   10.*.*.37\r\n\r\n# \u68c0\u67e5 nodeconfigs \u8d44\u6e90\u662f\u5426\u6b63\u786e\u521b\u5efa\r\n[root@kosmos-control-cluster yaml]# kubectl get nodeconfigs.kosmos.io\r\nNAME                         AGE\r\ncluster38-001                14d\r\ncluster38-002                14d\r\ncluster38-003                14d\r\ncluster38-004                14d\r\nkosmos-control-cluster-001   48d\r\nkosmos-control-cluster-002   48d\r\nkosmos-control-cluster-003   49d\r\nkosmos-control-cluster-004   49d\r\nkosmos-control-cluster-005   45d\r\nkosmos-control-cluster-006   45d\r\nkosmos-control-cluster-007   45d\n'})}),"\n",(0,s.jsx)(e.h4,{id:"\u521b\u5efa\u6d4b\u8bd5-pods",children:"\u521b\u5efa\u6d4b\u8bd5 Pods"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u5728 kosmos-control-cluster \u548c cluster38 \u96c6\u7fa4\u4e2d\u521b\u5efa Pod \u9a8c\u8bc1\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u8fde\u63a5\u6027\u3002\r\n\u4e3a\u4e86\u786e\u4fdd\u5bb9\u5668\u5177\u6709\u5e38\u89c1\u7684\u7f51\u7edc\u5de5\u5177\uff08\u5982 Ping \u548c Curl\uff09\uff0c\u4f7f\u7528 clusterlink-floater \u955c\u50cf\u3002\r\n\u4ee5\u4e0b\u662f\u521b\u5efa Pods \u7684\u793a\u4f8b YAML\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'---\r\napiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: clusterlink-floater\r\n  namespace: kosmos-system\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRole\r\nmetadata:\r\n  name: clusterlink-floater\r\nrules:\r\n  - apiGroups: [\'*\']\r\n    resources: [\'*\']\r\n    verbs: ["*"]\r\n  - nonResourceURLs: [\'*\']\r\n    verbs: ["get"]\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRoleBinding\r\nmetadata:\r\n  name: clusterlink-floater\r\nroleRef:\r\n  apiGroup: rbac.authorization.k8s.io\r\n  kind: ClusterRole\r\n  name: clusterlink-floater\r\nsubjects:\r\n  - kind: ServiceAccount\r\n    name: clusterlink-floater\r\n    namespace: kosmos-system\r\n---\r\napiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: clusterlink-floater\r\n  namespace: kosmos-system\r\nspec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      app: clusterlink-floater\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: clusterlink-floater\r\n    spec:\r\n      hostNetwork: false\r\n      serviceAccountName: clusterlink-floater\r\n      containers:\r\n      - name: floater\r\n        image: ghcr.io/kosmos-io/clusterlink-floater:v0.2.0-lts\r\n        imagePullPolicy: IfNotPresent\r\n        command:\r\n          - clusterlink-floater\r\n        securityContext:\r\n          privileged: true\r\n        env:\r\n          - name: "PORT"\r\n            value: "8889"\r\n          - name: "ENABLE_ANALYSIS"\r\n            value: "false"\r\n      affinity:\r\n        nodeAffinity:\r\n          requiredDuringSchedulingIgnoredDuringExecution:\r\n            nodeSelectorTerms:\r\n              - matchExpressions:\r\n                - key: kosmos.io/exclude\r\n                  operator: DoesNotExist\r\n      tolerations:\r\n      - effect: NoSchedule\r\n        operator: Exists\r\n      - key: CriticalAddonsOnly\r\n        operator: Exists\r\n      - effect: NoExecute\r\n        operator: Exists\n'})}),"\n",(0,s.jsx)(e.admonition,{title:"NOTE",type:"info",children:(0,s.jsx)(e.p,{children:"\u672c\u8282\u63d0\u4f9b\u7684\u6d4b\u8bd5\u7528\u4f8b\u53ea\u80fd\u68c0\u67e5\u4e24\u4e2a\u96c6\u7fa4\u4e2d\u8282\u70b9\u4e4b\u95f4\u7684\u5bb9\u5668\u7f51\u7edc\u8fde\u63a5\u6027\u3002\r\n\u8981\u5feb\u901f\u6d4b\u8bd5\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\uff0c\u8bf7\u53c2\u9605\u7b2c 5 \u8282\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u786e\u4fdd Pods \u5728 kosmos-control-cluster \u548c cluster38 \u96c6\u7fa4\u4e2d\u6210\u529f\u8fd0\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:"[root@kosmos-control-cluster yaml]# kubectl -n kosmos-system get pod\r\nNAME                                              READY   STATUS    RESTARTS   AGE\r\nclusterlink-agent-6qq4v                           1/1     Running   0          15d\r\nclusterlink-agent-6v9jm                           1/1     Running   0          15d\r\nclusterlink-agent-7zpf5                           1/1     Running   0          15d\r\nclusterlink-agent-84d68                           1/1     Running   0          15d\r\nclusterlink-agent-dj9q2                           1/1     Running   0          26h\r\nclusterlink-agent-r2zj4                           1/1     Running   0          15d\r\nclusterlink-agent-vlh2x                           1/1     Running   0          3d3h\r\nclusterlink-controller-manager-6774ddd58b-bcn7s   1/1     Running   0          15d\r\nclusterlink-elector-6b597b44f7-jrbg6              1/1     Running   0          15d\r\nclusterlink-elector-6b597b44f7-mj882              1/1     Running   0          15d\r\nclusterlink-floater-7dcb47579-lddgc               1/1     Running   0          77s\r\nclusterlink-network-manager-6489597986-h74m4      1/1     Running   0          15d\r\nclustertree-cluster-manager-6778bd7b6c-mwhpj      1/1     Running   0          5h45m\r\nkosmos-operator-c88898f66-b8mjl                   1/1     Running   0          15d\r\nkosmos-scheduler-7dcfd94bf7-2km8m                 1/1     Running   0          8d\r\n\r\n[root@cluster38 yaml]# kubectl -n kosmos-system get pod\r\nNAME                                              READY   STATUS    RESTARTS   AGE\r\nclusterlink-agent-jsv2b                           1/1     Running   0          14d\r\nclusterlink-agent-qncxt                           1/1     Running   0          14d\r\nclusterlink-agent-rzngm                           1/1     Running   0          14d\r\nclusterlink-agent-s252r                           1/1     Running   0          14d\r\nclusterlink-controller-manager-77fbbd9f78-bz47t   1/1     Running   0          14d\r\nclusterlink-elector-86b49775b5-x4gsp              1/1     Running   0          14d\r\nclusterlink-elector-86b49775b5-z4lb5              1/1     Running   0          14d\r\nclusterlink-floater-7dcb47579-jx85c               1/1     Running   0          16s\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u4e24\u4e2a Pod \u7684 IP \u5730\u5740\uff0c\u5e76\u8fdb\u5165\u5176\u4e2d\u4e00\u4e2a Pod \u7684\u5bb9\u5668\u6267\u884c Ping \u547d\u4ee4\uff0c\u4ee5\u9a8c\u8bc1\u8de8\u96c6\u7fa4\u7684\u5bb9\u5668\u7f51\u7edc\u8fde\u63a5\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:"[root@cluster38 yaml]# kubectl -n kosmos-system get pod clusterlink-floater-7dcb47579-jx85c -oyaml |grep ip\r\n  - ip: 10.*.*.253\r\n  - ip: fd11:1111:*:*:*:*:4573:f17d\r\n\r\n[root@kosmos-control-cluster yaml]# kubectl -n kosmos-system exec -it clusterlink-floater-7dcb47579-lddgc -- sh\r\n/ # ping 10.*.*.253\r\nPING 10.*.*.253 (10.*.*.253): 56 data bytes\r\n64 bytes from 10.*.*.253: seq=0 ttl=62 time=0.592 ms\r\n64 bytes from 10.*.*.253: seq=1 ttl=62 time=0.362 ms\r\n64 bytes from 10.*.*.253: seq=2 ttl=62 time=0.388 ms\r\n64 bytes from 10.*.*.253: seq=3 ttl=62 time=0.373 ms\r\n^C\r\n--- 10.*.*.253 ping statistics ---\r\n4 packets transmitted, 4 packets received, 0% packet loss\r\nround-trip min/avg/max = 0.362/0.428/0.592 ms\r\n/ # ping -6 fd11:1111:*:*:*:*:4573:f17d\r\nPING fd11:1111:*:*:*:*:4573:f17d (fd11:1111:*:*:*:*:4573:f17d): 56 data bytes\r\n64 bytes from fd11:1111:*:*:*:*:4573:f17d: seq=0 ttl=62 time=0.679 ms\r\n64 bytes from fd11:1111:*:*:*:*:4573:f17d: seq=1 ttl=62 time=0.492 ms\r\n64 bytes from fd11:1111:*:*:*:*:4573:f17d: seq=2 ttl=62 time=0.406 ms\r\n64 bytes from fd11:1111:*:*:*:*:4573:f17d: seq=3 ttl=62 time=1.488 ms\r\n^C\r\n--- fd11:1111:*:*:*:*:4573:f17d ping statistics ---\r\n4 packets transmitted, 4 packets received, 0% packet loss\r\nround-trip min/avg/max = 0.406/0.766/1.488 ms\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4e00\u952e\u8bca\u65ad\u96c6\u7fa4\u8fde\u63a5",children:"\u4e00\u952e\u8bca\u65ad\u96c6\u7fa4\u8fde\u63a5"}),"\n",(0,s.jsx)(e.p,{children:"\u96c6\u7fa4\u8fde\u63a5\u8bca\u65ad (Floater) \u529f\u80fd\u65e8\u5728\u89e3\u51b3\u4f7f\u7528 Kosmos \u65f6\u6301\u7eed\u68c0\u67e5\u591a\u4e2a Kubernetes \u96c6\u7fa4\u4e4b\u95f4\u7f51\u7edc\u8fde\u63a5\u7684\u6311\u6218\u3002\u5f53\u96c6\u7fa4\u6570\u91cf\u8f83\u5c11\u65f6\uff0c\u4f8b\u5982\u53ea\u6709\u4e24\u4e2a\u96c6\u7fa4\uff0c\u8fd9\u9879\u4efb\u52a1\u53ef\u80fd\u5e76\u4e0d\u56f0\u96be\u3002\u7136\u800c\uff0c\u5f53\u96c6\u7fa4\u6570\u91cf\u8fbe\u5230 5000 \u6216\u66f4\u591a\u65f6\uff0c\u5373\u4f7f\u662f\u6700\u70ed\u60c5\u7684\u8fd0\u7ef4\u4eba\u5458\u4e5f\u4f1a\u53d1\u73b0\u51e0\u4e4e\u4e0d\u53ef\u80fd\u5b8c\u6210\u8fd9\u9879\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86 Floater \u529f\u80fd\uff0c\u5b83\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6f02\u6d6e\u3002\u901a\u8fc7 kosmosctl \u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u547d\u4ee4\u8bca\u65ad\u591a\u4e2a Kubernetes \u96c6\u7fa4\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\u3002\r\nClusterLink Floater \u7684\u67b6\u6784\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"MCN Floater_Flow.png",src:r(3534).A+"",width:"1261",height:"836"})}),"\n",(0,s.jsx)(e.p,{children:'kosmosctl \u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u4e00\u952e\u8bca\u65ad\u547d\u4ee4 "dr"\uff0c\u53ef\u4ee5\u8f7b\u677e\u9a8c\u8bc1\u591a\u4e2a Kubernetes \u96c6\u7fa4\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4e3b\u673a\u7f51\u7edc\u3001\u5bb9\u5668\u7f51\u7edc\u548c\u539f\u751f\u96c6\u7fa4\u7f51\u7edc\u3002\u793a\u4f8b\u5982\u4e0b\uff1a'}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:"# \u9a8c\u8bc1\u8de8\u96c6\u7fa4\u7684\u4e3b\u673a\u7f51\u7edc\r\nkosmosctl dr -r ghcr.io/kosmos-io/komos --src-kubeconfig root-config --dst-kubeconfig cluster38-config --host-network\r\n\r\n# \u9a8c\u8bc1\u8de8\u96c6\u7fa4\u7684\u5bb9\u5668\u7f51\u7edc\r\nkosmosctl dr -r ghcr.io/kosmos-io/komos --src-kubeconfig root-config --dst-kubeconfig cluster38-config\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},3534:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/MCN_Floater_Flow-5eacf7d674beab610c33fa93723b0c35.png"},2550:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/MCN_GW_Architecture-ad8eb15c31035ee0af215d29bceb17cf.png"},3568:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/MCN_P2P_Architecture-9554e1fd1efbac70fe5576731eb95ed3.png"},8453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var s=r(6540);const t={},o=s.createContext(t);function l(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);