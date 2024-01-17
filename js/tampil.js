const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const id = localStorage.getItem("id");

// $(".head-content").html("");
$.getJSON("https://equran.id/api/v2/surat/" + id, function (data) {
  let get = data.data;
  $(".head-content").append(
    `<h1>سُورَةُ  ${get.nama}</h1>
    <p class="nama">${get.namaLatin} | ${get.arti} | ${get.tempatTurun} | ${get.jumlahAyat} Ayat | Nomor ${get.nomor}</p>
    <p class="deskripsi">
      <center style="font-size: 13px; border-block-end: 2px solid #929191; padding-bottom: 20px">
        ${get.deskripsi}
      </center>
    </p>
    <div class="pilih">
      <a href="index.html" id="home">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
        <p>Halaman Utama</p>
      </a>
      <figure>
        <audio controls>
          <source src="${get.audioFull["05"]}" />
        </audio>
      </figure>
    </div>`
  );
  let api = get.ayat;
  $.each(api, function (i, data) {
    $(".isi-surah").append(`
      <div class="num-ayat">Ayat ${data.nomorAyat}</div>
        <div class="tam">
          <div class="arab">
            <span
              >${data.teksArab}</span
            >
          </div>
        </div>
        <div class="arti">
          <span>Terjemah :</span> <br />
          ${data.teksIndonesia}
        </div>
        <figure>
          <audio controls class="audio">
            <source src="${data.audio["05"]}" />
          </audio>
        </figure>
      <div class="border"></div>
    `);
  });
});
