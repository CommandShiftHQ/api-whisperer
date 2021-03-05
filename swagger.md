# api-judge
Endpoints for encrypting and decrypting secrets. For use with the Manchester Codes Api Whisperer game

## Version: 1.0.0

**License:** [MIT](https://opensource.org/licenses/MIT)

### /get-keys

#### POST
##### Summary

returns keys which contain encrypted secret

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| PostSecretRequest | body | encrypt a secret and specify the number of keys and threshold for decryption | No | [PostSecretRequest](#postsecretrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | secret successfully encrypted | [PostSecretResponse](#postsecretresponse) |

### /claim-victory

#### POST
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ClaimVictoryRequest | body | post keys for decryption and an api endpoint to POST the secret to | No | [ClaimVictoryRequest](#claimvictoryrequest) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | keys successfully decrypted | [ClaimVictoryResponse](#claimvictoryresponse) |
| 400 | bad request | [ClaimVictoryResponse](#claimvictoryresponse) |

### Models

#### PostSecretRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| secret | string | the secret to encrypt | Yes |
| shares | integer | the number of keys to generate | Yes |
| threshold | integer | the number of keys required to decrypt the secret | Yes |

#### PostSecretResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| keys | [ string ] |  | Yes |

#### ClaimVictoryRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| keys | [ string ] |  | Yes |
| successURL | string | the api endpoint to POST the decrypted secret to | Yes |

#### ClaimVictoryResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string | instructions | Yes |
