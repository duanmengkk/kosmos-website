"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[20],{1184:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7624),r=t(2172);const i={id:"k8s-in-k8s",title:"Kubernetes in Kubernetes"},o="Kubernetes in Kubernetes",l={id:"v0.2.0/proposals/k8s-in-k8s",title:"Kubernetes in Kubernetes",description:"Summary",source:"@site/docs/v0.2.0/proposals/k8s-in-k8s.md",sourceDirName:"v0.2.0/proposals",slug:"/v0.2.0/proposals/k8s-in-k8s",permalink:"/website/v0.2.0/proposals/k8s-in-k8s",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v0.2.0/proposals/k8s-in-k8s.md",tags:[],version:"current",lastUpdatedBy:"ONE7live",lastUpdatedAt:1708679400,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{id:"k8s-in-k8s",title:"Kubernetes in Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"IPsec Cross-cluster Network",permalink:"/website/v0.2.0/tutorials/ipsec-network"},next:{title:"Distribution Policy",permalink:"/website/v0.2.0/proposals/distribution-policy"}},a={},c=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals",id:"non-goals",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Function Overview",id:"function-overview",level:3},{value:"User Stories (Optional)",id:"user-stories-optional",level:3},{value:"Story 1",id:"story-1",level:4},{value:"Design Details",id:"design-details",level:2},{value:"Overall Architecture",id:"overall-architecture",level:3},{value:"CRD Design",id:"crd-design",level:3},{value:"Overall Process",id:"overall-process",level:3},{value:"Test Plan",id:"test-plan",level:2},{value:"Unit Test",id:"unit-test",level:3},{value:"E2E Test",id:"e2e-test",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"kubernetes-in-kubernetes",children:"Kubernetes in Kubernetes"}),"\n",(0,n.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(s.p,{children:"Kosmos now supports the management of different Kubernetes (k8s) clusters, offering a unified control plane view for resource management and scheduling. This proposal introduces a method to achieve Kubernetes within Kubernetes (k8s in k8s) using Kosmos."}),"\n",(0,n.jsx)(s.p,{children:"The approach involves creating different Kubernetes control plane services within a single k8s cluster and deploying Kosmos' ClusterTree service. The ClusterTree listens to the kube-apiserver address of the created k8s control plane and incorporates the current cluster as a node into the dynamically created control plane. Each control plane has its exclusive etcd, ensuring the isolation of permissions and data for different tenants."}),"\n",(0,n.jsx)(s.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsx)(s.p,{children:"In some cases, cloud providers offer a large k8s cluster as infrastructure to different tenants, providing computational resources like CPU and GPU. Therefore, a k8s in k8s solution is required to isolate permissions and data for different tenants."}),"\n",(0,n.jsx)(s.h3,{id:"goals",children:"Goals"}),"\n",(0,n.jsx)(s.p,{children:"Divide the computational power of a single k8s cluster into multiple distinct k8s clusters, achieving permission and data isolation for different tenants."}),"\n",(0,n.jsx)(s.h3,{id:"non-goals",children:"Non-Goals"}),"\n",(0,n.jsx)(s.h2,{id:"proposal",children:"Proposal"}),"\n",(0,n.jsx)(s.p,{children:"Implement a k8s in k8s solution with Kosmos, allocating a single cluster's computational resources to different tenants."}),"\n",(0,n.jsx)(s.h3,{id:"function-overview",children:"Function Overview"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Enable splitting a single cluster into different smaller clusters through Kosmos."}),"\n",(0,n.jsx)(s.li,{children:"Provide tenants with exclusive etcd and k8s control planes to ensure complete isolation of permissions and resources."}),"\n",(0,n.jsx)(s.li,{children:"Ensure tenants' control planes offer the same functionalities as a single k8s control plane, without changing the user experience."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"user-stories-optional",children:"User Stories (Optional)"}),"\n",(0,n.jsx)(s.h4,{id:"story-1",children:"Story 1"}),"\n",(0,n.jsx)(s.p,{children:"Imagine a supercluster with tens of thousands of nodes, hosting many different tenants. These tenants do not require all the computational resources of the entire k8s cluster, and for security reasons, it's crucial to ensure complete permission isolation between tenants. The native RBAC permission isolation solution in k8s might be insufficient, and k8s's reliance on namespaces for resource isolation could alter the user experience, restricting operations to the namespace level, which could be user-unfriendly."}),"\n",(0,n.jsx)(s.h2,{id:"design-details",children:"Design Details"}),"\n",(0,n.jsx)(s.h3,{id:"overall-architecture",children:"Overall Architecture"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Kubernetes_in_Kubernetes.svg",src:t(8380).c+"",width:"1071",height:"828"})}),"\n",(0,n.jsx)(s.p,{children:"As shown in the figure, each tenant has a separate k8s control plane and etcd. Each tenant's k8s control plane uses Kosmos to manage the nodes of the current cluster as virtual nodes for the control plane. The CRD configuration determines the number of nodes from the current cluster each control plane should manage."}),"\n",(0,n.jsx)(s.h3,{id:"crd-design",children:"CRD Design"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",metastring:"script",children:"apiVersion: kosmos.io/v1alpha1\r\nkind: VirtualCluster\r\nmetadata:\r\n  name: tenant1-cluster\r\nspec:\r\n  kubeconfig: XXXXXX\r\n  promoteResources:\r\n    nodes:\r\n    - node1\r\n    - node2\r\n    resources:\r\n      cpu: 10\r\n      memory: 100Gi\r\nstatus:\r\n  phase: Initialized\n"})}),"\n",(0,n.jsx)(s.h3,{id:"overall-process",children:"Overall Process"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"A cluster administrator creates a VirtualCluster CR resource."}),"\n",(0,n.jsx)(s.li,{children:"The Kosmos-operator listens for the creation of the VirtualCluster, starts the creation of the Kubernetes control plane services including the kube-apiserver, kube-controller-manager, kube-scheduler, and etcd. Once the Kubernetes control plane services are setup, the VirtualCluster's status.phase will be set to Initialized, and the spec.kubeconfig field will be populated."}),"\n",(0,n.jsx)(s.li,{children:"After the control plane is set up, the Kosmos-operator creates the Kosmos clusterTree service and configures the clusterTree's apiserver address to the current control plane using the kubeconfig value from the VirtualCluster."}),"\n",(0,n.jsx)(s.li,{children:"Once the clusterTree is ready, the Kosmos-operator manages the tenant's required node resources or computational resources like CPU and memory into the tenant's control plane based on the VirtualCluster's promoteResource configuration. Tenants can then manage resources in the control plane using the spec.kubeconfig."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"test-plan",children:"Test Plan"}),"\n",(0,n.jsx)(s.h3,{id:"unit-test",children:"Unit Test"}),"\n",(0,n.jsx)(s.h3,{id:"e2e-test",children:"E2E Test"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Test Case"}),(0,n.jsx)(s.th,{children:"Case Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Virtual Control Plane Creation"}),(0,n.jsx)(s.td,{children:"Test the creation of a virtual control plane through the VirtualCluster CRD"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Service Creation in Virtual Control Plane"}),(0,n.jsx)(s.td,{children:"Test the creation of services in the virtual control plane and their external functionality"})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8380:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/Kubernetes_in_Kubernetes-68a4983b483a83a8793f2fb6aea57bcc.svg"},2172:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>o});var n=t(1504);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);