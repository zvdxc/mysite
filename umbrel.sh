mkdir umbrel
cd umbrel
wget https://raw.githubusercontent.com/dockur/umbrel/refs/heads/master/compose.yml
mv compose.yml docker-compose.yml
echo docker compose up > start
docker compose up
