pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                    git 'https://github.com/Arindam8978/Cypress_Learning.git'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                    bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                    bat 'npm test'
            }
        }
    }
}

// agent any: This directive instructs Jenkins to allocate an executor (worker) to run the pipeline. any means that the pipeline can run on any available agent.

// checkout scm: This step checks out the source code from the version control system (SCM) defined in the Jenkins job configuration. It is used to fetch the latest code from the repository before running the build.