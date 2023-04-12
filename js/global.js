const header = document.querySelector('.global-header-wrapper');
const footer = document.querySelector('.global-footer-wrapper');

header.innerHTML = `
<div class="global-header-container">
  <button
    type="button"
    class="global-header-address"
    aria-label="주소 변경을 위한 버튼"
  >
    <strong>경남 김해시 인제로 197</strong>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
      />
    </svg>
  </button>
</div>
`;

footer.innerHTML = `
<div class="global-footer-container">
  <ul class="global-footer-list">
    <li aria-label="홈으로 이동">
      <a href="../index.html">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          />
        </svg>
        <p>홈</p>
      </a>
    </li>
    <li aria-label="매칭으로 이동">
      <a href="../page/matching.html">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
        <p>매칭</p>
      </a>
    </li>
    <li aria-label="채팅으로 이동">
      <a href="../page/chating.html">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
          />
        </svg>
        <p>채팅</p>
      </a>
    </li>
    <li aria-label="프로필로 이동">
      <a href="../page/profile.html">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <p>프로필</p>
      </a>
    </li>
  </ul>
</div>
`;
