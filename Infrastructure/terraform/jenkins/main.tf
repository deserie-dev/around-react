terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}

resource "aws_instance" "around-react-jenkins" {
  ami           = "ami-0e472ba40eb589f49"
  instance_type = "t2.micro"
  key_name      = "around-react"

  tags = {
    "Name" = "around-react"
  }

}
