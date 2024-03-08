"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[192],{7140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=n(7624),s=n(2172);const o={id:"mcn-connectivity",title:"Multi-cluster Network Connectivity"},i="Multi-cluster Network Connectivity",l={id:"v0.2.0/tutorials/mcn-connectivity",title:"Multi-cluster Network Connectivity",description:"The Clusterlink design of the Kosmos multi-cluster solution aims to interconnect the nodes and resources of multiple Kubernetes clusters, forming a unified resource pool.",source:"@site/docs/v0.2.0/tutorials/multi-cluster-network.md",sourceDirName:"v0.2.0/tutorials",slug:"/v0.2.0/tutorials/mcn-connectivity",permalink:"/website/v0.2.0/tutorials/mcn-connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v0.2.0/tutorials/multi-cluster-network.md",tags:[],version:"current",frontMatter:{id:"mcn-connectivity",title:"Multi-cluster Network Connectivity"},sidebar:"tutorialSidebar",previous:{title:"Multi-cluster Scheduler",permalink:"/website/v0.2.0/tutorials/mc-scheduler"},next:{title:"Multi-cluster PV/PVC Dynamic Storage",permalink:"/website/v0.2.0/tutorials/pv-pvc-dynamic-storage"}},c={},a=[{value:"Multi-cluster Container Network Solution",id:"multi-cluster-container-network-solution",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Design",id:"design",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Kosmos",id:"install-kosmos",level:4},{value:"Join the Leaf Cluster",id:"join-the-leaf-cluster",level:4},{value:"Across Cluster L3 Network Connectivity",id:"across-cluster-l3-network-connectivity",level:3},{value:"Gateway Mode",id:"gateway-mode",level:4},{value:"P2P Mode",id:"p2p-mode",level:4},{value:"Starting ClusterLink",id:"starting-clusterlink",level:3},{value:"Using P2P Mode",id:"using-p2p-mode",level:4},{value:"Create Test Pods",id:"create-test-pods",level:4},{value:"One-Click Diagnostic for Cluster Connectivity",id:"one-click-diagnostic-for-cluster-connectivity",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"multi-cluster-network-connectivity",children:"Multi-cluster Network Connectivity"}),"\n",(0,r.jsx)(t.p,{children:"The Clusterlink design of the Kosmos multi-cluster solution aims to interconnect the nodes and resources of multiple Kubernetes clusters, forming a unified resource pool.\r\nOne of the foundations for achieving this is the need to build a multi-cluster network architecture to meet the communication requirements between different clusters."}),"\n",(0,r.jsx)(t.h2,{id:"multi-cluster-container-network-solution",children:"Multi-cluster Container Network Solution"}),"\n",(0,r.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Clusterlink includes two network modes: Gateway and P2P. In the Gateway mode, when a data packet is sent by a Pod on the left, it first goes through the vx-local tunnel within the cluster to reach the gateway node of that cluster.\r\nIt then traverses the cross-cluster tunnel to reach the counterpart cluster.\r\nOnce the data packet arrives at the counterpart cluster, it is handled by the CNI and follows the single-cluster network to reach the target Pod.\r\nThis mode has its advantages and disadvantages.\r\nThe advantage is that each cluster only needs one node (or two for high availability) to provide external access, making it suitable for multi-cloud and hybrid cloud scenarios.\r\nThe disadvantage is that due to the longer network path, there is a certain performance loss.\r\nTo address this issue, Clusterlink provides the P2P mode, which is suitable for scenarios with higher network performance requirements.\r\nIn this mode, the data packets are directly sent to the node where the counterpart Pod is located.\r\nAdditionally, the P2P and Gateway modes can be used in combination."}),"\n",(0,r.jsx)(t.h3,{id:"design",children:"Design"}),"\n",(0,r.jsx)(t.p,{children:"The architecture of the Kosmos multi-cluster network Gateway solution is as follows:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"MCN GW_Architecture.png",src:n(208).c+"",width:"1019",height:"287"})}),"\n",(0,r.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,r.jsx)(t.p,{children:"It provides strong compatibility, requiring only one node per cluster (or two for high availability) to provide external access, making it suitable for cross-cloud scenarios."})}),"\n",(0,r.jsx)(t.p,{children:"The architecture of the Kosmos multi-cluster network P2P solution is as follows:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"MCN P2P_Architecture.png",src:n(4032).c+"",width:"1019",height:"310"})}),"\n",(0,r.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,r.jsx)(t.p,{children:"It has shorter network paths and better performance, making it suitable for fully interconnected Underlay scenarios."})}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.h4,{id:"install-kosmos",children:"Install Kosmos"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the Kosmos Quick Start documentation ",(0,r.jsx)(t.a,{href:"https://github.com/kosmos-io/kosmos",children:"https://github.com/kosmos-io/kosmos"})," and enable the ClusterLink module for multi-cluster networking. Using the kosmosctl tool:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"kosmosctl install --cni calico --default-nic eth0 (We build a network tunnel based on the network interface value passed by the arg default-nic)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"join-the-leaf-cluster",children:"Join the Leaf Cluster"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"kosmosctl join cluster --name cluster1 --kubeconfig ~/kubeconfig/cluster1-kubeconfig --cni calico --default-nic eth0 --enable-link\n"})}),"\n",(0,r.jsx)(t.h3,{id:"across-cluster-l3-network-connectivity",children:"Across Cluster L3 Network Connectivity"}),"\n",(0,r.jsx)(t.p,{children:"To achieve inter-cluster L3 network connectivity in Kosmos, at least two different cluster nodes from each cluster need to be able to communicate with each other at the host machine network level, and the clusters must be correctly deployed and support VXLAN or IPSec technologies."}),"\n",(0,r.jsx)(t.h4,{id:"gateway-mode",children:"Gateway Mode"}),"\n",(0,r.jsx)(t.p,{children:"In each Kubernetes cluster within the Kosmos federation, one node is elected as the Gateway (GW) node using the Elector module.\r\nThe GW nodes of the two clusters communicate through the vx-bridge tunnel (created by Kosmos) to establish connectivity.\r\nWithin each cluster, routing is handled by the GW node.\r\nCompared to the P2P mode, the GW mode has slightly lower network performance due to the additional packet encapsulation and decapsulation at the GW node.\r\nHowever, the advantage is that the routing table and FDB table of the cluster nodes can remain almost the same as before.\r\nTherefore, the GW mode is suitable for larger-scale multi-cluster scenarios where network performance is not critical."}),"\n",(0,r.jsx)(t.h4,{id:"p2p-mode",children:"P2P Mode"}),"\n",(0,r.jsx)(t.p,{children:"In the P2P mode, there is no need to use the Elector module.\r\nKosmos creates vx-bridge interfaces on all nodes of each cluster to achieve direct container network communication between nodes of different clusters.\r\nThe network performance in this mode is almost the same as in a single Kubernetes cluster.\r\nHowever, in the P2P mode, every node in the cluster needs to configure access rules for all nodes in the Kosmos federation, resulting in larger routing and FDB table sizes.\r\nTherefore, the P2P mode is suitable for scenarios that require higher network performance but have a smaller number of nodes in each cluster."}),"\n",(0,r.jsx)(t.h3,{id:"starting-clusterlink",children:"Starting ClusterLink"}),"\n",(0,r.jsx)(t.h4,{id:"using-p2p-mode",children:"Using P2P Mode"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"# Complete the steps in sections 'Install Kosmos' & 'Join the Leaf Cluster'\r\n# Check if the clusters resource has been created correctly\r\n[root@kosmos-control-cluster yaml]# kubectl --kubeconfig config-14 get clusters.kosmos.io\r\nNAME                     NETWORK_TYPE   IP_FAMILY\r\ncluster38                p2p            all\r\nkosmos-control-cluster   p2p            all\r\n\r\n# Check if the clusternodes resource has been created correctly\r\n[root@kosmos-control-cluster yaml]# kubectl get clusternodes.kosmos.io\r\nNAME                         ROLES         INTERFACE    IP\r\ncluster38-001                              bond0.1820   10.251.132.38\r\ncluster38-002                              bond0.1820   10.251.132.39\r\ncluster38-003                              bond0.1830   10.251.142.94\r\ncluster38-004                [\"gateway\"]   bond0.1830   10.251.142.95\r\nkosmos-control-cluster-001                 bond0.1820   10.251.132.14\r\nkosmos-control-cluster-002                 bond0.1820   10.251.132.15\r\nkosmos-control-cluster-003   [\"gateway\"]   bond0.1565   10.253.195.38\r\nkosmos-control-cluster-004                 bond0.1565   10.253.195.31\r\nkosmos-control-cluster-005                 bond0.1565   10.253.195.32\r\nkosmos-control-cluster-006                 bond0.1565   10.253.195.33\r\nkosmos-control-cluster-007                 bond0.1565   10.253.195.37\r\n\r\n# Check if the nodeconfigs resource has been created correctly\r\n[root@kosmos-control-cluster yaml]# kubectl get nodeconfigs.kosmos.io\r\nNAME                         AGE\r\ncluster38-001                14d\r\ncluster38-002                14d\r\ncluster38-003                14d\r\ncluster38-004                14d\r\nkosmos-control-cluster-001   48d\r\nkosmos-control-cluster-002   48d\r\nkosmos-control-cluster-003   49d\r\nkosmos-control-cluster-004   49d\r\nkosmos-control-cluster-005   45d\r\nkosmos-control-cluster-006   45d\r\nkosmos-control-cluster-007   45d\n"})}),"\n",(0,r.jsx)(t.h4,{id:"create-test-pods",children:"Create Test Pods"}),"\n",(0,r.jsx)(t.p,{children:"Verify the inter-cluster container network connectivity by creating Pods in the kosmos-control-cluster and cluster38 clusters.\r\nTo ensure the containers have common network utilities such as Ping and Curl, use the clusterlink-floater image.\r\nMore details about the Floater feature will be provided in subsequent sections. Here is a sample YAML to create the Pods:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:'---\r\napiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: clusterlink-floater\r\n  namespace: kosmos-system\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRole\r\nmetadata:\r\n  name: clusterlink-floater\r\nrules:\r\n  - apiGroups: [\'*\']\r\n    resources: [\'*\']\r\n    verbs: ["*"]\r\n  - nonResourceURLs: [\'*\']\r\n    verbs: ["get"]\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRoleBinding\r\nmetadata:\r\n  name: clusterlink-floater\r\nroleRef:\r\n  apiGroup: rbac.authorization.k8s.io\r\n  kind: ClusterRole\r\n  name: clusterlink-floater\r\nsubjects:\r\n  - kind: ServiceAccount\r\n    name: clusterlink-floater\r\n    namespace: kosmos-system\r\n---\r\napiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: clusterlink-floater\r\n  namespace: kosmos-system\r\nspec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      app: clusterlink-floater\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: clusterlink-floater\r\n    spec:\r\n      hostNetwork: false\r\n      serviceAccountName: clusterlink-floater\r\n      containers:\r\n      - name: floater\r\n        image: ghcr.io/kosmos-io/clusterlink-floater:v0.2.0-lts\r\n        imagePullPolicy: IfNotPresent\r\n        command:\r\n          - clusterlink-floater\r\n        securityContext:\r\n          privileged: true\r\n        env:\r\n          - name: "PORT"\r\n            value: "8889"\r\n          - name: "ENABLE_ANALYSIS"\r\n            value: "false"\r\n      affinity:\r\n        nodeAffinity:\r\n          requiredDuringSchedulingIgnoredDuringExecution:\r\n            nodeSelectorTerms:\r\n              - matchExpressions:\r\n                - key: kosmos.io/exclude\r\n                  operator: DoesNotExist\r\n      tolerations:\r\n      - effect: NoSchedule\r\n        operator: Exists\r\n      - key: CriticalAddonsOnly\r\n        operator: Exists\r\n      - effect: NoExecute\r\n        operator: Exists\n'})}),"\n",(0,r.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,r.jsx)(t.p,{children:"The provided test case in this section can only check the container network connectivity between nodes in two clusters.\r\nTo quickly test all nodes in the cluster, please refer to section 5."})}),"\n",(0,r.jsx)(t.p,{children:"Make sure the Pods are running successfully in the kosmos-control-cluster and cluster38 clusters:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"[root@kosmos-control-cluster yaml]# kubectl -n kosmos-system get pod\r\nNAME                                              READY   STATUS    RESTARTS   AGE\r\nclusterlink-agent-6qq4v                           1/1     Running   0          15d\r\nclusterlink-agent-6v9jm                           1/1     Running   0          15d\r\nclusterlink-agent-7zpf5                           1/1     Running   0          15d\r\nclusterlink-agent-84d68                           1/1     Running   0          15d\r\nclusterlink-agent-dj9q2                           1/1     Running   0          26h\r\nclusterlink-agent-r2zj4                           1/1     Running   0          15d\r\nclusterlink-agent-vlh2x                           1/1     Running   0          3d3h\r\nclusterlink-controller-manager-6774ddd58b-bcn7s   1/1     Running   0          15d\r\nclusterlink-elector-6b597b44f7-jrbg6              1/1     Running   0          15d\r\nclusterlink-elector-6b597b44f7-mj882              1/1     Running   0          15d\r\nclusterlink-floater-7dcb47579-lddgc               1/1     Running   0          77s\r\nclusterlink-network-manager-6489597986-h74m4      1/1     Running   0          15d\r\nclustertree-cluster-manager-6778bd7b6c-mwhpj      1/1     Running   0          5h45m\r\nkosmos-operator-c88898f66-b8mjl                   1/1     Running   0          15d\r\nkosmos-scheduler-7dcfd94bf7-2km8m                 1/1     Running   0          8d\r\n\r\n[root@cluster38 yaml]# kubectl -n kosmos-system get pod\r\nNAME                                              READY   STATUS    RESTARTS   AGE\r\nclusterlink-agent-jsv2b                           1/1     Running   0          14d\r\nclusterlink-agent-qncxt                           1/1     Running   0          14d\r\nclusterlink-agent-rzngm                           1/1     Running   0          14d\r\nclusterlink-agent-s252r                           1/1     Running   0          14d\r\nclusterlink-controller-manager-77fbbd9f78-bz47t   1/1     Running   0          14d\r\nclusterlink-elector-86b49775b5-x4gsp              1/1     Running   0          14d\r\nclusterlink-elector-86b49775b5-z4lb5              1/1     Running   0          14d\r\nclusterlink-floater-7dcb47579-jx85c               1/1     Running   0          16s\n"})}),"\n",(0,r.jsx)(t.p,{children:"Get the IP addresses of the two Pods and enter the container of either Pod to execute the Ping command to verify the inter-cluster container network connectivity.\r\nHere is an example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"[root@cluster38 yaml]# kubectl -n kosmos-system get pod clusterlink-floater-7dcb47579-jx85c -oyaml |grep ip\r\n  - ip: 10.224.12.253\r\n  - ip: fd11:1111:1114:1111:6ea:7333:4573:f17d\r\n\r\n[root@kosmos-control-cluster yaml]# kubectl -n kosmos-system exec -it clusterlink-floater-7dcb47579-lddgc -- sh\r\n/ # ping 10.224.12.253\r\nPING 10.224.12.253 (10.224.12.253): 56 data bytes\r\n64 bytes from 10.224.12.253: seq=0 ttl=62 time=0.592 ms\r\n64 bytes from 10.224.12.253: seq=1 ttl=62 time=0.362 ms\r\n64 bytes from 10.224.12.253: seq=2 ttl=62 time=0.388 ms\r\n64 bytes from 10.224.12.253: seq=3 ttl=62 time=0.373 ms\r\n^C\r\n--- 10.224.12.253 ping statistics ---\r\n4 packets transmitted, 4 packets received, 0% packet loss\r\nround-trip min/avg/max = 0.362/0.428/0.592 ms\r\n/ # ping -6 fd11:1111:1114:1111:6ea:7333:4573:f17d\r\nPING fd11:1111:1114:1111:6ea:7333:4573:f17d (fd11:1111:1114:1111:6ea:7333:4573:f17d): 56 data bytes\r\n64 bytes from fd11:1111:1114:1111:6ea:7333:4573:f17d: seq=0 ttl=62 time=0.679 ms\r\n64 bytes from fd11:1111:1114:1111:6ea:7333:4573:f17d: seq=1 ttl=62 time=0.492 ms\r\n64 bytes from fd11:1111:1114:1111:6ea:7333:4573:f17d: seq=2 ttl=62 time=0.406 ms\r\n64 bytes from fd11:1111:1114:1111:6ea:7333:4573:f17d: seq=3 ttl=62 time=1.488 ms\r\n^C\r\n--- fd11:1111:1114:1111:6ea:7333:4573:f17d ping statistics ---\r\n4 packets transmitted, 4 packets received, 0% packet loss\r\nround-trip min/avg/max = 0.406/0.766/1.488 ms\n"})}),"\n",(0,r.jsx)(t.h3,{id:"one-click-diagnostic-for-cluster-connectivity",children:"One-Click Diagnostic for Cluster Connectivity"}),"\n",(0,r.jsx)(t.p,{children:"The Cluster Connectivity Diagnostic (Floater) feature was developed to address the challenge of continuously checking the network connectivity between multiple Kubernetes clusters when using Kosmos.\r\nWhen the number of clusters is small, such as only two clusters, this task may not be difficult.\r\nHowever, when the number of clusters reaches 5000 or even more, even the most enthusiastic operations personnel would find it nearly impossible to complete this task."}),"\n",(0,r.jsx)(t.p,{children:"To address this, we designed the Floater feature, which floats on every node in a cluster.\r\nThrough the kosmosctl tool, you can diagnose the network connectivity between multiple Kubernetes clusters with just one command.\r\nThe architecture of the ClusterLink Floater is as follows:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"MCN Floater_Flow.png",src:n(8940).c+"",width:"1261",height:"836"})}),"\n",(0,r.jsx)(t.p,{children:'The kosmosctl command line tool provides a one-click diagnostic command "dr" to easily validate the network connectivity between multiple Kubernetes clusters, including but not limited to host network, container network, and native cluster network.\r\nHere is an example:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"# Verify inter-cluster Underlay network\r\nkosmosctl dr -r ghcr.io/kosmos-io/komos --src-kubeconfig root-config --dst-kubeconfig cluster38-config --host-network\r\n\r\n# Verify inter-cluster container network\r\nkosmosctl dr -r ghcr.io/kosmos-io/komos --src-kubeconfig root-config --dst-kubeconfig cluster38-config\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8940:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/MCN_Floater_Flow-5eacf7d674beab610c33fa93723b0c35.png"},208:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/MCN_GW_Architecture-ad8eb15c31035ee0af215d29bceb17cf.png"},4032:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/MCN_P2P_Architecture-9554e1fd1efbac70fe5576731eb95ed3.png"},2172:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var r=n(1504);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);