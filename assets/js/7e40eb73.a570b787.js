"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[72],{7101:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=s(4848),i=s(8453);const o={id:"distribution-policy",title:"Distribution Policy"},t="Distribution Policy",l={id:"v0.2.0/proposals/distribution-policy",title:"Distribution Policy",description:"Summary",source:"@site/docs/v0.2.0/proposals/distribution-policy.md",sourceDirName:"v0.2.0/proposals",slug:"/v0.2.0/proposals/distribution-policy",permalink:"/website/v0.2.0/proposals/distribution-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v0.2.0/proposals/distribution-policy.md",tags:[],version:"current",frontMatter:{id:"distribution-policy",title:"Distribution Policy"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes in Kubernetes",permalink:"/website/v0.2.0/proposals/k8s-in-k8s"},next:{title:"Leaf Node Generate Rules",permalink:"/website/v0.2.0/proposals/leaf-node-generate-rules"}},c={},a=[{value:"Summary",id:"summary",level:2},{value:"Motivation &amp; User Stories",id:"motivation--user-stories",level:2},{value:"Design Details",id:"design-details",level:2},{value:"DistributionPolicy &amp; ClusterDistributionPolicy",id:"distributionpolicy--clusterdistributionpolicy",level:3},{value:"CRD API",id:"crd-api",level:4},{value:"Filter extension points implementation details",id:"filter-extension-points-implementation-details",level:4},{value:"Use cases",id:"use-cases",level:2},{value:"DistributionPolicy CRD",id:"distributionpolicy-crd",level:3},{value:"ClusterDistributionPolicy CRD",id:"clusterdistributionpolicy-crd",level:3},{value:"Test plans",id:"test-plans",level:2},{value:"Preparatory Work",id:"preparatory-work",level:3},{value:"Deploy the Kosmos-scheduler",id:"deploy-the-kosmos-scheduler",level:3},{value:"Try a Sample",id:"try-a-sample",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"distribution-policy",children:"Distribution Policy"})}),"\n",(0,n.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(r.p,{children:"Kosmos provides a multi-cluster scheduler (kosmos-scheduler) and some scheduling plugins."}),"\n",(0,n.jsx)(r.h2,{id:"motivation--user-stories",children:"Motivation & User Stories"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"distributionpolicy"}),": During the product migration process, we hope that the pods created by the user operator can be scheduled to the member cluster without modifying the user's code. Therefore, we provide the distributionpolicy plugin to schedule to the desired nodes (host node, leaf node, mix node) according to matching rules (namespace, labelselector, name and other fields)"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"design-details",children:"Design Details"}),"\n",(0,n.jsx)(r.h3,{id:"distributionpolicy--clusterdistributionpolicy",children:"DistributionPolicy & ClusterDistributionPolicy"}),"\n",(0,n.jsx)(r.h4,{id:"crd-api",children:"CRD API"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/kosmos-io/kosmos/pull/321",children:"Code"})," responsible for working with DistributionPolicy and ClusterDistributionPolicy CRD API will be imported in the kosmos-scheduler plugins repo. DistributionPolicy is namespace scope and ClusterDistributionPolicy is cluster scope."]}),"\n",(0,n.jsx)(r.h4,{id:"filter-extension-points-implementation-details",children:"Filter extension points implementation details"}),"\n",(0,n.jsx)(r.p,{children:"Since target resources distribution policies are stored in the CRD (DistributionPolicy & ClusterDistributionPolicy), kosmos-scheduler should be subscribed for updates of appropriate CRD type. kosmos-scheduler will use informers which will be generated with the name dpInformer(cdpInformer). CRD will contian in ResourceSelectors and PolicyTerms. ResourceSelectors used to select resources and is required. PolicyTerms represents the rule for select nodes to distribute resources."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Description of the ResourceSelectors rules"})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"ResourceSelectors is required"}),"\n",(0,n.jsx)(r.li,{children:"Prioritize matching of high-precision rule\r\nIn case of two ResourceSelector, the one with a more precise\r\nmatching rules in ResourceSelectors wins:"}),"\n"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Namespace-scope resources have higher priority  than cluster-scope resources"}),"\n",(0,n.jsx)(r.li,{children:"For namespace-scope resources, matching by name (resourceSelector.name) has higher priority than by namePrefix (resourceSelector.namePrefix)"}),"\n",(0,n.jsx)(r.li,{children:"For namespace-scope resources, matching by namePrefix (resourceSelector.namePrefix) has higher priority than by selector(resourceSelector.labelSelector)"}),"\n",(0,n.jsx)(r.li,{children:"For cluster-scope resources, matching by name (resourceSelector.name) has higher priority than by namePrefix (resourceSelector.namePrefix)"}),"\n",(0,n.jsx)(r.li,{children:"For cluster-scope resources, matching by NamePrefix (resourceSelector.namePrefix) has higher priority than by selector(resourceSelector.labelSelector)\r\nThe more the precise, the higher the priority. Defaults to zero which means schedule to the mix node."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"PolicyTerms"})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"PolicyTerms is required"}),"\n",(0,n.jsx)(r.li,{children:"The current node scheduling policy is divided into four nodeTypes \uff08host, leaf, mix, adv\uff09."}),"\n",(0,n.jsx)(r.li,{children:"Advanced options will be supported in the future. Sure as NodeSelector, Affinity and so on."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,n.jsx)(r.h3,{id:"distributionpolicy-crd",children:"DistributionPolicy CRD"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"script",children:'apiVersion: kosmos.io/v1alpha1\r\nkind: DistributionPolicy\r\nmetadata:\r\n  name: kosmos-node-distribution-policy\r\n  namespace: test-name-scope\r\nspec:\r\n  resourceSelectors:\r\n    - name: busybox\r\n      policyName: leaf\r\n    - namePrefix: busybox-prefix\r\n      policyName: host\r\n    - labelSelector:\r\n        matchLabels:\r\n          example-distribution-policy: busybox\r\n      policyName: mix\r\n  policyTerms:\r\n  - name: host\r\n    nodeType: host\r\n  - name: leaf\r\n    nodeType: leaf\r\n  - name: mix\r\n    nodeType: mix\r\n  - name: adv\r\n    nodeType: adv\r\n    advancedTerm:\r\n      nodeSelector:\r\n        advNode: "true"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"clusterdistributionpolicy-crd",children:"ClusterDistributionPolicy CRD"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"script",children:"apiVersion: kosmos.io/v1alpha1\r\nkind: ClusterDistributionPolicy\r\nmetadata:\r\n  name: kosmos-node-cluster-distribution-policy\r\nspec:\r\n  resourceSelectors:\r\n    - name: cluster-busybox\r\n      policyName: leaf\r\n    - namePrefix: cluster-busybox-prefix\r\n      policyName: host\r\n    - labelSelector:\r\n        matchLabels:\r\n          example-distribution-policy: cluster-busybox\r\n      policyName: mix\r\n  policyTerms:\r\n  - name: host\r\n    nodeType: host\r\n  - name: leaf\r\n    nodeType: leaf\r\n  - name: mix\r\n    nodeType: mix\r\n  - name: adv\r\n    nodeType: adv\r\n    advancedTerm:\r\n      nodeName: kosmos-member2-cluster-1\n"})}),"\n",(0,n.jsx)(r.h2,{id:"test-plans",children:"Test plans"}),"\n",(0,n.jsx)(r.h3,{id:"preparatory-work",children:"Preparatory Work"}),"\n",(0,n.jsxs)(r.p,{children:["First, Kosmos needs to be ",(0,n.jsx)(r.a,{href:"https://kosmos-io.github.io/website/v0.2.0/quick-start",children:"deployed successfully"})," (at least the clustertree module is deployed) and join the member cluster correctly."]}),"\n",(0,n.jsx)(r.h3,{id:"deploy-the-kosmos-scheduler",children:"Deploy the Kosmos-scheduler"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Configure scheduler and scheduling policy"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"script",children:"kubectl apply -f kosmos/deploy/scheduler/.\n"})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsx)(r.li,{children:"Verify the kosmos-scheduler service"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"script",children:"kubectl -n kosmos-system get pod\r\nNAME                                         READY   STATUS    RESTARTS   AGE\r\nkosmos-scheduler-8f96d87d7-ssxrx             1/1     Running   0          24s\n"})}),"\n",(0,n.jsx)(r.h3,{id:"try-a-sample",children:"Try a Sample"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Use case yaml\uff08busybox.yaml\uff09"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"script",children:"apiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: busybox\r\n  namespace: test-name-scope\r\nspec:\r\n  replicas: 3\r\n  selector:\r\n    matchLabels:\r\n      app: busybox\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: busybox\r\n        example-distribution-policy: busybox\r\n    spec:\r\n      affinity:\r\n        podAntiAffinity:\r\n          requiredDuringSchedulingIgnoredDuringExecution:\r\n            - labelSelector:\r\n                matchLabels:\r\n                  app: busybox\r\n              topologyKey: kubernetes.io/hostname\r\n      schedulerName: kosmos-scheduler\r\n      containers:\r\n        - name: busybox\r\n          image: busybox:latest\r\n          imagePullPolicy: IfNotPresent\r\n          command:\r\n            - /bin/sh\r\n            - -c\r\n            - sleep 3000\n"})}),"\n",(0,n.jsxs)(r.ol,{start:"2",children:["\n",(0,n.jsx)(r.li,{children:"Other Operation instructions"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"script",children:"# List all nodes in the host cluster\r\nkubectl get node\r\nNAME                       STATUS     ROLES                       AGE   VERSION\r\nkosmoscluster1-1           Ready      control-plane,master,node   21d   v1.21.5-eki.0\r\nkosmoscluster1-2           Ready      node                        21d   v1.21.5-eki.0\r\nkosmos-member2-cluster-1   Ready      agent                       24m   v1.21.5-eki.0\r\nkosmos-member2-cluster-2   Ready      agent                       24m   v1.21.5-eki.0\r\n \r\n# Show the taint information on the virtual node\r\nkubectl describe node kosmos-member2-cluster-1  |grep Tai\r\nTaints:             node.kubernetes.io/unreachable:NoExecute\r\n \r\nkubectl describe node kosmos-member2-cluster-2  |grep Tai\r\nTaints:             node.kubernetes.io/unreachable:NoExecute\r\n \r\n# Scheduling by the kosmos-scheduler (hybrid scheduling)\r\nkubectl apply -f  busybox.yaml\r\n    \r\n# Show instances (hybrid) scheduling result in host cluster\r\nkubectl get pod -owide -n test-name-scope\r\nNAME                       READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\r\nbusybox-69855845c9-2pl7f   1/1     Running   0          14s   10.xx.xx.12     kosmoscluster1-1           <none>           <none>\r\nbusybox-69855845c9-54cm9   1/1     Running   0          14s   10.xx.xx.92     kosmoscluster1-2           <none>           <none>\r\nbusybox-69855845c9-9gjs9   1/1     Running   0          14s   10.xx.xx.80     kosmos-member2-cluster-1   <none>           <none>\r\n\r\n# Show instances (hybrid) scheduling result in member cluster\r\nkubectl get pod -owide -n test-name-scope\r\nNAME                       READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\r\nbusybox-69855845c9-9gjs9   1/1     Running   0          14s   10.xx.xx.80     kosmos-member2-cluster-1   <none>           <none>\n"})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>l});var n=s(6540);const i={},o=n.createContext(i);function t(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);