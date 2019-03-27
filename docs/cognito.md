
##AWS Cognito idp commands

- Get Identity pool id
```
$ aws cognito-idp 
```

- Get User pool id
```
$ aws cognito-idp list-user-pools --max-results 20
```

- Get client id
```
$ aws cognito-idp list-user-pool-clients  --user-pool-id <pool id>
```

- Create new user
```
$ aws cognito-idp sign-up --region us-east-1 --client-id <client id> --username <email> --password <password>

```

- Confirm user
```
$ aws cognito-idp admin-confirm-sign-up --region us-east-1 --user-pool-id <pool id> --username <user email>

```
