# API Whisperer

A game to practice creating Express APIs and using Postman.

[Intructions](https://docs.google.com/presentation/d/1O3L0HUA8i9hqcwBT0tTAL0QO69TGTWT6NjnfcNJ4hwM/edit)

## Getting the Keys

### POST /get-keys

```json
{
   "secret": STRING,
   "shares": INT,
   "threshold": INT 
}
```
Where `secret` is the string to encrypt, `shares` is the number of keys, and `threshold` is the number of keys needed to decrypt the secret


### POST /claim-victory

```json
{
  "keys": [ STRING ],
  "successURL": STRING
}
```

Where `keys` is an array of the keys to decryt, and `successURL` is an `POST` endpoint that the `api-judge` will send the decrypted secret to.



