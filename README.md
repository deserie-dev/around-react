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

### _This is a React version a [previous project](https://github.com/deserie-dev/web_project_4) that I made using advanced JavaScript_
