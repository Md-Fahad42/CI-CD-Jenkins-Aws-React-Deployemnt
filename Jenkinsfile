node {
    def appDir = '/var/www/reactjs-app'

    stage('Clean Workspace'){
        echo 'Cleaning Jenkins Workspace'
        deleteDir()
    }

    stage('Clone Repo'){
        echo 'Cloning the repo'
        git(
            branch: 'main',
            url: 'https://github.com/Md-Fahad42/CI-CD-Jenkins-Aws-React-Deployemnt.git'
        )
    }

    stage('Deploy to EC2'){
        echo 'Deploying to EC2'
        sh """
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            rsync -av --delete 
            --exclude ='.git'
            --exclude ='node_module'
            / ${appDir}

            cd ${appDir} 
            sudo npm install
            sudo npm run build
            sudo fuser -k 3000/tcp || true
            npm run start
        """
    }
}