// AIN Teams – 화면 생성 Figma Plugin
// Home / DM / Files / Threads 4개 화면을 현재 페이지에 생성합니다.

(async () => {
  // ─── 폰트 로드 ──────────────────────────────────────────────
  let FF = 'Pretendard';
  let SM = { Regular: 'Regular', Medium: 'Medium', SemiBold: 'SemiBold', Bold: 'Bold' };

  try {
    for (const s of Object.values(SM)) {
      await figma.loadFontAsync({ family: 'Pretendard', style: s });
    }
  } catch (_) {
    try {
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
      await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });
      await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
      await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
      FF = 'Inter';
      SM = { Regular: 'Regular', Medium: 'Medium', SemiBold: 'Semi Bold', Bold: 'Bold' };
    } catch (_2) {
      await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
      await figma.loadFontAsync({ family: 'Roboto', style: 'Medium' });
      await figma.loadFontAsync({ family: 'Roboto', style: 'Bold' });
      FF = 'Roboto';
      SM = { Regular: 'Regular', Medium: 'Medium', SemiBold: 'Bold', Bold: 'Bold' };
    }
  }

  // ─── 유틸 ───────────────────────────────────────────────────
  const rgb = h => ({
    r: parseInt(h.slice(1, 3), 16) / 255,
    g: parseInt(h.slice(3, 5), 16) / 255,
    b: parseInt(h.slice(5, 7), 16) / 255,
  });
  const solid = (hex, op = 1) => [{ type: 'SOLID', color: rgb(hex), opacity: op }];

  function mkFrame(parent, name, x, y, w, h, hex, radius = 0) {
    const f = figma.createFrame();
    f.name = name; f.x = x; f.y = y; f.resize(w, h);
    f.fills = hex ? solid(hex) : [];
    if (radius) f.cornerRadius = radius;
    f.clipsContent = true;
    if (parent) parent.appendChild(f);
    return f;
  }

  function mkRect(parent, x, y, w, h, hex, radius = 0, op = 1) {
    const r = figma.createRectangle();
    r.x = x; r.y = y; r.resize(w, h);
    r.fills = hex ? solid(hex, op) : [];
    r.strokes = [];
    if (radius) r.cornerRadius = radius;
    if (parent) parent.appendChild(r);
    return r;
  }

  function mkEllipse(parent, x, y, w, h, hex) {
    const e = figma.createEllipse();
    e.x = x; e.y = y; e.resize(w, h);
    e.fills = hex ? solid(hex) : [];
    e.strokes = [];
    if (parent) parent.appendChild(e);
    return e;
  }

  function mkText(parent, x, y, chars, size, style, hex, maxW = 0) {
    const t = figma.createText();
    t.fontName = { family: FF, style: SM[style] || style };
    t.fontSize = size;
    t.fills = solid(hex);
    if (maxW) { t.textAutoResize = 'HEIGHT'; t.resize(maxW, 200); }
    t.characters = String(chars);
    t.x = x; t.y = y;
    if (parent) parent.appendChild(t);
    return t;
  }

  // ─── 색상 토큰 ───────────────────────────────────────────────
  const C = {
    rail: '#323234', sidebar: '#eef2f7', white: '#ffffff',
    purple: '#6e19de', purple2: '#5537ca',
    t1: '#323234', t2: '#44484c', t3: '#8d97a5',
    div1: '#dae0e7', div2: '#f0f2f5',
    badge: '#e85555', chanBg: '#ebe2fd',
    blue: '#2563eb', teal: '#0891b2',
    pink: '#db2777', green: '#16a34a',
    orange: '#ea580c', gray: '#6b7280',
    mint: '#00b89f', activeRow: '#f0eefa',
  };

  // ─── 레이아웃 상수 ────────────────────────────────────────────
  const W = 1440, H = 900;
  const RAIL = 60, SIDE = 270, MAIN = W - RAIL - SIDE; // 1110

  // ══════════════════════════════════════════════════════════════
  // 탭 레일
  // ══════════════════════════════════════════════════════════════
  function buildRail(parent, activeId = 'home') {
    const rail = mkFrame(parent, 'Tab Rail', 0, 0, RAIL, H, C.rail);

    // 로고
    const logo = mkFrame(rail, 'Logo', 18, 14, 24, 24, C.purple, 6);
    mkRect(logo, 5, 5, 14, 14, C.white, 2, 0.9);

    const TABS = [
      { id: 'home',     label: 'Home',     y: 62 },
      { id: 'dm',       label: 'DM',       y: 106, badge: '11' },
      { id: 'activity', label: 'Activity', y: 150, badge: '2' },
      { id: 'tools',    label: 'Tools',    y: 194 },
      { id: 'workflow', label: 'Workflow', y: 238 },
      { id: 'later',    label: 'Later',    y: 282 },
      { id: 'files',    label: 'Files',    y: 326 },
      { id: 'docs',     label: 'Docs',     y: 370 },
    ];

    for (const tab of TABS) {
      const active = tab.id === activeId;

      if (active) {
        const wrap = mkFrame(rail, '', 10, tab.y, 40, 40, C.white);
        wrap.fills = solid(C.white, 0.15);
        wrap.cornerRadius = 8;
        mkRect(wrap, 10, 10, 20, 20, C.white, 4);
      } else {
        mkRect(rail, 20, tab.y + 10, 20, 20, C.t3, 4, 0.55);
      }

      // 탭 이름
      const lbl = mkText(rail, 0, tab.y + 34, tab.label, 9, 'Regular', active ? C.white : C.t3);
      lbl.x = Math.max(2, Math.floor((RAIL - lbl.width) / 2));

      // 뱃지
      if (tab.badge) {
        const bW = tab.badge.length > 1 ? 22 : 16;
        const bx = 34;
        const bdg = mkFrame(rail, '', bx, tab.y - 4, bW, 14, C.badge, 7);
        const bt = mkText(bdg, 0, 2, tab.badge, 8, 'Bold', C.white);
        bt.x = Math.floor((bW - bt.width) / 2);
      }
    }

    // 유저 아바타
    mkEllipse(rail, 14, H - 46, 32, 32, '#a8b4c8');
  }

  // ══════════════════════════════════════════════════════════════
  // 사이드바 (홈 스타일)
  // ══════════════════════════════════════════════════════════════
  function buildSidebar(parent, activeItem = '') {
    const sb = mkFrame(parent, 'Sidebar', RAIL, 0, SIDE, H, C.sidebar);

    // 헤더
    mkRect(sb, 0, 55, SIDE, 1, C.div1);
    mkText(sb, 16, 18, 'comcom', 14, 'SemiBold', C.t1);
    mkRect(sb, SIDE - 52, 17, 20, 20, C.t2, 4, 0.3);
    mkRect(sb, SIDE - 26, 17, 20, 20, C.t2, 4, 0.3);

    let y = 64;

    // ── Threads ──
    const thActive = activeItem === 'threads';
    if (thActive) mkRect(sb, 0, y, SIDE, 36, C.purple, 0, 0.1);
    mkRect(sb, 14, y + 8, 20, 20, C.purple, 4, thActive ? 1 : 0.45);
    mkText(sb, 42, y + 10, 'Threads', 13, thActive ? 'SemiBold' : 'Regular', thActive ? C.t1 : C.t2);
    y += 36;

    // ── Channels ──
    mkRect(sb, 0, y, SIDE, 1, C.div2);
    y += 8;
    mkText(sb, 16, y + 4, 'Channels', 12, 'SemiBold', C.t3);
    y += 28;

    for (const ch of ['eat', 'general', 'government', 'kakaopaysecurities', 'random', 'schedule', 'timeline']) {
      mkText(sb, 14, y + 10, `# ${ch}`, 13, 'Regular', C.t2);
      y += 36;
    }

    // ── Direct Messages ──
    mkRect(sb, 0, y, SIDE, 1, C.div2);
    y += 8;
    mkText(sb, 16, y + 4, 'Direct Messages', 12, 'SemiBold', C.t3);
    y += 28;

    const DMS = [
      { name: 'Haechan Lee, Jiyoun...', color: C.purple, active: true },
      { name: 'EchoBot',               color: C.mint },
      { name: 'TimelineOrganizer',     color: C.blue },
      { name: 'Builder',               color: C.orange },
    ];
    for (const dm of DMS) {
      if (dm.active) mkRect(sb, 0, y, SIDE, 36, C.activeRow, 0, 0.5);
      mkEllipse(sb, 12, y + 8, 20, 20, dm.color);
      if (!dm.active) {
        // online dot
        mkEllipse(sb, 26, y + 22, 8, 8, '#3ec96b');
      }
      mkText(sb, 40, y + 10, dm.name, 13, dm.active ? 'SemiBold' : 'Regular', C.t2);
      y += 36;
    }

    // ── Agents ──
    mkRect(sb, 0, y, SIDE, 1, C.div2);
    y += 8;
    mkText(sb, 16, y + 4, 'Agents', 12, 'SemiBold', C.t3);
    y += 28;
    for (const ag of [
      { name: 'Builder',   color: C.orange },
      { name: 'EchoBot',   color: C.mint },
    ]) {
      mkEllipse(sb, 12, y + 8, 20, 20, ag.color);
      mkText(sb, 40, y + 10, ag.name, 13, 'Regular', C.t2);
      y += 36;
    }

    return sb;
  }

  // ══════════════════════════════════════════════════════════════
  // 공용: 인풋 바
  // ══════════════════════════════════════════════════════════════
  function buildInputBar(parent, placeholder) {
    const bar = mkFrame(parent, 'Input Bar', RAIL + SIDE, H - 80, MAIN, 80, C.white);
    mkRect(bar, 0, 0, MAIN, 1, C.div1);
    const box = mkFrame(bar, 'Input Box', 16, 12, MAIN - 32, 56, '#f5f7fa', 12);
    box.strokes = solid(C.div1);
    box.strokeWeight = 1;
    box.strokeAlign = 'INSIDE';
    mkText(box, 14, 18, placeholder, 14, 'Regular', C.t3);
    // 오른쪽 아이콘들
    mkRect(box, MAIN - 32 - 96, 18, 20, 20, C.t3, 4, 0.35);
    mkRect(box, MAIN - 32 - 68, 18, 20, 20, C.t3, 4, 0.35);
    mkRect(box, MAIN - 32 - 40, 18, 20, 20, C.t3, 4, 0.35);
    mkRect(box, MAIN - 32 - 12, 16, 24, 24, C.purple, 4, 0.9);
  }

  // ══════════════════════════════════════════════════════════════
  // 1. HOME SCREEN
  // ══════════════════════════════════════════════════════════════
  function buildHome(xOff, yOff = 0) {
    const scr = mkFrame(null, '1. Home Screen (Generated)', xOff, yOff, W, H, C.white);
    figma.currentPage.appendChild(scr);

    buildRail(scr, 'home');
    buildSidebar(scr, '');

    const main = mkFrame(scr, 'Main Content', RAIL + SIDE, 0, MAIN, H, C.white);

    // 채널 헤더
    mkRect(main, 0, 55, MAIN, 1, C.div1);
    mkText(main, 20, 16, '# general', 16, 'SemiBold', C.t1);
    for (const bx of [MAIN - 44, MAIN - 70, MAIN - 96]) {
      mkRect(main, bx, 16, 20, 20, C.t3, 4, 0.4);
    }

    // 메시지
    const MSGS = [
      { name: 'Haechan Lee',    time: '1:12 PM',   text: '청년다방 크림 차돌 떡볶이', color: '#9b59b6', y: 80,  reply: '2개의 댓글  ·  5월 16일 1:24 PM' },
      { name: 'Hyeonjeong Jun', time: '1:32 PM',   text: '야근하면서 차돌크림떡볶이 마스터에 관심 있으신 분? 특히 치즈밥리조또 (오늘은 아님...)', color: C.mint, y: 178 },
      { name: 'Finn',           time: '3:03 PM',   text: '진짜 폭력적인 비주얼이네요...', color: C.pink, y: 288 },
    ];

    for (const m of MSGS) {
      mkEllipse(main, 20, m.y, 32, 32, m.color);
      const nt = mkText(main, 60, m.y, m.name, 14, 'SemiBold', C.t1);
      mkText(main, 60 + nt.width + 8, m.y + 2, m.time, 12, 'Regular', C.t3);
      mkText(main, 60, m.y + 22, m.text, 14, 'Regular', C.t2, MAIN - 120);
      if (m.reply) {
        mkRect(main, 60, m.y + 62, 300, 28, C.sidebar, 6, 0.7);
        mkText(main, 72, m.y + 68, m.reply, 12, 'Regular', C.blue);
      }
    }

    buildInputBar(scr, '# general에 메시지 보내기');
    return scr;
  }

  // ══════════════════════════════════════════════════════════════
  // 2. DM SCREEN
  // ══════════════════════════════════════════════════════════════
  function buildDM(xOff, yOff = 0) {
    const scr = mkFrame(null, '2. DM Chat Screen (Generated)', xOff, yOff, W, H, C.white);
    figma.currentPage.appendChild(scr);

    buildRail(scr, 'dm');

    // DM 사이드바 (대화 목록)
    const dmSide = mkFrame(scr, 'DM Sidebar', RAIL, 0, SIDE, H, C.white);
    mkRect(dmSide, SIDE - 1, 0, 1, H, C.div1);
    mkRect(dmSide, 0, 55, SIDE, 1, C.div1);
    mkText(dmSide, 16, 18, 'DM', 16, 'SemiBold', C.t1);

    // 필터 탭
    let ftx = 16;
    for (const [i, ft] of ['전체', '사람', '봇'].entries()) {
      const active = i === 0;
      const fb = mkFrame(dmSide, '', ftx, 68, ft.length * 10 + 16, 28, active ? '#eef2f7' : '', 6);
      if (!active) fb.fills = [];
      mkText(fb, 8, 6, ft, 13, active ? 'SemiBold' : 'Regular', active ? C.t1 : C.t3);
      ftx += ft.length * 10 + 24;
    }

    // 대화 목록
    const CONVS = [
      { name: 'Haechan Lee, Jiyoun...', sub: '6월 12일', color: C.purple, active: true },
      { name: 'EchoBot',               sub: '오후 3:30', color: C.mint,   online: true },
      { name: 'TimelineOrganizer',      sub: '오전 10:21', color: C.blue,  online: true },
      { name: 'Builder',               sub: '어제',      color: C.orange, online: true },
    ];
    let cy = 110;
    for (const conv of CONVS) {
      if (conv.active) mkRect(dmSide, 0, cy, SIDE, 64, C.activeRow, 0, 0.5);
      mkEllipse(dmSide, 12, cy + 12, 36, 36, conv.color);
      if (conv.online) {
        const dot = mkEllipse(dmSide, 36, cy + 36, 12, 12, '#3ec96b');
        dot.strokes = solid(C.white);
        dot.strokeWeight = 2;
      }
      mkText(dmSide, 56, cy + 14, conv.name, 13, 'SemiBold', C.t1);
      mkText(dmSide, 56, cy + 34, conv.sub, 12, 'Regular', C.t3);
      cy += 64;
    }

    // DM 채팅 영역
    const chat = mkFrame(scr, 'DM Chat', RAIL + SIDE, 0, MAIN, H, C.white);
    mkRect(chat, 0, 55, MAIN, 1, C.div1);

    // 헤더
    mkEllipse(chat, 20, 12, 32, 32, C.purple);
    mkText(chat, 60, 14, 'Haechan Lee, Jiyoun...', 16, 'SemiBold', C.t1);
    mkEllipse(chat, 58, 36, 8, 8, '#3ec96b');
    mkText(chat, 70, 35, '온라인', 11, 'Regular', '#3ec96b');

    // 메시지
    const CHAT_MSGS = [
      { name: 'Haechan Lee',  time: '오후 2:12', text: '안녕하세요! 오늘 미팅 자료 준비하셨나요?', color: '#9b59b6', y: 80 },
      { name: 'Jiyoun',       time: '오후 2:14', text: '네, 거의 다 됐어요. 조금 있다가 공유해드릴게요.',   color: C.pink,   y: 148 },
      { name: 'Haechan Lee',  time: '오후 2:15', text: '감사합니다! 오후 3시에 뵐게요.',                   color: '#9b59b6', y: 216 },
    ];
    for (const m of CHAT_MSGS) {
      mkEllipse(chat, 20, m.y, 32, 32, m.color);
      const nt = mkText(chat, 60, m.y, m.name, 14, 'SemiBold', C.t1);
      mkText(chat, 60 + nt.width + 8, m.y + 2, m.time, 12, 'Regular', C.t3);
      mkText(chat, 60, m.y + 22, m.text, 14, 'Regular', C.t2);
    }

    buildInputBar(scr, 'Haechan Lee에게 메시지 보내기');
    return scr;
  }

  // ══════════════════════════════════════════════════════════════
  // 3. FILES SCREEN
  // ══════════════════════════════════════════════════════════════
  function buildFiles(xOff, yOff = 0) {
    const scr = mkFrame(null, '3. Files (Generated)', xOff, yOff, W, H, C.white);
    figma.currentPage.appendChild(scr);

    buildRail(scr, 'files');
    buildSidebar(scr, '');

    const main = mkFrame(scr, 'Files Main', RAIL + SIDE, 0, MAIN, H, C.white);
    mkRect(main, 0, 55, MAIN, 1, C.div1);
    mkText(main, 20, 16, 'Files', 18, 'SemiBold', C.t1);

    // 필터 탭
    let ftx = 16;
    for (const [i, ft] of ['전체', '최근 본 파일', '즐겨찾기', '캔버스'].entries()) {
      const active = i === 0;
      const fw = ft.length * 9 + 24;
      const fb = mkFrame(main, '', ftx, 68, fw, 28, active ? '#e3eaf2' : '', 14);
      if (!active) fb.fills = [];
      mkText(fb, 12, 6, ft, 13, active ? 'Medium' : 'Regular', active ? C.t1 : C.t3);
      ftx += fw + 8;
    }
    mkRect(main, 0, 104, MAIN, 1, C.div1);

    const FILES = [
      { name: 'IR Deck 2026.pdf',      meta: 'yeji  ·  2026년 6월 12일  ·  2.1 MB' },
      { name: 'Product Roadmap.docx',  meta: 'Haechan  ·  2026년 6월 10일  ·  1.4 MB' },
      { name: 'Design System.fig',     meta: 'Jiyoun  ·  2026년 6월 8일  ·  8.7 MB' },
      { name: 'Meeting Notes.docx',    meta: 'Finn  ·  2026년 6월 7일  ·  0.3 MB' },
      { name: 'Q2 Report.pdf',         meta: 'Sebastian  ·  2026년 6월 5일  ·  3.2 MB' },
      { name: 'Brand Assets.zip',      meta: 'yeji  ·  2026년 6월 1일  ·  15.8 MB' },
    ];

    let fy = 112;
    for (const f of FILES) {
      // 파일 아이콘
      const iconBg = mkFrame(main, '', 20, fy + 16, 36, 36, C.chanBg, 8);
      const iconIn = mkFrame(iconBg, '', 6, 6, 24, 24, C.white, 4);
      mkRect(iconIn, 5, 5, 14, 14, C.purple2, 2);

      mkText(main, 68, fy + 20, f.name, 13, 'Medium', C.t1);
      mkText(main, 68, fy + 40, f.meta, 11, 'Regular', C.t2);
      mkRect(main, 0, fy + 67, MAIN, 1, C.div2);
      fy += 68;
    }

    buildInputBar(scr, '# general에 메시지 보내기');
    return scr;
  }

  // ══════════════════════════════════════════════════════════════
  // 4. THREADS SCREEN
  // ══════════════════════════════════════════════════════════════
  function buildThreads(xOff, yOff = 0) {
    const scr = mkFrame(null, '4. Threads Screen (Generated)', xOff, yOff, W, H, C.white);
    figma.currentPage.appendChild(scr);

    buildRail(scr, 'home');
    buildSidebar(scr, 'threads'); // Threads 활성

    const main = mkFrame(scr, 'Threads Main', RAIL + SIDE, 0, MAIN, H, C.white);
    mkRect(main, 0, 55, MAIN, 1, C.div1);
    mkText(main, 20, 16, 'Threads', 18, 'SemiBold', C.t1);

    // 정렬 버튼
    const sortBtn = mkFrame(main, '', MAIN - 130, 14, 100, 28, '#f5f7fa', 6);
    mkText(sortBtn, 16, 6, '최신순', 13, 'Medium', C.t2);

    const THREADS = [
      { name: 'Sebastian',          ch: '#kakaopaysecurities', time: '오후 3:30', text: 'We really need to start building more visibility, so any ideas, comments or setbacks would create a lot...', color: C.blue,   replies: 4 },
      { name: 'enh4500',            ch: '#kakaopaysecurities', time: '오후 2:14', text: '여러 건 언급합니다',                                                                                         color: C.teal },
      { name: 'Judy',               ch: '#kakaopaysecurities', time: '오전 11:52', text: '여러 건 언급합니다',                                                                                        color: C.pink,   replies: 2 },
      { name: 'Judy',               ch: '#kakaopaysecurities', time: '오전 11:48', text: '여러 건 언급합니다',                                                                                        color: C.pink },
      { name: 'Dan Hyunmin',        ch: '#kakaopaysecurities', time: '오전 10:30', text: '팀 장을 들으세요',                                                                                          color: C.green },
      { name: 'Sebastian',          ch: '#kakaopaysecurities', time: '오전 9:51',  text: '@Agnieszka Ramos 님에게 최신 IR Deck으로 요청해주세요.',                                                    color: C.blue },
      { name: '[ONED] Atlas-news',  ch: '#kakaopaysecurities', time: '오전 8:01',  text: '카카오페이증권의 주요 금융 뉴스 업데이트 및 시장 현황을 알려드립니다.',                                      color: C.gray },
      { name: '[ONED] Atlas-news',  ch: '#slack-alert',        time: '오전 8:00',  text: 'Alert: 시스템 모니터링 알림이 발생하였습니다. 담당자 확인 요청드립니다.',                                     color: C.gray,   replies: 3 },
    ];

    let ty = 64;
    for (const t of THREADS) {
      // 아바타
      mkEllipse(main, 20, ty + 8, 36, 36, t.color);

      // 이름 + 채널 태그 + 시간
      const nt = mkText(main, 68, ty + 10, t.name, 14, 'SemiBold', C.t1);
      const chW = t.ch.length * 7 + 16;
      const chTag = mkFrame(main, '', 68 + nt.width + 8, ty + 11, chW, 18, '#eef2f7', 4);
      mkText(chTag, 8, 3, t.ch, 11, 'Regular', C.t2);
      mkText(main, MAIN - 80, ty + 12, t.time, 12, 'Regular', C.t3);

      // 본문
      mkText(main, 68, ty + 32, t.text, 14, 'Regular', C.t2, MAIN - 120);

      // 댓글 수
      if (t.replies) {
        mkEllipse(main, 68, ty + 60, 16, 16, t.color);
        mkEllipse(main, 76, ty + 60, 16, 16, C.pink);
        mkText(main, 100, ty + 62, `${t.replies}개의 댓글`, 12, 'Medium', C.blue);
        mkRect(main, 0, ty + 99, MAIN, 1, C.div2);
        ty += 100;
      } else {
        mkRect(main, 0, ty + 79, MAIN, 1, C.div2);
        ty += 80;
      }
    }

    return scr;
  }

  // ══════════════════════════════════════════════════════════════
  // 실행 — 기존 콘텐츠 아래에 생성
  // ══════════════════════════════════════════════════════════════

  // 기존 노드의 최하단 Y 좌표 계산
  let maxY = 0;
  for (const node of figma.currentPage.children) {
    const bottom = node.y + (node.height || 0);
    if (bottom > maxY) maxY = bottom;
  }
  const START_Y = maxY > 0 ? maxY + 300 : 0;

  const GAP = 120;
  const home    = buildHome(0,             START_Y);
  const dm      = buildDM((W + GAP) * 1,  START_Y);
  const files   = buildFiles((W + GAP) * 2, START_Y);
  const threads = buildThreads((W + GAP) * 3, START_Y);

  // 생성된 프레임 선택 → 화면에서 바로 보임
  figma.currentPage.selection = [home, dm, files, threads];
  figma.viewport.scrollAndZoomIntoView([home, dm, files, threads]);
  figma.closePlugin(`✅ 완료! 페이지 "${figma.currentPage.name}"에 4개 화면 생성 (${FF} 폰트)`);

})().catch(err => {
  figma.closePlugin(`❌ 오류: ${err.message}`);
});
