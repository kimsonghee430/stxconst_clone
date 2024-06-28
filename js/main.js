window.onload =function(){
    // 비주얼 이동 버튼 스크롤 기능
    // 변수 선언
    const visualButton = document.querySelector(".visual-bt");
    visualButton.addEventListener("click" ,function(){
        // scrollToSection() 함수는 특정 섹션으로 부드럽게 스크롤하는 기능
        scrollToSection("#business")
   
    })
     // scrollToSection() 함수 작성
     function scrollToSection(sectionID){
        // console.log(sectionID);
        // sectionID로 지정된 요소를 찾아서 section변수에 저장
        const section = document.querySelector(sectionID)
        if(section){
            section.scrollIntoView({ behavior: "smooth"})
        }
    }
}