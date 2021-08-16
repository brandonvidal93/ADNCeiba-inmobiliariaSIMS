pipeline {

    agent {
        label 'Slave_Induccion'
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '3'))
        disableConcurrentBuilds()
    }

    tools {
        jdk 'JDK8_Centos'
        gradle 'Gradle4.5_Centos'
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

        stage('Test') {
           steps{
              echo "------------>Testing<------------"
              sh 'npm run test:coverage'
           }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Static Code Analysis') {
            steps{
                echo '------------>Análisis de código estático<------------'
                withSonarQubeEnv('Sonar') {
                    sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
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