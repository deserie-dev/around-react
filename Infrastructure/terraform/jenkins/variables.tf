variable "region" {
  type        = string
  description = "AWS region where all resources will be created"
  default     = "us-east-1"
}

variable "default_tags" {
  type        = map(string)
  description = "Map of default tags to assign to resources"
  default = {
    "project" = "Deserie: Around React"
  }
}

variable "instance_type" {
  type        = string
  description = "Type of instance"
  default     = "t2.micro"
}

variable "ami_id" {
  type        = string
  description = "ID of machine image"
  default     = "ami-0a940cb939351ccca"
}
