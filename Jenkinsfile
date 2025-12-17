node {
    def appDir = "/var/www/reactjs-app"

    stage('Clean Workspace') {
        deleteDir()
    }

    stage('Clone Repo') {
        git branch: 'main',
            url: 'https://github.com/Md-Fahad42/CI-CD-Jenkins-Aws-React-Deployemnt.git'
    }

    stage('Install Dependencies') {
        sh '''
            npm install
        '''
    }

    stage('Build App') {
        sh '''
            npm run build
        '''
    }

    stage('Deploy to EC2 Directory') {
        sh """
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            rsync -av --delete \
              --exclude='.git' \
              --exclude='node_modules' \
              dist/ ${appDir}/
        """
    }

    stage('Serve App') {
        sh """
            sudo fuser -k 3000/tcp || true
            npx serve -s ${appDir} -l 3000 &
        """
    }
}
