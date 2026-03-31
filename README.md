# ellahyesu.github.io

개인 포트폴리오/이력서 정적 웹사이트입니다. 별도 빌드 과정 없이 HTML, CSS, JavaScript 파일을 그대로 서빙해서 실행합니다.

## 구성

- `index.html`: 메인 랜딩 페이지
- `resume.html`: 메인 이력서 페이지
- `main.js`, `resume.js`: 페이지 동작 스크립트
- `style.css`, `resume.css`: 스타일 파일
- `imgs/`: 이미지 리소스
- `경력기술서.pdf`: 경력기술서 PDF

## 실행 방법

정적 파일 프로젝트라서 로컬 서버만 띄우면 됩니다.

### 1. Python으로 실행

프로젝트 루트에서 아래 명령을 실행합니다.

```powershell
python -m http.server 8000
```

브라우저에서 아래 주소로 접속합니다.

- 메인 페이지: `http://localhost:8000/`
- 이력서 페이지: `http://localhost:8000/resume.html`

### 2. 파일 직접 열기보다 로컬 서버를 권장하는 이유

`index.html`은 외부 Google Apps Script 방문자 카운트 API를 `fetch`로 호출합니다. 브라우저에서 파일을 직접 여는 방식(`file://`)보다 로컬 서버로 실행하는 편이 동작 확인에 더 안전합니다.

## 개발 메모

- 배포 형태는 GitHub Pages에 적합한 정적 사이트입니다.
- 외부 CDN(Google Fonts, Bootstrap, jQuery, Chart.js, Font Awesome)을 사용하므로 인터넷 연결이 필요합니다.
- `resume.html` 내부에는 현재 저장소에 없는 `sub.html` 링크가 포함되어 있어, 해당 링크는 로컬 실행 시 동작하지 않을 수 있습니다.

## 종료 방법

서버를 실행한 터미널에서 `Ctrl + C`를 누르면 종료됩니다.
