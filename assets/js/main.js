const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const I18N = {
  ja: {
    doc_title: "doubao cvvc音源 / KANE DOUBAO 公式サイト",
    meta_description:
      "Frutiger Aeroの青いガラス質感で構成した、doubao CVVC音源の紹介サイト。UTAU配布先、イラスト作者、作品紹介、利用ガイドを掲載。",
    brand_subtitle: "Frutiger Aero Styled Fan Site",
    nav_overview: "キャラクター",
    nav_utau: "音源配布",
    nav_art: "イラスト作者",
    nav_works: "作品紹介",
    nav_guide: "利用ガイド",
    side_btn_github: "GitHubページ",
    side_btn_author: "サイト作者",
    quick_links_title: "クイックリンク",
    quick_link_utau: "UTAU 音源（Bilibili Opus）",
    quick_link_art: "イラスト作者ページ",
    overview_badge: "CHARACTER PROFILE",
    overview_title: "キャラクター紹介",
    overview_lead:
      "KANE DOUBAO（豆包）は、中国語CVVCを中心に設計されたUTAU向け音声ライブラリです。透明感のある音色と粒立ちのある発音が特長で、ポップスやエレクトロ系のカバー制作に適しています。このページでは、設定情報・配布先・二次創作向けの参照情報をまとめています。",
    overview_profile_1: "<strong>名前：</strong>KANE DOUBAO / 豆包",
    overview_profile_2: "<strong>ライブラリ形式：</strong>UTAU CVVC",
    overview_profile_3: "<strong>対応言語：</strong>中国語中心（他言語調声にも対応可能）",
    overview_profile_4: "<strong>おすすめ用途：</strong>カバー投稿 / 二次創作企画 / 調声練習",
    overview_fig_1: "キャラクター設定イラスト",
    overview_fig_2: "プロモーションビジュアル",
    utau_title: "UTAU 音源配布",
    utau_lead_1:
      "doubao CVVCは、明るい主音と子音遷移のつながりを重視したUTAU用音源です。高速テンポの曲や電子系アレンジでも輪郭が出しやすい設計です。",
    utau_spec_1: "<strong>収録方式：</strong>CVVC",
    utau_spec_2: "<strong>対応ソフト：</strong>UTAU / OpenUTAU",
    utau_spec_3: "<strong>想定ジャンル：</strong>中華ポップス / 日本語カバー / 実験調声",
    utau_lead_2: "配布ページ：",
    utau_link: "doubao CVVC 音源配布ページへ",
    utau_credit: "制作者：鸽子145ー清森ー（Bilibili）",
    art_title: "立ち絵作者情報",
    art_lead: "作者ページ：",
    art_link: "Bilibiliの作者ページを開く",
    art_credit: "作者：-横膈膜纵裂-（Bilibili UID: 3546557559343872）",
    works_title: "作品紹介",
    works_doc: "外部プレイヤー仕様",
    work_meta_1: "投稿者：会飞的六腿青蛙 · BV1WvFrz6EU8",
    work_meta_2: "投稿者：会飞的六腿青蛙 · BV1DZ64BfEeG",
    work_open_link: "Bilibiliで動画を見る",
    guide_title: "サイトポリシー / 著作権表示",
    guide_lead:
      "本サイトは個人による二次創作ファンサイトであり、いかなる公式運営主体にも所属しません。キャラクター紹介、作品リンク、学習目的の情報整理に限定して公開しています。",
    guide_rule_1: "本サイトは非商用です。音源販売、広告収益化、有料配布は行いません。",
    guide_rule_2:
      "音源・立ち絵・動画等の権利は各権利者に帰属し、本サイトはリンクおよび埋め込み表示のみを行います。",
    guide_rule_3:
      "動画表示にはBilibili公式外部プレイヤーを使用し、再配布・透かし除去・無断ダウンロードは提供しません。",
    guide_rule_4: "権利者から修正・削除要請があった場合、確認後すみやかに対応します。",
    guide_rule_5:
      "本サイト経由で素材を利用する場合、利用者自身が許諾範囲を確認し、自己責任で利用してください。",
    legal_summary: "法的根拠・プラットフォーム規約（要約）",
    legal_ref_1_label: "著作権法改正の公布（主席令第62号）：",
    legal_ref_1_link: "中国政府網",
    legal_ref_2_label: "情報ネットワーク伝達権保護条例（例：第2条・第10条・第14-15条）：",
    legal_ref_2_link: "国家版権局",
    legal_ref_3_label: "Bilibiliユーザー利用規約（権利保証・侵害対応）：",
    legal_ref_3_link: "bilibili 利用規約",
    legal_ref_4_label: "Bilibili外部プレイヤー仕様：",
    legal_ref_4_link: "player.bilibili.com",
    legal_note:
      "本記載は一般的な注意喚起であり、法的助言ではありません。商用利用や権利紛争は専門家へご相談ください。",
  },
  zh: {
    doc_title: "doubao cvvc声库 / KANE DOUBAO 官方站",
    meta_description:
      "Frutiger Aero 蓝色毛玻璃风格的 doubao CVVC 声库介绍站，包含 UTAU 声源地址、立绘作者、优秀作品和使用协议。",
    brand_subtitle: "Frutiger Aero 风格同人站",
    nav_overview: "歌姬介绍",
    nav_utau: "声源地址",
    nav_art: "立绘作者",
    nav_works: "作品展示",
    nav_guide: "网站协议",
    side_btn_github: "GitHub主页",
    side_btn_author: "网站作者",
    quick_links_title: "快速入口",
    quick_link_utau: "UTAU 声源（B站 Opus）",
    quick_link_art: "立绘作者主页",
    overview_badge: "CHARACTER PROFILE",
    overview_title: "歌姬介绍",
    overview_lead:
      "KANE DOUBAO（豆包）是以中文 CVVC 为核心的 UTAU 角色声库，音色偏清亮、颗粒感明显，适合流行、电音与高能曲风。本页集中展示角色设定、声源入口与二创参考信息。",
    overview_profile_1: "<strong>角色名：</strong>KANE DOUBAO / 豆包",
    overview_profile_2: "<strong>声库类型：</strong>UTAU CVVC",
    overview_profile_3: "<strong>语言方向：</strong>中文为主，可扩展跨语种调教",
    overview_profile_4: "<strong>推荐场景：</strong>翻唱投稿 / 二创企划 / 角色调声练习",
    overview_fig_1: "角色设定图",
    overview_fig_2: "宣传视觉图",
    utau_title: "UTAU 声源地址",
    utau_lead_1:
      "doubao CVVC 是面向 UTAU 调声的中文角色声库，强调清亮主音和边音过渡，适合高能电子与流行翻唱。",
    utau_spec_1: "<strong>声库制式：</strong>CVVC",
    utau_spec_2: "<strong>适用软件：</strong>UTAU / OpenUTAU",
    utau_spec_3: "<strong>常用方向：</strong>中文流行 / 日文翻唱 / 实验调声",
    utau_lead_2: "配布页面：",
    utau_link: "前往 doubao CVVC 声库发布页",
    utau_credit: "制作者：鸽子145ー清森ー（B站）",
    art_title: "立绘作者信息",
    art_lead: "作者主页：",
    art_link: "打开 B站作者主页",
    art_credit: "作者：-横膈膜纵裂-（B站 UID: 3546557559343872）",
    works_title: "优秀作品展示",
    works_doc: "外链播放器文档",
    work_meta_1: "作者：会飞的六腿青蛙 · BV1WvFrz6EU8",
    work_meta_2: "作者：会飞的六腿青蛙 · BV1DZ64BfEeG",
    work_open_link: "在 B 站查看原视频",
    guide_title: "网站协议与版权声明",
    guide_lead:
      "本站为个人二次创作爱好展示站，不隶属任何官方运营主体；仅用于角色介绍、作品索引与学习交流。",
    guide_rule_1: "本站为非商用性质，不售卖声库、不接广告、不提供付费下载。",
    guide_rule_2: "声库、立绘、视频及其相关权利归原作者或权利人所有，本站仅做链接与嵌入展示。",
    guide_rule_3:
      "展示视频采用 B 站官方外链播放器，不提供去水印转载、离线下载或二次分发服务。",
    guide_rule_4: "若权利人提出异议（删除/修改/下架），本站将在收到通知后尽快处理。",
    guide_rule_5: "用户使用本站内容进行二创或传播时，应自行确认授权边界并承担相应责任。",
    legal_summary: "法律依据与平台规则（摘要）",
    legal_ref_1_label: "《著作权法》修法决定（主席令第六十二号）：",
    legal_ref_1_link: "中国政府网",
    legal_ref_2_label: "《信息网络传播权保护条例》（如第2条、第10条、第14-15条）：",
    legal_ref_2_link: "国家版权局",
    legal_ref_3_label: "哔哩哔哩用户使用协议（上传内容权利保证、侵权处理等）：",
    legal_ref_3_link: "bilibili 用户协议",
    legal_ref_4_label: "哔哩哔哩外链播放器使用文档：",
    legal_ref_4_link: "player.bilibili.com",
    legal_note:
      "以上为合规提示，不构成正式法律意见；如涉及商用或授权争议，请咨询专业律师。",
  },
};

const docTitleNode = document.getElementById("doc-title");
const metaDescriptionNode = document.querySelector('meta[name="description"]');
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));

const applyLanguage = (lang) => {
  const nextLang = lang === "zh" ? "zh" : "ja";
  const table = I18N[nextLang];

  document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "ja";
  if (table.doc_title) {
    if (docTitleNode) {
      docTitleNode.textContent = table.doc_title;
    }
    document.title = table.doc_title;
  }
  if (metaDescriptionNode && table.meta_description) {
    metaDescriptionNode.setAttribute("content", table.meta_description);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (Object.hasOwn(table, key)) {
      node.textContent = table[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (Object.hasOwn(table, key)) {
      node.innerHTML = table[key];
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === nextLang);
  });

  try {
    window.localStorage.setItem("site-lang", nextLang);
  } catch (_err) {
    // Ignore storage errors in restricted modes.
  }
};

const preferredLanguage = (() => {
  try {
    const saved = window.localStorage.getItem("site-lang");
    if (saved === "ja" || saved === "zh") {
      return saved;
    }
  } catch (_err) {
    // Ignore storage errors in restricted modes.
  }

  if (navigator.language && navigator.language.toLowerCase().startsWith("zh")) {
    return "zh";
  }
  return "ja";
})();

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang || "ja");
  });
});

applyLanguage(preferredLanguage);

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = navLinks
  .map((link) => {
    const target = link.getAttribute("href");
    if (!target || !target.startsWith("#")) {
      return null;
    }
    return document.querySelector(target);
  })
  .filter(Boolean);

const activateNav = () => {
  const scrollPosition = window.scrollY + 140;
  let activeIndex = 0;

  sections.forEach((section, index) => {
    if (section.offsetTop <= scrollPosition) {
      activeIndex = index;
    }
  });

  navLinks.forEach((link, index) => {
    link.classList.toggle("active", index === activeIndex);
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");
    if (!target || !target.startsWith("#")) {
      return;
    }
    const section = document.querySelector(target);
    if (!section) {
      return;
    }
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("scroll", activateNav, { passive: true });
activateNav();
