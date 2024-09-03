"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[674],{3419:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var n=o(4848),r=o(8453);const t={id:"node-not-ready_zh",title:"Kosmos \u8282\u70b9 NotReady"},d="Kosmos \u8282\u70b9 NotReady",l={id:"i18n/zh/v0.2.0/node-not-ready_zh",title:"Kosmos \u8282\u70b9 NotReady",description:"Kosmos \u8282\u70b9 NotReady \u89e3\u51b3\u65b9\u6848",source:"@site/docs/i18n/zh/v0.2.0/node-not-ready_zh.md",sourceDirName:"i18n/zh/v0.2.0",slug:"/i18n/zh/v0.2.0/node-not-ready_zh",permalink:"/website/i18n/zh/v0.2.0/node-not-ready_zh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/i18n/zh/v0.2.0/node-not-ready_zh.md",tags:[],version:"current",frontMatter:{id:"node-not-ready_zh",title:"Kosmos \u8282\u70b9 NotReady"}},c={},a=[{value:"Kosmos \u8282\u70b9 NotReady \u89e3\u51b3\u65b9\u6848",id:"kosmos-\u8282\u70b9-notready-\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u89e3\u51b3\u65b9\u6848\uff1a\u96c6\u6210 Kyverno \u89e3\u51b3 Kosmos \u8282\u70b9 NotReady \u7684\u95ee\u9898",id:"\u89e3\u51b3\u65b9\u6848\u96c6\u6210-kyverno-\u89e3\u51b3-kosmos-\u8282\u70b9-notready-\u7684\u95ee\u9898",level:3},{value:"\u4ec0\u4e48\u662f\u51c6\u5165 Webhook\uff1f",id:"\u4ec0\u4e48\u662f\u51c6\u5165-webhook",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:4},{value:"\u5b89\u88c5 Kyverno",id:"\u5b89\u88c5-kyverno",level:5},{value:"\u914d\u7f6e ClusterPolicy",id:"\u914d\u7f6e-clusterpolicy",level:5}];function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"kosmos-\u8282\u70b9-notready",children:"Kosmos \u8282\u70b9 NotReady"})}),"\n",(0,n.jsx)(s.h2,{id:"kosmos-\u8282\u70b9-notready-\u89e3\u51b3\u65b9\u6848",children:"Kosmos \u8282\u70b9 NotReady \u89e3\u51b3\u65b9\u6848"}),"\n",(0,n.jsx)(s.h3,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,n.jsxs)(s.p,{children:["\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u5728\u4e3b\u96c6\u7fa4\u4e0a\u6ce8\u518c\u4e86\u96c6\u7fa4 ",(0,n.jsx)(s.code,{children:"cluster7"}),"\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",metastring:"script",children:"$ kubectl get node\r\nNAME               STATUS   ROLES                         AGE     VERSION\r\necs-54004033-001   Ready    worker                        50d     v1.21.5\r\necs-54004033-002   Ready    control-plane,master,worker   50d     v1.21.5\r\nkosmos-cluster7    Ready    agent                         5d22h   v1.21.5\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Kosmos \u7684 clustertree-cluster-manager \u5c06\u6301\u7eed\u76d1\u89c6 ",(0,n.jsx)(s.code,{children:"cluster7"})," \u96c6\u7fa4\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u548c\u96c6\u7fa4\u72b6\u6001\uff0c\u5e76\u5c06\u5176\u66f4\u65b0\u5230\u4e3b\u96c6\u7fa4\u4e0a\u7684\u53f6\u8282\u70b9 ",(0,n.jsx)(s.code,{children:"kosmos-cluster7"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",metastring:"script",children:"$ kubectl get deploy -nkosmos-system\r\nNAME                             READY   UP-TO-DATE   AVAILABLE   AGE\r\nclusterlink-controller-manager   1/1     1            1           5d22h\r\nclusterlink-elector              2/2     2            2           5d22h\r\nclusterlink-network-manager      1/1     1            1           5d22h\r\nclustertree-cluster-manager      1/1     1            1           5d22h\r\nkosmos-operator                  1/1     1            1           5d22h\r\nkosmos-webhook                   1/1     1            1           11\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4e3b\u96c6\u7fa4\u4e0e ",(0,n.jsx)(s.code,{children:"cluster7"})," \u96c6\u7fa4\u4e4b\u95f4\u5b58\u5728\u7f51\u7edc\u6ce2\u52a8\uff0cKosmos \u5c06\u68c0\u6d4b\u5230\u6b64\u5f02\u5e38\uff0c\u5e76\u5c06\u4e3b\u96c6\u7fa4\u4e0a\u53f6\u8282\u70b9 ",(0,n.jsx)(s.code,{children:"kosmos-cluster7"}),' \u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a "NotReady"\u3002\r\n\u8fd9\u5c06\u89e6\u53d1 Kubernetes \u7684 Pod \u9a71\u9010\u884c\u4e3a\uff0c\u610f\u5473\u7740\u5728 "NotReady" \u8282\u70b9\u4e0a\u7684 Pod \u5c06\u88ab\u9a71\u9010\u5230\u5176\u4ed6 Ready \u8282\u70b9\u3002']}),"\n",(0,n.jsxs)(s.p,{children:["\u7136\u800c\uff0c\u7531\u4e8e\u7f51\u7edc\u6ce2\u52a8\uff0c",(0,n.jsx)(s.code,{children:"kosmos-cluster7"}),' \u7684\u72b6\u6001\u5728\u9a71\u9010\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u518d\u6b21\u53d8\u4e3a "Ready"\u3002\r\n\u4f46\u6700\u521d\u9a71\u9010\u7684 Pod \u7684\u4e8b\u4ef6\u4ecd\u5c06\u53d1\u9001\u5230 "cluster7" \u96c6\u7fa4\uff0c\u5bfc\u81f4\u5728 "cluster7" \u96c6\u7fa4\u4e0a\u7684\u6b63\u5e38\u8fd0\u884c\u7684 Pod \u88ab\u5220\u9664\u6216\u91cd\u65b0\u542f\u52a8\uff0c\u4ece\u800c\u5f71\u54cd\u4e1a\u52a1\u3002']}),"\n",(0,n.jsx)(s.h3,{id:"\u89e3\u51b3\u65b9\u6848\u96c6\u6210-kyverno-\u89e3\u51b3-kosmos-\u8282\u70b9-notready-\u7684\u95ee\u9898",children:"\u89e3\u51b3\u65b9\u6848\uff1a\u96c6\u6210 Kyverno \u89e3\u51b3 Kosmos \u8282\u70b9 NotReady \u7684\u95ee\u9898"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://kyverno.io/",children:"Kyverno"})," \u901a\u8fc7 Kubernetes \u51c6\u5165 Webhook\u3001\u540e\u53f0\u626b\u63cf\u548c\u6e90\u4ee3\u7801\u5e93\u626b\u63cf\u6765\u9a8c\u8bc1\u3001\u53d8\u66f4\u3001\u751f\u6210\u548c\u6e05\u7406\u914d\u7f6e\u3002\r\nKyverno \u7b56\u7565\u53ef\u4ee5\u4f5c\u4e3a Kubernetes \u8d44\u6e90\u8fdb\u884c\u7ba1\u7406\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u5b83\u7684\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u9a8c\u8bc1\u3001\u53d8\u66f4\u3001\u751f\u6210\u6216\u6e05\u7406\uff08\u5220\u9664\uff09\u4efb\u4f55\u8d44\u6e90"}),"\n",(0,n.jsx)(s.li,{children:"\u9a8c\u8bc1\u5bb9\u5668\u955c\u50cf\u4ee5\u7528\u4e8e\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u5b89\u5168\u6027"}),"\n",(0,n.jsx)(s.li,{children:"\u4f7f\u7528\u6807\u7b7e\u9009\u62e9\u5668\u548c\u901a\u914d\u7b26\u5339\u914d\u8d44\u6e90"}),"\n",(0,n.jsx)(s.li,{children:"\u5728\u547d\u540d\u7a7a\u95f4\u95f4\u540c\u6b65\u914d\u7f6e"}),"\n",(0,n.jsx)(s.li,{children:"\u4f7f\u7528\u51c6\u5165\u63a7\u5236\u963b\u6b62\u975e\u7b26\u5408\u8d44\u6e90\uff0c\u6216\u62a5\u544a\u7b56\u7565\u8fdd\u89c4"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u672c\u6587\u5c06\u89e3\u91ca\u5982\u4f55\u4f7f\u7528 Kyverno \u7684\u51c6\u5165 Webhook \u6765\u9632\u6b62 Kosmos \u8282\u70b9 NotReady \u65f6\u7684 Pod \u9a71\u9010\u3002"}),"\n",(0,n.jsx)(s.h4,{id:"\u4ec0\u4e48\u662f\u51c6\u5165-webhook",children:"\u4ec0\u4e48\u662f\u51c6\u5165 Webhook\uff1f"}),"\n",(0,n.jsx)(s.p,{children:"\u51c6\u5165 Webhook \u662f\u4e00\u6bb5\u4ee3\u7801\uff0c\u5728\u5bf9\u8c61\u6301\u4e45\u5316\u5230 Kubernetes API \u670d\u52a1\u5668\u4e4b\u524d\u62e6\u622a\u8bf7\u6c42\u3002\r\n\u5b83\u5141\u8bb8\u8bf7\u6c42\u901a\u8fc7\u8ba4\u8bc1\u548c\u6388\u6743\u540e\u624d\u80fd\u901a\u8fc7\u3002\u51c6\u5165\u63a7\u5236\u5668\u53ef\u4ee5\u6267\u884c\u9a8c\u8bc1\u3001\u53d8\u66f4\u6216\u4e24\u8005\u90fd\u6267\u884c\u3002\r\n\u53d8\u66f4\u63a7\u5236\u5668\u4fee\u6539\u5b83\u4eec\u5904\u7406\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u800c\u9a8c\u8bc1\u63a7\u5236\u5668\u4e0d\u4f1a\u3002\u5982\u679c\u4efb\u4f55\u63a7\u5236\u5668\u5728\u4efb\u4f55\u9636\u6bb5\u62d2\u7edd\u8bf7\u6c42\uff0c\u6574\u4e2a\u8bf7\u6c42\u5c06\u7acb\u5373\u88ab\u62d2\u7edd\uff0c\u5e76\u5c06\u9519\u8bef\u8fd4\u56de\u7ed9\u6700\u7ec8\u7528\u6237\u3002"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"K8s_Admission_Webhook.png",src:o(7853).A+"",width:"2401",height:"721"})}),"\n",(0,n.jsx)(s.h4,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,n.jsx)(s.h5,{id:"\u5b89\u88c5-kyverno",children:"\u5b89\u88c5 Kyverno"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://kyverno.io/docs/installation/methods/",children:"\u5b89\u88c5 Kyverno"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",metastring:"script",children:"kubectl create -f https://github.com/kyverno/kyverno/releases/download/v1.10.0/install.yaml\n"})}),"\n",(0,n.jsx)(s.h5,{id:"\u914d\u7f6e-clusterpolicy",children:"\u914d\u7f6e ClusterPolicy"}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u56db\u79cd\u60c5\u51b5\u4e0b K8s \u9a71\u9010 Pod\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u7528\u6237\u53d1\u8d77"}),"\uff1a\u7531 API \u53d1\u8d77\u7684\u9a71\u9010\u8bf7\u6c42\u3002\u4f8b\u5982\uff0c\u8282\u70b9\u7ef4\u62a4\u671f\u95f4\uff0c\u4e3a\u4e86\u907f\u514d\u8282\u70b9\u7a81\u7136\u4e0b\u7ebf\u5bf9\u670d\u52a1\u9020\u6210\u7684\u5f71\u54cd\uff0c\u4f1a\u9a71\u9010\u8282\u70b9\u4e0a\u7684\u6240\u6709 Pod\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Kubelet \u53d1\u8d77"}),"\uff1a\u5b9a\u671f\u68c0\u67e5\u8282\u70b9\u8d44\u6e90\u3002\u5f53\u8d44\u6e90\u4e0d\u8db3\u65f6\uff0c\u57fa\u4e8e\u4f18\u5148\u7ea7\uff0c\u5c06\u9a71\u9010\u4e00\u4e9b Pod\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"kube-controller-manager \u53d1\u8d77"}),"\uff1a\u5b9a\u671f\u68c0\u6d4b\u6240\u6709\u8282\u70b9\u3002\u5f53\u8282\u70b9\u7684 NotReady \u72b6\u6001\u8d85\u8fc7\u4e00\u6bb5\u65f6\u95f4\u65f6\uff0c\u5c06\u9a71\u9010\u8282\u70b9\u4e0a\u7684\u6240\u6709 Pod\uff0c\u4ee5\u4fbf\u5c06\u5176\u91cd\u65b0\u8c03\u5ea6\u5230\u5176\u4ed6\u6b63\u5e38\u8282\u70b9\u4e0a\u8fd0\u884c\u3002\u542f\u7528\u6c61\u70b9\u9a71\u9010\u65f6\uff0c\u5728\u8282\u70b9\u4e0a\u51fa\u73b0 ",(0,n.jsx)(s.code,{children:"NoExecute"})," \u6c61\u70b9\u540e\uff0c\u65e0\u6cd5\u5bb9\u5fcd\u6c61\u70b9\u7684 Pod \u5c06\u7acb\u5373\u88ab\u9a71\u9010\u3002\u5bf9\u4e8e\u53ef\u4ee5\u5bb9\u5fcd\u6c61\u70b9\u7684 Pod\uff0c\u5728 Pod \u4e0a\u914d\u7f6e\u7684\u6700\u5c0f\u6c61\u70b9\u5bb9\u5fcd\u65f6\u95f4\u540e\uff0c\u5c06\u88ab\u9a71\u9010\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"kube-scheduler \u53d1\u8d77"}),"\uff1a\u5f53\u5b9e\u73b0\u62a2\u5360\u8c03\u5ea6\u65f6\uff0c\u4f4e\u4f18\u5148\u7ea7 Pod \u53ef\u80fd\u4f1a\u88ab\u9a71\u9010\uff0c\u4ee5\u4e3a\u9ad8\u4f18\u5148\u7ea7\u548c\u62a2\u5360 Pod \u817e\u51fa\u4f4d\u7f6e\uff0c\u4ece\u800c\u4f7f\u9ad8\u4f18\u5148\u7ea7 Pod \u53ef\u4ee5\u6b63\u5e38\u8c03\u5ea6\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff0c\u6211\u4eec\u5c06\u4ec5\u963b\u6b62\u7b26\u5408\u4ee5\u4e0b\u4e09\u4e2a\u6761\u4ef6\u7684 Pod \u5220\u9664\u4e8b\u4ef6\uff1a"}),"\n",(0,n.jsx)(s.p,{children:"(1) \u8282\u70b9\u72b6\u6001\u4e3a NotReady"}),"\n",(0,n.jsx)(s.p,{children:"(2) \u8282\u70b9\u662f KosmosNode"}),"\n",(0,n.jsxs)(s.p,{children:["(3) \u7528\u6237\u540d\u4e3a system:serviceaccount:kube-system",":node-controller","\uff08\u5c5e\u4e8e node-controller \u7684 kube-controller-manager\uff09"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'apiVersion: kyverno.io/v1\r\nkind: ClusterPolicy\r\nmetadata:\r\n  name: kosmos-node-not-ready\r\nspec:\r\n  validationFailureAction: Enforce\r\n  background: false\r\n  rules:\r\n  - match:\r\n      any:\r\n      - resources:\r\n          kinds:\r\n          - Pod\r\n          operations:\r\n          - DELETE\r\n    name: kosmos-node-not-read\r\n    context:\r\n    - name: nodeStatus\r\n      apiCall:\r\n        urlPath: /api/v1/nodes/{{request.oldObject.spec.nodeName}}\r\n        jmesPath: status.conditions[?type==\'Ready\'].status | [0]\r\n    - name: isKosmosNode\r\n      apiCall:\r\n        urlPath: /api/v1/nodes/{{request.oldObject.spec.nodeName}}\r\n        jmesPath: metadata.labels."kosmos.io/node"\r\n    preconditions:\r\n      all:\r\n      - key: "{{ request.userInfo.username }}"\r\n        operator: Equals\r\n        value: "system:serviceaccount:kube-system:node-controller"\r\n      - key: "{{ nodeStatus }}"\r\n        operator: NotEquals\r\n        value: "True" \r\n      - key: "{{ length(isKosmosNode) }}"\r\n        operator: GreaterThan\r\n        value: 0\r\n    validate:\r\n      message: "{{ request.userInfo.username }} \u4e0d\u5141\u8bb8\u5220\u9664 NotReady Kosmos {{request.oldObject.spec.nodeName}} \u8282\u70b9\u4e0a\u7684 Pod {{request.oldObject.metadata.name}}\u3002"\r\n      deny: {}\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u5f53 Kosmos \u8282\u70b9\u72b6\u6001\u4e3a NotReady \u65f6\uff0c\u5c06\u963b\u6b62\u5728\u6b64\u7c7b\u8282\u70b9\u4e0a\u7684 Pod\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b kyverno-admission-controller \u6765\u67e5\u770b\u4ee5\u4e0b\u65e5\u5fd7\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",metastring:"script",children:'handlers.go:139] webhooks/resource/validate "msg"="admission request denied" "clusterroles"=["system:basic-user","system:controller:node-controller","system:discovery","system:public-info-viewer","system:service-account-issuer-discovery"] "gvk"={"group":"","version":"v1","kind":"Pod"} "gvr"={"group":"","version":"v1","resource":"pods"} "kind"="Pod" "name"="example-deployment-6cc4fd9bd7-kkm8z" "namespace"="default" "operation"="DELETE" "resource.gvk"={"Group":"","Version":"v1","Kind":"Pod"} "roles\r\n\r\n"=null "uid"="7f25ee88-4522-45fd-a6ba-38733122b443" "user"={"username":"system:serviceaccount:kube-system:node-controller","uid":"5a13be66-71fd-40e3-9553-00eb0825fbb0","groups":["system:serviceaccounts","system:serviceaccounts:kube-system","system:authenticated"]}\r\nevent.go:307] "Event occurred" object="kosmos-node-not-ready" fieldPath="" kind="ClusterPolicy" apiVersion="kyverno.io/v1" type="Warning" reason="PolicyViolation" message="Pod default/example-deployment-6cc4fd9bd7-kkm8z: [kosmos-node-not-ready] fail (blocked);  system:serviceaccount:kube-system:node-controller delete pod example-deployment-6cc4fd9bd7-kkm8z of NotReady Kosmos kosmos-cluster2 Node is not allowed. "\r\nvalidation.go:103] webhooks/resource/validate "msg"="validation failed" "action"="Enforce" "clusterroles"=["system:basic-user","system:controller:node-controller","system:discovery","system:public-info-viewer","system:service-account-issuer-discovery"] "failed rules"=["kosmos-node-not-ready"] "gvk"={"group":"","version":"v1","kind":"Pod"} "gvr"={"group":"","version":"v1","resource":"pods"} "kind"="Pod" "name"="example-deployment-6cc4fd9bd7-sb7m7" "namespace"="default" "operation"="DELETE" "policy"="kosmos-node-not-ready" "resource"="default/Pod/example-deployment-6cc4fd9bd7-sb7m7" "resource.gvk"={"Group":"","Version":"v1","Kind":"Pod"} "roles"=null "uid"="251f1877-4f2c-40ec-9bca-8ceb7c9c845f" "user"={"username":"system:serviceaccount:kube-system:node-controller","uid":"5a13be66-71fd-40e3-9553-00eb0825fbb0","groups":["system:serviceaccounts","system:serviceaccounts:kube-system","system:authenticated"]}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},7853:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/K8s_Admission_Webhook-d80e6ba8089fbf07bf3bf24a5302860a.png"},8453:(e,s,o)=>{o.d(s,{R:()=>d,x:()=>l});var n=o(6540);const r={},t=n.createContext(r);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);