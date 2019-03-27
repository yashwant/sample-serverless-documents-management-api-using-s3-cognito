# Sample Serverless Document Management using S3 - Sample App(API)
This is just a sample serverless app to access private files to S3 Bucket with cognito authentication.

## Steps to run the app
#### Clone to your machine
```
$ git clone https://github.com/yashwant/sample-serverless-documents-management-api-using-s3-cognito

```

#### Install dependencies
```
$ cd sample-serverless-documents-management-api-using-s3-cognito

$ npm install
```

#### Rename aws_params.tp to aws_params.yml & change parameters accordingly 
```
$ mv aws_params.tp aws_params
```

## Steps and Get Credentials
#### Deploy
```
$ serverless deploy
```

#### Get Identity pool id
```
$ aws cognito-idp 
```

#### Get User pool id
```
$ aws cognito-idp list-user-pools --max-results 20
```

#### Get client id
```
$ aws cognito-idp list-user-pool-clients  --user-pool-id <pool id>
```

#### Create new user
```
$ aws cognito-idp sign-up --region us-east-1 --client-id <client id> --username <email> --password <password>

```

#### Confirm user
```
$ aws cognito-idp admin-confirm-sign-up --region us-east-1 --user-pool-id <pool id> --username <user email>

```

## Test Using above credentials
Use [sample-s3-file-upload-download](https://github.com/yashwant/sample-s3-file-upload-download-with-cognito-amplify) react sample code to access these apis
