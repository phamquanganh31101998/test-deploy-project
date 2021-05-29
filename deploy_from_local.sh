cd /home/quanganh/Desktop
ls
ssh -i "first-instance.pem" ec2-user@ec2-18-217-174-63.us-east-2.compute.amazonaws.com
sudo su
cd Project/test-deploy-project
./run_projecy.sh
