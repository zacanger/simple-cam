# simple-cam

ABANDONED.

For a simple webcam viewer, I recommend using a little script:

```shell
#!/usr/bin/env bash

[[ -t 1 ]] || { exec >/dev/null; exec 2>&1; }
ffplay -f v4l2 -framerate 25 -video_size 640x480 -i ${1:-/dev/video0} -vf hflip
```

Electron is too heavy-handed, full of security issues, and TBH you should have
tape on your webcam anyway.

----

Very simple webcam viewer for desktop.

----

## Installation:

`npm i -g simple-cam`

## Usage:

`simple-cam`

[LICENSE](./LICENSE.md)
