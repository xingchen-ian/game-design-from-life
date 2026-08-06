// ========================================
// paper.js — Load & Render PAPER_FRAMEWORK.md
// ========================================
//
// 同步策略：
// 将仓库根目录的 PAPER_FRAMEWORK.md 复制/软链到 docs/PAPER_FRAMEWORK.md
// 或者直接通过 GitHub Raw URL 加载（推荐，自动同步）。
//
// 配置区域：根据你的 GitHub 用户名和仓库名修改下方常量。
// ========================================

const GITHUB_USER   = 'xingchen-ian';   // ← 修改为你的 GitHub 用户名
const GITHUB_REPO   = 'game-design-from-life';   // ← 修改为你的仓库名
const GITHUB_BRANCH = 'main';
const PAPER_FILE    = 'PAPER_FRAMEWORK.md';

// GitHub Raw URL（仓库公开后自动可访问）
const PAPER_URL_REMOTE = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${PAPER_FILE}`;

// 本地开发时的相对路径（本地预览用）
const PAPER_URL_LOCAL = `./PAPER_FRAMEWORK.md`;
const PAPER_URL_LOCAL_ROOT = `../PAPER_FRAMEWORK.md`;

// ========================================

(async () => {
  const contentEl = document.getElementById('paperContent');
  const tocNavEl  = document.getElementById('tocNav');
  const updatedEl = document.getElementById('paper-updated');

  if (!contentEl) return;

  // Configure marked
  if (typeof marked !== 'undefined') {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }

  // Decide URL: try local first (works when served from same origin), fallback to GitHub Raw
  const isLocal = window.location.protocol === 'file:' ||
                  window.location.hostname === 'localhost' ||
                  window.location.hostname === '127.0.0.1';
  const primaryUrl   = isLocal ? PAPER_URL_LOCAL : PAPER_URL_REMOTE;
  const fallbackUrls = isLocal
    ? [PAPER_URL_LOCAL_ROOT, '/docs/PAPER_FRAMEWORK.md', '/PAPER_FRAMEWORK.md', PAPER_URL_REMOTE]
    : [PAPER_URL_LOCAL, PAPER_URL_LOCAL_ROOT, '/docs/PAPER_FRAMEWORK.md', '/PAPER_FRAMEWORK.md'];

  let mdText = null;
  let fetchError = null;

  for (const url of [primaryUrl, ...fallbackUrls]) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        mdText = await res.text();
        break;
      }
    } catch (e) {
      fetchError = e;
    }
  }

  if (!mdText && typeof window.PAPER_MARKDOWN === 'string' && window.PAPER_MARKDOWN.trim()) {
    mdText = window.PAPER_MARKDOWN;
  }

  if (!mdText) {
    contentEl.innerHTML = `
      <div class="paper-error">
        <h3>暂时无法加载论文内容</h3>
        <p>页面没有读到本地论文文件，也没有找到内嵌论文备份。</p>
        <p style="margin-top:1rem;font-size:0.82rem;">
          如需本地预览，请通过项目根目录的本地服务器打开页面，
          或直接 <a href="../PAPER_FRAMEWORK.md" target="_blank">点击查看原始文件</a>。
        </p>
      </div>`;
    return;
  }

  // Render markdown
  const html = typeof marked !== 'undefined' ? marked.parse(mdText) : `<pre>${mdText}</pre>`;
  contentEl.innerHTML = html;
  contentEl.classList.add('md-body');

  // Add IDs to headings for TOC anchors
  const headings = contentEl.querySelectorAll('h1, h2, h3, h4');
  const usedIds = {};
  headings.forEach(h => {
    const raw = h.textContent.trim().replace(/[^\w\u4e00-\u9fa5\s-]/g, '').replace(/\s+/g, '-');
    let id = raw;
    if (usedIds[id]) { usedIds[id]++; id = `${raw}-${usedIds[id]}`; }
    else { usedIds[id] = 1; }
    h.id = id;
  });

  // Build TOC
  if (tocNavEl) {
    tocNavEl.innerHTML = '';
    headings.forEach(h => {
      const level = parseInt(h.tagName[1]);
      if (level > 4) return;  // skip h5+
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.className = `toc-item toc-item--h${level}`;
      a.textContent = h.textContent.replace(/^#+\s*/, '').trim();
      a.addEventListener('click', e => {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // offset for fixed navbar
        setTimeout(() => {
          const top = h.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 10);
      });
      tocNavEl.appendChild(a);
    });

    // Active TOC item on scroll
    const allTocItems = tocNavEl.querySelectorAll('.toc-item');
    const allHeadingEls = [...headings];
    const updateActiveToc = () => {
      let current = null;
      for (const h of allHeadingEls) {
        if (h.getBoundingClientRect().top < 120) current = h;
      }
      allTocItems.forEach(item => {
        item.classList.toggle('active', current && item.getAttribute('href') === `#${current.id}`);
      });
    };
    window.addEventListener('scroll', updateActiveToc, { passive: true });
    updateActiveToc();
  }

  // Update "last modified" display
  if (updatedEl) {
    // Try to parse date from the markdown frontmatter or last line
    const dateMatch = mdText.match(/最后更新.*?(\d{4}[-年]\d{1,2}[-月]\d{0,2})/);
    if (dateMatch) {
      updatedEl.textContent = `最后更新：${dateMatch[1].replace(/[年月]/g, '/').replace(/日?$/, '')}`;
    } else {
      updatedEl.textContent = '持续更新中';
    }
  }

})();
