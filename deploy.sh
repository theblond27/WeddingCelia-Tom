echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* quentin@167.114.36.124:/var/www/celiatomoakiwedding.com/

echo "Done!"