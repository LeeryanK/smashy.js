# smashy.js:
*...when your too lazy to manually concatenate your Javascript files*.


We've all been there. We want to separate our Javascript into multiple files, and then combine it into one, without the hassle of copying-and-pasting. Okay, well, maybe not all of us. But for the few of us (specifically, me), smashy is a simple solution that will do this for us. Here's how you use it:

1. Create `smashy.json` in your source directory. Here's the format:
```json
{
  "defaultExt": YOUR_DEFAULT_EXTENSION_HERE,
  "baseURL": YOUR_BASE_URL_HERE,
  "files": [
    FILE_HERE,
    ANOTHER_FILE,
    YET_ANOTHER_FILE,
    YOU_GET_THE_IDEA
  ]
}
```
2. Go to https://leeryank.github.io/smashy.js/.
3. Type in your base URL.
4. Download the file.

[Alertify.js](https://github.com/fabien-d/alertify.js) is used for aesthetically appealing alerts.
