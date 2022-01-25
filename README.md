# Reacti-Vitae - Resume Builder
Reacti-Vitae is a react based Resume Generator. Reacti-Vitae is 
currently limited to one theme. The process of personalizing this resume template is
as simple as modifying the `src/data.js` file.

### Example
![2022-01-08-152155_2843x1334_scrot](https://user-images.githubusercontent.com/36154121/148639877-d6129245-68df-4503-857d-f864aa77769f.png)


checkout the full resume at : https://www.sree.dev/resume_of_sreedev_kodichath.pdf

### Usage

Modify the `src/data.js` file to update the data on the generated resume.

Requirements:
- node @ v16.6.1
- yarn @ 1.22.15

```sh
  git clone https://github.com/sreedevk/reacti-vitae # clone this repo
  cd reacti-vitae                                    # step into the project dir
  yarn install                                       # install node dependencies
  NODE_OPTIONS=--openssl-legacy-provider yarn start  # start the development server
```

Visit `http://localhost:3000`
