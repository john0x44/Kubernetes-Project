# K8SPodLogger

Testing and utilizing my 'K8SPodLogger' application with Kubernetes pods. 

## A websocket for pod connection logging

A websocket will be used on the host machine (my machine) to check for the pod connections. This is a simple demonstration for logging the pod connection and should not be used as an real implementation this is just for testing purposes. View the 'k8s-pod-test' folder in the previous directory and you can add your host machine IP(your computer) in the 'index.mjs' file where it says "ADD_HOST_MACHINE_HERE", before starting the server view 'websocket' folder in 'K8SPodLogger' directory and make sure you install the required dependencies viewed in 'package.json' file which are: express, http, os, websocket. After installing the required dependencies start the server. 

REMEMBER:
NOTE: Before starting the K8SPodLogger software, run 'wsocketServer.js' a client connection can be tested with 'wsocketClient.js' make sure you add your host machine IP in "ADD_HOST_MACHINE_HERE" in 'wsocketClient.js'.
NOTE: make sure you install the required dependencies viewed in 'package.json' file in 'websocket' folder (required packages which are: express, http, os, websocket)

## Building new docker file with artifacts

![Building New Docker File](https://i.gyazo.com/34bc9632268f480be36636ae469a9bc7.png)

Demonstrating process of building a new Docker file with the necessary artifacts for the Kubernetes deployment.

## Pushing docker file to DockerHub

![Pushing docker file to DockerHub](https://i.gyazo.com/7ca8930517200833f76222f5bab094dd.png)

Demonstrating the process of pushing the Docker file to DockerHub, making the image available for deployment.

## Image available on DockerHub

![Image Available on DockerHub](https://i.gyazo.com/e096460e3f807f331019fc921dfb6c33.png)

Confirms the successful availability of the Docker image on DockerHub for deployment in the Kubernetes cluster.

## Creating new deployment with DockerHub image

![Creating new deployment with DockerHub image](https://i.gyazo.com/3c8b322d75d1fceed533587c28e35469.png)

Description: The image showcases the creation of a new deployment in the Kubernetes cluster, setting the image from DockerHub as the container for the deployment.

## Exposing deployment and creating ClusterIP

![Exposing deployment and creating ClusterIP](https://i.gyazo.com/1aedd317f2195b96b721e34217a8d618.png)

Demonstrates the process of exposing the deployment, which creates a ClusterIP, and setting up the external port for connections to the deployment.

## Setting new image and checking rollout status

![Setting new image and checking rollout status](https://i.gyazo.com/4ddfccc11d5cf92006c43046922b22fb.png)

Demonstrating the update of the image for the deployment (after making some modifications to 'index.mjs' file) and checks the rollout status.

## Creating load balancer service

![Creating load balancer service](https://i.gyazo.com/c2584ac567d8401b912cc3ea4576de5f.png)

Demonstrating the creation of a load balancer service in the Kubernetes cluster, enabling automatic load balancing for the deployment.

## Opening a web socket and connecting to K8SPodLogger

![Opening WebSocket and Connecting to K8SPodLogger](https://i.gyazo.com/6e92abe33391f837b7ac3f40f33e0ce2.gif)

Demonstrating the opening of a web socket server on the host machine and connecting to the socket from the 'K8SPodLogger' QT application. The 'K8SPodLogger' software, was developed using the Qt framework and utilizing QtWebSockets, the application listens to received messages from the WebSocket server about potential pod connections. The build files for the application, as well as the Qt 'K8SPodLogger' deployable folder, are included in the repository for easy deployment and usage. Must have Qt installed on your machine in order to run the application successfully please visit https://www.qt.io/download to download.

## Testing pod connection from replica set

![Testing pod connection from replica set](https://i.gyazo.com/28c1ba47e449086d11e6d37a30b074d6.gif)

Demonstrating the testing of the pod connection from the replica set in the Kubernetes cluster. The connection is load-balanced, and as the pod is switched, the load balancer automatically directs the incoming requests to different pods within the Replica Set. This demonstrates the scalability and automatic load balancing capabilities of the Kubernetes cluster
