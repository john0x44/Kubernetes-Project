# Kubernetes Concepts 

This readme showcases various Kubernetes example concepts I have learned and implemented. The following sections provide a brief description of each concept and shows the imperative approach to using "kubectl" commands. The clarity approach can be used as well to achieve deployment results by utilizing YAML configuration files. 

My K8s project can be found in this directory called "K8SPodLogger" please read the "readme"
"k8s-pod-test" folder has been included as well to test with the "K8SPodLogger" software

## Creating a new deployment 

![Connection to a Pod](https://i.gyazo.com/3c8b322d75d1fceed533587c28e35469.png)

Demonstrating an example of creating a deployment called 'k8-test-pod' and setting a Docker image from my Docker repository. 

## Connection to a pod

![Connection to a Pod](https://i.gyazo.com/b0a623c755e3df1212a4516c8653ca8d.png)

Demonstrating the successful connection to a pod within the Kubernetes cluster.

## Scaling nodes and automatic load balancing

![Scaling nodes and automatic load balancing](https://i.gyazo.com/1424c6f7ee5aef32f4198d54e0456ffc.png)

Demonstrating the scaling of nodes within the Kubernetes cluster and the automatic load balancing between these nodes. Each replica is identified by a unique hash, indicating its membership in the scaled replica set showing the same hash.

## Exposing deployment at node IP address and random pod Connection

![Exposing deployment and random pod connection](https://i.gyazo.com/8ae916e1b22e32f3440800896bd45ca6.png)

Demonstrating deployment being exposed at the IP address of the node, allowing for random connections to running pods by utilizing the type as NodePort.

## Exposing deployment as load balancer

![Exposing deployment and random pod connection](https://i.gyazo.com/848241911c6422225995334949b0241c.png)

Demonstrating the deployment being exposed as a load balancer in the Kubernetes cluster. It demonstrates how the load balancer evenly distributes incoming traffic to the available pods. Additionally, it highlights the ability to establish random connections to running pods through the load balancer.

## Rolling out deployment

![Rolling out deployment](https://i.gyazo.com/e974e2f1868d6459c7de4b6b87de7409.png)

Demonstrating the process of rolling out a deployment, ensuring a smooth transition to the new version of the application.

## Checking rolled updates

![Checking rolled updates](https://i.gyazo.com/6ff070c5b07c253a1db02ffe3e5a67ab.png)

Checking rolled updates in the Kubernetes cluster, ensuring successful deployments.

## Checking Rollout Status

![Checking rollout status](https://i.gyazo.com/edfe332bab1926b14c95a9e3c57d2a25.png)

Checking the rollout status of a deployment, monitoring the progress and ensuring stability.

## Kubernetes replica sets with new and old Images

![Kubernetes replica sets](https://i.gyazo.com/f5822896bc2033d779684d2b11b5ab3e.png)

Shows the Kubernetes dashboard and K8s replica sets with both new and old images, showcasing the ability to revert back to the previous version if necessary.

## Connection through Different Deployments

![Connection through different deployments](https://i.gyazo.com/7a63104222a3ae1a9e4aae9e96302e0d.png)

Demonstrating the capability to establish connections through different deployments within the Kubernetes cluster.

## Resolving service name to corresponding cluster IP

![Resolving service name](https://i.gyazo.com/ea5fc85c42f98f416621b1ffb1dbbc46.png)

Resolving the name of a service to the corresponding cluster IP address in the Kubernetes cluster.
