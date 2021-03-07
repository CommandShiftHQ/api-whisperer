---
title: api-judge v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api-judge">api-judge v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Endpoints for encrypting and decrypting secrets. For use with the Manchester Codes Api Whisperer game

Base URLs:

* <a href="/">/</a>

License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<h1 id="api-judge-encrypt">Encrypt</h1>

Endpoints for encrypting secrets

## post__get-keys

`POST /get-keys`

*returns keys which contain encrypted secret*

> Body parameter

```json
{
  "secret": "string",
  "shares": "string",
  "threshold": "string"
}
```

<h3 id="post__get-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|encrypt a secret and specify the number of keys and threshold for decryption|
|» secret|body|string|true|none|
|» shares|body|string|true|none|
|» threshold|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "keys": [
    "string"
  ]
}
```

<h3 id="post__get-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|secret successfully encrypted|Inline|

<h3 id="post__get-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» keys|[string]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-judge-decrypt">Decrypt</h1>

Endpoints for decrypting secrets

## post__claim-victory

`POST /claim-victory`

> Body parameter

```json
{
  "keys": [
    "string"
  ],
  "successURL": "string"
}
```

<h3 id="post__claim-victory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|post keys for decryption and an api endpoint to POST the secret to|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="post__claim-victory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|keys successfully decrypted|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|bad request|Inline|

<h3 id="post__claim-victory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|instructions|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|instructions|

<aside class="success">
This operation does not require authentication
</aside>

