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
