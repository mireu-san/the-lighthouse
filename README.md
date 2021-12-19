# 완성 후 소감: (약 1주 소모, 디버깅 1.5주 소모)
- grid 부분의 활용에 대한 이해도가 많이 개선되었습니다.
- 실수한 점이라면, styled-components 와 css 를 동시에 쓰는 것은 하지 않는게 좋다는 결론입니다.
- 다음 프로젝트 진행시에는, 처음부터 모바일 페이지를 먼저 구축한 후에 데스크탑 버전을 추가로 만드는 순서로 진행해야 겠다는 점.

# 성공한 점:
- media query 를 이용하여, PC/mobile view page 에 대한 사이즈별 반응형 전환.
- grid 에 대한 이해도 개선이 이뤄짐. 
- grid 작업 시, 미리 그림판을 열어서 간략한 구조를 그려둔 뒤, 진행 하는것이 혼란 방지에 도움이 되었음.
- 말썽을 일으키던 PC/mobile size 에 따른 grid container 가로/세로 정렬 활성화. (max-width: 990px) 에서 관측이 가능.

# (많이) 아쉬운 점:
- css 의 grid 에러 디버깅 및 모바일 뷰 media query 수습 과정.
- 이 과정에서, styled-components 와 css 가 난잡하게 엮이면서 큰 혼란을 겪음. (다시는 동시에 사용하지 않을 것)    
- 이 문제로 인해, 문제를 일으키는 코드명을 찾기가 굉장히 어려워 짐 (일주일 지연).
- media query 의 max-width 조정 시, mobile view 에 맞게 설정을 안함. 그로 인해, 실제 스마트폰 스크린 사이즈에서는 UI가 뭉개지는 현상이 관측됨. 
- grid-template-areas 를 프로젝트 진행 도중, 후반부에 이해하게 됨. 대공사를 해야 한다는 판단.
- 수정 하는게 제일 좋으나, 다시 만드는게 더 나을 것으로 판단. 여기서 종결.

# 얻은 점:
- 완벽하게 완성을 해내지 못한 것은 분명 개선할 점이긴 하나, 이제는 적어도 타인에게 문제의 원인과, 원하는 구성에 대한 과정 설명이 가능해졌다는 점에서 고무적임.
- stackoverflow 의 활용을 통한 자체 의문 해결. 한국 (예: 블로그) 리소스에 의존하지 않은 프로젝트.
- 지난 번과 이번에서 grid 및 css 때문에 번아웃 와서 정말 스트레스가 심했는데, 이번 프로젝트에서 최종적으로 이해가 됨에 따라 개선됨.

# 다음 계획:
- 내용은 그대로 두고, UI/styled-components 부분에서 '최대한 규칙적이게' 다시 새롭게 구축해 볼 생각이 있음.

# debudding note:

1. fontawesome gird space issue
Problem : No idea how to give some space in between each icons
solved : https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome (see fontaWesome document) 

2. How to make grid btw?
Problem: this revision step caused some traumatic depression.
solved:
display: grid, then give the following:
    padding: 10%; /* padding is core of layout's location */
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-content: center;

3. global font colour issue
Problem: looks like I set up #DB7093 colour somewhere else. CAN'T FIND IT.
Solved(Partially) : designate a specific font color on each page.  

4. use -> do not use emailjs
This is due to security reason. At moment, I am not sure how to encrypt my id section when the page communicate with its server side.
If I do not fully understand, then use this once I do so. Which is my philosophy.
https://www.emailjs.com/docs/examples/reactjs/

5. Bloody white space on the right hand side never disappears ONCE I resize it to mobile one.
https://stackoverflow.com/questions/4617872/white-space-showing-up-on-right-side-of-page-when-background-image-should-extend

6. How to relocate automatically as size fits? (responsive, 'works' section) 
- solved! use @media query.

7. mobile menu is not functioning!
- solved. Just applied new method by making a mobile page only js file. To activate this, use @media query.

Note:
Always use @media query to apply 'responsive web functionality'.
https://stackoverflow.com/questions/45536537/centering-in-css-grid
https://stackoverflow.com/questions/53393906/how-to-keep-content-in-a-container-but-extend-its-background-full-width-in-css

8. Mobile device screen issue ❌ (unsolved)
- debugging in progress. 
- this is due to @media's (max-width: 990px) only. Need to refer this URL and fix this compatibility issue whenever possible.
https://stackoverflow.com/questions/13550541/media-min-width-max-width