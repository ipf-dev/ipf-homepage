# [iPortfolio Homepage](https://iportfolio.co.kr/)

회사 홈페이지 소스 코드 저장소입니다.

## Clone (SSH 권장)

Git 인증 이슈(예: deploy 시 HTTP 400)를 방지하기 위해, 이 저장소는 HTTPS가 아닌 SSH URL로 클론하는 것을 권장합니다.

```
git clone git@github.com:ipf-dev/ipf-homepage.git
```

이미 HTTPS로 클론했다면 아래 명령으로 SSH 원격으로 변경할 수 있습니다.

```
git remote set-url origin git@github.com:ipf-dev/ipf-homepage.git
```

## Branches

development - Contains the source code.\
master - Contains the static files after gatsby build. Used to make it into github page.

## Scripts

### `yarn start`

Runs the website in the development mode.\
Open [http://localhost:7001](http://localhost:7001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `public` folder.

### `yarn deploy`

Builds the app and deploys to master branch in ipf-dev/ipf-homepage repository.

### `yarn clean`

Gatsby cache clean script.
(locales 폴더 내 변경사항이 있을때 사용)

#### Before deployment, do the following

1. Update siteUrl in gatsby-config.js. This is the cname.
2. Update og:url and og:image in pages/index.tsx to match the cname.

## Folder Structure

```bash
src
├── api                 # api calls to get news and jobs data from culture.iportfolio.co.kr
├── assets
│   ├──files                # files to download onClick
│   └──images               # images organized based on pages
├── components          # all presentational components
├── containers          # container components that handles React states
├── layouts
│   ├──Typography           # function that returns css based on typography type
│   ├──colors               # stores colors
│   └──responsive           # conditions for tablet, desktop and high resolution
├── locales             # translations based on each language
│   ├──ko
│   └──en
├── pages               # import sections to create gatsby pages (folder name == path name)
└── sections            # imports components and containers to create sections of each page
static
└──og.png               # image used for open graph protocol
└──logo.png
```

## Trouble Shooting

### 배포 명령어 실행시 인증 에러(403) 발생 (macOS 환경)

gh-pages 명령어 실행시 Credential 정보를 macOS Keychain에 저장하고 참조합니다. 인증에 실패하고 있거나, 인증 과정에서 다른 계정 정보로 인증을 했다면 기존 정보를 초기화해서 재시도할 수 있습니다.

- 참고: [Updating credentials from the macOS Keychain
  ](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain)
