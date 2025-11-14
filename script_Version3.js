// 讀取 data.json 並渲染設備清單
async function loadHardware() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('無法讀取 data.json');
    const data = await res.json();
    const container = document.getElementById('hardware-list');
    container.innerHTML = '';
    data.devices.forEach(dev => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3>${escapeHtml(dev.name)}</h3>
        <p>${escapeHtml(dev.description || '')}</p>
        <div class="specs">
          ${Object.entries(dev.specs || {}).map(([k,v]) => `<span class="tag">${escapeHtml(k)}: ${escapeHtml(v)}</span>`).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    const container = document.getElementById('hardware-list');
    if (container) container.innerHTML = '<p style="color:#f88">無法載入設備資料，請確認 data.json 是否存在。</p>';
  }
}

function escapeHtml(str){ 
  return String(str).replace(/[&<>"']/g, s=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[s]));
}

// 音樂控制
function setupAudioControls(){
  const audio = document.getElementById('bg-audio');
  const playBtn = document.getElementById('play-btn');
  const muteBtn = document.getElementById('mute-btn');
  const vol = document.getElementById('volume');

  if (!audio) return;
  audio.volume = parseFloat(vol.value || 0.5);

  playBtn.addEventListener('click', async ()=>{
    if (audio.paused) {
      try {
        await audio.play();
        playBtn.textContent = '暫停';
      } catch (e) {
        console.warn('播放被瀏覽器阻擋，需要使用者手勢', e);
      }
    } else {
      audio.pause();
      playBtn.textContent = '播放';
    }
  });

  muteBtn.addEventListener('click', ()=>{
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? '取消靜音' : '靜音';
  });

  vol.addEventListener('input', ()=>{
    audio.volume = parseFloat(vol.value);
  });

  // 嘗試在頁面第一次互動時自動播放
  function tryPlay() {
    if (audio.paused) {
      audio.play().then(()=>{ playBtn.textContent='暫停'; }).catch(()=>{});
    }
    window.removeEventListener('click', tryPlay);
  }
  window.addEventListener('click', tryPlay);
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadHardware();
  setupAudioControls();
});