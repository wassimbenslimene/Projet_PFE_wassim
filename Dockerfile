# Pull base image 
From tomcat:8-jre8 

# Maintainer 
MAINTAINER "wassim_ben_slimene" 
COPY ./webapp.war /usr/local/tomcat/webapps

