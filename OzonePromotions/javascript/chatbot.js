// ================================================================
//  chatbot.js — Ozone Promotions shared chatbot engine
//  Works for both managerDash.html and promoterDash.html
//  The page sets window.OZ_CHAT_KB before this script runs
// ================================================================

let chatOpen = false;

// ── Core render helpers ──────────────────────────────────────────
function appendBot(text) {
  const msgs     = document.getElementById('chat-messages');
  const el       = document.createElement('div');
  el.className   = 'chat-msg bot';
  const resolved = typeof text === 'function' ? text() : text;
  el.innerHTML   = `
    <div class="chat-bubble">
      ${resolved.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
    </div>
    <div class="chat-time">
      ${new Date().toLocaleTimeString('en-ZA', { hour:'2-digit', minute:'2-digit' })}
    </div>`;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function addBot(text, delay = 0) {
  const msgs = document.getElementById('chat-messages');
  if (delay > 0) {
    const t     = document.createElement('div');
    t.className = 'chat-msg bot';
    t.id        = 'oz-typing';
    t.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
    msgs.appendChild(t);
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(() => {
      document.getElementById('oz-typing')?.remove();
      appendBot(text);
    }, delay);
  } else {
    appendBot(text);
  }
}

function setQR(chips) {
  document.getElementById('chat-qr').innerHTML = chips
    .map(c => `<span class="qr-chip" onclick="handleQR('${c}')">${c}</span>`)
    .join('');
}

function handleQR(text) {
  document.getElementById('chat-qr').innerHTML = '';
  sendMsg(text);
}

// ── Open / close ────────────────────────────────────────────────
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-panel').classList.toggle('open', chatOpen);
  document.getElementById('chat-badge').style.display = 'none';

  // First open — show greeting and quick replies
  if (chatOpen && document.getElementById('chat-messages').children.length === 0) {
    const KB      = window.OZ_CHAT_KB;
    const greeting = typeof KB.greeting === 'function' ? KB.greeting() : KB.greeting;
    addBot(greeting);
    setQR(KB.quickReplies);
  }
}

// ── Send ─────────────────────────────────────────────────────────
function sendChat() {
  const input = document.getElementById('chat-input');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';
  sendMsg(text);
}

function sendMsg(text) {
  // Render user bubble
  const msgs     = document.getElementById('chat-messages');
  const el       = document.createElement('div');
  el.className   = 'chat-msg user';
  el.innerHTML   = `
    <div class="chat-bubble">${text}</div>
    <div class="chat-time">
      ${new Date().toLocaleTimeString('en-ZA', { hour:'2-digit', minute:'2-digit' })}
    </div>`;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;

  // Look up response + optional navigation from the page's KB
  const KB  = window.OZ_CHAT_KB;
  const q   = text.toLowerCase();
  let response = null;

  // Check nav routes first (defined per page in OZ_CHAT_KB.routes)
  if (KB.routes) {
    for (const route of KB.routes) {
      if (route.keywords.some(kw => q.includes(kw))) {
        response = KB.responses[route.key] || null;
        if (route.page && typeof showPage === 'function') {
          setTimeout(() => showPage(route.page), 1200);
        }
        break;
      }
    }
  }

  // Fallback — scan all response keys
  if (!response) {
    for (const [k, v] of Object.entries(KB.responses)) {
      if (k !== 'default' && q.includes(k)) {
        response = v;
        break;
      }
    }
  }

  if (!response) response = KB.responses['default'];

  addBot(response, 750);
  setTimeout(() => setQR(KB.quickReplies), 900);
}