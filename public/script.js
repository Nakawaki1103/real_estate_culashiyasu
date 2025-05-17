// グローバル関数としてモーダルを開く関数を定義
function openLineModal() {
    const modal = document.getElementById('lineModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// LINE Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lineModal');
    const closeModal = document.getElementById('closeModal');
    const mobileLineBtn = document.getElementById('mobileLineBtn');
    const prefectureBtns = document.querySelectorAll('.prefecture-btn');

    // モーダルを閉じる関数
    function closeModalFunc() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // モバイル用LINEボタンクリックイベント
    if (mobileLineBtn) {
        mobileLineBtn.addEventListener('click', openLineModal);
    }

    // 閉じるボタンクリックイベント
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // モーダル外クリックで閉じる
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    // 都道府県ボタンクリックイベント
    if (prefectureBtns) {
        prefectureBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        });
    }

    // 既存のLINEボタンをモーダルを開くように変更
    const lineButtons = document.querySelectorAll('a[href*="lin.ee"]');
    lineButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openLineModal();
        });
    });

    // 『初めての方』Q&Aトグル（複数対応）
    var toggleBtns = document.querySelectorAll('.faq--first .faq__toggle-btn');
    toggleBtns.forEach(function(btn) {
        var contentId = btn.getAttribute('aria-controls');
        var content = document.getElementById(contentId);
        if (content) {
            btn.addEventListener('click', function() {
                var isOpen = content.style.display === 'block';
                content.style.display = isOpen ? 'none' : 'block';
                btn.setAttribute('aria-expanded', !isOpen);
            });
        }
    });
}); 

// ハンバーガーメニュー開閉
const menuBtn = document.getElementById('js-menu-btn');
const navSp = document.getElementById('js-nav-sp');
if (menuBtn && navSp) {
  menuBtn.addEventListener('click', () => {
    navSp.classList.toggle('is-open');
  });
  // SP時のアンカークリックでメニューを閉じる
  navSp.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navSp.classList.remove('is-open');
      }
    });
  });
  // リサイズ時にSP以外ならメニューを閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navSp.classList.remove('is-open');
    }
  });
}