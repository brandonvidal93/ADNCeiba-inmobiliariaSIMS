pipeline {
    agent {
        label 'Slave_Induccion'
    }

    triggers {
        pollSCM('@hourly')
    }

    options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
    disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
      steps {
        echo '------------>Checkout<------------'
        checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    gitTool: 'Default',
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        credentialsId: 'GitHub_brandonvidal93',
                        url:'https://github.com/brandonvidal93/ADNCeiba-inmobiliariaSIMS'
                    ]]
                ])
      }
        }

        stage('NPM Install') {
      steps {
        withEnv(['NPM_CONFIG_LOGLEVEL=warn']) {
          sh 'npm install'
        }
      }
        }

        stage('Build') {
      steps {
        sh 'npm run build'
      }
        }

        stage('Test') {
      steps {
        echo '------------>Testing<------------'
        sh 'npm run test:coverage'
      }
        }

        stage('Sonar Analysis') {
      steps {
        echo '------------>Analisis de código estático<------------'
        withSonarQubeEnv('Sonar') {
          sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=./sonar-project.properties"
        }
      }
        }
    }

    post {
        success {
      echo 'This will run only if successful'
        }
        failure {
      echo 'This will run only if failed'
      mail(to: 'brandon.vidal@ceiba.com.co', subject: "Failed Pipeline:${currentBuild.fullDisplayName}", body: "Something is wrong with ${env.BUILD_URL}")
        }
    }
}
