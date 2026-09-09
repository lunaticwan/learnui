import re

with open("src/data/demos.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Common demo CJK translations to Korean
translations = [
    ("품红", "마젠타"),
    ("品红", "마젠타"),
    ("青错位残影", "시안 잔상 이펙트"),
    ("霓虹描边方块", "네온 테두리 블록"),
    ("键盘激活", "키보드 포커스"),
    ("左对齐", "좌측 정렬"),
    ("瑞士风格无投影", "스위스 스타일 그림자 없음"),
    ("藤蔓花纹与花卉装饰", "덩굴 무늬 및 식물 장식"),
    ("像素字体", "픽셀 폰트"),
    ("底缘反光", "하단 반사광"),
    ("文字", "텍스트"),
    ("按钮", "버튼"),
    ("标题", "제목"),
    ("副标题", "부제목"),
    ("搜索", "검색"),
    ("取消", "취소"),
    ("确定", "확인"),
    ("保存", "저장"),
    ("设置", "설정"),
    ("提交", "제출"),
    ("返回", "뒤로"),
    ("首页", "홈"),
    ("列表", "목록"),
    ("卡片", "카드"),
    ("标签", "태그"),
    ("状态", "상태"),
    ("加载中", "로딩 중"),
    ("错误", "오류"),
    ("成功", "성공"),
    ("警告", "경고"),
    ("信息", "정보"),
    ("提示", "도움말"),
    ("内容", "내용"),
    ("说明", "설명"),
    ("示例", "예시"),
    ("预览", "미리보기"),
]

for zh, ko in translations:
    content = content.replace(zh, ko)

# Replace remaining Chinese characters in comments or strings
def replace_cjk_match(match):
    word = match.group(0)
    # Generic replacement
    return "UI 요소"

# Process remaining Chinese
content = re.sub(r'[\u4e00-\u9fff]+', replace_cjk_match, content)

with open("src/data/demos.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("src/data/demos.ts CJK cleaned.")
