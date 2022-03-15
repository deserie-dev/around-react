# Around The U.S.

## [Check out this project live!](https://deserie-around-react.netlify.app/)

---

## Overview

- ### This project is a photo sharing application where users can create a custom profile by adding their own profile picture, name and occupation.

- ### After recent updates, connecting the page to to a server with an API, this hub now displays many more photos from users all over the world documenting their own adventures all around the world. This page also allows a user to update their profile and like photos. They can update their name and title via a popup form and they can like photos by clicking the hearts displayed below each photo.

- ### Users can also delete their photos if they so choose. Since all this information is stored in a back-end server the state of the page persists after refresh.

---

## DevOps

- Created a Docker image for the app and deployed the image via SSH from Jenkins to a web server on AWS.
- Used Terraform to provision a Jenkins server and an EC2 instance.
- Configured both servers automatically using Ansible.

---

1. Used Terraform to provision 2 EC2 instances on AWS. One will is the Jenkins server and the other, the webserver. The Terraform code can be found inside the Infrastructure folder.

![](/images/tf-1.png)

![](/images/ec2-1.png)

---

2. Configured my Jenkins server and the webserver using 2 Ansible playbooks - provision_jenkins.yaml and provision_webserver.yaml. These can be found in the Infrastructure folder, under ansible.

---

3. Logged into my Jenkins instance and installed the SSH plugin. Added credentials (private key) and set up SSH profile for the webserver.

![](/images/jenkins-1.png)

---

4. Created a Dockerfile, built and pushed the image to Docker Hub. Back inside my Jenkins server I created a new Freestyle job, added a build step ('Execute shell script on remote host using SSH'), and entered a _docker run_ command to start up my container based off the image on Docker Hub.

![](/images/docker-1.png)

![](/images/docker-2.png)

![](/images/jenkins-2.png)

### _This is a React version a [previous project](https://github.com/deserie-dev/web_project_4) that I made using advanced JavaScript_

_Because of cost, all AWS resources have since been destroyed and the site is now hosted on Netlify_
